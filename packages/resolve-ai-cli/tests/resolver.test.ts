import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const cli = path.resolve("dist", "index.js");
const resolverDocs = [
  "20-execucao-assistida.md",
  "21-aprovacao-humana.md",
  "22-prompt-final-para-agente.md",
  "23-checklist-pos-execucao.md",
  "24-registro-de-execucao.md"
];

function tempProject(prefix = "resolve-ai-resolver-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function run(args, cwd) {
  return execFileSync(process.execPath, [cli, ...args], { cwd, encoding: "utf8" });
}

function statePath(root) {
  return path.join(root, ".resolve-ai", "state.json");
}

function readState(root) {
  return JSON.parse(fs.readFileSync(statePath(root), "utf8"));
}

function writeState(root, state) {
  fs.writeFileSync(statePath(root), JSON.stringify(state, null, 2), "utf8");
}

function assertResolverDocs(root) {
  for (const file of resolverDocs) {
    assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", file)), true, file);
  }
}

function activatePreparedProject(root) {
  run(["diagnosticar"], root);
  run(["planejar"], root);
  run(["preparar"], root);
  run(["ligar"], root);
}

test("resolver em diretorio vazio recomenda ligar e nao cria execucao agressiva", () => {
  const root = tempProject("resolve-ai-resolver-empty-");
  const output = run(["resolver"], root);
  const state = readState(root);

  assert.match(output, /Resolve Aí está desligado/);
  assert.equal(state.lastCommand, "resolver");
  assert.equal(state.ultimaExecucaoAssistida, undefined);
  assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", "20-execucao-assistida.md")), false);
});

test("resolver com preparo existente cria docs 20 a 24 e atualiza state", () => {
  const root = tempProject("resolve-ai-resolver-prepared-");
  activatePreparedProject(root);

  const output = run(["resolver"], root);
  const state = readState(root);

  assert.match(output, /Preparei a execução assistida/);
  assert.equal(state.ultimaExecucaoAssistida.status, "pendente");
  assert.equal(state.ultimaExecucaoAssistida.canAutoExecute, false);
  assertResolverDocs(root);
});

test("resolver informa que validar ja existe", () => {
  const root = tempProject("resolve-ai-resolver-copy-");
  activatePreparedProject(root);

  const output = run(["resolver"], root);

  assert.match(output, /Depois que o agente executar a tarefa, rode: resolve-ai validar/);
  assert.doesNotMatch(output, /quando esse comando existir/);
  assert.doesNotMatch(output, /fase futura/i);
});

test("resolver com risco critico destaca risco alto", () => {
  const root = tempProject("resolve-ai-resolver-risk-");
  run(["começar"], root);
  const current = readState(root);
  writeState(root, {
    ...current,
    active: true,
    ultimoPreparo: {
      executadoEm: new Date().toISOString(),
      tarefa: "Hardening inicial do repositório",
      categoria: "security",
      prioridade: "critical",
      confianca: "medium",
      riskLevel: "red",
      approvalRequired: true,
      canAutoExecute: false,
      documentosGerados: []
    },
    riscosDetectados: ["Possível arquivo sensível detectado por nome: .env"]
  });

  run(["resolver"], root);
  const approval = fs.readFileSync(path.join(root, "docs", "resolve-ai", "21-aprovacao-humana.md"), "utf8");
  const prompt = fs.readFileSync(path.join(root, "docs", "resolve-ai", "22-prompt-final-para-agente.md"), "utf8");
  const state = readState(root);

  assert.equal(state.ultimaExecucaoAssistida.risco, "alto");
  assert.match(approval, /risco alto|risco/i);
  assert.match(prompt, /Não faça deploy/);
  assert.match(prompt, /Não exponha segredos/);
});

test("resolver com Resolve Ai desligado nao gera pacote", () => {
  const root = tempProject("resolve-ai-resolver-off-");
  run(["diagnosticar"], root);
  run(["planejar"], root);
  run(["preparar"], root);

  const output = run(["resolver"], root);

  assert.match(output, /Resolve Aí está desligado/);
  assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", "20-execucao-assistida.md")), false);
});

test("resolver preserva docs existentes", () => {
  const root = tempProject("resolve-ai-resolver-existing-docs-");
  activatePreparedProject(root);
  const doc = path.join(root, "docs", "resolve-ai", "20-execucao-assistida.md");
  fs.writeFileSync(doc, "manual", "utf8");

  const output = run(["resolver"], root);

  assert.match(output, /Documentos preservados:/);
  assert.equal(fs.readFileSync(doc, "utf8"), "manual");
  assertResolverDocs(root);
});

test("aliases resolva e fazer funcionam", () => {
  const root = tempProject("resolve-ai-resolver-alias-");
  activatePreparedProject(root);

  assert.match(run(["resolva"], root), /Alias usado: resolva/);
  assert.match(run(["fazer"], root), /Alias usado: fazer/);
});

test("status apos resolver mostra execucao assistida pendente", () => {
  const root = tempProject("resolve-ai-resolver-status-");
  activatePreparedProject(root);
  run(["resolver"], root);

  const status = run(["status"], root);

  assert.match(status, /Execução assistida: pendente/);
  assert.match(status, /Autoexecução: não/);
  assert.match(status, /Eu ainda não mexi no código/);
});

test("resolver nao altera codigo do produto analisado", () => {
  const root = tempProject("resolve-ai-resolver-readonly-");
  const src = path.join(root, "src");
  fs.mkdirSync(src, { recursive: true });
  const productFile = path.join(src, "app.ts");
  fs.writeFileSync(productFile, "export const value = 1;\n", "utf8");
  activatePreparedProject(root);

  run(["resolver"], root);

  assert.equal(fs.readFileSync(productFile, "utf8"), "export const value = 1;\n");
});
