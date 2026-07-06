import { beginProject, hasStarted, readState, writeState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { selectPreparedTask } from "../core/task-selection-engine.js";
import { writeExecutionPackageDocs } from "../core/execution-package-docs.js";

export function prepararCommand(root: string = process.cwd(), alias: string = "preparar"): void {
  if (!hasStarted(root)) {
    beginProject(root);
  }

  const state = readState(root);
  const task = selectPreparedTask(root, state);
  const docs = writeExecutionPackageDocs(root, task);
  const now = new Date().toISOString();

  writeState(root, {
    ...state,
    lastCommand: "preparar",
    ultimoPreparo: {
      executadoEm: now,
      tarefa: task.title,
      categoria: task.category,
      prioridade: task.priority,
      confianca: task.confidence,
      riskLevel: task.riskLevel,
      approvalRequired: true,
      canAutoExecute: false,
      documentosGerados: docs.created
    },
    lastUpdatedAt: now
  });

  const notices = [
    alias === "executar" ? "Nesta fase eu apenas preparo a execução. Não vou executar a tarefa." : "",
    state.active === false ? "O Resolve Aí está desligado. Posso preparar um pacote básico, mas para usar contexto completo, rode `resolve-ai ligar`." : "",
    !state.ultimoDiagnosticoEm ? "Não encontrei diagnóstico anterior. Rode primeiro: resolve-ai diagnosticar. A confiança será baixa." : "",
    !state.lastPlanAt ? "Não encontrei planejamento anterior. Rode primeiro: resolve-ai planejar. Vou preparar uma tarefa básica com baixa confiança." : ""
  ].filter(Boolean);

  print(`Resolve Aí — preparação de tarefa${notices.length ? `\n\n${notices.join("\n")}` : ""}

Tarefa preparada:
${task.title}

Por que essa tarefa?
${task.reason}

Risco: ${task.riskLevel}
Aprovação humana: necessária
Autoexecução: não
Regra de risco: green/baixo, yellow/médio, orange ou red/alto no pacote de execução assistida.

Arquivos gerados:
- docs/resolve-ai/15-tarefa-preparada.md
- docs/resolve-ai/16-prompt-de-implementacao.md
- docs/resolve-ai/17-plano-de-validacao-da-tarefa.md
- docs/resolve-ai/18-riscos-da-execucao.md
- docs/resolve-ai/19-handoff-de-execucao.md

Documentos criados: ${docs.created.length}
Documentos preservados: ${docs.preserved.length}

Próximo passo:
Revise o prompt em docs/resolve-ai/16-prompt-de-implementacao.md.
`);
}
