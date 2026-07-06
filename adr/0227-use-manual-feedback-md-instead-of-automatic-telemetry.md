# ADR 0227: Use manual feedback.md instead of automatic telemetry

## Status

Accepted

## Context

Resolve Ai currently has a no-telemetry alpha policy. Phase 16 needs better real-user feedback without adding automatic collection, external API calls, or background reporting.

## Decision

Use a manual `teste/feedback.md` file as the primary feedback artifact for this phase.

The participant or their AI assistant fills the file during the test and sends it back manually.

## Consequences

- No telemetry is added.
- No external service integration is needed.
- Feedback can include structured observations while avoiding sensitive content.
- Maintainers must manually receive and triage returned files.

## Reversibility

High. A future phase may add optional automation only after explicit governance approval.

