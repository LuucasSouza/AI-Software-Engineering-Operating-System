import { beginProject, hasStarted, readState, writeState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { buildValidationResult } from "../core/validation-engine.js";
import { writeValidationDocs } from "../core/validation-docs.js";

export function validarCommand(root= process.cwd(), alias= "validar") {
  if (!hasStarted(root)) {
    beginProject(root);
  }

  const state = readState(root);
  if (state.active === false) {
    print(`Resolve Aí está desligado.

Para validar o projeto, rode:
resolve-ai ligar

Não gerei documentos de validação e não atualizei ultimaValidacao.
`);
    return;
  }

  const result = buildValidationResult(root, state);
  const docs = writeValidationDocs(root, result);
  const now = new Date().toISOString();

  writeState(root, {
    ...state,
    lastCommand: "validar",
    ultimaValidacao: {
      executadaEm: now,
      status: result.status,
      confianca: result.confianca,
      mudancasDetectadas: result.mudancasDetectadas,
      arquivosAlterados: result.arquivosAlterados,
      arquivosSensiveisDetectados: result.arquivosSensiveisDetectados,
      riscosRestantes: result.riscosRestantes,
      proximaAcao: result.proximaAcao
    },
    lastUpdatedAt: now
  });

  const notices = [
    alias !== "validar" ? `Alias usado: ${alias}` : "",
    !result.hasAssistedExecution ? "Não encontrei uma execução assistida anterior. Vou fazer uma validação limitada do estado atual." : ""
  ].filter(Boolean);
  const gitNotice = !result.gitAvailable
    ? "\n\nNão encontrei um repositório Git aqui, então não consigo comparar mudanças com precisão.\nPara habilitar detecção de mudanças, rode git init ou execute dentro de um repositório Git."
    : "";

  print(`Resolve Aí — validação guiada${notices.length ? `\n\n${notices.join("\n")}` : ""}
Validação concluída.
Status: ${result.status}
Confiança: ${result.confianca}
Arquivos alterados detectados: ${result.mudancasDetectadas}
Arquivos sensíveis detectados: ${result.arquivosSensiveisDetectados.length}
${gitNotice}

Documentos criados em docs/resolve-ai/25-29: ${docs.created.length}
Documentos preservados: ${docs.preserved.length}

Próxima ação:
${result.proximaAcao}
`);
}
