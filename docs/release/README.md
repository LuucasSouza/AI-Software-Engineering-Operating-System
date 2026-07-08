# Release Documentation

Release documentation covers readiness, known limitations, release notes, repository hardening and alpha release planning.

## Phase 2

- `v0.1.0-alpha-release-plan.md`
- `v0.1.0-alpha-release-notes.md`
- `v0.1.0-alpha-checklist.md`
- `v0.1.0-alpha-known-limitations.md`
- `v0.1.0-alpha-readiness-report.md`
- `repository-hardening-checklist.md`
- `public-alpha-readiness-gap-analysis.md`

## Phase 10

- `v0.1.0-alpha-cli-readiness.md`

## Phase 11

- `v0.1.0-alpha-external-validation-scorecard.md`
- `v0.1.0-alpha-blockers.md`

## Phase 12

- `v0.1.0-alpha-release-candidate.md`
- `v0.1.0-alpha-release-notes-draft.md`
- `v0.1.0-alpha-npm-publication-checklist.md`
- `v0.1.0-alpha-go-no-go-decision.md`
- `v0.1.0-alpha-risk-review.md`
- `v0.1.0-alpha-security-privacy-review.md`
- `v0.1.0-alpha-npm-and-tagging-decision-gate.md`

## Phase 13

- `v0.1.0-alpha-blocker-correction-backlog.md`
- `v0.1.0-alpha-phase-13-release-decision.md`

## Phase 14

- `v0.1.0-alpha-phase-14-readiness-scorecard.md`
- `v0.1.0-alpha-phase-14-go-no-go-decision.md`
- `v0.1.0-alpha-phase-14-blockers.md`
- `v0.1.0-alpha-phase-14-package-review.md`

## Phase 15A

- `v0.1.0-alpha-phase-15a-readiness-scorecard.md`
- `v0.1.0-alpha-phase-15a-go-no-go-decision.md`
- `v0.1.0-alpha-phase-15a-blockers.md`
- `v0.1.0-alpha-phase-15a-package-review.md`
- `v0.1.0-alpha-phase-15a-release-recommendation.md`
- `v0.1.0-alpha-private-alpha-security-review.md`

## Phase 15B

- `v0.1.0-alpha-phase-15b-readiness-scorecard.md`
- `v0.1.0-alpha-phase-15b-go-no-go-decision.md`
- `v0.1.0-alpha-phase-15b-blockers.md`
- `v0.1.0-alpha-phase-15b-package-review.md`
- `v0.1.0-alpha-phase-15b-release-recommendation.md`

## Phase 17

- `v0.1.0-alpha-phase-17-readiness-scorecard.md`
- `v0.1.0-alpha-phase-17-go-no-go-decision.md`

## Phase 17B

- `v0.1.0-alpha-phase-17b-readiness-scorecard.md`
- `v0.1.0-alpha-phase-17b-go-no-go-decision.md`

## Phase 18

- `v0.1.0-alpha-phase-18-readiness-scorecard.md`
- `v0.1.0-alpha-phase-18-go-no-go-decision.md`
- `v0.1.0-alpha-rc/` — **diretório canônico do release candidate**, com:
  - `README.md` (índice)
  - `release-candidate-checklist.md`
  - `release-notes.md`
  - `known-limitations.md`
  - `npm-package-audit.md`
  - `npm-publication-checklist.md`
  - `npm-publication-decision.md`
  - `github-release-draft.md`
  - `git-tag-checklist.md`
  - `distribution-checklist.md`
  - `rollback-plan.md`
  - `post-release-feedback-plan.md`
  - `maintainer-approval-gate.md`

## Phase 19

- `v0.1.0-alpha-phase-19-readiness-scorecard.md`
- `v0.1.0-alpha-phase-19-go-no-go-decision.md`
- `v0.1.0-alpha-rc/publication-execution-report.md` — log completo da publicação
- `v0.1.0-alpha-rc/maintainer-approval-gate.md` — APPROVED (2026-07-08)

## Current Recommendation

Resolve Aí is at 92/100 — PUBLIC ALPHA PUBLISHED after Phase 19. `resolve-ai@0.1.0-alpha.0` is live on npm under the `alpha` dist-tag, with Git tag `v0.1.0-alpha` and a GitHub pre-release. It is still **not stable** and must not be declared stable or production-ready without real human validation (ADR-0274); 92/100 is the ceiling until Non-Technical Builder and dedicated Professional Engineer sessions are recorded. For release documents, `v0.1.0-alpha-rc/` supersedes the drafts from Phases 12–15B.
