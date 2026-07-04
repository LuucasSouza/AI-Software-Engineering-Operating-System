# ADR-0041 — Adopt Agent Collaboration Framework

## Status

Accepted

## Context

AI-SEOS assumes specialized agents and needs clear collaboration rules.

## Decision

Adopt an Agent Collaboration Framework with role map, handoff map, topologies, human review model and conflict resolution.

## Alternatives Considered

- Treat all work as one general-purpose agent workflow.
- Define agents only in playbooks.

## Consequences

Multi-agent work becomes more explicit, reviewable and safer.

## Risks

Too many roles can add coordination overhead.

## Reversal Strategy

Use Solo AI CTO topology for lightweight projects while preserving contracts for higher-risk work.

## Related Artifacts

- `frameworks/agent-collaboration/agent-collaboration-framework.md`
- `templates/agent-collaboration/agent-operating-contract-template.md`
