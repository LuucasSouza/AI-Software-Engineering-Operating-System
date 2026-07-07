import fs from "node:fs";
import path from "node:path";
import { hasStarted, readState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { resolveAiPaths } from "../core/paths.js";
import { buildRuntimeContext, gitTipFor } from "../core/runtime-context.js";
import { formatRiskForUser } from "../core/risk-language.js";

function projectLabel(root, state) {
  if (state.ultimaEntrevista?.resumoCurto) return state.ultimaEntrevista.resumoCurto;
  return path.basename(root) || "este projeto";
}

function detailSections(root, state) {
  const hasInterview = Boolean(state.ultimaEntrevista);
  const diagnosticNextAction = hasInterview && /entrevistar/i.test(state.proximaAcao ?? "")
    ? "Criar o plano do MVP com base na entrevista: resolve-ai planejar"
    : state.proximaAcao ?? "revisar docs/resolve-ai/09-handoff.md";

  const interviewSummary = state.ultimaEntrevista
    ? `
Entrevista: feita
Última entrevista: ${state.ultimaEntrevista.executadaEm}
Ideia: ${state.ultimaEntrevista.resumoCurto}
`
    : "";
  const diagnosticSummary = state.ultimoDiagnosticoEm
    ? `
Último diagnóstico: ${state.ultimoDiagnosticoEm}
Tipo de projeto: ${state.tipoProjeto ?? "não informado"}
Modo recomendado: ${state.modoRecomendado ?? "não informado"}
Stack provável: ${state.stackDetectada?.length ? state.stackDetectada.join(", ") : "não identificada"}
Próxima ação do diagnóstico: ${diagnosticNextAction}
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
- Risco: ${formatRiskForUser(state.ultimoPreparo.riskLevel)}
- Aprovação humana: necessária
- Autoexecução: não
`
    : "";
  const assistedExecutionSummary = state.ultimaExecucaoAssistida
    ? `
Execução assistida: ${state.ultimaExecucaoAssistida.status}
Tarefa: ${state.ultimaExecucaoAssistida.tarefa}
Risco: ${formatRiskForUser(state.ultimaExecucaoAssistida.risco)}
Autoexecução: não
Prompt final: docs/resolve-ai/22-prompt-final-para-agente.md
`
    : "";
  const validationConfidenceNote = state.ultimaValidacao && state.ultimaValidacao.confianca === "baixa"
    ? state.ultimaValidacao.gitDisponivel === false
      ? " (normal aqui: sem Git eu não consigo comparar mudanças com precisão)"
      : " (normal antes de executar a tarefa: ainda há pouco para comparar)"
    : "";
  const validationSummary = state.ultimaValidacao
    ? `
Última validação: ${state.ultimaValidacao.status}
Mudanças detectadas: ${state.ultimaValidacao.mudancasDetectadas} arquivo(s)
Artefatos Resolve Aí: ${state.ultimaValidacao.artefatosResolveAi ?? 0}
Arquivos do projeto: ${state.ultimaValidacao.arquivosProjeto ?? 0}
Desconhecidos: ${state.ultimaValidacao.arquivosDesconhecidos ?? 0}
Confiança: ${state.ultimaValidacao.confianca}${validationConfidenceNote}
Arquivos sensíveis: ${state.ultimaValidacao.arquivosSensiveisDetectados.length}
Próxima ação: ${state.ultimaValidacao.proximaAcao}
`
    : "";

  return `${interviewSummary}${diagnosticSummary}${planningSummary}${preparedSummary}${assistedExecutionSummary}${validationSummary}`;
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
  const context = buildRuntimeContext(root, state);
  const action = context.primaryNextAction;
  const docsExists = fs.existsSync(paths.docsDir);
  const details = detailSections(root, state);
  const gitTip = gitTipFor(context);
  const commandBlock = action.command ? `\nComando sugerido:\n${action.command}\n` : "";
  const tipBlock = gitTip ? `\nDica:\n${gitTip}\n` : "";

  if (state.active) {
    print(`Resolve Aí está ligado neste projeto.

Projeto: ${projectLabel(root, state)}
Fluxo atual: ${context.flowName}
Perfil recomendado: ${context.recommendedProfile}

Próxima ação prioritária:
${action.title}

Por quê:
${action.explanation}
${commandBlock}
Importante:
Eu ainda não mexi no código.

Docs: ${docsExists ? "docs/resolve-ai/" : "não encontrado"}
Estado: .resolve-ai/state.json
Última atualização: ${state.lastUpdatedAt}
${details}${tipBlock}`);
    return;
  }

  print(`Resolve Aí está preparado, mas desligado.

Projeto: ${projectLabel(root, state)}
Fluxo atual: ${context.flowName}
Perfil recomendado: ${context.recommendedProfile}

Próxima ação prioritária:
${action.title}

Por quê:
${action.explanation}
${commandBlock}
Docs: ${docsExists ? "docs/resolve-ai/" : "não encontrado"}
Estado: .resolve-ai/state.json
Última atualização: ${state.lastUpdatedAt}
${details}${tipBlock}
Para ligar:
  resolve-ai ligar
`);
}
