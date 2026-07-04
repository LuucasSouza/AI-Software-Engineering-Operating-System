import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { beginProject, readState, activate, deactivate } from "../dist/core/local-state.js";

function tempProject() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "resolve-ai-local-state-"));
}

test("beginProject cria config, state e docs sem sobrescrever", () => {
  const root = tempProject();
  const first = beginProject(root);
  const state = readState(root);

  assert.equal(first.initialized, true);
  assert.equal(state.active, false);
  assert.equal(fs.existsSync(path.join(root, ".resolve-ai", "config.json")), true);
  assert.equal(fs.existsSync(path.join(root, ".resolve-ai", "state.json")), true);
  assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", "README.md")), true);
  assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", "00-project-intake.md")), true);
  assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", "09-handoff.md")), true);

  const intake = path.join(root, "docs", "resolve-ai", "00-project-intake.md");
  fs.writeFileSync(intake, "conteudo preservado", "utf8");
  const second = beginProject(root);

  assert.equal(second.existingPaths.includes("docs/resolve-ai/00-project-intake.md"), true);
  assert.equal(fs.readFileSync(intake, "utf8"), "conteudo preservado");
});

test("activate e deactivate persistem Modo Liga/Desliga", () => {
  const root = tempProject();
  beginProject(root);

  const activated = activate(root);
  assert.equal(activated.state?.active, true);
  assert.equal(readState(root).active, true);

  const activeAgain = activate(root);
  assert.equal(activeAgain.alreadyActive, true);

  const deactivated = deactivate(root);
  assert.equal(deactivated.state?.active, false);
  assert.equal(readState(root).active, false);

  const inactiveAgain = deactivate(root);
  assert.equal(inactiveAgain.alreadyInactive, true);
});
