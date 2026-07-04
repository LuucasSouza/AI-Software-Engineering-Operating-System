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

  if (state.active) {
    print(`
Resolve Aí está ligado neste projeto.
Modo atual: Projeto em Andamento — Diagnóstico e Continuação
Docs: ${docsExists ? "docs/resolve-ai/" : "não encontrado"}
Estado: .resolve-ai/state.json
Última atualização: ${state.lastUpdatedAt}
`);
    return;
  }

  print(`
Resolve Aí está preparado, mas desligado.

Docs: ${docsExists ? "docs/resolve-ai/" : "não encontrado"}
Estado: .resolve-ai/state.json
Última atualização: ${state.lastUpdatedAt}

Para ligar:
  resolve-ai ligar
`);
}
