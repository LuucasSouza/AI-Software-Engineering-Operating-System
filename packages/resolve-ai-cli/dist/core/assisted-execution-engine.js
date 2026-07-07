import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";
import { formatRiskForUser } from "./risk-language.js";

const preparedDocs = [
  "15-tarefa-preparada.md",
  "16-prompt-de-implementacao.md",
  "17-plano-de-validacao-da-tarefa.md",
  "18-riscos-da-execucao.md",
  "19-handoff-de-execucao.md"
];

function readSmall(filePath) {
  if (!fs.existsSync(filePath)) return "";
  const stat = fs.statSync(filePath);
  if (!stat.isFile() || stat.size > 100 * 1024) return "";
  return fs.readFileSync(filePath, "utf8");
}

function hasCriticalRisk(state, preparedContext) {
  const text = `${state.riscosDetectados?.join(" ") ?? ""} ${state.ultimoPreparo?.riskLevel ?? ""}`.toLowerCase();
  return ["red", "crítico", "critico", "senha", "segredo", "sensível", "sensivel", "secret", "token", "dados pessoais", "lgpd", ".env", "credencial"].some((word) => text.includes(word));
}

function classifyRisk(state, preparedContext) {
  if (!state.ultimoPreparo) return "bloqueada";
  if (hasCriticalRisk(state, preparedContext)) return "alto";
  if (state.ultimoPreparo.riskLevel === "orange") return "alto";
  if (state.ultimoPreparo.riskLevel === "yellow") return "medio";
  return "baixo";
}

export function readPreparedExecutionContext(root) {
  const paths = resolveAiPaths(root);
  const references = [];
  const text = preparedDocs.map((file) => {
    const filePath = path.join(paths.docsDir, file);
    const content = readSmall(filePath);
    if (content) references.push(`docs/resolve-ai/${file}`);
    return content;
  }).join("\n\n");
  return { text, references };
}

export function buildAssistedExecutionPackage(root, state) {
  const context = readPreparedExecutionContext(root);
  const hasPreparedTask = Boolean(state.ultimoPreparo);
  const risk = classifyRisk(state, context.text);
  const taskTitle = state.ultimoPreparo?.tarefa ?? "Nenhuma tarefa preparada encontrada";
  const confidence = hasPreparedTask ? (state.ultimoPreparo?.confianca === "high" ? "alta" : state.ultimoPreparo?.confianca === "medium" ? "media" : "baixa") : "baixa";

  if (!hasPreparedTask) {
    return {
      taskTitle,
      risk,
      confidence,
      hasPreparedTask: false,
      canAutoExecute: false,
      scope: ["Não executar implementação ainda", "Rodar resolve-ai preparar antes de montar execução assistida"],
      outOfScope: ["Alterar código", "Instalar dependências", "Fazer commit", "Fazer deploy"],
      references: context.references,
      restrictions: ["Sem tarefa preparada, o prompt final não deve pedir alteração de código.", "Não execute nada automaticamente."],
      validation: ["Tarefa preparada existente em docs/resolve-ai/15-tarefa-preparada.md", "Aprovação humana registrada antes da execução"],
      risks: ["Baixa confiança porque não há tarefa preparada por resolve-ai preparar."],
      stopCriteria: ["Ausência de tarefa preparada", "Escopo amplo demais", "Risco crítico sem mitigação"],
      nextStep: "Rode resolve-ai preparar antes de resolver."
    };
  }

  const highRisk = risk === "alto" || risk === "bloqueada";
  return {
    taskTitle,
    risk,
    confidence,
    hasPreparedTask,
    canAutoExecute: false,
    scope: [
      "Executar apenas a tarefa preparada nos documentos 15 a 19",
      "Usar docs/resolve-ai/16-prompt-de-implementacao.md como referência primária",
      "Validar o resultado com docs/resolve-ai/17-plano-de-validacao-da-tarefa.md"
    ],
    outOfScope: [
      "Alterar arquivos fora do escopo da tarefa",
      "Instalar dependências sem aprovação humana",
      "Fazer commit, push ou deploy",
      "Alterar dados reais, credenciais, permissões ou infraestrutura sem novo diagnóstico"
    ],
    references: context.references.length > 0 ? context.references : ["docs/resolve-ai/15-tarefa-preparada.md"],
    restrictions: [
      "Não execute nada automaticamente.",
      "Não faça commit.",
      "Não faça deploy.",
      "Não remova dados.",
      "Não exponha segredos ou dados sensíveis.",
      `Risco herdado do preparo: ${formatRiskForUser(state.ultimoPreparo.riskLevel)}. Escala: baixo, médio, alto ou crítico; risco crítico ou sensível pode bloquear.`,
      highRisk ? "Se o risco não estiver mitigado, pare antes de alterar código." : "Se aparecer risco crítico, pare e peça nova aprovação."
    ],
    validation: [
      "Executar apenas validações relevantes à tarefa.",
      "Conferir diff antes de concluir.",
      "Confirmar que nenhum arquivo fora do escopo foi alterado.",
      "Registrar resultado em docs/resolve-ai/24-registro-de-execucao.md."
    ],
    risks: highRisk
      ? ["Execução envolve risco alto ou crítico.", "Aprovação humana explícita é obrigatória antes de qualquer alteração.", "Pode ser necessário quebrar a tarefa em partes menores."]
      : ["Escopo pode crescer durante a implementação.", "Alterações fora do escopo podem introduzir regressão."],
    stopCriteria: [
      "Precisar tocar credenciais, autenticação crítica, pagamentos, dados pessoais ou banco de produção.",
      "Precisar instalar dependência sem aprovação.",
      "Validação mínima não estiver clara.",
      "O agente sugerir mudança fora do escopo."
    ],
    nextStep: "Revise docs/resolve-ai/21-aprovacao-humana.md e use docs/resolve-ai/22-prompt-final-para-agente.md no seu agente de IA."
  };
}
