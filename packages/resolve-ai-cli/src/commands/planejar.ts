import { beginProject, hasStarted, readState, writeState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { buildPlanningInput, createPlanningOutput, readPlanningContext } from "../core/planning-engine.js";
import { extractProjectScopeFromInterview } from "../core/interview-scope.js";
import { writePlanningDocs } from "../core/planning-docs.js";

export function planejarCommand(root: string = process.cwd()): void {
  if (!hasStarted(root)) {
    beginProject(root);
  }

  const state = readState(root);
  const input = buildPlanningInput(root, state);
  const docsText = readPlanningContext(root);
  const scope = extractProjectScopeFromInterview(state);
  const output = createPlanningOutput(input, docsText, scope);
  const docs = writePlanningDocs(root, input, output, scope);
  const now = new Date().toISOString();

  writeState(root, {
    ...state,
    lastCommand: "planejar",
    lastPlanAt: now,
    lastPlanSummary: output.summary,
    planningDocuments: docs.created,
    nextRecommendedAction: output.nextRecommendedAction,
    planningConfidence: input.confidence,
    lastUpdatedAt: now
  });

  const scopeSummary = scope && scope.sufficient
    ? `\nProjeto: ${scope.projectName ?? scope.idea}\nPrimeira versão útil:\n${scope.mvpFeatures.slice(0, 6).map((item) => `- ${item}`).join("\n")}\n${scope.outOfScope.length ? `Fica fora por enquanto: ${scope.outOfScope.slice(0, 5).join(", ")}\n` : ""}`
    : "";
  const confidenceNote = input.confidence === "baixa"
    ? "\nConfiança do plano: baixa. Isso é normal quando ainda há pouco contexto; a entrevista e o diagnóstico melhoram o plano."
    : "";

  print(`
Resolve Aí — Plano criado

${input.hasInterview ? "Usei a entrevista registrada como base do plano." : input.hasDiagnosis ? "Usei o diagnóstico existente como base." : "Ainda não encontrei um diagnóstico. Criei um plano básico de baixa confiança; o ideal é rodar `resolve-ai diagnosticar` primeiro."}
${scopeSummary}
Modo atual: ${input.recommendedMode}
Tipo de projeto: ${input.projectType}
Plano salvo em: docs/resolve-ai/10-plano-de-continuacao.md
Backlog salvo em: docs/resolve-ai/11-backlog-priorizado.md
Próximos passos em blocos: docs/resolve-ai/12-proximas-sprints.md
Prompts: docs/resolve-ai/13-prompts-de-execucao.md
Checklist: docs/resolve-ai/14-checklist-de-validacao.md

Documentos criados: ${docs.created.length}
Documentos preservados: ${docs.preserved.length}
${confidenceNote}
Próxima ação sugerida:
${output.nextRecommendedAction}

Plano criado sem alterar código do produto.
Quando quiser executar uma tarefa, copie um dos prompts em docs/resolve-ai/13-prompts-de-execucao.md.
`);
}
