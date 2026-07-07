# ADR 0250: Generate Concrete MVP Slice for Non-Technical Builder

## Status

Accepted

## Date

2026-07-07

## Context

`preparar` recognized filled context but still produced the vague task "Implementar a próxima fatia pequena do escopo preenchido", forcing beginners to translate it themselves.

## Decision

When a sufficient interview scope exists and no critical risk applies, `preparar` selects a concrete first MVP slice (`selectFirstMvpSlice`), e.g. "Criar a primeira tela de \"Controle Simples de Gastos\"", with feature-based scope, out-of-scope limits, and manual validation checks. `resolver` reuses exactly the same task title.

## Consequences

- Immediate action becomes obvious for beginners.
- Prevents jumping to "build the whole app": the slice stays small and safe.

## Alternatives Considered

- Keep the generic slice text: rejected; observed feedback showed it still required mental translation.
