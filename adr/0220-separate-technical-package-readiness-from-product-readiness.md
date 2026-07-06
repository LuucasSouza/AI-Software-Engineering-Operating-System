# ADR 0220 - Separate Technical Package Readiness From Product Readiness

## Status

Accepted

## Context

`npm pack --dry-run` can pass while user validation remains incomplete.

## Decision

Separate technical package readiness from product readiness.

## Consequences

- Package can be technically ready while release remains blocked.
- Release documents must state both dimensions.

## Related Artifacts

- `docs/release/v0.1.0-alpha-phase-15b-package-review.md`
