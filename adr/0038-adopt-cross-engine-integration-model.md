# ADR-0038 — Adopt Cross-Engine Integration Model

## Status

Accepted

## Context

AI-SEOS engines must collaborate through durable artifacts instead of implicit conversational context.

## Decision

Adopt a cross-engine integration model with interface standard, traceability matrix and handoff protocol.

## Alternatives Considered

- Allow each engine to define integration independently.
- Rely on README navigation only.

## Consequences

Engine transitions become auditable and blocking conditions can be detected earlier.

## Risks

The integration model can become stale if new engines or protocols are added without registry updates.

## Reversal Strategy

Reduce the model to a minimum interface checklist while preserving artifact contracts.

## Related Artifacts

- `frameworks/cross-engine-integration/integration-model.md`
- `frameworks/cross-engine-integration/traceability-matrix.md`
