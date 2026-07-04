import fs from "node:fs";
import { hasStarted, readState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { resolveAiPaths } from "../core/paths.js";

export function statusCommand(root: string = process.cwd()): void {
  if (!hasStarted(root)) {
    print(`
Resolve Aí ainda não começou neste projeto.

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
Próxima ação: ${state.proximaAcao ?? "revisar docs/resolve-ai/09-handoff.md"}
`
    : "";

  if (state.active) {
    print(`
Resolve Aí está ligado neste projeto.
Modo atual: Projeto em Andamento — Diagnóstico e Continuação
Docs: ${docsExists ? "docs/resolve-ai/" : "não encontrado"}
Estado: .resolve-ai/state.json
Última atualização: ${state.lastUpdatedAt}
${diagnosticSummary}
`);
    return;
  }

  print(`
Resolve Aí está preparado, mas desligado.

Docs: ${docsExists ? "docs/resolve-ai/" : "não encontrado"}
Estado: .resolve-ai/state.json
Última atualização: ${state.lastUpdatedAt}
${diagnosticSummary}

Para ligar:
  resolve-ai ligar
`);
}
