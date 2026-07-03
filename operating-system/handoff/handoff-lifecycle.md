---
title: "Handoff Lifecycle"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Handoff Maintainers"
last_updated: "2026-07-03"
document_type: "Lifecycle"
source: "bootstrap-source/pt46_HANDOFF_ENGINE.md"
---

# Handoff Lifecycle

## Objetivo

Definir estados de transferência de responsabilidade.

## Fluxo

```mermaid
stateDiagram-v2
    [*] --> Requested
    Requested --> Prepared
    Prepared --> Validated
    Validated --> Accepted
    Accepted --> Executed
    Executed --> FeedbackCaptured
    FeedbackCaptured --> Closed
    Validated --> Rejected: incomplete context
    Rejected --> Prepared
```

## Regras

- Handoff rejeitado volta para prepared com gaps explícitos.
- Handoff aceito deve registrar receiver acknowledgement.
- Feedback capturado alimenta Reflection Engine.
