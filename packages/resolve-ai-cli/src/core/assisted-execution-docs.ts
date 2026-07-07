import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";
import { explainRiskForUser, formatRiskForUser } from "./risk-language.js";
import type { AssistedExecutionPackage } from "../types/runtime.js";

const assistedExecutionDocs = [
  "20-execucao-assistida.md",
  "21-aprovacao-humana.md",
  "22-prompt-final-para-agente.md",
  "23-checklist-pos-execucao.md",
  "24-registro-de-execucao.md"
];

function front(title: string): string {
  return `---\ntitle: "${title}"\ngenerated_by: "Resolve Aí"\ncommand: "resolve-ai resolver"\ngenerated_at: "${new Date().toISOString()}"\nstatus: "draft"\n---\n\n`;
}

function list(items: string[]): string {
  return items.length > 0 ? items.map((item) => `- ${item}`).join("\n") : "- Não informado.";
}

function content(file: string, pack: AssistedExecutionPackage): string {
  if (file === "20-execucao-assistida.md") {
    return front("20 — Execução Assistida") + `# 20 — Execução Assistida\n\n## Resumo\n\nO Resolve Aí preparou uma execução assistida. Ele ainda não alterou código.\n\n## Tarefa selecionada\n\n${pack.taskTitle}\n\n## Classificação de risco\n\nRisco: ${formatRiskForUser(pack.risk)}\n\nPor quê: ${explainRiskForUser(pack.risk)}\n\n## Confiança\n\n${pack.confidence}\n\n## Por que esta tarefa agora\n\nA tarefa veio do pacote preparado pelo comando \`resolve-ai preparar\`.\n\n## Contexto usado\n\n${list(pack.references)}\n\n## Escopo permitido\n\n${list(pack.scope)}\n\n## Fora de escopo\n\n${list(pack.outOfScope)}\n\n## Estratégia de execução\n\n1. Revisar a aprovação humana.\n2. Colar o prompt final no agente de IA.\n3. Manter a execução dentro do escopo.\n4. Validar antes de declarar pronto.\n\n## Riscos principais\n\n${list(pack.risks)}\n\n## Critérios de parada\n\n${list(pack.stopCriteria)}\n\n## Próximo passo\n\n${pack.nextStep}\n`;
  }
  if (file === "21-aprovacao-humana.md") {
    return front("21 — Aprovação Humana") + `# 21 — Aprovação Humana\n\n## Antes de executar\n\nO Resolve Aí ainda não alterou código. Este documento existe para você revisar antes de colar o prompt no agente.\n\n## O que será pedido\n\n${pack.taskTitle}\n\n## O que NÃO será permitido\n\n${list(pack.outOfScope)}\n\n## Riscos\n\n${list(pack.risks)}\n\n## Checklist de aprovação\n\n- [ ] Entendi a tarefa.\n- [ ] Entendi os riscos.\n- [ ] Concordo com o escopo.\n- [ ] Sei como validar.\n- [ ] Não há risco crítico sem mitigação.\n- [ ] Entendo que \`canAutoExecute\` é \`false\`.\n\n## Decisão humana\n\n- [ ] Aprovado para execução assistida\n- [ ] Reprovado\n- [ ] Precisa de mais diagnóstico\n- [ ] Precisa quebrar em tarefa menor\n\nResponsável:\nData:\nObservações:\n`;
  }
  if (file === "22-prompt-final-para-agente.md") {
    return front("22 — Prompt Final para Agente") + `# 22 — Prompt Final para Agente\n\nCopie o bloco abaixo e cole no seu agente de IA de programação.\n\n\`\`\`text\nVocê está dentro de um projeto real.\nUse os documentos em docs/resolve-ai/ como contexto obrigatório.\n\nTarefa:\n${pack.taskTitle}\n\nContexto obrigatório:\n${pack.references.map((item) => `- ${item}`).join("\n")}\n\nEscopo permitido:\n${pack.scope.map((item) => `- ${item}`).join("\n")}\n\nFora de escopo:\n${pack.outOfScope.map((item) => `- ${item}`).join("\n")}\n\nRestrições obrigatórias:\n${pack.restrictions.map((item, index) => `${index + 1}. ${item}`).join("\n")}\n\nValidação esperada:\n${pack.validation.map((item) => `- ${item}`).join("\n")}\n\nAo final, gere relatório com:\n- arquivos alterados;\n- decisões tomadas;\n- testes executados;\n- riscos remanescentes;\n- próximos passos.\n\`\`\`\n`;
  }
  if (file === "23-checklist-pos-execucao.md") {
    return front("23 — Checklist Pós-Execução") + `# 23 — Checklist Pós-Execução\n\n## Validação funcional\n\n- [ ] A tarefa foi concluída?\n- [ ] O comportamento esperado funciona?\n- [ ] Não houve alteração fora do escopo?\n\n## Validação técnica\n\n${pack.validation.map((item) => `- [ ] ${item}`).join("\n")}\n- [ ] Testes relevantes foram executados, quando aplicável?\n- [ ] Build/lint/typecheck foram executados, quando aplicável?\n- [ ] Não houve novos erros óbvios?\n\n## Validação de segurança\n\n- [ ] Nenhum segredo foi exposto?\n- [ ] Nenhum dado sensível foi copiado?\n- [ ] Permissões relevantes foram preservadas?\n\n## Validação de documentação\n\n- [ ] docs/resolve-ai/ foi atualizado se necessário?\n- [ ] Decisões relevantes foram registradas?\n\n## Resultado\n\n- [ ] Aprovado\n- [ ] Reprovado\n- [ ] Precisa ajuste\n`;
  }
  return front("24 — Registro de Execução") + `# 24 — Registro de Execução\n\n## Status\n\nPendente\n\n## Tarefa\n\n${pack.taskTitle}\n\n## Risco\n\n${formatRiskForUser(pack.risk)}\n\n## Data de preparação\n\n${new Date().toISOString()}\n\n## Prompt usado\n\nVer \`22-prompt-final-para-agente.md\`.\n\n## Resultado após execução\n\nA preencher.\n\n## Arquivos alterados\n\nA preencher.\n\n## Testes executados\n\nA preencher.\n\n## Decisões tomadas\n\nA preencher.\n\n## Riscos remanescentes\n\nA preencher.\n`;
}

export function writeAssistedExecutionDocs(root: string, pack: AssistedExecutionPackage): { created: string[]; preserved: string[] } {
  const paths = resolveAiPaths(root);
  fs.mkdirSync(paths.docsDir, { recursive: true });
  const created: string[] = [];
  const preserved: string[] = [];
  for (const file of assistedExecutionDocs) {
    const target = path.join(paths.docsDir, file);
    const label = `docs/resolve-ai/${file}`;
    if (fs.existsSync(target)) {
      preserved.push(label);
      continue;
    }
    fs.writeFileSync(target, content(file, pack), "utf8");
    created.push(label);
  }
  return { created, preserved };
}
