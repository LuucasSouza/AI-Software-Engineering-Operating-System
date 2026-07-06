import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const cli = path.resolve("dist", "index.js");
const validationDocs = [
  "25-relatorio-de-validacao.md",
  "26-mudancas-detectadas.md",
  "27-checklist-pos-execucao.md",
  "28-riscos-pos-execucao.md",
  "29-handoff-pos-validacao.md"
];

function tempProject(prefix = "resolve-ai-validar-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function run(args, cwd) {
  return execFileSync(process.execPath, [cli, ...args], { cwd, encoding: "utf8" });
}

function readState(root) {
  return JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));
}

function assertValidationDocs(root) {
  for (const file of validationDocs) {
    assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", file)), true, file);
  }
}

function preparedResolvedProject(root) {
  run(["diagnosticar"], root);
  run(["planejar"], root);
  run(["preparar"], root);
  run(["ligar"], root);
  run(["resolver"], root);
}

test("validar em diretorio vazio recomenda ligar e nao gera docs", () => {
  const root = tempProject("resolve-ai-validar-empty-");
  const output = run(["validar"], root);
  const state = readState(root);

  assert.match(output, /Resolve Aí está desligado/);
  assert.equal(state.ultimaValidacao, undefined);
  assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", "25-relatorio-de-validacao.md")), false);
});

test("validar com Resolve Ai desligado nao atualiza ultimaValidacao", () => {
  const root = tempProject("resolve-ai-validar-off-");
  run(["começar"], root);

  const output = run(["validar"], root);
  const state = readState(root);

  assert.match(output, /resolve-ai ligar/);
  assert.equal(state.ultimaValidacao, undefined);
});

test("validar com execucao assistida existente gera docs 25 a 29", () => {
  const root = tempProject("resolve-ai-validar-assisted-");
  preparedResolvedProject(root);
  fs.mkdirSync(path.join(root, "src"), { recursive: true });
  fs.writeFileSync(path.join(root, "src", "app.ts"), "export const value = 2;\n", "utf8");

  const output = run(["validar"], root);
  const state = readState(root);

  assert.match(output, /Validação concluída/);
  assert.equal(state.ultimaValidacao.mudancasDetectadas >= 0, true);
  assertValidationDocs(root);
});

test("validar detecta mudancas Git", () => {
  const root = tempProject("resolve-ai-validar-git-");
  execFileSync("git", ["init"], { cwd: root, stdio: "ignore" });
  preparedResolvedProject(root);
  fs.mkdirSync(path.join(root, "src"), { recursive: true });
  fs.writeFileSync(path.join(root, "src", "app.ts"), "export const value = 1;\n", "utf8");

  run(["validar"], root);
  const changes = fs.readFileSync(path.join(root, "docs", "resolve-ai", "26-mudancas-detectadas.md"), "utf8");
  const state = readState(root);

  assert.match(changes, /src\/app.ts/);
  assert.equal(state.ultimaValidacao.arquivosAlterados.includes("src/app.ts"), true);
});

test("validar sem Git explica limite de comparacao", () => {
  const root = tempProject("resolve-ai-validar-no-git-");
  preparedResolvedProject(root);

  const output = run(["validar"], root);
  const report = fs.readFileSync(path.join(root, "docs", "resolve-ai", "25-relatorio-de-validacao.md"), "utf8");
  const changes = fs.readFileSync(path.join(root, "docs", "resolve-ai", "26-mudancas-detectadas.md"), "utf8");
  const state = readState(root);

  assert.match(output, /Não encontrei um repositório Git aqui/);
  assert.match(output, /rode git init ou execute dentro de um repositório Git/);
  assert.doesNotMatch(output, /^Resolve Aí — validação guiada\n\n\n/);
  assert.match(report, /Não encontrei um repositório Git aqui/);
  assert.match(changes, /Git metadata indisponível/);
  assert.equal(state.ultimaValidacao.confianca, "baixa");
});

test("validar bloqueia arquivo sensivel por nome sem copiar conteudo", () => {
  const root = tempProject("resolve-ai-validar-sensitive-");
  preparedResolvedProject(root);
  fs.writeFileSync(path.join(root, ".env"), "SECRET_TOKEN=real-value-that-must-not-appear\n", "utf8");

  run(["validar"], root);
  const risk = fs.readFileSync(path.join(root, "docs", "resolve-ai", "28-riscos-pos-execucao.md"), "utf8");
  const state = readState(root);

  assert.equal(state.ultimaValidacao.status, "bloqueada");
  assert.equal(state.ultimaValidacao.arquivosSensiveisDetectados.includes(".env"), true);
  assert.doesNotMatch(risk, /real-value-that-must-not-appear/);
});

test("validar preserva docs existentes", () => {
  const root = tempProject("resolve-ai-validar-existing-docs-");
  preparedResolvedProject(root);
  const doc = path.join(root, "docs", "resolve-ai", "25-relatorio-de-validacao.md");
  fs.writeFileSync(doc, "manual", "utf8");

  const output = run(["validar"], root);

  assert.match(output, /Documentos preservados:/);
  assert.equal(fs.readFileSync(doc, "utf8"), "manual");
  assertValidationDocs(root);
});

test("validar sem pacote de execucao anterior gera validacao limitada", () => {
  const root = tempProject("resolve-ai-validar-no-package-");
  run(["começar"], root);
  run(["ligar"], root);

  const output = run(["validar"], root);
  const report = fs.readFileSync(path.join(root, "docs", "resolve-ai", "25-relatorio-de-validacao.md"), "utf8");

  assert.match(output, /Não encontrei uma execução assistida anterior/);
  assert.match(report, /confiança baixa|confiança baixa/i);
});

test("aliases valida e revisar funcionam", () => {
  const root = tempProject("resolve-ai-validar-alias-");
  preparedResolvedProject(root);

  assert.match(run(["valida"], root), /Alias usado: valida/);
  assert.match(run(["revisar"], root), /Alias usado: revisar/);
});

test("status apos validar mostra resumo da ultima validacao", () => {
  const root = tempProject("resolve-ai-validar-status-");
  preparedResolvedProject(root);
  run(["validar"], root);

  const status = run(["status"], root);

  assert.match(status, /Última validação:/);
  assert.match(status, /Mudanças detectadas:/);
  assert.match(status, /Próxima ação:/);
});

test("validar nao altera codigo do produto analisado", () => {
  const root = tempProject("resolve-ai-validar-readonly-");
  preparedResolvedProject(root);
  const src = path.join(root, "src");
  fs.mkdirSync(src, { recursive: true });
  const productFile = path.join(src, "app.ts");
  fs.writeFileSync(productFile, "export const value = 1;\n", "utf8");

  run(["validar"], root);

  assert.equal(fs.readFileSync(productFile, "utf8"), "export const value = 1;\n");
});
