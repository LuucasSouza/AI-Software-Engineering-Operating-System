import { deactivate, hasStarted } from "../core/local-state.js";
import { print } from "../core/output.js";

export function desligarCommand(root = process.cwd()) {
  if (!hasStarted(root)) {
    print(`
Resolve Aí ainda não começou neste projeto.
Rode primeiro: resolve-ai começar
`);
    return;
  }

  const result = deactivate(root);
  if (result.alreadyInactive) {
    print("Resolve Aí já estava desligado.");
    return;
  }

  print(`
Resolve Aí desligado.
Vou parar de injetar contexto e economizar tokens. Quando quiser, é só ligar de novo.
`);
}
