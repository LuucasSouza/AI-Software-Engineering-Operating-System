# ADR-0050 — Adopt Problem-to-Software Translation Framework

## Status

Accepted

## Context

Users often describe real-world workflows rather than software concepts.

## Decision

Adopt the Problem-to-Software Translation Framework to map user language to entities, actors, workflows, data, risks and candidate solution types.

## Alternatives Considered

- Let Discovery Engine infer translation implicitly.
- Require users to provide structured software requirements.

## Consequences

Discovery receives better structured input and does not restart from zero.

## Risks

Translation may create false confidence if assumptions are not marked.

## Reversal Strategy

Move translation into Discovery Engine if a separate framework proves unnecessary.

## Related Artifacts

- `frameworks/entry-modes-framework/problem-to-software-translation.md`
- `templates/intake/discovery-intake-package-template.md`
