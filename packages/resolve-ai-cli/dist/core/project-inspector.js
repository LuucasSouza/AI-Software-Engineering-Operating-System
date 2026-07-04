import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";
import { isIgnoredDir, isSensitivePath, readSafeTextFile } from "./safe-file-reader.js";

function exists(root, relative) {
  return fs.existsSync(path.join(root, relative));
}

function listRoot(root) {
  return fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => !isIgnoredDir(entry.name))
    .map((entry) => entry.name);
}

function listRelevantDirs(root) {
  return ["src", "app", "pages", "components", "lib", "services", "functions", "server", "api", "routes", "controllers", "prisma", "supabase"]
    .filter((dir) => exists(root, dir));
}

function packageJson(root) {
  const raw = readSafeTextFile(path.join(root, "package.json"));
  if (!raw) return null;
  try {
    return JSON.parse(raw.replace(/^\uFEFF/, "").trim());
  } catch {
    return null;
  }
}

function listFilesByExtension(root, extensions, maxDepth = 3) {
  const found = [];

  function walk(current, depth) {
    if (depth > maxDepth || found.length >= 20) return;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (isIgnoredDir(entry.name)) continue;
      const fullPath = path.join(current, entry.name);
      const relative = path.relative(root, fullPath).replace(/\\/g, "/");
      if (entry.isDirectory()) {
        walk(fullPath, depth + 1);
        continue;
      }
      if (extensions.some((ext) => entry.name.endsWith(ext))) {
        found.push(relative);
      }
    }
  }

  walk(root, 0);
  return found;
}

function confidence(evidence, high = 2) {
  if (evidence.length >= high) return "alta";
  if (evidence.length === 1) return "media";
  return "baixa";
}

function addStack(items, name, evidence, high = 2) {
  const safeEvidence = [...new Set(evidence)].filter(Boolean);
  if (safeEvidence.length === 0) return;
  items.push({ name, confidence: confidence(safeEvidence, high), evidence: safeEvidence });
}

function detectStackDetails(root, pkg) {
  const stack = [];
  const deps = { ...(pkg?.dependencies ?? {}), ...(pkg?.devDependencies ?? {}) };
  const names = Object.keys(deps);
  const scripts = Object.values(pkg?.scripts ?? {}).map(String);
  const codeFiles = listFilesByExtension(root, [".ts", ".tsx", ".js", ".jsx", ".py"]);
  const hasDep = (name) => names.includes(name);
  const hasAnyDep = (depsToFind) => depsToFind.some(hasDep);
  const scriptIncludes = (term) => scripts.some((script) => script.includes(term));

  addStack(stack, "Node.js", [
    pkg ? "package.json encontrado" : "",
    exists(root, "package-lock.json") ? "package-lock.json encontrado" : "",
    exists(root, "pnpm-lock.yaml") ? "pnpm-lock.yaml encontrado" : "",
    exists(root, "yarn.lock") ? "yarn.lock encontrado" : "",
    scripts.length > 0 ? "scripts npm encontrados" : ""
  ]);

  addStack(stack, "TypeScript", [
    exists(root, "tsconfig.json") ? "tsconfig.json encontrado" : "",
    hasDep("typescript") ? "dependência typescript em package.json" : "",
    codeFiles.some((file) => file.endsWith(".ts") || file.endsWith(".tsx")) ? "arquivos .ts/.tsx encontrados" : ""
  ]);

  addStack(stack, "Vite", [
    hasDep("vite") ? "dependência vite em package.json" : "",
    exists(root, "vite.config.ts") ? "vite.config.ts encontrado" : "",
    exists(root, "vite.config.js") ? "vite.config.js encontrado" : "",
    exists(root, "vite.config.mts") ? "vite.config.mts encontrado" : "",
    scriptIncludes("vite") ? "script npm com vite encontrado" : ""
  ]);

  addStack(stack, "React", [
    hasDep("react") ? "dependência react em package.json" : "",
    hasDep("react-dom") ? "dependência react-dom em package.json" : "",
    exists(root, "src/App.tsx") ? "src/App.tsx encontrado" : "",
    exists(root, "src/App.jsx") ? "src/App.jsx encontrado" : "",
    exists(root, "src/main.tsx") ? "src/main.tsx encontrado" : "",
    codeFiles.some((file) => file.endsWith(".jsx") || file.endsWith(".tsx")) ? "arquivos .jsx/.tsx encontrados" : ""
  ]);

  addStack(stack, "Next.js", [
    hasDep("next") ? "dependência next em package.json" : "",
    exists(root, "next.config.js") ? "next.config.js encontrado" : "",
    exists(root, "next.config.mjs") ? "next.config.mjs encontrado" : "",
    exists(root, "next.config.ts") ? "next.config.ts encontrado" : "",
    exists(root, "app") ? "diretório app encontrado" : "",
    exists(root, "pages") ? "diretório pages encontrado" : ""
  ]);

  addStack(stack, "Firebase", [
    exists(root, "firebase.json") ? "firebase.json encontrado" : "",
    exists(root, ".firebaserc") ? ".firebaserc encontrado" : "",
    hasAnyDep(["firebase", "firebase-admin"]) ? "dependência firebase em package.json" : "",
    exists(root, "functions") ? "diretório functions encontrado" : ""
  ]);

  addStack(stack, "Supabase", [
    exists(root, "supabase") ? "diretório supabase encontrado" : "",
    hasDep("@supabase/supabase-js") ? "dependência @supabase/supabase-js em package.json" : "",
    exists(root, "supabase/config.toml") ? "supabase/config.toml encontrado" : ""
  ]);

  addStack(stack, "Python", [
    exists(root, "pyproject.toml") ? "pyproject.toml encontrado" : "",
    exists(root, "requirements.txt") ? "requirements.txt encontrado" : "",
    exists(root, "Pipfile") ? "Pipfile encontrado" : "",
    exists(root, "poetry.lock") ? "poetry.lock encontrado" : "",
    codeFiles.some((file) => file.endsWith(".py")) ? "arquivos .py encontrados" : ""
  ]);

  addStack(stack, "Monorepo", [
    exists(root, "packages") ? "diretório packages encontrado" : "",
    exists(root, "apps") ? "diretório apps encontrado" : "",
    exists(root, "pnpm-workspace.yaml") ? "pnpm-workspace.yaml encontrado" : "",
    exists(root, "turbo.json") ? "turbo.json encontrado" : "",
    exists(root, "nx.json") ? "nx.json encontrado" : ""
  ]);

  addStack(stack, "Vue", [hasDep("vue") ? "dependência vue em package.json" : ""], 1);
  addStack(stack, "Svelte", [hasDep("svelte") ? "dependência svelte em package.json" : ""], 1);
  addStack(stack, "Tailwind", [hasDep("tailwindcss") ? "dependência tailwindcss em package.json" : ""], 1);
  addStack(stack, "Prisma", [exists(root, "prisma") ? "diretório prisma encontrado" : ""], 1);
  addStack(stack, "Vercel", [exists(root, "vercel.json") ? "vercel.json encontrado" : ""], 1);
  addStack(stack, "Netlify", [exists(root, "netlify.toml") ? "netlify.toml encontrado" : ""], 1);
  addStack(stack, "Docker", [
    exists(root, "Dockerfile") ? "Dockerfile encontrado" : "",
    exists(root, "docker-compose.yml") ? "docker-compose.yml encontrado" : ""
  ], 1);

  return stack;
}

function detectSensitiveNames(root, maxDepth = 3) {
  const risks = [];

  function walk(current, depth) {
    if (depth > maxDepth) return;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (isIgnoredDir(entry.name)) continue;
      const fullPath = path.join(current, entry.name);
      const relative = path.relative(root, fullPath).replace(/\\/g, "/");
      if (isSensitivePath(relative)) {
        risks.push(`Possível arquivo sensível detectado por nome: ${relative}`);
        if (!entry.isDirectory()) continue;
      }
      if (entry.isDirectory()) walk(fullPath, depth + 1);
    }
  }

  walk(root, 0);
  return risks;
}

export function inspectProject(root= process.cwd()) {
  const pkg = packageJson(root);
  const stackDetails = detectStackDetails(root, pkg);
  const stack = stackDetails.map((item) => item.name);
  const rootEntries = listRoot(root);
  const projectEntries = rootEntries.filter((name) => {
    if (name === "docs" && fs.existsSync(path.join(root, "docs", "resolve-ai"))) return false;
    return true;
  });
  const relevantDirs = listRelevantDirs(root);
  const paths = resolveAiPaths(root);
  const signals = [];
  const strengths = [];
  const attentionPoints = [];
  const risks = detectSensitiveNames(root);

  if (pkg) signals.push("package.json encontrado");
  if (exists(root, "README.md")) strengths.push("README encontrado");
  else attentionPoints.push("README não detectado");
  if (relevantDirs.length > 0) signals.push(`Pastas relevantes: ${relevantDirs.join(", ")}`);
  if (exists(root, "docs/ai-seos")) signals.push("docs/ai-seos legado encontrado");
  if (exists(root, ".github/workflows")) strengths.push("CI detectado");
  else attentionPoints.push("CI não detectado");
  if (exists(root, "tests") || exists(root, "__tests__") || exists(root, "test") || Object.keys(pkg?.scripts ?? {}).some((script) => script.includes("test"))) {
    strengths.push("Testes ou script de teste detectados");
  } else {
    attentionPoints.push("Testes não detectados");
  }

  for (const risk of risks) attentionPoints.push(risk);

  let projectType = "indeterminado";
  if (fs.existsSync(paths.legacyDocsDir) || rootEntries.some((name) => /^(legacy|old|backup|deprecated)$/i.test(name))) {
    projectType = "legado";
  } else if (!pkg && relevantDirs.length === 0 && projectEntries.filter((name) => !name.startsWith(".")).length === 0) {
    projectType = "novo";
  } else if (pkg || relevantDirs.length > 0 || exists(root, "README.md")) {
    projectType = "em-andamento";
  }

  let recommendedMode = "Non-Technical Builder";
  if (projectType === "legado" || (projectType === "em-andamento" && attentionPoints.length >= 2 && strengths.length < 2)) {
    recommendedMode = "Vibe Coder";
  }
  if (projectType === "em-andamento" && stack.includes("TypeScript") && strengths.length >= 2) {
    recommendedMode = "Professional Engineer";
  }

  const recommendedFlow = projectType === "novo"
    ? "Projeto do Zero"
    : "Projeto em Andamento — Diagnóstico e Continuação";

  let mainAction = "pausar-para-discovery";
  if (risks.length > 0) mainAction = "corrigir-seguranca-primeiro";
  else if (!exists(root, "README.md") && projectType !== "novo") mainAction = "documentar-primeiro";
  else if (projectType === "legado") mainAction = "refatorar-com-cuidado";
  else if (projectType === "em-andamento") mainAction = "continuar";

  const maturity = Math.min(5, Math.max(0,
    (pkg ? 1 : 0) +
    (stack.length > 0 ? 1 : 0) +
    (relevantDirs.length > 0 ? 1 : 0) +
    (strengths.some((item) => item.includes("README")) ? 1 : 0) +
    (strengths.some((item) => item.includes("Testes")) ? 1 : 0) +
    (strengths.some((item) => item.includes("CI")) ? 1 : 0) -
    (risks.length > 0 ? 1 : 0)
  ));

  const confidence = stack.length >= 2 || signals.length >= 2 ? "alta" : stack.length === 1 || signals.length === 1 ? "media" : "baixa";

  return {
    projectType,
    recommendedFlow,
    recommendedMode,
    stack,
    stackDetails,
    signals,
    risks,
    strengths,
    attentionPoints,
    mainAction,
    maturity,
    confidence,
    generatedAt: new Date().toISOString()
  };
}
