# ADR-0027 — Adopt Execution Engine

## Status

Accepted

## Context

AI-SEOS precisa transformar planejamento aprovado em entrega controlada.

## Decision

Adotar Execution Engine como engine oficial para execution planning, milestones, work packages, readiness gates e release candidate preparation.

## Alternatives Considered

- Deixar execução como responsabilidade informal de agentes.
- Criar apenas templates sem engine operacional.

## Consequences

Execução passa a ser rastreável, revisável e conectada a Discovery, Product, Architecture, Decision, Risk e Optimization.

## Trade-offs

Mais estrutura antes de implementação, em troca de menor risco de scope drift e perda de contexto.

## Reversibility

Medium. A engine pode ser simplificada, mas os artefatos produzidos continuam úteis.

## Related Artifacts

- `operating-system/execution/execution-engine.md`
- `protocols/execution-planning/execution-planning-protocol.md`
