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

function readState(root) {
  return JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));
}

function writeState(root, state) {
  fs.writeFileSync(path.join(root, ".resolve-ai", "state.json"), JSON.stringify(state, null, 2), "utf8");
}

test("ajuda mostra comandos principais", () => {
  const output = execFileSync(process.execPath, [cli, "ajuda"], {
    cwd: path.resolve("."),
    encoding: "utf8"
  });

  assert.match(output, /Resolve Aí/);
  assert.match(output, /resolve-ai começar/);
  assert.match(output, /resolve-ai entrevistar/);
  assert.match(output, /resolve-ai ligar/);
  assert.match(output, /Fluxo recomendado:/);
  assert.match(output, /npm link/);
  assert.match(output, /Fallback via Node/);
});

test("documentacao recomenda npm link no Windows dentro do pacote", () => {
  const install = fs.readFileSync(path.resolve("..", "..", "docs", "getting-started", "install-local-cli.md"), "utf8");
  const quickstart = fs.readFileSync(path.resolve("..", "..", "docs", "getting-started", "quickstart-alpha.md"), "utf8");

  assert.match(install, /cd packages\/resolve-ai-cli[\s\S]*npm link/);
  assert.match(install, /node packages\/resolve-ai-cli\/dist\/index\.js ajuda/);
  assert.match(quickstart, /cd packages\/resolve-ai-cli[\s\S]*npm link/);
});

test("status mostra uma proxima acao prioritaria pela etapa mais recente", () => {
  const root = tempProject("resolve-ai-status-priority-");
  run("começar", root);
  const state = readState(root);
  writeState(root, {
    ...state,
    active: true,
    proximaAcao: "acao antiga do diagnostico",
    nextRecommendedAction: "acao do plano",
    ultimoPreparo: {
      executadoEm: new Date().toISOString(),
      tarefa: "Tarefa preparada",
      categoria: "feature",
      prioridade: "high",
      confianca: "high",
      riskLevel: "yellow",
      approvalRequired: true,
      canAutoExecute: false,
      documentosGerados: []
    },
    ultimaExecucaoAssistida: {
      criadaEm: new Date().toISOString(),
      status: "pendente",
      tarefa: "Tarefa preparada",
      risco: "medio",
      canAutoExecute: false,
      proximoPasso: "acao da execucao assistida",
      docsGerados: []
    },
    ultimaValidacao: {
      executadaEm: new Date().toISOString(),
      status: "pendente",
      confianca: "baixa",
      mudancasDetectadas: 0,
      arquivosAlterados: [],
      arquivosSensiveisDetectados: [],
      riscosRestantes: [],
      proximaAcao: "acao da validacao"
    }
  });

  const output = run("status", root);

  assert.match(output, /Próxima ação prioritária:/);
  assert.match(output, /Use o prompt final no seu agente de IA/);
  assert.doesNotMatch(output, /Próxima ação prioritária: acao antiga do diagnostico/);
  assert.doesNotMatch(output, /Próxima ação prioritária:\nacao antiga do diagnostico/);
});

test("status com validacao bloqueada prioriza revisar arquivos sensiveis", () => {
  const root = tempProject("resolve-ai-status-blocked-");
  run("começar", root);
  const state = readState(root);
  writeState(root, {
    ...state,
    active: true,
    ultimaValidacao: {
      executadaEm: new Date().toISOString(),
      status: "bloqueada",
      confianca: "bloqueada",
      mudancasDetectadas: 1,
      arquivosAlterados: [".env"],
      arquivosSensiveisDetectados: [".env"],
      riscosRestantes: [],
      proximaAcao: "Pare antes de commitar."
    }
  });

  const output = run("status", root);

  assert.match(output, /Pare e revise os arquivos sensíveis detectados/);
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
