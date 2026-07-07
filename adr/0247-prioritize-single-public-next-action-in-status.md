# ADR 0247: Prioritize Single Public Next Action in Status

## Status

Accepted

## Date

2026-07-07

## Context

`resolve-ai status` displayed several competing next actions at the same level, confusing beginner users about what to do now.

## Decision

`status` must display a single primary next action at the top, produced by the central next-action engine (`getPrimaryNextAction`), with a short "why" explanation and an optional suggested command. Details remain available below without competing with the top.

## Consequences

- Beginner UX improves: one clear answer to "o que eu faço agora?".
- Requires a prioritization engine and ordering rules kept under test.

## Alternatives Considered

- Keep listing every stage action: rejected; it caused the confusion observed in the clean test.
