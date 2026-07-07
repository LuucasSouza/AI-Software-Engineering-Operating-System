# ADR 0248: Treat New Projects as Starting Points, Not Broken Projects

## Status

Accepted

## Date

2026-07-07

## Context

In a new project, the absence of README, CI, and tests is normal, but the diagnosis presented these absences like warnings, which sounded alarming for beginners.

## Decision

For new/zero projects, communicate absences like expected starting-point context ("ainda não existe — normal para uma pasta nova") under a "Ponto de partida" heading, while keeping technical attention points unchanged for existing and legacy projects.

## Consequences

- Beginners are not scared by normal initial state.
- Technical alerts remain intact for existing projects and Professional Engineer users.

## Alternatives Considered

- Hide the items entirely for new projects: rejected; honesty about missing pieces still matters.
