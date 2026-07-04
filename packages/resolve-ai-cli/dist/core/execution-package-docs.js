import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";

const executionDocs = [
  "15-tarefa-preparada.md",
  "16-prompt-de-implementacao.md",
  "17-plano-de-validacao-da-tarefa.md",
  "18-riscos-da-execucao.md",
  "19-handoff-de-execucao.md"
];

function front(title) {
  return `---\ntitle: "${title}"\ngenerated_by: "Resolve Aí"\ncommand: "resolve-ai preparar"\ngenerated_at: "${new Date().toISOString()}"\nstatus: "draft"\n---\n\n`;
}

function list(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function content(file, task) {
  if (file === "15-tarefa-preparada.md") {
    return front("15 — Tarefa Preparada") + `# Tarefa Preparada — Resolve Aí\n\n## Resumo\n\n${task.title}\n\n## Categoria\n\n${task.category}\n\n## Prioridade\n\n${task.priority}\n\n## Confiança\n\n${task.confidence}\n\n## Origem\n\n${task.source}\n\n## Por que foi escolhida\n\n${task.reason}\n\n## Escopo\n\n${list(task.scope)}\n\n## Fora do escopo\n\n${list(task.outOfScope)}\n\n## Arquivos provavelmente envolvidos\n\n${list(task.likelyFiles)}\n\n## Pré-condições\n\n- Aprovação humana explícita.\n- Leitura dos documentos 15 a 19.\n\n## Definition of Ready\n\n- Tarefa pequena.\n- Riscos conhecidos.\n- Validação definida.\n\n## Definition of Done\n\n${list(task.validation)}\n`;
  }
  if (file === "16-prompt-de-implementacao.md") {
    return front("16 — Prompt de Implementação") + `# Prompt de Implementação — Resolve Aí\n\nVocê está executando uma tarefa preparada pelo Resolve Aí.\n\nAntes de alterar arquivos:\n1. Leia todos os documentos deste pacote.\n2. Explique o plano em até 10 linhas.\n3. Liste os arquivos que pretende tocar.\n4. Não altere arquivos fora do escopo.\n5. Não instale dependências sem autorização.\n6. Não faça commit sem autorização.\n7. Ao final, gere relatório de alterações e validação.\n\n## Tarefa\n\n${task.title}\n\n## Regras obrigatórias\n\n- Não altere arquivos fora do escopo.\n- Não instale dependências sem autorização.\n- Não faça commit sem autorização.\n- Não faça push.\n- Não faça deploy.\n- Não toque em dados reais.\n- Se encontrar risco crítico, pare e avise.\n\n## Arquivos permitidos ou prováveis\n\n${list(task.likelyFiles)}\n\n## Fora do escopo\n\n${list(task.outOfScope)}\n\n## Validação\n\n${list(task.validation)}\n\n## Relatório final esperado\n\n- Arquivos alterados.\n- Validação executada.\n- Riscos encontrados.\n- Próximo passo recomendado.\n`;
  }
  if (file === "17-plano-de-validacao-da-tarefa.md") {
    return front("17 — Plano de Validação da Tarefa") + `# Plano de Validação da Tarefa — Resolve Aí\n\n## Validação automática\n\n${list(task.validation)}\n\n## Validação manual\n\n- Revisar escopo executado.\n- Conferir se nenhum item fora do escopo foi alterado.\n\n## Evidências esperadas\n\n- Saída de testes ou checklist.\n- Relatório final.\n\n## Critérios de aceite\n\n${list(task.validation)}\n\n## Rollback\n\n- Reverter apenas alterações da tarefa, se houver.\n\n## Sinais de parada\n\n${list(task.stopConditions)}\n`;
  }
  if (file === "18-riscos-da-execucao.md") {
    return front("18 — Riscos da Execução") + `# Riscos da Execução — Resolve Aí\n\n## Nível de risco\n\n${task.riskLevel}\n\n## Riscos técnicos e de segurança\n\n${list(task.risks)}\n\n## Mitigação\n\n- Aprovação humana antes de implementar.\n- Escopo pequeno.\n- Validar antes de continuar.\n\n## Quando parar\n\n${list(task.stopConditions)}\n`;
  }
  return front("19 — Handoff de Execução") + `# Handoff de Execução — Resolve Aí\n\n## Contexto essencial\n\nPacote de execução preparado. Esta fase não executa a tarefa.\n\n## Tarefa preparada\n\n${task.title}\n\n## Restrições\n\n${list(task.outOfScope)}\n\n## Arquivos importantes\n\n${list(task.likelyFiles)}\n\n## Pendências\n\n- Aprovação humana.\n- Execução por humano ou agente em fase/comando futuro.\n\n## Próxima ação recomendada\n\nRevise docs/resolve-ai/16-prompt-de-implementacao.md.\n`;
}

export function writeExecutionPackageDocs(root, task) {
  const paths = resolveAiPaths(root);
  fs.mkdirSync(paths.docsDir, { recursive: true });
  const created = [];
  const preserved = [];
  for (const file of executionDocs) {
    const target = path.join(paths.docsDir, file);
    const label = `docs/resolve-ai/${file}`;
    if (fs.existsSync(target)) {
      preserved.push(label);
      continue;
    }
    fs.writeFileSync(target, content(file, task), "utf8");
    created.push(label);
  }
  return { created, preserved };
}
