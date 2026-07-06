# ADR 0226: Adopt simple test folder for real alpha validation

## Status

Accepted

## Context

Phase 15B ended with real validation still incomplete across the three official profiles. Recruiting friends and external testers requires a simple, copyable, low-friction package that can be dropped into a real project without changing the Resolve Ai runtime or requiring repository automation.

## Decision

Adopt a root-level `teste/` folder as a simple manual test kit for real alpha validation.

The folder must guide the participant and their AI assistant through the current CLI flow and collect feedback in `teste/feedback.md`.

## Consequences

- Alpha feedback collection becomes easier to run with friends and private testers.
- The test kit stays separate from the CLI package and does not alter command behavior.
- Feedback remains manual and participant-controlled.

## Reversibility

High. The folder can be replaced by a future validation package if a better manual process emerges.

