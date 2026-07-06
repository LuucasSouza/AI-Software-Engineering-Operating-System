# ADR 0229: Keep test folder separate from runtime CLI

## Status

Accepted

## Context

Phase 16 is operational validation enablement, not a runtime feature phase. The CLI behavior is already functional and should not be expanded just to collect alpha feedback.

## Decision

Keep `teste/` separate from `packages/resolve-ai-cli/`.

Do not import, package, execute, or depend on the test folder from the runtime CLI.

## Consequences

- The CLI remains stable during Phase 16.
- The test kit can evolve as documentation without changing package behavior.
- npm package contents remain unaffected.

## Reversibility

High. A later phase may create a formal feedback command or package, but that requires a separate decision.

