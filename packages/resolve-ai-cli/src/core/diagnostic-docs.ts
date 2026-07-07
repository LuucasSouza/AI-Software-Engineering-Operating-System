import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";
import { describeAttentionPoints, nextActions, explainRecommendation } from "./recommendation-engine.js";
import type { ProjectDetection } from "../types/runtime.js";

const files = [
  "00-project-intake.md",
  "01-current-state-assessment.md",
  "02-discovery.md",
  "03-product-definition.md",
  "04-architecture-review.md",
  "05-risk-register.md",
  "06-decision-log.md",
  "07-execution-plan.md",
  "08-backlog.md",
  "09-handoff.md"
];

function frontMatter(title: string, generatedAt: string): string {
  return `---\ntitle: "${title}"\ngenerated_by: "Resolve Aí"\ncommand: "resolve-ai diagnosticar"\ngenerated_at: "${generatedAt}"\nstatus: "draft"\n---\n\n`;
}

function list(items: string[]): string {
  return items.length ? items.map((item) => `- ${item}`).join("\n") : "- Não identificado no diagnóstico automático.";
}

function stackSummary(detection: ProjectDetection): string {
  return detection.stackDetails.length
    ? detection.stackDetails.map((item) => `- ${item.name}: confiança ${item.confidence}`).join("\n")
    : "- Não identificado no diagnóstico automático.";
}

function stackTable(detection: ProjectDetection): string {
  if (!detection.stackDetails.length) return "Não identificado no diagnóstico automático.";
  return [
    "| Tecnologia | Confiança | Evidências seguras |",
    "| --- | --- | --- |",
    ...detection.stackDetails.map((item) => `| ${item.name} | ${item.confidence} | ${item.evidence.join("; ")} |`)
  ].join("\n");
}

function content(file: string, detection: ProjectDetection, root: string, hasInterview: boolean): string {
  const actions = nextActions(detection, hasInterview);
  const stack = stackSummary(detection);
  const attentionPoints = describeAttentionPoints(detection);
  const risks = detection.risks.length ? detection.risks : ["Nenhum risco sensível detectado por nome no diagnóstico automático."];
  const intro = "Este diagnóstico é heurístico e local. Use como contexto inicial, não como verdade absoluta.";
  const zeroProjectNotice = detection.projectType === "novo"
    ? hasInterview
      ? "\n\n## Projeto do zero\n\nEste projeto está começando do zero e a entrevista guiada já foi registrada. O próximo passo é criar o plano do MVP com `resolve-ai planejar`. Ausência de testes, CI ou Git não é problema crítico por si só nesse estágio.\n"
      : "\n\n## Projeto do zero\n\nEsse projeto parece estar começando do zero. Em vez de tentar adivinhar, recomendo rodar:\n\n```bash\nresolve-ai entrevistar\n```\n\nDiagnóstico por arquivos tem baixa confiança quando ainda não há estrutura. Ausência de testes, CI ou Git não é problema crítico por si só nesse estágio.\n"
    : "";

  switch (file) {
    case "00-project-intake.md":
      return frontMatter("00 — Project Intake", detection.generatedAt) + `# 00 — Project Intake\n\n${intro}\n\n## Nome do projeto\n\n${path.basename(root)}\n\n## Caminho analisado\n\n${root}\n\n## Tipo de projeto detectado\n\n${detection.projectType}\n\n## Modo recomendado\n\n${detection.recommendedMode}\n\n## Fluxo recomendado\n\n${detection.recommendedFlow}\n\n## Objetivo aparente\n\nInferido por heurística. Não identificado com segurança no diagnóstico automático.\n\n## Incertezas\n\n${list(attentionPoints)}\n\n## Recomendação\n\n${explainRecommendation(detection)}\n`;
    case "01-current-state-assessment.md":
      return frontMatter("01 — Current State Assessment", detection.generatedAt) + `# 01 — Current State Assessment\n\n## Stack provável\n\n${stackTable(detection)}\n\n## Sinais encontrados\n\n${list(detection.signals)}\n\n## Pontos fortes\n\n${list(detection.strengths)}\n\n## Pontos frágeis\n\n${list(attentionPoints)}${zeroProjectNotice}\n\n## Confiança\n\n${detection.confidence}\n\n## Maturidade\n\n${detection.maturity}/5\n`;
    case "02-discovery.md":
      return frontMatter("02 — Discovery", detection.generatedAt) + `# 02 — Discovery\n\n## Problema de negócio inferido\n\nNão identificado no diagnóstico automático.\n\n## Usuários prováveis\n\nInferido por heurística. Validar com o usuário antes de implementar.\n\n## Hipóteses\n\n- O projeto precisa de diagnóstico humano/IA mais profundo antes de novas mudanças.\n- O próximo passo deve reduzir ambiguidade.\n\n## Métricas de sucesso sugeridas\n\n- Clareza de objetivo.\n- Backlog priorizado.\n- Riscos críticos tratados.\n`;
    case "03-product-definition.md":
      return frontMatter("03 — Product Definition", detection.generatedAt) + `# 03 — Product Definition\n\n## Visão do produto inferida\n\nNão identificado no diagnóstico automático.\n\n## Funcionalidades existentes aparentes\n\nInferido por heurística a partir da estrutura do projeto.\n\n## Próximos incrementos recomendados\n\n${list(actions)}\n\n## O que não fazer agora\n\n- Não alterar código antes de revisar riscos e decisões.\n- Não assumir intenção de produto sem validação.\n`;
    case "04-architecture-review.md":
      return frontMatter("04 — Architecture Review", detection.generatedAt) + `# 04 — Architecture Review\n\n## Arquitetura inferida\n\nInferido por heurística.\n\n## Stack provável\n\n${stackTable(detection)}\n\n## Riscos arquiteturais\n\n${list(attentionPoints)}\n\n## Recomendações\n\n- Confirmar fronteiras de frontend, backend, dados e deploy.\n- Registrar decisões relevantes como ADR quando necessário.\n`;
    case "05-risk-register.md":
      return frontMatter("05 — Risk Register", detection.generatedAt) + `# 05 — Risk Register\n\n| Risco | Categoria | Probabilidade | Impacto | Mitigação |\n| --- | --- | --- | --- | --- |\n${risks.map((risk) => `| ${risk} | Segurança/Manutenção | Média | Alto | Revisar sem copiar conteúdo sensível. |`).join("\n")}\n`;
    case "06-decision-log.md":
      return frontMatter("06 — Decision Log", detection.generatedAt) + `# 06 — Decision Log\n\n## Decisões detectadas\n\n${list(detection.stack.map((item) => `Uso aparente de ${item}`))}\n\n## Decisões implícitas que precisam validação\n\n- Arquitetura atual do projeto.\n- Estratégia de testes.\n- Estratégia de deploy.\n`;
    case "07-execution-plan.md":
      return frontMatter("07 — Execution Plan", detection.generatedAt) + `# 07 — Execution Plan\n\n## Ação principal recomendada\n\n${detection.mainAction}\n\n## Plano de continuação\n\n${actions.map((action, index) => `${index + 1}. ${action}`).join("\n")}\n\n## Critérios de aceite\n\n- Riscos revisados.\n- Decisões implícitas registradas.\n- Backlog incremental validado.\n`;
    case "08-backlog.md":
      return frontMatter("08 — Backlog", detection.generatedAt) + `# 08 — Backlog\n\n## Itens iniciais\n\n- [ ] Revisar risk register.\n- [ ] Validar objetivo do produto.\n- [ ] Registrar decisões técnicas principais.\n- [ ] Priorizar próxima fatia segura de trabalho.\n\n## Priorização inicial\n\n1. Segurança e dados sensíveis.\n2. Clareza de produto.\n3. Plano incremental.\n`;
    default:
      return frontMatter("09 — Handoff", detection.generatedAt) + `# 09 — Handoff\n\n## Contexto essencial\n\nDiagnóstico local gerado pelo Resolve Aí.\n\n## Tipo de projeto\n\n${detection.projectType}\n\n## Modo recomendado\n\n${detection.recommendedMode}\n\n## Stack provável\n\n${stack}\n\n## Riscos\n\n${list(risks)}\n\n## Próxima ação recomendada\n\n${actions[0]}\n\nDiagnóstico pronto. Agora eu já entendi melhor esse projeto.\n`;
  }
}

export function writeDiagnosticDocs(root: string, detection: ProjectDetection, hasInterview: boolean = false): { created: string[]; preserved: string[] } {
  const paths = resolveAiPaths(root);
  const created: string[] = [];
  const preserved: string[] = [];

  fs.mkdirSync(paths.docsDir, { recursive: true });

  for (const file of files) {
    const target = path.join(paths.docsDir, file);
    const label = `docs/resolve-ai/${file}`;
    if (fs.existsSync(target)) {
      preserved.push(label);
      continue;
    }
    fs.writeFileSync(target, content(file, detection, root, hasInterview), "utf8");
    created.push(label);
  }

  return { created, preserved };
}
