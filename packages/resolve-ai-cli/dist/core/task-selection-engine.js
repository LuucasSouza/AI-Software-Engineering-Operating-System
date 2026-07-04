import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";

function readSmall(filePath) {
  if (!fs.existsSync(filePath)) return "";
  const stat = fs.statSync(filePath);
  if (!stat.isFile() || stat.size > 100 * 1024) return "";
  return fs.readFileSync(filePath, "utf8");
}

export function readExecutionContext(root) {
  const paths = resolveAiPaths(root);
  return [
    "05-risk-register.md",
    "07-execution-plan.md",
    "08-backlog.md",
    "10-plano-de-continuacao.md",
    "11-backlog-priorizado.md",
    "12-proximas-sprints.md",
    "13-prompts-de-execucao.md",
    "14-checklist-de-validacao.md"
  ].map((file) => readSmall(path.join(paths.docsDir, file))).join("\n\n");
}

function hasCriticalRisk(state, context) {
  const text = `${state?.riscosDetectados?.join(" ") ?? ""} ${context}`.toLowerCase();
  return ["senha", "segredo", "sensível", "sensivel", "secret", "token", "dados pessoais", "lgpd", "backup", ".env", "credencial"].some((word) => text.includes(word));
}

export function selectPreparedTask(root, state) {
  const context = readExecutionContext(root);
  const hasDiagnosis = Boolean(state?.ultimoDiagnosticoEm);
  const hasPlanning = Boolean(state?.lastPlanAt);
  const critical = hasCriticalRisk(state, context);
  const isNew = state?.tipoProjeto === "novo";

  if (critical) {
    return {
      id: "PREP-001",
      title: "Hardening inicial do repositório",
      source: "risk",
      priority: "critical",
      confidence: hasDiagnosis ? "medium" : "low",
      category: "security",
      riskLevel: "red",
      scope: ["Revisar riscos críticos documentados", "Definir mitigação antes de feature nova", "Criar validação mínima de segurança"],
      outOfScope: ["Implementar feature nova", "Fazer deploy", "Alterar dados reais", "Mexer em credenciais"],
      likelyFiles: ["docs/resolve-ai/05-risk-register.md", "docs/resolve-ai/14-checklist-de-validacao.md"],
      validation: ["Riscos classificados", "Mitigação registrada", "Nenhum segredo exposto em documentação"],
      risks: ["Dados sensíveis ou credenciais podem estar presentes", "Implementar feature antes de hardening pode ampliar dano"],
      stopConditions: ["Encontrar segredo real", "Precisar alterar auth/dados reais", "Precisar fazer deploy"],
      reason: "Existe risco crítico relacionado a dados sensíveis, credenciais, backup ou segurança."
    };
  }

  if (isNew || !hasDiagnosis) {
    return {
      id: "PREP-001",
      title: "Definir escopo mínimo antes de implementar",
      source: "fallback",
      priority: "high",
      confidence: hasDiagnosis ? "medium" : "low",
      category: "documentation",
      riskLevel: "yellow",
      scope: ["Revisar intake", "Definir MVP", "Listar critérios de aceite"],
      outOfScope: ["Criar aplicação inteira", "Trocar stack", "Deploy"],
      likelyFiles: ["docs/resolve-ai/00-project-intake.md", "docs/resolve-ai/10-plano-de-continuacao.md"],
      validation: ["MVP descrito", "Escopo fora definido", "Próxima tarefa pequena identificada"],
      risks: ["Baixa clareza de produto", "Escopo crescer sem controle"],
      stopConditions: ["Não conseguir definir usuário/objetivo", "Surgir dado sensível"],
      reason: hasDiagnosis ? "Projeto novo deve começar por escopo e MVP." : "Não encontrei diagnóstico anterior; a tarefa precisa reduzir ambiguidade primeiro."
    };
  }

  return {
    id: "PREP-001",
    title: hasPlanning ? "Executar primeira tarefa P1 do plano" : "Criar validação mínima antes de continuar",
    source: hasPlanning ? "plan" : "validation",
    priority: "high",
    confidence: hasPlanning ? "high" : "medium",
    category: hasPlanning ? "validation" : "tests",
    riskLevel: "yellow",
    scope: ["Ler plano e backlog", "Executar apenas uma tarefa pequena", "Validar resultado"],
    outOfScope: ["Refatoração ampla", "Deploy", "Instalar dependências sem autorização", "Commit automático"],
    likelyFiles: ["docs/resolve-ai/11-backlog-priorizado.md", "docs/resolve-ai/14-checklist-de-validacao.md"],
    validation: ["Critério de aceite atendido", "Validação registrada", "Handoff atualizado"],
    risks: ["Escopo crescer durante execução", "Alterar arquivo fora do planejado"],
    stopConditions: ["Tarefa ficar ampla", "Precisar tocar área sensível", "Falhar validação mínima"],
    reason: hasPlanning ? "Existe planejamento; preparar a primeira tarefa segura do backlog." : "Existe diagnóstico, mas não planejamento; priorizar validação mínima."
  };
}
