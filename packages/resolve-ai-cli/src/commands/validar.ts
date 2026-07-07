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
      gitDisponivel: result.gitDisponivel,
      mudancasDetectadas: result.mudancasDetectadas,
      arquivosAlterados: result.arquivosAlterados,
      arquivosSensiveisDetectados: result.arquivosSensiveisDetectados,
      artefatosResolveAi: result.artefatosResolveAi,
      arquivosProjeto: result.arquivosProjeto,
      arquivosDesconhecidos: result.arquivosDesconhecidos,
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
    ? "\n\nNão encontrei um repositório Git aqui, então não consigo comparar mudanças com precisão.\nIsso não é um erro: é só uma limitação desta validação.\nPara habilitar detecção de mudanças, rode git init ou execute dentro de um repositório Git."
    : "";
  const confidenceNote = result.confianca === "baixa"
    ? !result.gitAvailable
      ? "\nPor que a confiança está baixa: este projeto ainda não usa Git, então não consigo comparar mudanças com precisão. Isso é esperado em projeto novo."
      : "\nPor que a confiança está baixa: ainda há pouca evidência de execução para comparar. Isso é esperado antes de executar a tarefa."
    : "";

  print(`Resolve Aí — validação guiada${notices.length ? `\n\n${notices.join("\n")}` : ""}
Validação concluída.
Status: ${result.status}
Confiança: ${result.confianca}${confidenceNote}
Arquivos alterados detectados: ${result.mudancasDetectadas}
Arquivos gerados pelo Resolve Aí: ${result.artefatosResolveAi ?? 0}
Arquivos reais do projeto: ${result.arquivosProjeto ?? 0}
Arquivos sensíveis detectados: ${result.arquivosSensiveisDetectados.length}
Arquivos desconhecidos: ${result.arquivosDesconhecidos ?? 0}
${gitNotice}

Observação:
Arquivos em docs/resolve-ai/, .resolve-ai/ e teste/ são artefatos da própria ferramenta.
Eles não significam, por si só, que o código do produto foi alterado.

Documentos criados em docs/resolve-ai/25-29: ${docs.created.length}
Documentos preservados: ${docs.preserved.length}

Próxima ação:
${result.proximaAcao}
`);
}
