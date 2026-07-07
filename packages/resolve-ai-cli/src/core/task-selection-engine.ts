import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";
import { extractProjectScopeFromInterview } from "./interview-scope.js";
import type { PreparedTask, ProjectScope, ResolveAiState } from "../types/runtime.js";

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

function sliceTitle(scope: ProjectScope): string {
  const name = scope.projectName ?? "sua ideia";
  const kind = `${scope.productType ?? ""} ${scope.idea ?? ""}`.toLowerCase();
  if (/site|página|pagina|landing|portf/.test(kind)) return `Criar a primeira página de "${name}"`;
  return `Criar a primeira tela de "${name}"`;
}

export function selectFirstMvpSlice(scope: ProjectScope, state: ResolveAiState | null): PreparedTask {
  const hasPlanning = Boolean(state?.lastPlanAt);
  const features = scope.mvpFeatures.length ? scope.mvpFeatures : ["usar a primeira versão descrita na entrevista"];
  const avoid = [...new Set([...scope.outOfScope, "Dados reais", "Deploy"])];
  return {
    id: "PREP-001",
    title: sliceTitle(scope),
    source: hasPlanning ? "plan" : "documentation",
    priority: "high",
    confidence: hasPlanning ? "high" : "medium",
    category: "feature",
    riskLevel: "yellow",
    scope: [
      "Criar uma primeira tela ou página simples",
      ...features.slice(0, 4).map((item) => `Permitir ${item}`),
      "Manter os dados apenas no navegador ou em memória"
    ],
    outOfScope: avoid,
    likelyFiles: ["docs/resolve-ai/10-plano-de-continuacao.md", "docs/resolve-ai/11-backlog-priorizado.md", "docs/resolve-ai/13-prompts-de-execucao.md"],
    validation: [
      "A tela ou página abre e funciona localmente",
      ...features.slice(0, 3).map((item) => `Consigo ${item}`),
      "Nada fora do escopo foi criado"
    ],
    risks: ["A primeira versão pode crescer além do combinado se o escopo não for respeitado"],
    stopConditions: ["Precisar de login, banco de dados, internet ou dados reais", "A tarefa deixar de caber em uma frase", "Surgir dado sensível"],
    reason: `A entrevista registrou a ideia "${scope.projectName ?? scope.idea}". Essa tarefa é pequena, dá para validar rápido e cobre o começo do MVP sem login, banco de dados ou internet.`
  };
}

export function selectPreparedTask(root: string, state: ResolveAiState | null): PreparedTask {
  const context = readExecutionContext(root);
  const productContext = readProductContext(root);
  const hasDiagnosis = Boolean(state?.ultimoDiagnosticoEm);
  const hasPlanning = Boolean(state?.lastPlanAt);
  const critical = hasCriticalRisk(state, context);
  const isNew = state?.tipoProjeto === "novo";
  const interviewScope = extractProjectScopeFromInterview(state);

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

  if (interviewScope && interviewScope.sufficient && !interviewScope.hasSensitiveData) {
    return selectFirstMvpSlice(interviewScope, state);
  }

  if (interviewScope && interviewScope.sufficient && interviewScope.hasSensitiveData) {
    return {
      id: "PREP-001",
      title: `Definir uma versão de teste sem dados reais para "${interviewScope.projectName ?? interviewScope.idea}"`,
      source: "risk",
      priority: "high",
      confidence: "medium",
      category: "security",
      riskLevel: "orange",
      scope: ["Listar quais dados podem ser substituídos por dados fictícios", "Descrever a primeira versão usando apenas dados de exemplo", "Registrar o que nunca deve entrar no projeto"],
      outOfScope: ["Usar dados reais, senhas, tokens ou credenciais", "Implementar features antes dessa definição", "Deploy"],
      likelyFiles: ["docs/resolve-ai/00-project-intake.md", "docs/resolve-ai/05-risk-register.md"],
      validation: ["Versão de teste descrita sem nenhum dado real", "Riscos registrados em linguagem simples"],
      risks: ["A entrevista mencionou dados sensíveis; usar dado real cedo demais pode expor informação"],
      stopConditions: ["Precisar tocar dado real", "Precisar de credencial"],
      reason: "A entrevista mencionou dados sensíveis. Antes de criar telas, é mais seguro definir uma versão de teste sem dados reais."
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
