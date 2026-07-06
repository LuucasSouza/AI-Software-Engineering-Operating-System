# ADR 0230: Defer GitHub feedback automation

## Status

Accepted

## Context

GitHub issue templates already exist, but Phase 16 explicitly avoids GitHub Actions, workflows, automatic submission, and external integrations.

## Decision

Defer GitHub feedback automation.

Phase 16 will not create GitHub Actions, workflow files, automatic issue creation, or automatic feedback upload.

## Consequences

- The repository avoids new automation risk during private alpha.
- Feedback remains manual and easy to inspect before sharing.
- Future automation remains possible after real-user feedback proves the manual process.

## Reversibility

High. A future phase can add GitHub-based automation after privacy, safety, and maintainer approval.

