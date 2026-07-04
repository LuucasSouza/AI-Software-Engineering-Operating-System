---
title: Phase 11 Handoff
status: Draft
version: 0.1.0-alpha
phase: 11
owner: Resolve Aí Maintainers
---

# Phase 11 Handoff

## Phase name

Phase 11 — External Alpha Validation

## Objective

Validate Resolve Aí in representative real-world scenarios before npm publication or public alpha tag.

## Required directories

```text
docs/alpha-validation/
docs/alpha-validation/scenarios/
docs/alpha-validation/profiles/
docs/alpha-validation/reports/
docs/community/
docs/release/
templates/validation/
.github/ISSUE_TEMPLATE/
```

## Required canonical files

```text
docs/alpha-validation/README.md
docs/alpha-validation/alpha-validation-protocol.md
docs/alpha-validation/user-profiles-and-scenarios.md
docs/alpha-validation/real-project-test-plan.md
docs/community/alpha-feedback-log.md
docs/community/alpha-feedback-triage.md
docs/community/alpha-improvement-backlog.md
docs/release/v0.1.0-alpha-external-validation-scorecard.md
docs/release/v0.1.0-alpha-blockers.md
templates/validation/alpha-validation-report-template.md
.github/ISSUE_TEMPLATE/alpha-feedback.yml
.github/ISSUE_TEMPLATE/bug-cli.yml
.github/ISSUE_TEMPLATE/ux-confusion.yml
.github/ISSUE_TEMPLATE/docs-improvement.yml
.github/ISSUE_TEMPLATE/safety-concern.yml
```

## Required sprint docs

```text
docs/sprints/phase-11-handoff.md
docs/sprints/phase-11-validation-report.md
docs/sprints/phase-11-retrospective.md
```

## Required ADRs

Create ADRs 0166 to 0175.

## Definition of Done

Phase 11 is done when:

- alpha validation protocol exists;
- user profile scenarios are documented;
- local validation scenarios are executed or explicitly marked pending;
- feedback templates exist;
- GitHub issue templates exist;
- readiness score is calculated honestly;
- P0 blockers are listed;
- recommendation is documented;
- no npm publication is performed;
- no Git tag is created;
- all tests pass.

## Expected next phase

Phase 12 — Public Alpha Release Prep

Possible scope:

- finalize v0.1.0-alpha release notes;
- decide package naming for npm;
- prepare npm metadata;
- prepare tag protocol;
- publish only if Phase 11 has no P0 blockers.

