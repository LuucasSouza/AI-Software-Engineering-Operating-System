# ADR 0255: Preserve Professional Mode While Simplifying Beginner UX

## Status

Accepted

## Date

2026-07-07

## Context

Language simplifications for Non-Technical Builder must not degrade the technical depth expected by Vibe Coder and Professional Engineer users.

## Decision

Apply language simplification per profile: beginner planning documents use simple categories ("Fazer primeiro / Fazer depois / Não fazer agora") only when the interview scope and Non-Technical Builder mode apply; existing and legacy projects keep technical backlogs, attention points, and stack details.

## Consequences

- More conditional complexity in document generation.
- Each audience gets appropriate depth; no profile support is removed.

## Alternatives Considered

- Simplify everything for everyone: rejected; it would remove essential technical detail for professional users.
