# ADR-0037 — Adopt Framework Consolidation Layer

## Status

Accepted

## Context

Sprints 1 to 4 created operational engines, but adoption requires a framework layer that explains how engines compose.

## Decision

Adopt a framework consolidation layer with catalog, taxonomy, map, registry and governance artifacts.

## Alternatives Considered

- Keep frameworks distributed only inside engine folders.
- Defer consolidation until all templates are complete.

## Consequences

AI-SEOS becomes easier to teach, govern, review and apply across project contexts.

## Risks

Catalog drift if framework registry is not maintained.

## Reversal Strategy

Merge catalog artifacts back into `frameworks/README.md` if the layer becomes too heavy.

## Related Artifacts

- `docs/frameworks/framework-catalog.md`
- `frameworks/frameworks-consolidation-strategy.md`
