import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const cli = path.resolve("dist", "index.js");
const prepDocs = [
  "15-tarefa-preparada.md",
  "16-prompt-de-implementacao.md",
  "17-plano-de-validacao-da-tarefa.md",
  "18-riscos-da-execucao.md",
  "19-handoff-de-execucao.md"
];

function tempProject(prefix = "resolve-ai-prep-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function run(args, cwd) {
  return execFileSync(process.execPath, [cli, ...args], { cwd, encoding: "utf8" });
}

function assertPrepDocs(root) {
  for (const file of prepDocs) {
    assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", file)), true, file);
  }
}

test("preparar em diretorio vazio gera pacote de baixa confianca", () => {
  const root = tempProject("resolve-ai-prep-empty-");
  const output = run(["preparar"], root);
  const state = JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));

  assert.match(output, /Não encontrei diagnóstico anterior/);
  assert.equal(state.ultimoPreparo.canAutoExecute, false);
  assert.equal(state.ultimoPreparo.approvalRequired, true);
  assertPrepDocs(root);
});

test("preparar com diagnostico sem planejamento recomenda planejar", () => {
  const root = tempProject("resolve-ai-prep-diagnostic-");
  run(["diagnosticar"], root);

  const output = run(["preparar"], root);
  const state = JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));

  assert.match(output, /Não encontrei planejamento anterior/);
  assert.equal(state.ultimoPreparo.canAutoExecute, false);
  assertPrepDocs(root);
});

test("preparar com diagnostico e planejamento seleciona tarefa", () => {
  const root = tempProject("resolve-ai-prep-planned-");
  run(["diagnosticar"], root);
  run(["planejar"], root);

  const output = run(["preparar"], root);
  const state = JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));

  assert.match(output, /Tarefa preparada:/);
  assert.match(output, /Autoexecução: não/);
  assert.notEqual(state.ultimoPreparo.riskLevel, "red");
  assertPrepDocs(root);
});

test("projeto novo sem testes nao vira risco critico por motivo isolado", () => {
  const root = tempProject("resolve-ai-prep-new-no-tests-");
  run(["diagnosticar"], root);
  run(["planejar"], root);
  run(["preparar"], root);
  const state = JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));
  const task = fs.readFileSync(path.join(root, "docs", "resolve-ai", "15-tarefa-preparada.md"), "utf8");

  assert.equal(state.tipoProjeto, "novo");
  assert.notEqual(state.ultimoPreparo.riskLevel, "red");
  assert.doesNotMatch(task, /Hardening inicial do repositório/);
});

test("preparar com risco critico prioriza hardening", () => {
  const root = tempProject("resolve-ai-prep-risk-");
  run(["começar"], root);
  const statePath = path.join(root, ".resolve-ai", "state.json");
  const state = JSON.parse(fs.readFileSync(statePath, "utf8"));
  fs.writeFileSync(statePath, JSON.stringify({
    ...state,
    ultimoDiagnosticoEm: new Date().toISOString(),
    lastPlanAt: new Date().toISOString(),
    tipoProjeto: "em-andamento",
    riscosDetectados: ["Possível arquivo sensível detectado por nome: .env"]
  }, null, 2), "utf8");

  run(["preparar"], root);
  const prepared = fs.readFileSync(path.join(root, "docs", "resolve-ai", "15-tarefa-preparada.md"), "utf8");
  const stateUpdated = JSON.parse(fs.readFileSync(statePath, "utf8"));

  assert.match(prepared, /Hardening inicial/);
  assert.equal(stateUpdated.ultimoPreparo.riskLevel, "red");
  assert.equal(stateUpdated.ultimoPreparo.canAutoExecute, false);
});

test("preparar preserva docs existentes", () => {
  const root = tempProject("resolve-ai-prep-existing-docs-");
  const doc = path.join(root, "docs", "resolve-ai", "15-tarefa-preparada.md");
  fs.mkdirSync(path.dirname(doc), { recursive: true });
  fs.writeFileSync(doc, "manual", "utf8");

  const output = run(["preparar"], root);

  assert.match(output, /Documentos preservados:/);
  assert.equal(fs.readFileSync(doc, "utf8"), "manual");
  assertPrepDocs(root);
});

test("preparar com Resolve Ai desligado avisa contexto minimo", () => {
  const root = tempProject("resolve-ai-prep-off-");
  run(["começar"], root);

  const output = run(["preparar"], root);

  assert.match(output, /Resolve Aí está desligado/);
});

test("preparar em projeto novo nao sugere deploy nem app inteiro", () => {
  const root = tempProject("resolve-ai-prep-new-");
  run(["diagnosticar"], root);
  run(["preparar"], root);
  const prompt = fs.readFileSync(path.join(root, "docs", "resolve-ai", "16-prompt-de-implementacao.md"), "utf8");

  assert.doesNotMatch(prompt, /Criar aplicação inteira como escopo/);
  assert.match(prompt, /Não faça deploy/);
});

test("aliases tarefa e executar funcionam e status mostra preparo", () => {
  const root = tempProject("resolve-ai-prep-alias-");
  run(["diagnosticar"], root);
  run(["planejar"], root);

  assert.match(run(["tarefa"], root), /Tarefa preparada:/);
  assert.match(run(["executar"], root), /apenas preparo a execução/);
  const status = run(["status"], root);
  assert.match(status, /Tarefa preparada:/);
  assert.match(status, /Autoexecução: não/);
});

test("preparar nao altera codigo do produto analisado", () => {
  const root = tempProject("resolve-ai-prep-readonly-");
  const src = path.join(root, "src");
  fs.mkdirSync(src, { recursive: true });
  const productFile = path.join(src, "app.ts");
  fs.writeFileSync(productFile, "export const value = 1;\n", "utf8");

  run(["preparar"], root);

  assert.equal(fs.readFileSync(productFile, "utf8"), "export const value = 1;\n");
});
