---
title: "AI-SEOS - Protocols"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Protocol Maintainers"
last_updated: "2026-07-03"
document_type: "Module Overview"
---

# Protocols

## Objetivo

Definir processos executáveis, repetíveis e auditáveis para o ciclo de vida do AI-SEOS.

## Escopo

Inclui protocolos de início de projeto, discovery, ADR, revisão arquitetural, handoff, testes, release, incidentes e retrospectivas.

## Princípios

- Protocolos devem ser executáveis por humanos e agentes.
- Cada protocolo deve possuir entradas, fluxo, saídas e quality gates.
- Protocolos devem reduzir improviso.

## Responsabilidades

Protocol Maintainers garantem consistência com `DEVELOPMENT_PROTOCOL.md`.

## Próximos passos

- Sprint 1 criou `project-discovery/`.
- Sprint 2 adicionou protocolos para Product e Architecture.
- Sprint 3 adicionou protocolos para Decision, Risk e Optimization.
- Sprint 4 adicionou protocolos para Execution, Documentation, Handoff e Reflection.
- Sprint 5 adicionou protocolos cross-engine e agent collaboration.
- Sprint 5.5 adicionou Builder Intake e Mode Router.
- Sprint 6 adicionou Template Maintenance Protocol.
- Sprint 7 consolidou protocol system, lifecycle, registry e taxonomy.
- Phase 2 adicionou protocolos de repository audit, end-to-end validation, user validation e feedback triage.

## Protocolos disponíveis

- `project-discovery/`: protocolo executável de discovery.

## Sprint 2

- `product-definition/`: discovery-to-PRD e PRD review.
- `architecture-review/`: architecture decision protocol e review checklist.

## Sprint 3

- `decision-review/`: ADR decision protocol e revisão estruturada de decisões.
- `risk-assessment/`: assessment, aceitação e revisão de riscos.
- `optimization-review/`: revisão de custo, complexidade, escalabilidade e custo de AI.

## Sprint 4

- `execution-planning/`: execution planning, delivery control e release candidate.
- `documentation-maintenance/`: revisão e manutenção documental.
- `handoff/`: universal handoff, agent handoff e phase handoff.
- `reflection-review/`: reflection review protocol.

## Sprint 5

- `cross-engine-integration/`: cross-engine handoff protocol.
- `agent-collaboration/`: agent collaboration protocol.

## Sprint 5.5

- `builder-intake/`: protocolo de intake antes do Discovery Engine.
- `mode-router/`: protocolo de seleção e inferência de modo.

## Sprint 6

- `template-maintenance/`: protocolo de revisão, versionamento, depreciação e sincronização de templates.

## Sprint 7

- `docs/protocols/`: sistema público de protocolos, lifecycle, registry e taxonomy.
- `templates/protocols/`: templates para criação e revisão de protocolos.

## Phase 2

- `repository-audit/`: protocolo de auditoria antes de release alpha.
- `end-to-end-validation/`: protocolo para validar o lifecycle completo.
- `user-validation/`: protocolos de validação por perfil.
- `feedback/`: protocolo de triagem de feedback e melhoria contínua.

## Phase 3

- `runtime-activation/`: protocolo do Modo Liga/Desliga.
- `project-entry/`: protocolo de entrada para projeto novo ou existente.
- `existing-project-diagnostics/`: fluxo “Projeto em Andamento — Diagnóstico e Continuação”.

## Phase 4

- O CLI MVP implementa parte executável dos protocolos de runtime activation e project entry com comandos locais não destrutivos.
