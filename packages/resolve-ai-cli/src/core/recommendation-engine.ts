import type { ProjectDetection } from "../types/runtime.js";

export function nextActions(detection: ProjectDetection, hasInterview: boolean = false): string[] {
  if (detection.mainAction === "corrigir-seguranca-primeiro") {
    return [
      "Revisar docs/resolve-ai/05-risk-register.md",
      "Remover ou proteger arquivos sensíveis antes de continuar",
      "Validar decisões críticas antes de implementar"
    ];
  }

  if (detection.projectType === "novo" && hasInterview) {
    return [
      "Criar o plano do MVP com base na entrevista: resolve-ai planejar",
      "Preparar a primeira tarefa pequena: resolve-ai preparar",
      "Usar o prompt final no agente de IA somente depois de revisar"
    ];
  }

  if (detection.projectType === "novo") {
    return [
      "Rodar resolve-ai entrevistar",
      "Definir MVP",
      "Criar plano antes de escrever código"
    ];
  }

  return [
    "Revisar riscos",
    "Validar decisões implícitas",
    "Criar backlog incremental",
    "Só então implementar"
  ];
}

export function describeAttentionPoints(detection: ProjectDetection): string[] {
  if (detection.projectType !== "novo") return detection.attentionPoints;
  return detection.attentionPoints.map((point) => {
    if (/^README não detectado$/i.test(point)) return "README ainda não criado — normal para uma pasta nova";
    if (/^CI não detectado$/i.test(point)) return "Validação automática (CI) ainda não existe — normal neste estágio";
    if (/^Testes não detectados$/i.test(point)) return "Testes ainda não existem — normal antes da primeira versão";
    return point;
  });
}

export function explainRecommendation(detection: ProjectDetection): string {
  if (detection.recommendedMode === "Professional Engineer") {
    return "Recomendei Professional Engineer porque encontrei stack técnica clara e sinais de estrutura/documentação.";
  }
  if (detection.recommendedMode === "Vibe Coder") {
    return "Recomendei Vibe Coder porque o projeto tem sinais de código em andamento com documentação, testes ou governança ainda incompletos.";
  }
  return "Recomendei Non-Technical Builder porque há pouca ou nenhuma estrutura técnica detectável.";
}
