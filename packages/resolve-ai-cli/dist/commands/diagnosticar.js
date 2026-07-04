import fs from "node:fs";
import { beginProject, readState, writeState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { resolveAiPaths } from "../core/paths.js";
import { writeDiagnosticDocs } from "../core/diagnostic-docs.js";
import { inspectProject } from "../core/project-inspector.js";
import { nextActions } from "../core/recommendation-engine.js";

export function diagnosticarCommand(root= process.cwd()) {
  print("Resolve Aí — Diagnóstico do projeto\n\nVou diagnosticar este projeto sem alterar código, instalar dependências ou fazer commits.");

  const detection = inspectProject(root);
  beginProject(root);
  const docs = writeDiagnosticDocs(root, detection);
  const paths = resolveAiPaths(root);
  const legacyDocsFound = fs.existsSync(paths.legacyDocsDir);
  const actions = nextActions(detection);
  const state = readState(root);

  writeState(root, {
    ...state,
    lastCommand: "diagnosticar",
    ultimoComando: "diagnosticar",
    ultimoDiagnosticoEm: detection.generatedAt,
    modoRecomendado: detection.recommendedMode,
    fluxoRecomendado: detection.recommendedFlow,
    tipoProjeto: detection.projectType,
    stackDetectada: detection.stack,
    riscosDetectados: detection.risks,
    maturidade: detection.maturity,
    proximaAcao: actions[0],
    documentosGerados: docs.created,
    lastUpdatedAt: detection.generatedAt
  });

  print(`
Diagnóstico concluído.

Tipo de projeto: ${detection.projectType}
Fluxo recomendado: ${detection.recommendedFlow}
Modo recomendado: ${detection.recommendedMode}
Confiança: ${detection.confidence}
Maturidade: ${detection.maturity}/5

Stack detectada:
${detection.stack.length ? detection.stack.map((item) => `- ${item}`).join("\n") : "- Não identificada"}

Pontos de atenção:
${detection.attentionPoints.length ? detection.attentionPoints.map((item) => `- ${item}`).join("\n") : "- Nenhum ponto crítico detectado por heurística"}

Documentos criados: ${docs.created.length}
Documentos preservados: ${docs.preserved.length}
${legacyDocsFound ? "\nEncontrei docs/ai-seos/. Mantive como documentação legada; não fiz migração automática." : ""}

Próximas ações:
${actions.map((action, index) => `${index + 1}. ${action}`).join("\n")}

O próximo passo recomendado está em docs/resolve-ai/09-handoff.md.
`);
}
