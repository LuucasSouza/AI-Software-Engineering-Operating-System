---
title: Issue Templates and Validation Reports
status: Draft
version: 0.1.0-alpha
phase: 11
owner: Resolve Aí Maintainers
---

# Issue Templates and Validation Reports

## Purpose

Improve public alpha feedback loops by creating GitHub issue templates and validation report templates.

## GitHub issue templates

Create/update:

```text
.github/ISSUE_TEMPLATE/alpha-feedback.yml
.github/ISSUE_TEMPLATE/bug-cli.yml
.github/ISSUE_TEMPLATE/ux-confusion.yml
.github/ISSUE_TEMPLATE/docs-improvement.yml
.github/ISSUE_TEMPLATE/safety-concern.yml
```

## Alpha feedback issue fields

Recommended fields:

- user profile;
- operating system;
- Node version;
- installation method;
- command executed;
- expected behavior;
- actual behavior;
- generated docs path;
- whether sensitive data was involved;
- screenshot/log excerpt without secrets;
- severity.

## Validation report template

Create:

```text
templates/validation/alpha-validation-report-template.md
```

Sections:

```markdown
# Alpha Validation Report

## Scenario

## User profile

## Project type

## Environment

## Commands executed

## Result summary

## Generated files

## Issues found

## User feedback

## Readiness impact

## Recommendation
```

## Release blocker log

Create:

```text
docs/release/v0.1.0-alpha-blockers.md
```

## Known limitations update

Update known limitations after validation.

