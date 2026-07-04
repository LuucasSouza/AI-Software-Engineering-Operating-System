---
title: "Entry Modes Layer Overview"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Maintainers"
last_updated: "2026-07-03"
document_type: "Layer Overview"
source: "bootstrap-source/pt62_ENTRY_MODES_LAYER.md"
---

# Entry Modes Layer Overview

## Objetivo

Classificar o usuário, adaptar linguagem e profundidade, e preparar um Discovery Intake Package consumível pelo Discovery Engine.

## Posição no Lifecycle

```mermaid
flowchart TD
    A[Raw User Idea] --> B[Entry Modes Layer]
    B --> C[Mode Router]
    C --> D[Mode-Specific Interview]
    D --> E[Problem-to-Software Translation]
    E --> F[Discovery Intake Package]
    F --> G[Discovery Engine]
```

## Responsabilidades

- Identificar maturidade técnica.
- Selecionar modo apropriado.
- Adaptar vocabulário.
- Evitar decisões técnicas prematuras.
- Traduzir problemas reais em conceitos de software.
- Produzir Discovery Intake Package.

## Não Responsabilidades

Não finaliza arquitetura, stack, PRD, ADRs ou código.

## Quality Gates

- Intent is clear enough to start Discovery.
- Mode is recorded.
- Assumptions are separated from facts.
- Real-world language is translated.
- No final architecture decision is made prematurely.
