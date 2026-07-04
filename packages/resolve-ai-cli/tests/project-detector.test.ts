import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { detectProjectKind } from "../dist/core/project-detector.js";

function tempProject(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

test("detecta projeto novo em diretorio vazio", () => {
  const root = tempProject("resolve-ai-empty-");
  assert.equal(detectProjectKind(root), "novo");
});

test("detecta projeto em andamento por package.json", () => {
  const root = tempProject("resolve-ai-existing-");
  fs.writeFileSync(path.join(root, "package.json"), "{\"name\":\"app\"}\n", "utf8");
  assert.equal(detectProjectKind(root), "em-andamento");
});

test("detecta docs/ai-seos como legado sem migrar", () => {
  const root = tempProject("resolve-ai-legacy-");
  fs.mkdirSync(path.join(root, "docs", "ai-seos"), { recursive: true });
  fs.writeFileSync(path.join(root, "docs", "ai-seos", "README.md"), "legado", "utf8");
  assert.equal(detectProjectKind(root), "legado");
  assert.equal(fs.existsSync(path.join(root, "docs", "ai-seos", "README.md")), true);
});
