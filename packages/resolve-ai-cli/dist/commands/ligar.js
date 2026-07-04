import { activate, hasStarted } from "../core/local-state.js";
import { print } from "../core/output.js";

export function ligarCommand(root = process.cwd()) {
  if (!hasStarted(root)) {
    print(`
Resolve Aí ainda não começou neste projeto.
Rode primeiro: resolve-ai começar
`);
    return;
  }

  const result = activate(root);
  if (result.alreadyActive) {
    print("Resolve Aí já estava ligado.");
    return;
  }

  print(`
Resolve Aí ligado.
Vou acompanhar este projeto, organizar contexto e ajudar a resolver sem bagunça.
`);
}
