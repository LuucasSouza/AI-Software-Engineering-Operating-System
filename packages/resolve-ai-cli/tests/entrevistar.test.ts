import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const cli = path.resolve("dist", "index.js");

function tempProject(prefix = "resolve-ai-interview-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function run(args, cwd, input = "") {
  return execFileSync(process.execPath, [cli, ...args], {
    cwd,
    input,
    encoding: "utf8"
  });
}

function readState(root) {
  return JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));
}

const answers = [
  "Um app para organizar gastos da casa",
  "A família se perde nas contas do mês",
  "Famílias pequenas",
  "Moradores da casa",
  "dashboard",
  "validar rápido",
  "Cadastrar despesas e ver total do mês",
  "Integração bancária",
  "React e Firebase",
  "Backend complexo",
  "Privacidade e uso simples no celular",
  "Pode haver gastos pessoais descritos em alto nível",
  "Saber quanto falta pagar no mês",
  "sim"
].join("\n");

test("entrevistar em diretorio vazio cria docs e atualiza state", () => {
  const root = tempProject("resolve-ai-interview-empty-");
  run(["começar"], root);
  run(["ligar"], root);

  const output = run(["entrevistar"], root, answers);
  const state = readState(root);
  const intake = fs.readFileSync(path.join(root, "docs", "resolve-ai", "00-project-intake.md"), "utf8");
  const discovery = fs.readFileSync(path.join(root, "docs", "resolve-ai", "02-discovery.md"), "utf8");
  const product = fs.readFileSync(path.join(root, "docs", "resolve-ai", "03-product-definition.md"), "utf8");
  const status = run(["status"], root);

  assert.match(output, /Entrevista registrada/);
  assert.equal(state.ultimaEntrevista.tipo, "guided-discovery-interview");
  assert.equal(state.ultimaEntrevista.proximaAcao, "resolve-ai planejar");
  assert.match(intake, /Um app para organizar gastos da casa/);
  assert.match(discovery, /Famílias pequenas/);
  assert.match(product, /Cadastrar despesas e ver total do mês/);
  assert.match(status, /Entrevista: feita/);
  assert.match(status, /Próxima ação prioritária:/);
  assert.match(status, /Crie o plano do MVP com base na entrevista/);
  assert.match(status, /resolve-ai planejar/);
  assert.match(status, /Fluxo atual: Projeto do Zero — Entrevista e Planejamento/);
  assert.doesNotMatch(status, /Projeto em Andamento — Diagnóstico e Continuação/);
  assert.doesNotMatch(status, /Rodar resolve-ai entrevistar/);
});

test("aliases entrevista e ideia funcionam", () => {
  const rootA = tempProject("resolve-ai-interview-alias-a-");
  const rootB = tempProject("resolve-ai-interview-alias-b-");

  assert.match(run(["entrevista"], rootA, answers), /Alias usado: entrevista/);
  assert.match(run(["ideia"], rootB, answers), /Alias usado: ideia/);
  assert.equal(readState(rootA).ultimaEntrevista.resumoCurto, "Um app para organizar gastos da casa");
  assert.equal(readState(rootB).ultimaEntrevista.resumoCurto, "Um app para organizar gastos da casa");
});

test("entrevistar sem stdin nao trava e orienta preenchimento manual", () => {
  const root = tempProject("resolve-ai-interview-noninteractive-");
  const output = run(["entrevistar"], root);
  const state = readState(root);

  assert.match(output, /Não consegui abrir uma entrevista interativa/);
  assert.match(output, /docs\/resolve-ai\/00-project-intake.md/);
  assert.equal(state.ultimaEntrevista.confianca, "baixa");
});

test("entrevistar preserva conteudo humano existente", () => {
  const root = tempProject("resolve-ai-interview-preserve-");
  const intake = path.join(root, "docs", "resolve-ai", "00-project-intake.md");
  fs.mkdirSync(path.dirname(intake), { recursive: true });
  fs.writeFileSync(intake, "conteudo humano importante", "utf8");

  run(["entrevistar"], root, answers);
  const content = fs.readFileSync(intake, "utf8");

  assert.match(content, /conteudo humano importante/);
  assert.match(content, /Entrevista guiada — Resolve Aí/);
  assert.match(content, /Um app para organizar gastos da casa/);
});

test("planejar apos entrevista nao trata negacao de dados sensiveis como risco critico", () => {
  const root = tempProject("resolve-ai-interview-no-sensitive-");
  const noSensitiveAnswers = [
    "Um app simples de tarefas",
    "Pessoas esquecem tarefas",
    "Pessoas não técnicas",
    "A própria pessoa",
    "app",
    "validar rápido",
    "Cadastrar tarefas e marcar como feitas",
    "Login e pagamento",
    "HTML CSS JavaScript",
    "Stack complexa",
    "Não usar dados sensíveis reais",
    "Não há dados sensíveis reais",
    "Organizar tarefas do dia",
    "sim"
  ].join("\n");

  run(["começar"], root);
  run(["ligar"], root);
  run(["entrevistar"], root, noSensitiveAnswers);
  run(["diagnosticar"], root);
  const output = run(["planejar"], root);

  assert.doesNotMatch(output, /Resolver riscos críticos antes de implementar qualquer feature nova/);
  assert.match(output, /Preparar a primeira tarefa do MVP/);
  assert.match(output, /Um app simples de tarefas/);
});
