export type ResolveAiStatus = "ligado" | "desligado";

export interface ResolveAiConfig {
  schemaVersion: string;
  projectName: string | null;
  publicName: "Resolve Aí";
  docsPath: "docs/resolve-ai";
  defaultFlow: "projeto-em-andamento-diagnostico-e-continuacao";
  language: "pt-BR";
  createdAt: string;
}

export interface ResolveAiState {
  schemaVersion: string;
  active: boolean;
  currentMode: string | null;
  currentFlow: string | null;
  lastCommand: string;
  lastActivatedAt?: string;
  lastDeactivatedAt?: string;
  lastUpdatedAt: string;
}

export interface InitResult {
  initialized: boolean;
  createdPaths: string[];
  existingPaths: string[];
  legacyDocsFound: boolean;
}
