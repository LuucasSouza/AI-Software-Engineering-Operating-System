# ADR-0046 — Adopt Entry Modes Layer

## Status

Accepted

## Context

Sprint 5 consolidated frameworks and Sprint 6 will create complete templates. Before expanding templates, AI-SEOS must define who the templates are for.

## Decision

Adopt the Entry Modes Layer before Discovery Engine with three official modes: Non-Technical Builder, Vibe Coder and Professional Engineer.

## Alternatives Considered

- Create generic Sprint 6 templates first.
- Let users self-adapt technical templates.

## Consequences

Templates can be designed for different user profiles without reducing engineering quality.

## Risks

Mode-specific paths can drift if normalized Discovery Intake Package is not maintained.

## Reversal Strategy

Collapse modes into one intake if evidence shows mode separation adds more friction than value.

## Related Artifacts

- `docs/entry-modes/entry-modes-overview.md`
- `frameworks/entry-modes-framework/mode-selection-matrix.md`
