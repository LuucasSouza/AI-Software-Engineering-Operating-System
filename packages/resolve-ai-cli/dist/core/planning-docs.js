import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";

const planningFiles = [
  "10-plano-de-continuacao.md",
  "11-backlog-priorizado.md",
  "12-proximas-sprints.md",
  "13-prompts-de-execucao.md",
  "14-checklist-de-validacao.md"
];

function front(title) {
  return `---\ntitle: "${title}"\ngenerated_by: "Resolve Aí"\ncommand: "resolve-ai planejar"\ngenerated_at: "${new Date().toISOString()}"\nstatus: "draft"\n---\n\n`;
}

function content(file, input, output) {
  if (file === "10-plano-de-continuacao.md") {
    return front("10 — Plano de Continuação") + `# Plano de Continuação — Resolve Aí\n\n## Resumo\n\n${output.summary}\n\n## Situação atual\n\nTipo de projeto: ${input.projectType}\n\nStack detectada: ${input.detectedStack.length ? input.detectedStack.join(", ") : "Não identificada"}\n\n## Modo aplicado\n\n${input.recommendedMode}\n\n## Objetivo do próximo ciclo\n\n${output.nextRecommendedAction}\n\n## Estratégia recomendada\n\n${output.hasCriticalRisk ? "Priorizar hardening, segurança e validação antes de feature nova." : "Executar uma sequência incremental e validável."}\n\n## O que fazer agora\n\n${output.milestones.map((item, i) => `${i + 1}. ${item}`).join("\n")}\n\n## O que evitar agora\n\n- Refatoração ampla sem validação.\n- Deploy sem autorização.\n- Feature nova antes de tratar riscos P0/P1.\n\n## Dependências\n\n- Revisar documentos em docs/resolve-ai/.\n- Validar riscos e critérios de aceite.\n\n## Riscos principais\n\n${input.risks.length ? input.risks.map((risk) => `- ${risk}`).join("\n") : "- Nenhum risco crítico informado no estado local."}\n\n## Próxima ação sugerida\n\n${output.nextRecommendedAction}\n`;
  }
  if (file === "11-backlog-priorizado.md") {
    return front("11 — Backlog Priorizado") + `# Backlog Priorizado — Resolve Aí\n\n## Resumo\n\nBacklog inicial gerado a partir do diagnóstico e estado local.\n\n## Legenda de prioridade\n- P0: crítico\n- P1: alto\n- P2: médio\n- P3: baixo\n\n## Backlog\n\n| ID | Prioridade | Tipo | Item | Motivo | Critério de aceite | Risco se ignorar |\n|---|---|---|---|---|---|---|\n${output.backlogItems.map((line) => `| ${line.replaceAll(" | ", " | ")} |`).join("\n")}\n\n## Itens que NÃO devem ser feitos agora\n\n- Deploy sem autorização.\n- Refatoração ampla antes de validação.\n- Feature nova se houver risco crítico aberto.\n\n## Perguntas em aberto\n\n- Qual fluxo é mais crítico para validar primeiro?\n- Existe risco de produção ou dados reais envolvido?\n`;
  }
  if (file === "12-proximas-sprints.md") {
    return front("12 — Próximas Sprints") + `# Próximas Sprints — Resolve Aí\n\n## Estratégia\n\nSprints curtas, incrementais e com validação explícita.\n\n${output.milestones.slice(0, 3).map((name, index) => `## Sprint ${String.fromCharCode(65 + index)} — ${name}\n\n### Objetivo\n\n${name}\n\n### Por que vem agora\n\nReduz risco e aumenta clareza antes da próxima etapa.\n\n### Tarefas\n\n- Revisar contexto em docs/resolve-ai/.\n- Executar apenas uma fatia segura.\n- Validar resultado.\n\n### Critérios de aceite\n\n- Escopo cumprido.\n- Validação registrada.\n- Próximo passo documentado.\n\n### Riscos\n\n- Escopo crescer sem controle.\n\n### O que não fazer nesta sprint\n\n- Não fazer push/deploy sem autorização.\n`).join("\n")}`;
  }
  if (file === "13-prompts-de-execucao.md") {
    return front("13 — Prompts de Execução") + `# Prompts de Execução — Resolve Aí\n\n${output.executionPrompts.map((prompt, index) => `## Prompt ${index + 1}\n\n${prompt}\n\nRegras:\n- Não implementar feature fora do escopo.\n- Não instalar dependências sem autorização.\n- Não fazer push/deploy sem autorização.\n- Não tocar em secrets ou dados reais.\n\nValidação:\n- Explique testes ou checagens executadas.\n- Liste arquivos alterados.\n`).join("\n")}`;
  }
  return front("14 — Checklist de Validação") + `# Checklist de Validação — Resolve Aí\n\n## Antes de executar\n${output.validationChecklist.slice(0, 3).map((item) => `- [ ] ${item}`).join("\n")}\n\n## Durante execução\n- [ ] Não alterei escopo sem registrar\n- [ ] Não toquei em arquivos proibidos\n- [ ] Não fiz deploy sem autorização\n\n## Depois da execução\n- [ ] Testes/validação executados\n- [ ] Documentação atualizada\n- [ ] Próximo passo registrado\n`;
}

export function writePlanningDocs(root, input, output) {
  const paths = resolveAiPaths(root);
  fs.mkdirSync(paths.docsDir, { recursive: true });
  const created = [];
  const preserved = [];
  for (const file of planningFiles) {
    const target = path.join(paths.docsDir, file);
    const label = `docs/resolve-ai/${file}`;
    if (fs.existsSync(target)) {
      preserved.push(label);
      continue;
    }
    fs.writeFileSync(target, content(file, input, output), "utf8");
    created.push(label);
  }
  return { created, preserved };
}
