---
title: "Reflection Lifecycle"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Reflection Maintainers"
last_updated: "2026-07-03"
document_type: "Lifecycle"
source: "bootstrap-source/pt48_REFLECTION_ENGINE.md"
---

# Reflection Lifecycle

## Objetivo

Definir como uma revisão evolui de trigger até aprendizado validado.

## Fluxo

```mermaid
stateDiagram-v2
    [*] --> Triggered
    Triggered --> EvidenceCollection
    EvidenceCollection --> Analysis
    Analysis --> Findings
    Findings --> Recommendations
    Recommendations --> ImprovementBacklog
    ImprovementBacklog --> Accepted
    ImprovementBacklog --> Rejected
    Accepted --> Implemented
    Implemented --> Validated
    Validated --> [*]
```

## Triggers

Fim de sprint, ADR relevante, mudança arquitetural, release candidate, incidente, handoff rejeitado, drift documental ou quality gate falho.
