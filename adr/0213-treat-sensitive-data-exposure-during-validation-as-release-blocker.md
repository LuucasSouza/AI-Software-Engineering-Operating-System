# ADR 0213 - Treat Sensitive Data Exposure During Validation as Release Blocker

## Status

Accepted

## Context

Private alpha may involve real users and local projects.

## Decision

Treat sensitive data exposure during validation as a potential release blocker depending on severity.

## Consequences

- P1 security issues force NO-GO.
- Sessions must stop or switch projects if sensitive data appears.
- Reports must avoid copying sensitive content.

## Alternatives Considered

- Treat sensitive data findings as normal feedback.
- Allow participants to choose any real project.

## Related Artifacts

- `docs/alpha-validation/private-alpha/sensitive-data-handling-note.md`
- `docs/release/v0.1.0-alpha-private-alpha-security-review.md`
