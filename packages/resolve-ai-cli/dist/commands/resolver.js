import { beginProject, hasStarted, readState, writeState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { buildAssistedExecutionPackage } from "../core/assisted-execution-engine.js";
import { writeAssistedExecutionDocs } from "../core/assisted-execution-docs.js";

export function resolverCommand(root= process.cwd(), alias= "resolver") {
  if (!hasStarted(root)) {
    beginProject(root);
  }

  const state = readState(root);
  if (state.active === false) {
    const now = new Date().toISOString();
    writeState(root, {
      ...state,
      lastCommand: "resolver",
      lastUpdatedAt: now
    });
    print(`
Resolve Aí está desligado.

Para preparar uma execução assistida, ligue primeiro:
resolve-ai ligar

Eu ainda não mexi no seu código e não gerei pacote de execução assistida.
`);
    return;
  }

  const pack = buildAssistedExecutionPackage(root, state);
  const docs = writeAssistedExecutionDocs(root, pack);
  const now = new Date().toISOString();

  writeState(root, {
    ...state,
    lastCommand: "resolver",
    ultimaExecucaoAssistida: {
      criadaEm: now,
      status: "pendente",
      tarefa: pack.taskTitle,
      risco: pack.risk,
      canAutoExecute: false,
      proximoPasso: pack.nextStep,
      docsGerados: docs.created
    },
    lastUpdatedAt: now
  });

  print(`
Resolve Aí — execução assistida

${alias !== "resolver" ? `Alias usado: ${alias}` : ""}
${!pack.hasPreparedTask ? "Ainda não encontrei uma tarefa preparada. Rode primeiro: resolve-ai preparar. O pacote foi gerado como baixa confiança e não deve ser usado para alterar código." : ""}

Pronto. Preparei a execução assistida.

Eu ainda não mexi no seu código.
Criei um prompt seguro em docs/resolve-ai/22-prompt-final-para-agente.md.

Tarefa:
${pack.taskTitle}

Risco: ${pack.risk}
Aprovação humana: necessária
Autoexecução: não

Arquivos gerados:
- docs/resolve-ai/20-execucao-assistida.md
- docs/resolve-ai/21-aprovacao-humana.md
- docs/resolve-ai/22-prompt-final-para-agente.md
- docs/resolve-ai/23-checklist-pos-execucao.md
- docs/resolve-ai/24-registro-de-execucao.md

Documentos criados: ${docs.created.length}
Documentos preservados: ${docs.preserved.length}

Próximo passo:
1. Leia docs/resolve-ai/21-aprovacao-humana.md
2. Cole o prompt final no seu agente de IA
3. Depois rode resolve-ai validar quando esse comando existir
`);
}
