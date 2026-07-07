import fs from "node:fs";
import { beginProject, readState, writeState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { resolveAiPaths } from "../core/paths.js";
import { writeDiagnosticDocs } from "../core/diagnostic-docs.js";
import { inspectProject } from "../core/project-inspector.js";
import { describeAttentionPoints, nextActions } from "../core/recommendation-engine.js";

export function diagnosticarCommand(root= process.cwd()) {
  print("Resolve Aí — Diagnóstico do projeto\n\nVou diagnosticar este projeto sem alterar código, instalar dependências ou fazer commits.");

  const detection = inspectProject(root);
  beginProject(root);
  const paths = resolveAiPaths(root);
  const legacyDocsFound = fs.existsSync(paths.legacyDocsDir);
  const state = readState(root);
  const hasInterview = Boolean(state.ultimaEntrevista);
  const docs = writeDiagnosticDocs(root, detection, hasInterview);
  const actions = nextActions(detection, hasInterview);
  const isNew = detection.projectType === "novo";

  writeState(root, {
    ...state,
    lastCommand: "diagnosticar",
    ultimoComando: "diagnosticar",
    ultimoDiagnosticoEm: detection.generatedAt,
    modoRecomendado: detection.recommendedMode,
    fluxoRecomendado: detection.recommendedFlow,
    tipoProjeto: detection.projectType,
    stackDetectada: detection.stack,
    stackDetalhada: detection.stackDetails,
    riscosDetectados: detection.risks,
    maturidade: detection.maturity,
    proximaAcao: actions[0],
    documentosGerados: docs.created,
    lastUpdatedAt: detection.generatedAt
  });

  const interviewSummary = hasInterview
    ? `\nEntrevista: feita\nIdeia registrada: ${state.ultimaEntrevista?.resumoCurto}\nA entrevista já está registrada; não precisa repetir esse passo.\n`
    : "";
  const confidenceNote = detection.confidence === "baixa" && isNew
    ? "\nPor que a confiança está baixa: em projeto novo ainda há poucos arquivos para analisar. Isso é normal e não é um problema."
    : "";
  const attentionPoints = describeAttentionPoints(detection);
  const attentionTitle = isNew ? "Ponto de partida" : "Pontos de atenção";
  const attentionIntro = isNew
    ? "- Este projeto está no começo. Isso não é um problema, é o ponto de partida.\n"
    : "";

  print(`
Diagnóstico concluído.

Tipo de projeto: ${detection.projectType}
Fluxo recomendado: ${detection.recommendedFlow}
Modo recomendado: ${detection.recommendedMode}
Confiança: ${detection.confidence}${confidenceNote}
Maturidade: ${detection.maturity}/5
${interviewSummary}
Stack provável encontrada:
${detection.stackDetails.length ? detection.stackDetails.map((item) => `- ${item.name}: confiança ${item.confidence}`).join("\n") : "- Não identificada"}

${attentionTitle}:
${attentionIntro}${attentionPoints.length ? attentionPoints.map((item) => `- ${item}`).join("\n") : "- Nenhum ponto crítico detectado por heurística"}

Documentos criados: ${docs.created.length}
Documentos preservados: ${docs.preserved.length}
${legacyDocsFound ? "\nEncontrei docs/ai-seos/. Mantive como documentação legada; não fiz migração automática." : ""}

Próximas ações:
${actions.map((action, index) => `${index + 1}. ${action}`).join("\n")}

O próximo passo recomendado está em docs/resolve-ai/09-handoff.md.
`);
}
