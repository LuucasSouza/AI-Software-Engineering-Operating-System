import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const cli = path.resolve("dist", "index.js");

function tempProject(prefix = "resolve-ai-command-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function run(command, cwd) {
  return execFileSync(process.execPath, [cli, command], {
    cwd,
    encoding: "utf8"
  });
}

test("ajuda mostra comandos principais", () => {
  const output = execFileSync(process.execPath, [cli, "ajuda"], {
    cwd: path.resolve("."),
    encoding: "utf8"
  });

  assert.match(output, /Resolve Aí/);
  assert.match(output, /resolve-ai começar/);
  assert.match(output, /resolve-ai ligar/);
});

test("status antes e depois de começar", () => {
  const root = tempProject();

  assert.match(run("status", root), /ainda não começou/);
  assert.match(run("começar", root), /Resolve Aí começou/);
  assert.match(run("status", root), /preparado, mas desligado/);
});

test("alias comecar cria estrutura", () => {
  const root = tempProject();

  assert.match(run("comecar", root), /Resolve Aí começou/);
  assert.equal(fs.existsSync(path.join(root, ".resolve-ai", "config.json")), true);
  assert.equal(fs.existsSync(path.join(root, ".resolve-ai", "state.json")), true);
  assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", "README.md")), true);
});

test("ligar e desligar atualizam estado persistente", () => {
  const root = tempProject();
  run("começar", root);

  assert.match(run("ligar", root), /Resolve Aí ligado/);
  const stateOn = JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));
  assert.equal(stateOn.active, true);

  assert.match(run("desligar", root), /Resolve Aí desligado/);
  const stateOff = JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));
  assert.equal(stateOff.active, false);
});

test("comandos sao idempotentes", () => {
  const root = tempProject();
  run("começar", root);

  const intake = path.join(root, "docs", "resolve-ai", "00-project-intake.md");
  fs.writeFileSync(intake, "nao sobrescrever", "utf8");

  assert.match(run("começar", root), /Mantive tudo como está/);
  assert.equal(fs.readFileSync(intake, "utf8"), "nao sobrescrever");

  run("ligar", root);
  assert.match(run("ligar", root), /já estava ligado/);
  run("desligar", root);
  assert.match(run("desligar", root), /já estava desligado/);
});

test("docs ai-seos legado nao sofre migracao automatica", () => {
  const root = tempProject("resolve-ai-legacy-command-");
  fs.mkdirSync(path.join(root, "docs", "ai-seos"), { recursive: true });
  fs.writeFileSync(path.join(root, "docs", "ai-seos", "README.md"), "legado", "utf8");

  const output = run("começar", root);

  assert.match(output, /docs\/ai-seos/);
  assert.equal(fs.readFileSync(path.join(root, "docs", "ai-seos", "README.md"), "utf8"), "legado");
  assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", "README.md")), true);
});
