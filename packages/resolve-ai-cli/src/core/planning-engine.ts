import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";
import { isNegatedStatement } from "./interview-scope.js";
import type { PlanningInput, PlanningOutput, ProjectScope, ResolveAiState } from "../types/runtime.js";

const diagnosticDocs = [
  "00-project-intake.md",
  "01-current-state-assessment.md",
  "02-discovery.md",
  "03-product-definition.md",
  "04-architecture-review.md",
  "05-risk-register.md",
  "06-decision-log.md",
  "07-execution-plan.md",
  "08-backlog.md",
  "09-handoff.md"
];

function readDocIfSmall(filePath: string): string {
  if (!fs.existsSync(filePath)) return "";
  const stat = fs.statSync(filePath);
  if (!stat.isFile() || stat.size > 100 * 1024) return "";
  return fs.readFileSync(filePath, "utf8");
}

function hasCriticalRisk(input: PlanningInput, docsText: string): boolean {
  const relevantDocLines = docsText
    .split(/\r?\n/)
    .filter((line) => /possível arquivo sensível|possivel arquivo sensivel|\.env|backup|credencial|secret|password|senha|dump/i.test(line))
    .filter((line) => !line.trim().startsWith("#"))
    .filter((line) => !/descrever apenas em alto nível|descrever apenas em alto nivel|não registrar|nao registrar|não informado|nao informado/i.test(line.trim()))
    .filter((line) => !isNegatedStatement(line.replace(/^[-*\s]+/, "").replace(/^[^:]{0,40}:\s*/, "")))
    .join(" ");
  const text = `${input.risks.join(" ")} ${relevantDocLines}`.toLowerCase();
  const sensitiveSignals = ["senha", "segredo", "sensível", "sensivel", "secret", "token", "dados pessoais", "lgpd", "backup", ".env", "credencial", "dump"];
  return sensitiveSignals.some((word) => text.includes(word));
}

export function buildPlanningInput(root: string, state: ResolveAiState | null): PlanningInput {
  const paths = resolveAiPaths(root);
  const existingDocs = diagnosticDocs
    .map((file) => `docs/resolve-ai/${file}`)
    .filter((relative) => fs.existsSync(path.join(root, relative)));

  const hasInterview = Boolean(state?.ultimaEntrevista);
  const hasDiagnosis = Boolean(state?.ultimoDiagnosticoEm) || hasInterview || existingDocs.length >= 3;

  return {
    projectType: state?.tipoProjeto ?? "indeterminado",
    recommendedMode: state?.modoRecomendado ?? "Non-Technical Builder",
    detectedStack: state?.stackDetectada ?? [],
    risks: state?.riscosDetectados ?? [],
    existingDocs,
    hasDiagnosis,
    hasInterview,
    interviewSummary: state?.ultimaEntrevista?.resumoCurto,
    confidence: hasInterview ? "media" : hasDiagnosis ? "media" : "baixa"
  };
}

export function readPlanningContext(root: string): string {
  const paths = resolveAiPaths(root);
  return diagnosticDocs
    .map((file) => readDocIfSmall(path.join(paths.docsDir, file)))
    .filter(Boolean)
    .join("\n\n");
}

export function createPlanningOutput(input: PlanningInput, docsText: string, scope: ProjectScope | null = null): PlanningOutput {
  const critical = hasCriticalRisk(input, docsText);
  const isNew = input.projectType === "novo";
  const scopeName = scope?.projectName;
  const summary = input.hasInterview
    ? scopeName
      ? `Plano criado para "${scopeName}" com base na entrevista guiada.`
      : `Plano baseado na entrevista guiada. Ideia resumida: ${input.interviewSummary}.`
    : input.hasDiagnosis
    ? `Plano baseado no diagnóstico local existente. Modo recomendado: ${input.recommendedMode}.`
    : "Plano básico de baixa confiança. Ainda não encontrei um diagnóstico anterior; rode `resolve-ai diagnosticar` para melhorar este plano.";

  const nextRecommendedAction = critical
    ? "Resolver riscos críticos antes de implementar qualquer feature nova."
    : input.hasInterview && scope?.hasSensitiveData
      ? "Definir uma versão de teste sem dados reais antes de implementar."
    : input.hasInterview && scopeName
      ? `Preparar a primeira tarefa do MVP: criar a primeira tela de "${scopeName}". Rode resolve-ai preparar.`
    : input.hasInterview
      ? "Transformar a primeira versão útil em backlog pequeno e validável."
    : isNew
      ? "Definir escopo e MVP antes de criar código."
      : "Executar a Sprint A com foco em estabilização e validação.";

  const milestones = input.hasInterview && scope?.sufficient
    ? ["Primeira tela ou página do MVP", "Funções principais da primeira versão", "Validação simples no uso real", "Melhorias pequenas"]
    : isNew
    ? ["Discovery e escopo", "Fundação técnica", "MVP mínimo", "Validação"]
    : critical
      ? ["Hardening e segurança", "Testes mínimos", "Verificação funcional", "Continuação controlada"]
      : ["Estabilização", "Testes mínimos", "Backlog incremental", "Evolução controlada"];

  const backlogItems = critical
    ? [
        "P0-001 | P0 | seguranca | Revisar riscos críticos detectados | Evitar vazamento ou regressão grave | Riscos revisados e mitigação definida | Exposição de dados ou falha de segurança",
        "P1-001 | P1 | teste | Criar validação mínima do fluxo crítico | Reduzir regressão antes de features | Teste ou checklist executável definido | Mudança sem confiança"
      ]
    : [
        "P1-001 | P1 | documentacao | Validar objetivo e escopo do próximo ciclo | Reduzir ambiguidade | Objetivo registrado em docs/resolve-ai | Implementar coisa errada",
        "P1-002 | P1 | teste | Definir validação mínima | Evitar regressão | Checklist executado antes de concluir | Falha passar despercebida",
        "P2-001 | P2 | implementacao | Executar menor próxima fatia segura | Gerar valor sem bagunça | Critérios de aceite atendidos | Escopo crescer sem controle"
      ];

  const executionPrompts = [
    "Use os documentos em docs/resolve-ai/ como contexto obrigatório. Escolha uma tarefa P0/P1. Não faça deploy, push ou alteração fora do escopo. Ao final, gere relatório com arquivos alterados, validação e riscos.",
    "Antes de implementar, leia 10-plano-de-continuacao.md, 11-backlog-priorizado.md e 14-checklist-de-validacao.md. Se encontrar risco sensível, pare e registre mitigação."
  ];

  const validationChecklist = [
    "Li docs/resolve-ai/10-plano-de-continuacao.md",
    "Entendi riscos principais",
    "Escolhi apenas uma tarefa ou sprint",
    "Não toquei em arquivos proibidos",
    "Não fiz deploy, push ou commit sem autorização",
    "Executei validação compatível com a mudança",
    "Registrei próximo passo"
  ];

  return { summary, nextRecommendedAction, milestones, backlogItems, executionPrompts, validationChecklist, hasCriticalRisk: critical };
}
