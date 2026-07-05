# ADR 0209 - Keep Validation Feedback Anonymized

## Status

Accepted

## Context

Private alpha sessions can produce personal or project-specific information.

## Decision

Keep validation feedback anonymized and avoid unnecessary personal data.

## Consequences

- Reports use participant IDs such as `PA-NTB-01`.
- Sensitive or identifying information is excluded.
- Public artifacts remain safer to share.

## Alternatives Considered

- Record names for traceability.
- Store raw notes without redaction.

## Related Artifacts

- `docs/alpha-validation/private-alpha/privacy-and-consent-guidelines.md`
- `docs/alpha-validation/private-alpha/participant-consent-note.md`
