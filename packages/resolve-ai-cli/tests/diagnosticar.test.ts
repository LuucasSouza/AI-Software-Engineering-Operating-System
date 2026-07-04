import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const cli = path.resolve("dist", "index.js");
const diagnosticDocs = [
  "00-project-intake.md",
  "01-current-state-assessment.md",
  "02-discovery.md",
  "03-product-definition.md",
  "04-architecture-review.md",
  "05-risk-register.md",
  "06-decision-log.md",
  "07-execution-plan.md",
  "08-backlog.md",
  "09-handoff.md"
];

function tempProject(prefix = "resolve-ai-diagnostic-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function run(args, cwd) {
  return execFileSync(process.execPath, [cli, ...args], {
    cwd,
    encoding: "utf8"
  });
}

function assertDiagnosticDocs(root) {
  for (const file of diagnosticDocs) {
    assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", file)), true, file);
  }
}

test("diagnosticar em diretorio vazio cria docs 00 a 09", () => {
  const root = tempProject("resolve-ai-empty-diagnostic-");
  const output = run(["diagnosticar"], root);

  assert.match(output, /Diagnóstico concluído/);
  assert.match(output, /Tipo de projeto: novo/);
  assertDiagnosticDocs(root);
});

test("diagnostico alias funciona em projeto Node fake", () => {
  const root = tempProject("resolve-ai-node-diagnostic-");
  fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({ scripts: { start: "node index.js" }, dependencies: {} }), "utf8");
  fs.writeFileSync(path.join(root, "README.md"), "# App\n", "utf8");

  const output = run(["diagnostico"], root);
  const state = JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));

  assert.match(output, /Node.js/);
  assert.equal(state.ultimoComando, "diagnosticar");
  assert.equal(state.tipoProjeto, "em-andamento");
});

test("diagnóstico alias detecta Vite React TypeScript fake", () => {
  const root = tempProject("resolve-ai-vite-diagnostic-");
  fs.mkdirSync(path.join(root, "src"));
  fs.mkdirSync(path.join(root, ".github", "workflows"), { recursive: true });
  fs.writeFileSync(path.join(root, "README.md"), "# App\n", "utf8");
  fs.writeFileSync(path.join(root, "tsconfig.json"), "{}", "utf8");
  fs.writeFileSync(path.join(root, "vite.config.ts"), "export default {}", "utf8");
  fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({
    scripts: { test: "vitest" },
    dependencies: { react: "latest", vite: "latest" },
    devDependencies: { typescript: "latest" }
  }), "utf8");

  const output = run(["diagnóstico"], root);

  assert.match(output, /React/);
  assert.match(output, /Vite/);
  assert.match(output, /TypeScript/);
  assert.match(output, /Professional Engineer/);
});

test("diagnosticar preserva arquivos existentes em docs/resolve-ai", () => {
  const root = tempProject("resolve-ai-existing-docs-");
  const intake = path.join(root, "docs", "resolve-ai", "00-project-intake.md");
  fs.mkdirSync(path.dirname(intake), { recursive: true });
  fs.writeFileSync(intake, "conteudo manual", "utf8");

  const output = run(["diagnosticar"], root);

  assert.match(output, /Documentos preservados:/);
  assert.equal(fs.readFileSync(intake, "utf8"), "conteudo manual");
  assertDiagnosticDocs(root);
});

test("diagnosticar com docs ai-seos legado nao migra automaticamente", () => {
  const root = tempProject("resolve-ai-legacy-diagnostic-");
  fs.mkdirSync(path.join(root, "docs", "ai-seos"), { recursive: true });
  fs.writeFileSync(path.join(root, "docs", "ai-seos", "README.md"), "legado", "utf8");

  const output = run(["diagnosticar"], root);

  assert.match(output, /docs\/ai-seos/);
  assert.equal(fs.readFileSync(path.join(root, "docs", "ai-seos", "README.md"), "utf8"), "legado");
  assertDiagnosticDocs(root);
});

test("diagnosticar detecta arquivos sensiveis por nome sem copiar conteudo", () => {
  const root = tempProject("resolve-ai-sensitive-diagnostic-");
  fs.writeFileSync(path.join(root, ".env"), "SECRET_TOKEN=nao-copiar", "utf8");
  fs.mkdirSync(path.join(root, "backup"), { recursive: true });
  fs.writeFileSync(path.join(root, "backup", "users.csv"), "email,senha\nx,y", "utf8");

  run(["diagnosticar"], root);
  const risk = fs.readFileSync(path.join(root, "docs", "resolve-ai", "05-risk-register.md"), "utf8");

  assert.match(risk, /\.env/);
  assert.match(risk, /backup\/users.csv/);
  assert.doesNotMatch(risk, /SECRET_TOKEN=nao-copiar/);
  assert.doesNotMatch(risk, /email,senha/);
});

test("diagnosticar e idempotente e status mostra ultimo diagnostico", () => {
  const root = tempProject("resolve-ai-idempotent-diagnostic-");
  run(["diagnosticar"], root);
  const handoff = path.join(root, "docs", "resolve-ai", "09-handoff.md");
  fs.writeFileSync(handoff, "handoff preservado", "utf8");

  run(["diagnosticar"], root);
  const status = run(["status"], root);

  assert.equal(fs.readFileSync(handoff, "utf8"), "handoff preservado");
  assert.match(status, /Último diagnóstico:/);
  assert.match(status, /Modo recomendado:/);
  const state = JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));
  assert.equal(state.tipoProjeto, "novo");
});
