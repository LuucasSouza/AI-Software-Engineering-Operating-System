# ADR 0251: Use Portuguese Risk Labels in Public CLI Output

## Status

Accepted

## Date

2026-07-07

## Context

Risk levels appeared mixed in public output: `yellow` in one command and `medio` in another, confusing Non-Technical Builder users.

## Decision

Public CLI output and generated user documents must display `baixo`, `médio`, `alto`, and `crítico` via a central formatter (`formatRiskForUser` in `src/core/risk-language.ts`). Internal enums (`green`, `yellow`, `orange`, `red`) may remain in code and state for compatibility.

## Consequences

- Clarity improves and vocabulary is consistent across commands.
- The internal-to-public mapping is centralized and testable.

## Alternatives Considered

- Rename internal enums: rejected for now; it would churn stored state without user benefit.
