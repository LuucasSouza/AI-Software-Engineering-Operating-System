import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const cli = path.resolve("dist", "index.js");

function tempProject(prefix = "resolve-ai-17b-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function run(args, cwd, input = "") {
  return execFileSync(process.execPath, [cli, ...args], { cwd, input, encoding: "utf8" });
}

function readState(root) {
  return JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));
}

const gastosAnswers = [
  "Controle Simples de Gastos",
  "Quero criar um app simples para controlar gastos pessoais.",
  "Para uma pessoa comum que quer entender para onde o dinheiro está indo.",
  "Usuários iniciantes, sem conhecimento técnico.",
  "Um app simples, local, sem login e sem internet.",
  "validar rápido",
  "A primeira versão útil deve permitir cadastrar entrada, cadastrar gasto, listar registros, ver saldo do mês e ver resumo por categoria.",
  "Não usar login, banco de dados, backend, integração bancária, internet ou dependências externas.",
  "HTML, CSS e JavaScript simples.",
  "Frameworks complexos",
  "Quero algo simples, seguro e fácil de entender.",
  "Não usar dados reais, senhas, tokens, dados bancários ou informações sensíveis.",
  "Abrir um arquivo HTML no navegador e conseguir registrar gastos localmente.",
  "sim"
].join("\n");

function interviewedProject() {
  const root = tempProject("resolve-ai-17b-gastos-");
  run(["começar"], root);
  run(["ligar"], root);
  run(["entrevistar"], root, gastosAnswers);
  return root;
}

test("projeto novo sem entrevista recomenda entrevistar", () => {
  const root = tempProject("resolve-ai-17b-no-interview-");
  const output = run(["diagnosticar"], root);

  assert.match(output, /Rodar resolve-ai entrevistar/);
});

test("diagnosticar pos-entrevista reconhece entrevista e nao recomenda de novo", () => {
  const root = interviewedProject();
  const output = run(["diagnosticar"], root);

  assert.match(output, /Entrevista: feita/);
  assert.match(output, /Controle Simples de Gastos/);
  assert.doesNotMatch(output, /Rodar resolve-ai entrevistar/);
  assert.match(output, /Criar o plano do MVP com base na entrevista/);
  assert.match(output, /Ponto de partida/);
  assert.doesNotMatch(output, /- README não detectado/);
});

test("status pos-entrevista mostra Projeto do Zero e Non-Technical Builder", () => {
  const root = interviewedProject();
  run(["diagnosticar"], root);
  const status = run(["status"], root);

  assert.match(status, /Fluxo atual: Projeto do Zero — Entrevista e Planejamento/);
  assert.match(status, /Perfil recomendado: Non-Technical Builder/);
  assert.doesNotMatch(status, /Projeto em Andamento — Diagnóstico e Continuação/);
  assert.doesNotMatch(status, /Rodar resolve-ai entrevistar/);
  assert.match(status, /Próxima ação prioritária:/);
});

test("planejar pos-entrevista usa o nome do projeto e nao inventa risco critico", () => {
  const root = interviewedProject();
  run(["diagnosticar"], root);
  const output = run(["planejar"], root);
  const plano = fs.readFileSync(path.join(root, "docs", "resolve-ai", "10-plano-de-continuacao.md"), "utf8");
  const backlog = fs.readFileSync(path.join(root, "docs", "resolve-ai", "11-backlog-priorizado.md"), "utf8");

  assert.match(output, /Controle Simples de Gastos/);
  assert.doesNotMatch(output, /Resolver riscos críticos antes de implementar qualquer feature nova/);
  assert.match(plano, /Controle Simples de Gastos/);
  assert.match(plano, /cadastrar gasto/i);
  assert.match(backlog, /Fazer primeiro/);
  assert.match(backlog, /Não fazer agora/);
  assert.doesNotMatch(backlog, /P0-001/);
});

test("preparar pos-entrevista gera tarefa concreta e resolver mantem a mesma tarefa", () => {
  const root = interviewedProject();
  run(["diagnosticar"], root);
  run(["planejar"], root);
  const prepararOutput = run(["preparar"], root);
  const state = readState(root);

  assert.match(prepararOutput, /Controle Simples de Gastos/);
  assert.doesNotMatch(prepararOutput, /Implementar a próxima fatia pequena do escopo preenchido/);
  assert.doesNotMatch(prepararOutput, /Risco: yellow/);
  assert.match(prepararOutput, /Risco: médio/);
  assert.match(state.ultimoPreparo.tarefa, /Controle Simples de Gastos/);

  const resolverOutput = run(["resolver"], root);
  const updated = readState(root);

  assert.match(resolverOutput, /Controle Simples de Gastos/);
  assert.equal(updated.ultimaExecucaoAssistida.tarefa, state.ultimoPreparo.tarefa);
  assert.doesNotMatch(resolverOutput, /Risco: yellow/);
});

test("saida publica do fluxo completo nao usa risco em ingles", () => {
  const root = interviewedProject();
  const outputs = [
    run(["diagnosticar"], root),
    run(["planejar"], root),
    run(["preparar"], root),
    run(["resolver"], root),
    run(["validar"], root),
    run(["status"], root)
  ].join("\n");

  assert.doesNotMatch(outputs, /Risco: yellow/i);
  assert.doesNotMatch(outputs, /Risco: green/i);
  assert.doesNotMatch(outputs, /Risco: orange/i);
  assert.doesNotMatch(outputs, /Risco: red/i);
});

test("validar sem Git explica limitacao e nao sequestra a proxima acao", () => {
  const root = interviewedProject();
  run(["diagnosticar"], root);
  run(["planejar"], root);
  run(["preparar"], root);
  run(["resolver"], root);
  const output = run(["validar"], root);
  const state = readState(root);
  const status = run(["status"], root);

  assert.match(output, /Não encontrei um repositório Git aqui/);
  assert.match(output, /Por que a confiança está baixa/);
  assert.match(state.ultimaValidacao.proximaAcao, /prompt final/);
  assert.doesNotMatch(state.ultimaValidacao.proximaAcao, /^Para habilitar detecção de mudanças/);
  assert.match(status, /Use o prompt final no seu agente de IA/);
  assert.match(status, /rode git init/);
});

test("kit de teste cobre entrevistar e avisa sobre a pasta correta", () => {
  const feedback = fs.readFileSync(path.resolve("..", "..", "teste", "feedback.md"), "utf8");
  const comeceAqui = fs.readFileSync(path.resolve("..", "..", "teste", "COMECE_AQUI.md"), "utf8");
  const comandos = fs.readFileSync(path.resolve("..", "..", "teste", "COMANDOS.md"), "utf8");
  const promptIa = fs.readFileSync(path.resolve("..", "..", "teste", "PROMPT_PARA_IA.md"), "utf8");

  assert.match(feedback, /resolve-ai entrevistar/);
  assert.match(comeceAqui, /kit de instruç/i);
  assert.match(comeceAqui, /não rode os comandos dentro de teste\//i);
  assert.match(comandos, /entrevistar/);
  assert.match(promptIa, /entrevistar/);
});

test("projeto legado com risco sensivel continua priorizando seguranca", () => {
  const root = tempProject("resolve-ai-17b-legacy-risk-");
  fs.mkdirSync(path.join(root, "docs", "ai-seos"), { recursive: true });
  fs.writeFileSync(path.join(root, "docs", "ai-seos", "README.md"), "legado", "utf8");
  fs.writeFileSync(path.join(root, ".env"), "SECRET=x", "utf8");
  run(["diagnosticar"], root);
  run(["planejar"], root);
  run(["preparar"], root);
  const state = readState(root);
  const status = run(["status"], root);

  assert.equal(state.ultimoPreparo.riskLevel, "red");
  assert.match(state.ultimoPreparo.tarefa, /Hardening/);
  assert.match(status, /Risco: crítico/);
});

test("projeto existente continua funcionando sem entrevista obrigatoria", () => {
  const root = tempProject("resolve-ai-17b-vibe-");
  fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({ scripts: { start: "node index.js" } }), "utf8");
  const output = run(["diagnosticar"], root);
  const status = run(["status"], root);

  assert.match(output, /Tipo de projeto: em-andamento/);
  assert.doesNotMatch(output, /Rodar resolve-ai entrevistar/);
  assert.match(output, /Pontos de atenção/);
  assert.match(status, /Projeto em Andamento — Diagnóstico e Continuação/);
});

test("professional engineer mantem detalhes tecnicos no diagnostico", () => {
  const root = tempProject("resolve-ai-17b-pro-");
  fs.mkdirSync(path.join(root, "src"));
  fs.mkdirSync(path.join(root, ".github", "workflows"), { recursive: true });
  fs.writeFileSync(path.join(root, "README.md"), "# App\n", "utf8");
  fs.writeFileSync(path.join(root, "tsconfig.json"), "{}", "utf8");
  fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({
    scripts: { test: "vitest" },
    dependencies: { react: "latest" },
    devDependencies: { typescript: "latest" }
  }), "utf8");

  const output = run(["diagnosticar"], root);

  assert.match(output, /Professional Engineer/);
  assert.match(output, /Stack provável encontrada:/);
  assert.match(output, /confiança/);
});
