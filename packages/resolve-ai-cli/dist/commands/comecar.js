import { beginProject } from "../core/local-state.js";
import { print } from "../core/output.js";

export function comecarCommand(root = process.cwd()) {
  const result = beginProject(root);
  const hadExisting = result.existingPaths.length > 0;

  print(`
Resolve Aí começou neste projeto.

Criei:
  .resolve-ai/
  docs/resolve-ai/

Modo atual: desligado
Próximo passo: rode \`resolve-ai ligar\` quando quiser que eu acompanhe o projeto.
${hadExisting ? "\nAlguns documentos ou arquivos já existem. Mantive tudo como está." : ""}
${result.legacyDocsFound ? "\nEncontrei docs/ai-seos/. Mantive como documentação legada; não fiz migração automática." : ""}
`);
}
