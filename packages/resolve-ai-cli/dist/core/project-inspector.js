import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";
import { isIgnoredDir, isSensitivePath, readSafeTextFile } from "./safe-file-reader.js";

function exists(root, relative) {
  return fs.existsSync(path.join(root, relative));
}

function listRoot(root) {
  return fs.readdirSync(root, { withFileTypes: true }).filter((entry) => !isIgnoredDir(entry.name)).map((entry) => entry.name);
}

function listRelevantDirs(root) {
  return ["src", "app", "pages", "components", "lib", "services", "functions", "server", "api", "routes", "controllers", "prisma", "supabase"].filter((dir) => exists(root, dir));
}

function packageJson(root) {
  const raw = readSafeTextFile(path.join(root, "package.json"));
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

function detectStack(root, pkg) {
  const stack = new Set();
  const deps = { ...(pkg?.dependencies ?? {}), ...(pkg?.devDependencies ?? {}) };
  const names = Object.keys(deps);
  if (pkg) stack.add("Node.js");
  if (exists(root, "tsconfig.json") || names.includes("typescript")) stack.add("TypeScript");
  if (names.includes("react")) stack.add("React");
  if (exists(root, "vite.config.ts") || exists(root, "vite.config.js") || names.includes("vite")) stack.add("Vite");
  if (exists(root, "next.config.js") || exists(root, "next.config.mjs") || names.includes("next")) stack.add("Next.js");
  if (names.includes("vue")) stack.add("Vue");
  if (names.includes("svelte")) stack.add("Svelte");
  if (names.includes("tailwindcss")) stack.add("Tailwind");
  if (names.includes("@supabase/supabase-js") || exists(root, "supabase")) stack.add("Supabase");
  if (names.includes("firebase") || exists(root, "firebase.json")) stack.add("Firebase");
  if (exists(root, "prisma")) stack.add("Prisma");
  if (exists(root, "vercel.json")) stack.add("Vercel");
  if (exists(root, "netlify.toml")) stack.add("Netlify");
  if (exists(root, "Dockerfile") || exists(root, "docker-compose.yml")) stack.add("Docker");
  return [...stack];
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

export function inspectProject(root = process.cwd()) {
  const pkg = packageJson(root);
  const stack = detectStack(root, pkg);
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
  if (exists(root, "tests") || exists(root, "__tests__") || exists(root, "test") || Object.keys(pkg?.scripts ?? {}).some((script) => script.includes("test"))) strengths.push("Testes ou script de teste detectados");
  else attentionPoints.push("Testes não detectados");
  for (const risk of risks) attentionPoints.push(risk);
  let projectType = "indeterminado";
  if (fs.existsSync(paths.legacyDocsDir) || rootEntries.some((name) => /^(legacy|old|backup|deprecated)$/i.test(name))) projectType = "legado";
  else if (!pkg && relevantDirs.length === 0 && projectEntries.filter((name) => !name.startsWith(".")).length === 0) projectType = "novo";
  else if (pkg || relevantDirs.length > 0 || exists(root, "README.md")) projectType = "em-andamento";
  let recommendedMode = "Non-Technical Builder";
  if (projectType === "legado" || (projectType === "em-andamento" && attentionPoints.length >= 2 && strengths.length < 2)) recommendedMode = "Vibe Coder";
  if (projectType === "em-andamento" && stack.includes("TypeScript") && strengths.length >= 2) recommendedMode = "Professional Engineer";
  const recommendedFlow = projectType === "novo" ? "Projeto do Zero" : "Projeto em Andamento — Diagnóstico e Continuação";
  let mainAction = "pausar-para-discovery";
  if (risks.length > 0) mainAction = "corrigir-seguranca-primeiro";
  else if (!exists(root, "README.md") && projectType !== "novo") mainAction = "documentar-primeiro";
  else if (projectType === "legado") mainAction = "refatorar-com-cuidado";
  else if (projectType === "em-andamento") mainAction = "continuar";
  const maturity = Math.min(5, Math.max(0, (pkg ? 1 : 0) + (stack.length > 0 ? 1 : 0) + (relevantDirs.length > 0 ? 1 : 0) + (strengths.some((item) => item.includes("README")) ? 1 : 0) + (strengths.some((item) => item.includes("Testes")) ? 1 : 0) + (strengths.some((item) => item.includes("CI")) ? 1 : 0) - (risks.length > 0 ? 1 : 0)));
  const confidence = stack.length >= 2 || signals.length >= 2 ? "alta" : stack.length === 1 || signals.length === 1 ? "media" : "baixa";
  return { projectType, recommendedFlow, recommendedMode, stack, signals, risks, strengths, attentionPoints, mainAction, maturity, confidence, generatedAt: new Date().toISOString() };
}
