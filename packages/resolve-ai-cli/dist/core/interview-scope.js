
const missingAnswers = ["não informado", "nao informado", "não definido", "nao definido", "não sei", "nao sei", ""];

function isMissing(value) {
  return missingAnswers.includes(String(value ?? "").trim().toLowerCase());
}

export function isNegatedStatement(text) {
  const value = String(text ?? "").trim().toLowerCase();
  if (/^(não|nao|sem|nenhum|nenhuma|nada|nunca|evitar|proibido)\b/.test(value)) return true;
  return /(não|nao)\s+(usar|ter|haver|haverá|havera|há|ha|registrar|utilizar|envolver|incluir|coletar)|não informado|nao informado|apenas em alto n[íi]vel|fora do escopo|sem dados sens[íi]veis/.test(value);
}

export function mentionsSensitiveData(text) {
  if (!text) return false;
  const value = String(text).toLowerCase();
  if (isNegatedStatement(value)) return false;
  const signals = ["senha", "segredo", "sensível", "sensivel", "secret", "token", "dados pessoais", "dados reais", "dado real", "lgpd", "backup", ".env", "credencial", "dump", "dados bancários", "dados bancarios", "dados médicos", "dados medicos", "dados de saúde", "dados de saude", "dados de clientes", "pagamento real"];
  return signals.some((word) => value.includes(word));
}

function cleanItem(item) {
  return item.trim().replace(/[.;]+$/, "").trim();
}

function splitListAnswer(text) {
  const normalized = String(text ?? "")
    .replace(/^a primeira vers(ão|ao) (útil|util)\s*/i, "")
    .replace(/^(deve|precisa|vai|deveria)\s+/i, "")
    .replace(/^(permitir|ter|conter|fazer|mostrar|incluir|usar)\s+/i, "")
    .replace(/\s+ou\s+/gi, ", ")
    .replace(/\s+e\s+/gi, ", ");
  return normalized
    .split(/,|;/)
    .map(cleanItem)
    .filter((item) => item.length > 2)
    .slice(0, 8);
}

function stripNegationPrefix(text) {
  return String(text ?? "").replace(/^(não|nao)\s+(usar|ter|incluir|fazer|criar)\s*/i, "").trim();
}

export function extractProjectScopeFromInterview(state) {
  const interview = state?.ultimaEntrevista;
  if (!interview) return null;
  const answers = interview.respostas;

  const idea = isMissing(answers.ideia) ? undefined : answers.ideia.trim();
  const projectName = idea && idea.length <= 80 ? idea.replace(/[.]+$/, "") : idea ? idea.slice(0, 77).trim() : undefined;
  const mvpFeatures = isMissing(answers.mvp) ? [] : splitListAnswer(answers.mvp);
  const outOfScope = isMissing(answers.foraDeEscopo) ? [] : splitListAnswer(stripNegationPrefix(answers.foraDeEscopo));
  const constraints = isMissing(answers.restricoes) ? [] : splitListAnswer(stripNegationPrefix(answers.restricoes));
  const hasSensitiveData = mentionsSensitiveData(answers.dadosSensiveis) || mentionsSensitiveData(answers.restricoes);

  return {
    projectName,
    idea,
    targetUser: isMissing(answers.publico) ? undefined : answers.publico.trim(),
    problem: isMissing(answers.problema) ? undefined : answers.problema.trim(),
    productType: isMissing(answers.tipoProduto) ? undefined : answers.tipoProduto.trim(),
    mvpFeatures,
    constraints,
    outOfScope,
    preferredStack: isMissing(answers.stackPreferida) ? undefined : answers.stackPreferida.trim(),
    successCriteria: isMissing(answers.criterioSucesso) ? undefined : answers.criterioSucesso.trim(),
    hasSensitiveData,
    sufficient: Boolean(idea) && mvpFeatures.length > 0
  };
}
