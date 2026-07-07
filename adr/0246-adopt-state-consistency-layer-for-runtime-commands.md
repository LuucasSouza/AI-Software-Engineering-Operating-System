# ADR 0246: Adopt State Consistency Layer for Runtime Commands

## Status

Accepted

## Date

2026-07-07

## Context

The post-Phase 17 clean test showed that different commands interpreted `.resolve-ai/state.json` inconsistently, producing contradictions such as an interview marked done while diagnosis and status still recommended running the interview again.

## Decision

Adopt a central derived-context layer (`buildRuntimeContext` in `src/core/runtime-context.ts`) that normalizes state into a single `RuntimeContext` used by diagnosis, planning, preparation, assisted execution, validation, and status.

## Consequences

- Contradictions between commands are reduced.
- Priority rules become testable in one place.
- Care is required to avoid breaking existing flows for Vibe Coder and Professional Engineer profiles.

## Alternatives Considered

- Patch each command individually: rejected because it repeats the drift that caused the inconsistencies.
