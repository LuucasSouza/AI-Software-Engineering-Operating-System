import { beginProject, hasStarted, readState, writeState } from "../core/local-state.js";
import { runGuidedInterview, interviewQuestionsText } from "../core/interview-engine.js";
import { print } from "../core/output.js";

export function entrevistarCommand(root= process.cwd(), alias= "entrevistar") {
  if (!hasStarted(root)) {
    beginProject(root);
  }

  const previous = readState(root);
  const result = runGuidedInterview(root);
  const now = result.state.executadaEm;

  writeState(root, {
    ...previous,
    lastCommand: "entrevistar",
    ultimoComando: "entrevistar",
    tipoProjeto: previous.tipoProjeto ?? "novo",
    modoRecomendado: previous.modoRecomendado ?? "Non-Technical Builder",
    fluxoRecomendado: previous.fluxoRecomendado ?? "Projeto do Zero",
    ultimaEntrevista: result.state,
    nextRecommendedAction: "resolve-ai planejar",
    proximaAcao: "Criar o plano do MVP com base na entrevista: resolve-ai planejar",
    lastUpdatedAt: now
  });

  const nonInteractive = !result.interactive
    ? `\n\nNão consegui abrir uma entrevista interativa neste terminal.\nVocê pode preencher manualmente estes campos em docs/resolve-ai/00-project-intake.md:\n${interviewQuestionsText()}`
    : "";

  print(`Bora entender essa ideia com calma.
Vou fazer algumas perguntas rápidas para transformar isso em um começo de projeto.

Promessa: não vou mexer no seu código.
Também não preciso de senha, token, .env ou dado sensível.

Se alguma pergunta não fizer sentido, responda "não sei".
${alias !== "entrevistar" ? `\nAlias usado: ${alias}` : ""}${nonInteractive}

Entrevista registrada.

Resumo:
${result.state.resumoCurto}

Documentos criados: ${result.created.length}
Documentos atualizados: ${result.updated.length}
Documentos preservados: ${result.preserved.length}

Próxima ação sugerida:
resolve-ai planejar
`);
}
