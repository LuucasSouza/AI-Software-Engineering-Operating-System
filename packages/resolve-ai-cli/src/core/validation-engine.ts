import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { resolveAiPaths } from "./paths.js";
import type { ResolveAiState, ValidationResult, ValidationStatus } from "../types/runtime.js";

const sensitivePatterns = [
  /^\.env($|\.)/i,
  /\.pem$/i,
  /\.key$/i,
  /\.p12$/i,
  /(^|\/)secrets(\/|$)/i,
  /(^|\/)backups(\/|$)/i,
  /_auth_users\.json$/i,
  /\.csv$/i,
  /\.xlsx$/i,
  /service-role/i,
  /credentials/i
];

const skipDirs = new Set([".git", "node_modules", ".resolve-ai"]);

function normalizePath(filePath: string): string {
  return filePath.replace(/\\/g, "/").replace(/^\.\//, "");
}

function isSensitivePath(filePath: string): boolean {
  const normalized = normalizePath(filePath);
  return sensitivePatterns.some((pattern) => pattern.test(normalized));
}

function runGit(root: string, args: string[]): string | null {
  try {
    return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  } catch {
    return null;
  }
}

function parsePorcelain(output: string): string[] {
  return output.split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter(Boolean)
    .map((line) => {
      const raw = line.slice(3);
      const renamed = raw.includes(" -> ") ? raw.split(" -> ").pop() ?? raw : raw;
      return normalizePath(renamed.replace(/^"|"$/g, ""));
    })
    .filter(Boolean);
}

function walkSensitive(root: string, current: string = root, found: string[] = []): string[] {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(current, { withFileTypes: true });
  } catch {
    return found;
  }

  for (const entry of entries) {
    if (skipDirs.has(entry.name)) continue;
    const fullPath = path.join(current, entry.name);
    const relative = normalizePath(path.relative(root, fullPath));
    if (isSensitivePath(relative)) {
      found.push(relative);
      continue;
    }
    if (entry.isDirectory() && found.length < 50) {
      walkSensitive(root, fullPath, found);
    }
  }
  return Array.from(new Set(found));
}

function classify(filePath: string): string {
  const file = normalizePath(filePath);
  if (isSensitivePath(file)) return "sensivel";
  if (file.startsWith("docs/") || file.endsWith(".md") || file === "README.md") return "documentacao";
  if (/(\.test\.|\.spec\.|^tests\/|^__tests__\/)/i.test(file)) return "testes";
  if (/package\.json$|tsconfig\.json$|vite\.config\.|next\.config\.|\.env\.example$/i.test(file)) return "configuracao";
  if (/^(src|app|pages|components|lib|services|functions)\//i.test(file)) return "codigo";
  return "outros";
}

function categorize(files: string[]): Record<string, string[]> {
  const categories: Record<string, string[]> = {
    documentacao: [],
    codigo: [],
    configuracao: [],
    testes: [],
    sensivel: [],
    outros: []
  };
  for (const file of files) {
    categories[classify(file)].push(file);
  }
  return categories;
}

function docsPresent(root: string): string[] {
  const paths = resolveAiPaths(root);
  return [
    "15-tarefa-preparada.md",
    "20-execucao-assistida.md",
    "21-aprovacao-humana.md",
    "22-prompt-final-para-agente.md",
    "23-checklist-pos-execucao.md",
    "24-registro-de-execucao.md"
  ].filter((file) => fs.existsSync(path.join(paths.docsDir, file))).map((file) => `docs/resolve-ai/${file}`);
}

function statusFor(hasAssistedExecution: boolean, changedFiles: string[], sensitiveFiles: string[], previousRisks: string[]): ValidationStatus {
  if (sensitiveFiles.length > 0) return "bloqueada";
  if (previousRisks.length > 0 && changedFiles.length > 0) return "parcial";
  if (!hasAssistedExecution) return changedFiles.length > 0 ? "parcial" : "pendente";
  if (changedFiles.length === 0) return "pendente";
  return "aprovada-com-ressalvas";
}

export function buildValidationResult(root: string, state: ResolveAiState): ValidationResult {
  const gitStatus = runGit(root, ["status", "--porcelain", "--untracked-files=all"]);
  const gitAvailable = gitStatus !== null;
  const gitChangedFiles = gitStatus ? parsePorcelain(gitStatus) : [];
  const sensitiveFiles = Array.from(new Set([...gitChangedFiles.filter(isSensitivePath), ...walkSensitive(root)]));
  const changedFiles = Array.from(new Set(gitChangedFiles));
  const hasAssistedExecution = Boolean(state.ultimaExecucaoAssistida);
  const previousRisks = (state.riscosDetectados ?? []).filter((risk) => /sensível|sensivel|secret|token|credencial|\.env|lgpd/i.test(risk));
  const status = statusFor(hasAssistedExecution, changedFiles, sensitiveFiles, previousRisks);
  const confidence = status === "bloqueada" ? "bloqueada" : !gitAvailable ? "baixa" : hasAssistedExecution && changedFiles.length > 0 ? "media" : "baixa";
  const categories = categorize(changedFiles);
  const possibleOutOfScope = changedFiles.filter((file) => classify(file) === "sensivel" || classify(file) === "configuracao");
  const docsReference = docsPresent(root);
  const riscosRestantes = [
    ...previousRisks,
    ...(sensitiveFiles.length > 0 ? ["Arquivo sensível detectado por nome/caminho. Não commitar antes de revisão de segurança."] : []),
    ...(!gitAvailable ? ["Não encontrei um repositório Git aqui, então não consigo comparar mudanças com precisão."] : []),
    ...(changedFiles.length > 0 ? ["Rodar testes e validações manualmente antes de commit."] : ["Não há evidência de mudança local para validar."])
  ];
  const proximaAcao = status === "bloqueada"
    ? "Pare antes de commitar. Revise os arquivos sensíveis e remova ou proteja o que não deve ir para o repositório."
    : !gitAvailable
      ? "Para habilitar detecção de mudanças, rode git init ou execute dentro de um repositório Git."
      : status === "pendente"
        ? "Execute a tarefa assistida ou revise o prompt antes de tentar validar novamente."
      : "Revise o checklist, rode os testes recomendados manualmente e confira o diff antes de commitar.";

  return {
    executadaEm: new Date().toISOString(),
    status,
    confianca: confidence,
    mudancasDetectadas: changedFiles.length,
    arquivosAlterados: changedFiles,
    arquivosSensiveisDetectados: sensitiveFiles,
    riscosRestantes: Array.from(new Set(riscosRestantes)),
    proximaAcao,
    hasAssistedExecution,
    gitAvailable,
    changeCategories: categories,
    possibleOutOfScope,
    evidence: [
      gitAvailable ? "Git metadata disponível via git status --porcelain." : "Git metadata indisponível.",
      gitAvailable ? "Comparação de mudanças baseada em Git." : "Não encontrei um repositório Git aqui, então não consigo comparar mudanças com precisão.",
      hasAssistedExecution ? "Execução assistida anterior encontrada no state." : "Nenhuma execução assistida anterior encontrada.",
      `${changedFiles.length} arquivo(s) alterado(s) detectado(s).`
    ],
    notValidated: [
      "Testes não foram executados automaticamente nesta fase.",
      "Conteúdo de arquivos sensíveis não foi lido.",
      "Validação semântica profunda foi adiada para fase futura."
    ],
    docsReference
  };
}
