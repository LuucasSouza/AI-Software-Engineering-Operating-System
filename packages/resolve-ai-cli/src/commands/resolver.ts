import { beginProject, hasStarted, readState, writeState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { buildAssistedExecutionPackage } from "../core/assisted-execution-engine.js";
import { writeAssistedExecutionDocs } from "../core/assisted-execution-docs.js";
import { explainRiskForUser, formatRiskForUser, riskScaleLine } from "../core/risk-language.js";

export function resolverCommand(root: string = process.cwd(), alias: string = "resolver"): void {
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
    print(`Resolve Aí está desligado.

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

  const notices = [
    alias !== "resolver" ? `Alias usado: ${alias}` : "",
    !pack.hasPreparedTask ? "Ainda não encontrei uma tarefa preparada. Rode primeiro: resolve-ai preparar. O pacote foi gerado como baixa confiança e não deve ser usado para alterar código." : ""
  ].filter(Boolean);

  print(`Resolve Aí — execução assistida${notices.length ? `\n\n${notices.join("\n")}` : ""}
Pronto. Preparei a execução assistida.

Eu ainda não mexi no seu código.
Criei um prompt seguro em docs/resolve-ai/22-prompt-final-para-agente.md.

Tarefa:
${pack.taskTitle}

Risco: ${formatRiskForUser(pack.risk)}
Por quê: ${explainRiskForUser(pack.risk)}
Aprovação humana: necessária
Autoexecução: não
${riskScaleLine()}

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
3. Depois que o agente executar a tarefa, rode: resolve-ai validar
`);
}
