import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";
import type { ValidationResult } from "../types/runtime.js";

const validationDocs = [
  "25-relatorio-de-validacao.md",
  "26-mudancas-detectadas.md",
  "27-checklist-pos-execucao.md",
  "28-riscos-pos-execucao.md",
  "29-handoff-pos-validacao.md"
];

function front(title: string): string {
  return `---\ntitle: "${title}"\ngenerated_by: "Resolve Aí"\ncommand: "resolve-ai validar"\ngenerated_at: "${new Date().toISOString()}"\nstatus: "draft"\n---\n\n`;
}

function list(items: string[]): string {
  return items.length > 0 ? items.map((item) => `- ${item}`).join("\n") : "- Nenhum item detectado.";
}

function categoryList(result: ValidationResult): string {
  return Object.entries(result.changeCategories)
    .map(([category, files]) => `### ${category}\n\n${list(files)}`)
    .join("\n\n");
}

function content(file: string, result: ValidationResult): string {
  if (file === "25-relatorio-de-validacao.md") {
    return front("25 — Relatório de Validação") + `# Relatório de Validação\n\n## Status\n\n${result.status}\n\n## Resumo\n\nValidação guiada gerada com confiança ${result.confianca}. Não executei testes, não alterei código e não fiz commit.\n\n## O que foi validado\n\n${list(result.evidence)}\n\n## O que não foi possível validar\n\n${list(result.notValidated)}\n\n## Evidências encontradas\n\n${list(result.docsReference)}\n\n## Principais alertas\n\n${list(result.riscosRestantes)}\n\n## Recomendação\n\n${result.status === "bloqueada" ? "Não recomendo commit agora." : "Revise manualmente antes de commitar."}\n\n## Próxima ação sugerida\n\n${result.proximaAcao}\n`;
  }
  if (file === "26-mudancas-detectadas.md") {
    return front("26 — Mudanças Detectadas") + `# Mudanças Detectadas\n\n## Fonte da análise\n\n${result.gitAvailable ? "Git metadata local: git status --porcelain." : "Git metadata indisponível; validação limitada a metadados locais seguros."}\n\n## Arquivos alterados\n\n${list(result.arquivosAlterados)}\n\n## Classificação das mudanças\n\n${categoryList(result)}\n\n## Possíveis mudanças fora do escopo\n\n${list(result.possibleOutOfScope)}\n\n## Arquivos sensíveis detectados por nome/caminho\n\n${list(result.arquivosSensiveisDetectados)}\n\n## Observações\n\nConteúdo de arquivos sensíveis não foi lido nem copiado.\n`;
  }
  if (file === "27-checklist-pos-execucao.md") {
    return front("27 — Checklist Pós-Execução") + `# Checklist Pós-Execução\n\n## Checklist técnico\n\n- [ ] O projeto compila?\n- [ ] Os testes relevantes foram executados manualmente?\n- [ ] A funcionalidade principal foi verificada manualmente?\n- [ ] Nenhum arquivo sensível foi adicionado?\n- [ ] A documentação necessária foi atualizada?\n- [ ] O diff foi revisado antes de commit?\n\n## Checklist de produto\n\n- [ ] O resultado resolve a tarefa preparada?\n- [ ] O comportamento esperado está claro?\n- [ ] Existe alguma regressão aparente?\n\n## Checklist de segurança\n\n- [ ] Nenhum segredo foi exposto?\n- [ ] Permissões continuam corretas?\n- [ ] Dados pessoais não foram adicionados indevidamente?\n- [ ] Arquivos sensíveis detectados foram removidos ou protegidos?\n`;
  }
  if (file === "28-riscos-pos-execucao.md") {
    const critical = result.status === "bloqueada" ? result.riscosRestantes : [];
    const medium = result.status === "parcial" || result.status === "aprovada-com-ressalvas" ? result.riscosRestantes : [];
    return front("28 — Riscos Pós-Execução") + `# Riscos Pós-Execução\n\n## Riscos críticos\n\n${list(critical)}\n\n## Riscos médios\n\n${list(medium)}\n\n## Riscos baixos\n\n${result.mudancasDetectadas === 0 ? "- Execução ainda não evidenciada por mudanças locais." : "- Validação baseada em paths e metadados, não em análise semântica profunda."}\n\n## Riscos que precisam de teste manual\n\n- Comportamento funcional da tarefa.\n- Regressões em fluxos relacionados.\n- Build, lint e testes relevantes.\n\n## Mitigações recomendadas\n\n- Revisar diff manualmente.\n- Rodar testes relevantes manualmente.\n- Não commitar arquivos sensíveis.\n- Atualizar o registro de execução se algo mudou fora do escopo.\n`;
  }
  return front("29 — Handoff Pós-Validação") + `# Handoff Pós-Validação\n\n## Contexto\n\nValidação pós-execução gerada pelo Resolve Aí após pacote de execução assistida.\n\n## Status da validação\n\n${result.status}\n\n## Mudanças detectadas\n\n${list(result.arquivosAlterados)}\n\n## Pendências\n\n${list(result.riscosRestantes)}\n\n## Próxima ação recomendada\n\n${result.proximaAcao}\n\n## Prompt sugerido para o próximo agente\n\n\`\`\`text\nLeia docs/resolve-ai/25-relatorio-de-validacao.md a docs/resolve-ai/29-handoff-pos-validacao.md.\nRevise o status, os riscos e os arquivos alterados.\nNão faça commit, push ou deploy sem aprovação humana.\nSe houver validação bloqueada, priorize remover ou mitigar os riscos antes de continuar.\n\`\`\`\n`;
}

export function writeValidationDocs(root: string, result: ValidationResult): { created: string[]; preserved: string[] } {
  const paths = resolveAiPaths(root);
  fs.mkdirSync(paths.docsDir, { recursive: true });
  const created: string[] = [];
  const preserved: string[] = [];
  for (const file of validationDocs) {
    const target = path.join(paths.docsDir, file);
    const label = `docs/resolve-ai/${file}`;
    if (fs.existsSync(target)) {
      preserved.push(label);
      continue;
    }
    fs.writeFileSync(target, content(file, result), "utf8");
    created.push(label);
  }
  return { created, preserved };
}
