import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";
import type { PreparedTask, ResolveAiState } from "../types/runtime.js";

function readSmall(filePath: string): string {
  if (!fs.existsSync(filePath)) return "";
  const stat = fs.statSync(filePath);
  if (!stat.isFile() || stat.size > 100 * 1024) return "";
  return fs.readFileSync(filePath, "utf8");
}

export function readExecutionContext(root: string): string {
  const paths = resolveAiPaths(root);
  return [
    "00-project-intake.md",
    "02-discovery.md",
    "03-product-definition.md",
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

function readProductContext(root: string): string {
  const paths = resolveAiPaths(root);
  return [
    "00-project-intake.md",
    "02-discovery.md",
    "03-product-definition.md"
  ].map((file) => readSmall(path.join(paths.docsDir, file))).join("\n\n");
}

function hasCriticalRisk(state: ResolveAiState | null, context: string): boolean {
  const text = `${state?.riscosDetectados?.join(" ") ?? ""}`.toLowerCase();
  return ["senha", "segredo", "sensível", "sensivel", "secret", "token", "dados pessoais", "lgpd", "backup", ".env", "credencial", "dump"].some((word) => text.includes(word));
}

function hasFilledProductScope(context: string): boolean {
  const text = context.toLowerCase();
  const hasUsefulSection = [
    "mvp",
    "escopo",
    "funcionalidade",
    "usuário",
    "usuario",
    "granada",
    "clipe",
    "biblioteca",
    "produto",
    "visão",
    "visao"
  ].some((word) => text.includes(word));
  const isOnlyFallback = [
    "não identificado no diagnóstico automático",
    "inferido por heurística. validar com o usuário",
    "não identificado com segurança"
  ].every((phrase) => text.includes(phrase));
  return hasUsefulSection && !isOnlyFallback;
}

export function selectPreparedTask(root: string, state: ResolveAiState | null): PreparedTask {
  const context = readExecutionContext(root);
  const productContext = readProductContext(root);
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

  if (hasFilledProductScope(productContext) && hasDiagnosis) {
    return {
      id: "PREP-001",
      title: "Implementar a próxima fatia pequena do escopo preenchido",
      source: hasPlanning ? "plan" : "documentation",
      priority: "high",
      confidence: hasPlanning ? "high" : "medium",
      category: "feature",
      riskLevel: "yellow",
      scope: ["Reler docs 00, 02 e 03", "Escolher uma fatia pequena do MVP descrito", "Implementar apenas essa fatia com validação manual"],
      outOfScope: ["Reescrever o produto inteiro", "Criar funcionalidades fora do escopo preenchido", "Fazer deploy", "Alterar dados reais"],
      likelyFiles: ["docs/resolve-ai/00-project-intake.md", "docs/resolve-ai/02-discovery.md", "docs/resolve-ai/03-product-definition.md", "docs/resolve-ai/11-backlog-priorizado.md"],
      validation: ["Fatia implementada corresponde ao escopo documentado", "Critérios de aceite revisados", "Nenhuma alteração fora do escopo"],
      risks: ["Escopo preenchido pode estar incompleto", "A próxima fatia pode crescer se não for limitada"],
      stopConditions: ["Escopo ficar ambíguo", "Precisar tocar dados reais", "A tarefa exigir deploy ou credenciais"],
      reason: "Encontrei contexto preenchido nos docs 00, 02 ou 03; a próxima tarefa deve partir desse escopo em vez de repetir o fallback genérico."
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
