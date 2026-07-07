# ADR 0254: Keep Git Initialization as Guidance, Not Blocking Step

## Status

Accepted

## Date

2026-07-07

## Context

Without Git, validation is limited. However, presenting `git init` like the primary next action interrupted the beginner flow before the prepared task was even executed.

## Decision

Without Git, explain the limitation and suggest `git init` like a tip; only prioritize Git when the user is validating real changes. Before real execution, the primary action remains using the final prompt from the assisted-execution package.

## Consequences

- Validation stays honest about its limits.
- The MVP flow is not derailed early by tooling setup.

## Alternatives Considered

- Require Git for the interview flow: rejected; it would block exactly the audience the flow serves.
