#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cli = path.join(packageRoot, "dist", "index.js");

function run(args, cwd) {
  return execFileSync(process.execPath, [cli, ...args], { cwd, encoding: "utf8" });
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function smokeEmptyProject() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "resolve-ai-smoke-empty-"));
  try {
    assert(run(["ajuda"], root).includes("Resolve Aí"), "ajuda não retornou cabeçalho esperado");
    run(["começar"], root);
    run(["ligar"], root);
    run(["diagnosticar"], root);
    run(["planejar"], root);
    run(["preparar"], root);
    run(["resolver"], root);
    run(["validar"], root);
    const status = run(["status"], root);
    assert(status.includes("Resolve Aí está ligado"), "status não indicou modo ligado");
    assert(fs.existsSync(path.join(root, ".resolve-ai", "config.json")), "config.json não criado");
    assert(fs.existsSync(path.join(root, "docs", "resolve-ai", "29-handoff-pos-validacao.md")), "docs 25-29 não criados");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

function smokeNodeProject() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "resolve-ai-smoke-node-"));
  try {
    fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({ scripts: { test: "node --test" } }, null, 2), "utf8");
    fs.mkdirSync(path.join(root, "src"), { recursive: true });
    fs.writeFileSync(path.join(root, "src", "app.js"), "export const value = 1;\n", "utf8");
    run(["começar"], root);
    run(["ligar"], root);
    run(["diagnosticar"], root);
    const status = run(["status"], root);
    assert(status.includes("Último diagnóstico"), "diagnóstico não apareceu no status do projeto Node fake");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

smokeEmptyProject();
smokeNodeProject();
console.log("Smoke test concluído com sucesso.");
