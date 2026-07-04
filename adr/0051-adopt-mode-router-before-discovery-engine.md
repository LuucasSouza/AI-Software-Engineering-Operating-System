# ADR-0051 — Adopt Mode Router Before Discovery Engine

## Status

Accepted

## Context

Discovery quality depends on asking the right questions in the right language for the user.

## Decision

Adopt Mode Router before Discovery Engine to select or infer the entry mode and route to the correct intake path.

## Alternatives Considered

- Start every project directly in Discovery Engine.
- Ask users to choose templates manually.

## Consequences

AI-SEOS can adapt intake before producing Discovery artifacts.

## Risks

Incorrect mode inference can frustrate users.

## Reversal Strategy

Require explicit mode selection when inference confidence is low.

## Related Artifacts

- `frameworks/entry-modes-framework/mode-router.md`
- `protocols/mode-router/mode-router-protocol.md`
