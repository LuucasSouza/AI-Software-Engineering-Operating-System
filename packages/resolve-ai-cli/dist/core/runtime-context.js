import fs from "node:fs";
import path from "node:path";
import { detectProjectKind } from "./project-detector.js";

function hasSensitiveRuntimeRisk(state) {
  const risks = state.riscosDetectados ?? [];
  return risks.some((risk) => /sensível|sensivel|secret|token|credencial|\.env|senha|backup|dump|lgpd/i.test(risk));
}

function resolveProjectKind(root, state) {
  if (state.tipoProjeto) return state.tipoProjeto;
  if (state.ultimaEntrevista) return "novo";
  const detected = detectProjectKind(root);
  return detected === "indefinido" ? "indeterminado" : detected;
}

export function flowNameFor(projectKind, hasInterview) {
  if (projectKind === "novo") return "Projeto do Zero — Entrevista e Planejamento";
  if (hasInterview && (projectKind === "indeterminado" || projectKind === "indefinido")) return "Projeto do Zero — Entrevista e Planejamento";
  if (projectKind === "legado") return "Projeto Legado — Diagnóstico e Continuação";
  if (projectKind === "em-andamento") return "Projeto em Andamento — Diagnóstico e Continuação";
  return "Ainda não diagnosticado";
}

function resolveProfile(state, projectKind) {
  if (state.modoRecomendado) return state.modoRecomendado;
  if (projectKind === "novo") return "Non-Technical Builder";
  return "ainda não definido";
}

export function getPrimaryNextAction(context) {
  if (!context.isActive) {
    return {
      title: "Ligue o Resolve Aí neste projeto.",
      command: "resolve-ai ligar",
      explanation: "Com ele ligado, os próximos comandos usam o contexto completo do projeto."
    };
  }
  if (context.validationBlocked) {
    return {
      title: "Pare e revise os arquivos sensíveis detectados antes de continuar.",
      explanation: "A última validação encontrou arquivo com cara de segredo, backup ou dado real. Remova ou proteja antes de qualquer commit."
    };
  }
  if (context.hasCriticalRisk) {
    return {
      title: "Revise e proteja os riscos de segurança detectados antes de qualquer feature nova.",
      command: "resolve-ai preparar",
      explanation: "O diagnóstico encontrou sinais de arquivo sensível. Tratar isso primeiro evita expor dados por acidente."
    };
  }
  if (context.hasAssistedExecution) {
    if (context.realExecutionValidated) {
      return {
        title: "Revise o checklist pós-execução e escolha a próxima fatia pequena.",
        command: "resolve-ai preparar",
        explanation: "A validação encontrou mudanças reais no projeto. Feche esse ciclo antes de começar outro."
      };
    }
    return {
      title: "Use o prompt final no seu agente de IA para executar a tarefa preparada.",
      explanation: "O prompt está em docs/resolve-ai/22-prompt-final-para-agente.md. Depois que o agente executar, rode resolve-ai validar."
    };
  }
  if (context.hasPreparedTask) {
    return {
      title: "Gere o pacote de execução assistida da tarefa preparada.",
      command: "resolve-ai resolver",
      explanation: "Isso cria o prompt final seguro para você colar no seu agente de IA, com aprovação humana antes."
    };
  }
  if (context.hasPlanning) {
    return {
      title: "Prepare a primeira tarefa pequena do plano.",
      command: "resolve-ai preparar",
      explanation: "Uma tarefa pequena e concreta é mais fácil de executar e validar do que o plano inteiro de uma vez."
    };
  }
  if (context.hasInterview) {
    return {
      title: "Crie o plano do MVP com base na entrevista.",
      command: "resolve-ai planejar",
      explanation: "Sua ideia já está registrada. O plano transforma ela em passos pequenos e seguros."
    };
  }
  if (context.projectKind === "novo") {
    return {
      title: "Registre sua ideia com a entrevista guiada.",
      command: "resolve-ai entrevistar",
      explanation: "Em pasta nova, a entrevista transforma sua ideia em escopo inicial antes de planejar."
    };
  }
  if (context.hasDiagnostic) {
    return {
      title: "Crie o plano de continuação do projeto.",
      command: "resolve-ai planejar",
      explanation: "O diagnóstico já existe. O plano organiza o que fazer primeiro sem alterar código."
    };
  }
  return {
    title: "Rode um diagnóstico local seguro do projeto.",
    command: "resolve-ai diagnosticar",
    explanation: "O diagnóstico entende o projeto sem alterar código e orienta o resto do fluxo."
  };
}

export function gitTipFor(context) {
  if (context.hasGit) return null;
  return "Este projeto ainda não usa Git. Quando quiser comparar mudanças com precisão, rode git init. Isso não bloqueia o próximo passo.";
}

export function buildRuntimeContext(root, state) {
  const projectKind = resolveProjectKind(root, state);
  const hasInterview = Boolean(state.ultimaEntrevista);
  const hasValidation = Boolean(state.ultimaValidacao);
  const validationBlocked = state.ultimaValidacao?.status === "bloqueada";
  const realExecutionValidated = hasValidation && (state.ultimaValidacao?.arquivosProjeto ?? 0) > 0;
  const context = {
    isActive: state.active === true,
    hasInterview,
    interviewSummary: state.ultimaEntrevista?.resumoCurto,
    projectKind,
    recommendedProfile: resolveProfile(state, projectKind),
    flowName: flowNameFor(projectKind, hasInterview),
    hasDiagnostic: Boolean(state.ultimoDiagnosticoEm),
    hasPlanning: Boolean(state.lastPlanAt),
    hasPreparedTask: Boolean(state.ultimoPreparo),
    hasAssistedExecution: Boolean(state.ultimaExecucaoAssistida),
    hasValidation,
    validationBlocked,
    realExecutionValidated,
    hasGit: fs.existsSync(path.join(root, ".git")),
    hasCriticalRisk: hasSensitiveRuntimeRisk(state),
    primaryNextAction: { title: "", explanation: "" }
  };
  context.primaryNextAction = getPrimaryNextAction(context);
  return context;
}
