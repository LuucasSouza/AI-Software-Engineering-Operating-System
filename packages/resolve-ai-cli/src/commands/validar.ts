import { beginProject, hasStarted, readState, writeState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { buildValidationResult } from "../core/validation-engine.js";
import { writeValidationDocs } from "../core/validation-docs.js";

export function validarCommand(root: string = process.cwd(), alias: string = "validar"): void {
  if (!hasStarted(root)) {
    beginProject(root);
  }

  const state = readState(root);
  if (state.active === false) {
    print(`
Resolve Aí está desligado.

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

  print(`
Resolve Aí — validação guiada

${alias !== "validar" ? `Alias usado: ${alias}` : ""}
${!result.hasAssistedExecution ? "Não encontrei uma execução assistida anterior. Vou fazer uma validação limitada do estado atual." : ""}

Validação concluída.
Status: ${result.status}
Confiança: ${result.confianca}
Arquivos alterados detectados: ${result.mudancasDetectadas}
Arquivos sensíveis detectados: ${result.arquivosSensiveisDetectados.length}

Documentos criados em docs/resolve-ai/25-29: ${docs.created.length}
Documentos preservados: ${docs.preserved.length}

Próxima ação:
${result.proximaAcao}
`);
}
