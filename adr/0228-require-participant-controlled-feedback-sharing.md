# ADR 0228: Require participant-controlled feedback sharing

## Status

Accepted

## Context

Real alpha validation can involve private projects. Participants must remain in control of what they share, especially when testing inside local repositories.

## Decision

Require feedback sharing to be participant-controlled. The Resolve Ai test kit must not send feedback automatically.

Participants manually review `teste/feedback.md` and decide what to return.

## Consequences

- Reduces risk of accidental sensitive data sharing.
- Keeps trust aligned with the current alpha safety posture.
- Slows down feedback collection compared with automated reporting, but improves consent and control.

## Reversibility

Medium. Future automation would need explicit consent, privacy review, and a new ADR.

