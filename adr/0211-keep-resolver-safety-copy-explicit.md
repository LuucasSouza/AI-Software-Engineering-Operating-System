# ADR 0211 - Keep Resolver Safety Copy Explicit

## Status

Accepted

## Context

The `resolver` command can be misunderstood as automatic execution.

## Decision

Keep `resolver` safety copy explicit: it prepares assisted execution and does not alter code automatically.

## Consequences

- Confusion about `resolver` remains a release blocker.
- UX copy must prioritize safety over cleverness.
- Tests and session observations should protect this message.

## Alternatives Considered

- Use shorter copy with less safety detail.
- Rename the command before collecting evidence.

## Related Artifacts

- `docs/community/private-alpha-feedback-triage.md`
- `packages/resolve-ai-cli/src/commands/resolver.ts`
