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
  ultimoComando?: string;
  ultimoDiagnosticoEm?: string;
  modoRecomendado?: string;
  fluxoRecomendado?: string;
  tipoProjeto?: string;
  stackDetectada?: string[];
  stackDetalhada?: DetectedStackItem[];
  riscosDetectados?: string[];
  maturidade?: number;
  proximaAcao?: string;
  documentosGerados?: string[];
  lastPlanAt?: string;
  lastPlanSummary?: string;
  planningDocuments?: string[];
  nextRecommendedAction?: string;
  planningConfidence?: "baixa" | "media" | "alta";
  ultimoPreparo?: PreparedTaskState;
  ultimaExecucaoAssistida?: AssistedExecutionState;
  ultimaValidacao?: ValidationState;
}

export interface InitResult {
  initialized: boolean;
  createdPaths: string[];
  existingPaths: string[];
  legacyDocsFound: boolean;
}

export type DiagnosticProjectType = "novo" | "em-andamento" | "legado" | "indeterminado";
export type DiagnosticConfidence = "baixa" | "media" | "alta";

export interface DetectedStackItem {
  name: string;
  confidence: DiagnosticConfidence;
  evidence: string[];
}

export interface ProjectDetection {
  projectType: DiagnosticProjectType;
  recommendedFlow: string;
  recommendedMode: string;
  stack: string[];
  stackDetails: DetectedStackItem[];
  signals: string[];
  risks: string[];
  strengths: string[];
  attentionPoints: string[];
  mainAction: string;
  maturity: number;
  confidence: DiagnosticConfidence;
  generatedAt: string;
}

export interface DiagnosticResult {
  detection: ProjectDetection;
  createdDocs: string[];
  preservedDocs: string[];
  legacyDocsFound: boolean;
}

export interface PlanningInput {
  projectType: string;
  recommendedMode: string;
  detectedStack: string[];
  risks: string[];
  existingDocs: string[];
  hasDiagnosis: boolean;
  confidence: "baixa" | "media" | "alta";
}

export interface PlanningOutput {
  summary: string;
  nextRecommendedAction: string;
  milestones: string[];
  backlogItems: string[];
  executionPrompts: string[];
  validationChecklist: string[];
  hasCriticalRisk: boolean;
}

export interface PreparedTaskState {
  executadoEm: string;
  tarefa: string;
  categoria: string;
  prioridade: string;
  confianca: string;
  riskLevel: "green" | "yellow" | "orange" | "red";
  approvalRequired: true;
  canAutoExecute: false;
  documentosGerados: string[];
}

export interface PreparedTask {
  id: string;
  title: string;
  source: "risk" | "backlog" | "plan" | "validation" | "documentation" | "fallback";
  priority: "critical" | "high" | "medium" | "low";
  confidence: "high" | "medium" | "low";
  category: "security" | "tests" | "documentation" | "validation" | "bugfix" | "feature" | "refactor" | "release";
  riskLevel: "green" | "yellow" | "orange" | "red";
  scope: string[];
  outOfScope: string[];
  likelyFiles: string[];
  validation: string[];
  risks: string[];
  stopConditions: string[];
  reason: string;
}

export type AssistedExecutionRisk = "baixo" | "medio" | "alto" | "bloqueada";

export interface AssistedExecutionState {
  criadaEm: string;
  status: "pendente";
  tarefa: string;
  risco: AssistedExecutionRisk;
  canAutoExecute: false;
  proximoPasso: string;
  docsGerados: string[];
}

export interface AssistedExecutionPackage {
  taskTitle: string;
  risk: AssistedExecutionRisk;
  confidence: "baixa" | "media" | "alta";
  hasPreparedTask: boolean;
  canAutoExecute: false;
  scope: string[];
  outOfScope: string[];
  references: string[];
  restrictions: string[];
  validation: string[];
  risks: string[];
  stopCriteria: string[];
  nextStep: string;
}

export type ValidationStatus = "pendente" | "parcial" | "aprovada-com-ressalvas" | "bloqueada";
export type ValidationConfidence = "baixa" | "media" | "alta" | "bloqueada";

export interface ValidationState {
  executadaEm: string;
  status: ValidationStatus;
  confianca: ValidationConfidence;
  mudancasDetectadas: number;
  arquivosAlterados: string[];
  arquivosSensiveisDetectados: string[];
  riscosRestantes: string[];
  proximaAcao: string;
}

export interface ValidationResult extends ValidationState {
  hasAssistedExecution: boolean;
  gitAvailable: boolean;
  changeCategories: Record<string, string[]>;
  possibleOutOfScope: string[];
  evidence: string[];
  notValidated: string[];
  docsReference: string[];
}
