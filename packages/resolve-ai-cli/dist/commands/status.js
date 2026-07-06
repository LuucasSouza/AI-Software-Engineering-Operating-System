import fs from "node:fs";
import { hasStarted, readState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { resolveAiPaths } from "../core/paths.js";

function nextPriorityAction(state) {
  if (state.ultimaValidacao?.proximaAcao) return state.ultimaValidacao.proximaAcao;
  if (state.ultimaExecucaoAssistida?.proximoPasso) return state.ultimaExecucaoAssistida.proximoPasso;
  if (state.ultimoPreparo) return "Leia docs/resolve-ai/16-prompt-de-implementacao.md.";
  if (state.nextRecommendedAction) return state.nextRecommendedAction;
  if (state.proximaAcao) return state.proximaAcao;
  return "revisar docs/resolve-ai/09-handoff.md";
}

export function statusCommand(root= process.cwd()) {
  if (!hasStarted(root)) {
    print(`Resolve Aí ainda não começou neste projeto.

Rode:
  resolve-ai começar
`);
    return;
  }

  const paths = resolveAiPaths(root);
  const state = readState(root);
  const docsExists = fs.existsSync(paths.docsDir);
  const diagnosticSummary = state.ultimoDiagnosticoEm
    ? `
Último diagnóstico: ${state.ultimoDiagnosticoEm}
Tipo de projeto: ${state.tipoProjeto ?? "não informado"}
Modo recomendado: ${state.modoRecomendado ?? "não informado"}
Stack provável: ${state.stackDetectada?.length ? state.stackDetectada.join(", ") : "não identificada"}
Próxima ação do diagnóstico: ${state.proximaAcao ?? "revisar docs/resolve-ai/09-handoff.md"}
`
    : "";
  const planningSummary = state.lastPlanAt
    ? `
Último planejamento: ${state.lastPlanAt}
Confiança do plano: ${state.planningConfidence ?? "não informada"}
Próxima ação planejada: ${state.nextRecommendedAction ?? "revisar docs/resolve-ai/10-plano-de-continuacao.md"}
`
    : "";
  const preparedSummary = state.ultimoPreparo
    ? `
Tarefa preparada:
- ${state.ultimoPreparo.tarefa}
- Risco: ${state.ultimoPreparo.riskLevel}
- Aprovação humana: necessária
- Autoexecução: não

Próximo passo:
Leia docs/resolve-ai/16-prompt-de-implementacao.md.
`
    : "";
  const assistedExecutionSummary = state.ultimaExecucaoAssistida
    ? `
Execução assistida: ${state.ultimaExecucaoAssistida.status}

Tarefa:
${state.ultimaExecucaoAssistida.tarefa}

Risco: ${state.ultimaExecucaoAssistida.risco}
Autoexecução: não

Próximo passo:
Leia docs/resolve-ai/21-aprovacao-humana.md e use o prompt em docs/resolve-ai/22-prompt-final-para-agente.md.

Importante:
Eu ainda não mexi no código.
`
    : "";
  const validationSummary = state.ultimaValidacao
    ? `
Última validação: ${state.ultimaValidacao.status}
Mudanças detectadas: ${state.ultimaValidacao.mudancasDetectadas} arquivo(s)
Confiança: ${state.ultimaValidacao.confianca}
Arquivos sensíveis: ${state.ultimaValidacao.arquivosSensiveisDetectados.length}
Próxima ação: ${state.ultimaValidacao.proximaAcao}
`
    : "";
  const disabledSummary = state.active === false ? "\nResolve Aí está desligado. Para preparar com contexto completo, rode: resolve-ai ligar\n" : "";
  const nextAction = nextPriorityAction(state);

  if (state.active) {
    print(`Resolve Aí está ligado neste projeto.
Modo atual: Projeto em Andamento — Diagnóstico e Continuação
Docs: ${docsExists ? "docs/resolve-ai/" : "não encontrado"}
Estado: .resolve-ai/state.json
Última atualização: ${state.lastUpdatedAt}
Próxima ação prioritária: ${nextAction}
${diagnosticSummary}
${planningSummary}
${preparedSummary}
${assistedExecutionSummary}
${validationSummary}
`);
    return;
  }

  print(`Resolve Aí está preparado, mas desligado.

Docs: ${docsExists ? "docs/resolve-ai/" : "não encontrado"}
Estado: .resolve-ai/state.json
Última atualização: ${state.lastUpdatedAt}
Próxima ação prioritária: ${nextAction}
${diagnosticSummary}
${planningSummary}
${preparedSummary}
${assistedExecutionSummary}
${validationSummary}
${disabledSummary}

Para ligar:
  resolve-ai ligar
`);
}
