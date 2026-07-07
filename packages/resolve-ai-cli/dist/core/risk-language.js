export function formatRiskForUser(risk) {
  const value = String(risk ?? "").trim().toLowerCase();
  if (value === "green" || value === "low" || value === "baixo") return "baixo";
  if (value === "yellow" || value === "medium" || value === "medio" || value === "médio") return "médio";
  if (value === "orange" || value === "high" || value === "alto") return "alto";
  if (value === "red" || value === "critical" || value === "critico" || value === "crítico") return "crítico";
  if (value === "bloqueada" || value === "bloqueado") return "bloqueado";
  return "médio";
}

export function explainRiskForUser(risk) {
  const publicRisk = formatRiskForUser(risk);
  if (publicRisk === "baixo") {
    return "A tarefa é local, pequena e não usa dados reais.";
  }
  if (publicRisk === "médio") {
    return "A tarefa pode alterar arquivos do projeto, então precisa de revisão humana antes de aplicar.";
  }
  if (publicRisk === "alto") {
    return "Existem dados sensíveis, credenciais, arquivos críticos ou mudanças que podem afetar usuários reais.";
  }
  if (publicRisk === "bloqueado") {
    return "Falta contexto seguro para executar. Prepare a tarefa de novo antes de continuar.";
  }
  return "Há sinais de segredo, dado real, backup, credencial ou ação perigosa. Não recomendo avançar sem revisão humana.";
}

export function riskScaleLine() {
  return "Escala de risco: baixo, médio, alto ou crítico. Risco crítico ou sensível pode bloquear a execução.";
}
