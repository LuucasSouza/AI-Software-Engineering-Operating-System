import fs from "node:fs";
import path from "node:path";
import { ensureResolveAiDocs } from "./docs-writer.js";
import { resolveAiPaths } from "./paths.js";
import { detectProjectKind } from "./project-detector.js";
import type { InitResult, ResolveAiConfig, ResolveAiState } from "../types/runtime.js";

export const SCHEMA_VERSION = "0.1.0";
export const DEFAULT_FLOW = "projeto-em-andamento-diagnostico-e-continuacao";

function now(): string {
  return new Date().toISOString();
}

function readJson<T>(filePath: string): T {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
  } catch (cause) {
    throw new Error(`Não consegui ler ${filePath}. Faça backup do arquivo e corrija o JSON antes de continuar.`);
  }
}

function writeJson(filePath: string, value: unknown): void {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export function hasStarted(root: string = process.cwd()): boolean {
  const paths = resolveAiPaths(root);
  return fs.existsSync(paths.runtimeDir) && fs.existsSync(paths.configPath) && fs.existsSync(paths.statePath);
}

export function createDefaultConfig(root: string = process.cwd()): ResolveAiConfig {
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

export function createDefaultState(command: string = "começar"): ResolveAiState {
  return {
    schemaVersion: SCHEMA_VERSION,
    active: false,
    currentMode: null,
    currentFlow: null,
    lastCommand: command,
    lastUpdatedAt: now()
  };
}

export function readState(root: string = process.cwd()): ResolveAiState {
  return readJson<ResolveAiState>(resolveAiPaths(root).statePath);
}

export function writeState(root: string, state: ResolveAiState): void {
  writeJson(resolveAiPaths(root).statePath, state);
}

export function beginProject(root: string = process.cwd()): InitResult {
  const paths = resolveAiPaths(root);
  const createdPaths: string[] = [];
  const existingPaths: string[] = [];

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

export function activate(root: string = process.cwd()): { alreadyActive: boolean; state?: ResolveAiState } {
  if (!hasStarted(root)) {
    return { alreadyActive: false };
  }

  const state = readState(root);
  if (state.active) {
    return { alreadyActive: true, state };
  }

  const updated: ResolveAiState = {
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

export function deactivate(root: string = process.cwd()): { alreadyInactive: boolean; state?: ResolveAiState } {
  if (!hasStarted(root)) {
    return { alreadyInactive: false };
  }

  const state = readState(root);
  if (!state.active) {
    return { alreadyInactive: true, state };
  }

  const updated: ResolveAiState = {
    ...state,
    active: false,
    lastCommand: "desligar",
    lastDeactivatedAt: now(),
    lastUpdatedAt: now()
  };
  writeState(root, updated);
  return { alreadyInactive: false, state: updated };
}
