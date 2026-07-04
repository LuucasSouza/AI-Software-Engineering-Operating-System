
  projectName: string | null;
  publicName: "Resolve Aí";
  docsPath: "docs/resolve-ai";
  defaultFlow: "projeto-em-andamento-diagnostico-e-continuacao";
  language: "pt-BR";
  createdAt: string;
}

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

  createdPaths: string[];
  existingPaths: string[];
  legacyDocsFound: boolean;
}


  confidence: DiagnosticConfidence;
  evidence: string[];
}

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

  createdDocs: string[];
  preservedDocs: string[];
  legacyDocsFound: boolean;
}

  recommendedMode: string;
  detectedStack: string[];
  risks: string[];
  existingDocs: string[];
  hasDiagnosis: boolean;
  confidence: "baixa" | "media" | "alta";
}

  nextRecommendedAction: string;
  milestones: string[];
  backlogItems: string[];
  executionPrompts: string[];
  validationChecklist: string[];
  hasCriticalRisk: boolean;
}

  tarefa: string;
  categoria: string;
  prioridade: string;
  confianca: string;
  riskLevel: "green" | "yellow" | "orange" | "red";
  approvalRequired: true;
  canAutoExecute: false;
  documentosGerados: string[];
}

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


  status: "pendente";
  tarefa: string;
  risco: AssistedExecutionRisk;
  canAutoExecute: false;
  proximoPasso: string;
  docsGerados: string[];
}

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


  status: ValidationStatus;
  confianca: ValidationConfidence;
  mudancasDetectadas: number;
  arquivosAlterados: string[];
  arquivosSensiveisDetectados: string[];
  riscosRestantes: string[];
  proximaAcao: string;
}

  gitAvailable: boolean;
  changeCategories: Record<string, string[]>;
  possibleOutOfScope: string[];
  evidence: string[];
  notValidated: string[];
  docsReference: string[];
}
