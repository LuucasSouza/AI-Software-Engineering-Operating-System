# ADR 0253: Update Test Kit to Include Interview Flow

## Status

Accepted

## Date

2026-07-07

## Context

`teste/feedback.md` and the kit instructions did not cover `resolve-ai entrevistar`, even though the interview became the central step for project-zero flows. Testers also ran commands inside `teste/` by mistake.

## Decision

Update the `teste/` kit: add an `entrevistar` section to the feedback form, include the interview in the command flow, add beginner-specific questions, and state clearly that `teste/` is only the instruction kit — commands run in the project root.

## Consequences

- Future validation covers the interview explicitly.
- Setup errors (running inside `teste/`) become less likely.

## Alternatives Considered

- Automate feedback collection: rejected; manual, participant-controlled feedback remains the alpha policy.
