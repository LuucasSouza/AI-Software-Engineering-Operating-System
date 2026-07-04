---
title: "AI-SEOS - Frameworks"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Framework Maintainers"
last_updated: "2026-07-03"
document_type: "Module Overview"
---

# Frameworks

## Objetivo

Armazenar frameworks reutilizáveis que apoiam discovery, arquitetura, decisão, risco, priorização e readiness de IA.

## Escopo

Frameworks devem ser independentes, documentados e aplicáveis em múltiplos projetos.

## Princípios

- Reutilização por padrão.
- Profundidade progressiva.
- Exemplos práticos obrigatórios quando o framework amadurecer.

## Responsabilidades

Framework Maintainers mantêm modularidade, aplicabilidade e alinhamento com engines.

## Próximos passos

- Sprint 1 criou `discovery-framework/`.
- Sprint 2 criou frameworks de produto e arquitetura.
- Sprint 3 criou frameworks de decisão, risco e otimização.
- Sprint 4 criou frameworks de execução, documentação, handoff e reflexão.
- Sprint 5 consolidou frameworks cross-engine, maturidade, readiness, agentes, governança, QA e reference implementation.
- Sprint 5.5 criou o Entry Modes Framework.
- Sprint 6 conectou os frameworks aos template packs governados.
- Sprint 7 consolidou adoção pública, anti-patterns, best practices e release readiness.
- Phase 2 validou o framework contra SenseiHub e os três entry modes.

## Frameworks disponíveis

- `discovery-framework/`: estrutura reutilizável para discovery.

## Sprint 2

- `product-framework/`: MVP scope, capability mapping e priorização.
- `architecture-framework/`: architecture thinking, quality attributes, trade-offs e domain/integration modeling.

## Sprint 3

- `decision-framework/`: decision framework, weighted decision matrix e confidence model.
- `risk-framework/`: risk assessment, risk register, scoring e modelos especializados.
- `optimization-framework/`: otimização de custo, complexidade, escalabilidade e custo de AI.

## Sprint 4

- `execution-framework/`: planning model e estratégias de entrega.
- `documentation-framework/`: padrões documentais e information architecture.
- `handoff-framework/`: handoff contract model.
- `reflection-framework/`: dimensões e gates de reflexão.

## Sprint 5

- `ai-seos-meta-framework/`: meta-framework e discovery-to-delivery.
- `cross-engine-integration/`: integration model e traceability matrix.
- `maturity-model/`: M0-M5 e assessment guide.
- `project-readiness/`: readiness levels, scorecards e blocking conditions.
- `agent-collaboration/`: role map, handoff map e conflict resolution.
- `governance-framework/`: framework governance and versioning.
- `quality-assurance/`: framework quality model, scores e gates.
- `reference-implementation/`: reference implementation framework.

## Sprint 5.5

- `entry-modes-framework/`: mode router, problem-to-software translation e mode selection matrix.

## Sprint 6

- Template packs aplicam Entry Modes, lifecycle, engines e agent collaboration como artefatos reutilizáveis.

## Sprint 7

- Protocolos, casos, anti-patterns, best practices e release readiness tornam o framework adotável e auditável.

## Phase 2

- SenseiHub e first end-to-end validation case funcionam como validação inicial do framework completo.

## Phase 3

- `runtime-framework/`: camada conceitual que conecta CLI futura, Modo Liga/Desliga, Project Adapter, fluxos de entrada, agentes e segurança/token saving.

## Phase 4

- `packages/resolve-ai-cli/`: primeira implementação executável do Runtime Framework, limitada a estado local, Modo Liga/Desliga e documentação humana mínima.

## Phase 5

- A CLI passa a aplicar diagnóstico guiado heurístico, conectando Runtime Framework, Project Entry, Existing Project Diagnostics e documentação humana em `docs/resolve-ai/`.
