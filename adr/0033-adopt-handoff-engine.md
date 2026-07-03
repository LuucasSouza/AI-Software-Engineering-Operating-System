# ADR-0033 — Adopt Handoff Engine

## Status

Accepted

## Context

Workflows com agentes falham quando contexto é transferido informalmente.

## Decision

Adotar Handoff Engine como engine oficial para transferência de responsabilidade entre fases, agentes, humanos e sprints.

## Alternatives Considered

- Usar comentários livres como handoff.
- Deixar handoff embutido em cada protocolo.

## Consequences

Handoff passa a ter package, contract, receipt, gaps e quality gates.

## Trade-offs

Mais artefatos por transição, em troca de menor perda de contexto.

## Reversibility

Medium. Templates podem ser simplificados, mas o conceito de handoff estruturado permanece central.

## Related Artifacts

- `operating-system/handoff/handoff-engine.md`
- `templates/handoff/handoff-package-template.md`
