export function nextActions(detection) {
  if (detection.mainAction === "corrigir-seguranca-primeiro") {
    return ["Revisar docs/resolve-ai/05-risk-register.md", "Remover ou proteger arquivos sensíveis antes de continuar", "Validar decisões críticas antes de implementar"];
  }
  if (detection.projectType === "novo") {
    return ["Fazer entrevista de discovery", "Definir MVP", "Criar plano antes de escrever código"];
  }
  return ["Revisar riscos", "Validar decisões implícitas", "Criar backlog incremental", "Só então implementar"];
}

export function explainRecommendation(detection) {
  if (detection.recommendedMode === "Professional Engineer") return "Recomendei Professional Engineer porque encontrei stack técnica clara e sinais de estrutura/documentação.";
  if (detection.recommendedMode === "Vibe Coder") return "Recomendei Vibe Coder porque o projeto tem sinais de código em andamento com documentação, testes ou governança ainda incompletos.";
  return "Recomendei Non-Technical Builder porque há pouca ou nenhuma estrutura técnica detectável.";
}
