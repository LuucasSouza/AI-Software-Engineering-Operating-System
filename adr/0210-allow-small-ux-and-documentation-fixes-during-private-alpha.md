# ADR 0210 - Allow Small UX and Documentation Fixes During Private Alpha

## Status

Accepted

## Context

Private alpha may reveal small issues that can be safely corrected without expanding scope.

## Decision

Allow small UX, copy, and documentation fixes during private alpha when backed by evidence or clear safety gaps.

## Consequences

- Fixes stay focused.
- Large features remain out of scope.
- CLI changes require build, tests, and regenerated `dist/`.

## Alternatives Considered

- Freeze all changes until public release.
- Permit broad CLI expansion during alpha.

## Related Artifacts

- `docs/community/private-alpha-fix-backlog.md`
- `docs/community/private-alpha-fixes-applied.md`
