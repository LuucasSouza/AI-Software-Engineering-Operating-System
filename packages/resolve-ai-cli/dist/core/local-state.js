import fs from "node:fs";
import path from "node:path";
import { ensureResolveAiDocs } from "./docs-writer.js";
import { resolveAiPaths } from "./paths.js";
import { detectProjectKind } from "./project-detector.js";

export const SCHEMA_VERSION = "0.1.0";
export const DEFAULT_FLOW = "projeto-em-andamento-diagnostico-e-continuacao";

function now() {
  return new Date().toISOString();
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (cause) {
    throw new Error(`Não consegui ler ${filePath}. Faça backup do arquivo e corrija o JSON antes de continuar.`);
  }
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export function hasStarted(root= process.cwd()) {
  const paths = resolveAiPaths(root);
  return fs.existsSync(paths.runtimeDir) && fs.existsSync(paths.configPath) && fs.existsSync(paths.statePath);
}

export function createDefaultConfig(root= process.cwd()) {
  return {
    schemaVersion: SCHEMA_VERSION,
    projectName: path.basename(root) || null,
    publicName: "Resolve Aí",
    docsPath: "docs/resolve-ai",
    defaultFlow: DEFAULT_FLOW,
    language: "pt-BR",
    createdAt: now()
  };
}

export function createDefaultState(command= "começar") {
  return {
    schemaVersion: SCHEMA_VERSION,
    active: false,
    currentMode: null,
    currentFlow: null,
    lastCommand: command,
    lastUpdatedAt: now()
  };
}

export function readState(root= process.cwd()) {
  return readJson(resolveAiPaths(root).statePath);
}

export function writeState(root, state) {
  writeJson(resolveAiPaths(root).statePath, state);
}

export function beginProject(root= process.cwd()) {
  const paths = resolveAiPaths(root);
  const createdPaths = [];
  const existingPaths = [];

  if (!fs.existsSync(paths.runtimeDir)) {
    fs.mkdirSync(paths.runtimeDir, { recursive: true });
    createdPaths.push(".resolve-ai/");
  } else {
    existingPaths.push(".resolve-ai/");
  }

  if (!fs.existsSync(paths.configPath)) {
    writeJson(paths.configPath, createDefaultConfig(root));
    createdPaths.push(".resolve-ai/config.json");
  } else {
    existingPaths.push(".resolve-ai/config.json");
  }

  if (!fs.existsSync(paths.statePath)) {
    writeJson(paths.statePath, createDefaultState("começar"));
    createdPaths.push(".resolve-ai/state.json");
  } else {
    const state = readState(root);
    writeState(root, {
      ...state,
      lastCommand: "começar",
      lastUpdatedAt: now()
    });
    existingPaths.push(".resolve-ai/state.json");
  }

  const docs = ensureResolveAiDocs(root);
  createdPaths.push(...docs.created);
  existingPaths.push(...docs.existing);

  return {
    initialized: true,
    createdPaths,
    existingPaths,
    legacyDocsFound: fs.existsSync(paths.legacyDocsDir) || detectProjectKind(root) === "legado"
  };
}

export function activate(root= process.cwd()) {
  if (!hasStarted(root)) {
    return { alreadyActive: false };
  }

  const state = readState(root);
  if (state.active) {
    return { alreadyActive: true, state };
  }

  const updated = {
    ...state,
    active: true,
    currentFlow: state.currentFlow ?? DEFAULT_FLOW,
    lastCommand: "ligar",
    lastActivatedAt: now(),
    lastUpdatedAt: now()
  };
  writeState(root, updated);
  return { alreadyActive: false, state: updated };
}

export function deactivate(root= process.cwd()) {
  if (!hasStarted(root)) {
    return { alreadyInactive: false };
  }

  const state = readState(root);
  if (!state.active) {
    return { alreadyInactive: true, state };
  }

  const updated = {
    ...state,
    active: false,
    lastCommand: "desligar",
    lastDeactivatedAt: now(),
    lastUpdatedAt: now()
  };
  writeState(root, updated);
  return { alreadyInactive: false, state: updated };
}
