import { beginProject, hasStarted, readState, writeState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { buildPlanningInput, createPlanningOutput, readPlanningContext } from "../core/planning-engine.js";
import { writePlanningDocs } from "../core/planning-docs.js";

export function planejarCommand(root= process.cwd()) {
  if (!hasStarted(root)) {
    beginProject(root);
  }

  const state = readState(root);
  const input = buildPlanningInput(root, state);
  const docsText = readPlanningContext(root);
  const output = createPlanningOutput(input, docsText);
  const docs = writePlanningDocs(root, input, output);
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

  print(`
Resolve Aí — Plano criado

${input.hasDiagnosis ? "Usei o diagnóstico existente como base." : "Ainda não encontrei um diagnóstico. Criei um plano básico de baixa confiança; o ideal é rodar `resolve-ai diagnosticar` primeiro."}

Modo atual: ${input.recommendedMode}
Tipo de projeto: ${input.projectType}
Plano salvo em: docs/resolve-ai/10-plano-de-continuacao.md
Backlog salvo em: docs/resolve-ai/11-backlog-priorizado.md
Próximas sprints: docs/resolve-ai/12-proximas-sprints.md
Prompts: docs/resolve-ai/13-prompts-de-execucao.md
Checklist: docs/resolve-ai/14-checklist-de-validacao.md

Documentos criados: ${docs.created.length}
Documentos preservados: ${docs.preserved.length}

Próxima ação sugerida:
${output.nextRecommendedAction}

Plano criado sem alterar código do produto.
Quando quiser executar uma tarefa, copie um dos prompts em docs/resolve-ai/13-prompts-de-execucao.md.
`);
}
