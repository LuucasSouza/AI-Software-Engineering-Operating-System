# ADR 0249: Personalize Planning From Interview Scope

## Status

Accepted

## Date

2026-07-07

## Context

After Phase 17, `planejar` could still produce generic output even when a guided interview had registered name, MVP, constraints, and out-of-scope items.

## Decision

Extract a `ProjectScope` from the interview (`extractProjectScopeFromInterview`) and use it in planning: project name in the summary, MVP features in plan/backlog, out-of-scope preserved, and a concrete next action referencing the project by name.

## Consequences

- Perceived value increases: the plan talks about the user's idea.
- The extraction heuristic must remain conservative and tolerant of missing answers.

## Alternatives Considered

- Ask the user to re-type the scope during planning: rejected; the interview already captured it.
