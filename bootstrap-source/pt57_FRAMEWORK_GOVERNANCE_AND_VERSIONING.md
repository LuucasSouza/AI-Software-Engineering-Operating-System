---
title: "Framework Governance and Versioning"
version: "0.5.0"
status: "Sprint 5 Source"
sprint: "5"
part: "pt57"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-03"
canonical_target:
  - "docs/frameworks/framework-evolution-policy.md"
  - "frameworks/governance-framework/framework-governance.md"
  - "templates/frameworks/framework-spec-template.md"
  - "adr/0043-adopt-framework-governance-and-versioning.md"
---

# Framework Governance and Versioning

## 1. Purpose

The Framework Governance and Versioning model defines how AI-SEOS frameworks are created, changed, deprecated, reviewed and versioned.

AI-SEOS must evolve as a serious open-source framework. That requires more than content generation. It requires governance.

## 2. Governance Philosophy

Framework governance must balance two needs:

1. AI-SEOS must evolve quickly as new patterns emerge.
2. AI-SEOS must remain coherent, stable and trustworthy.

Governance exists to protect coherence, not to create bureaucracy.

## 3. Framework Lifecycle

Every framework in AI-SEOS must have a lifecycle status.

| Status | Meaning |
|---|---|
| Draft | Proposed but not yet validated. |
| Experimental | Usable for exploration but not stable. |
| Active | Recommended for normal use. |
| Stable | Mature and broadly applicable. |
| Deprecated | Replaced or no longer recommended. |
| Archived | Preserved for history but not maintained. |

## 4. Framework Metadata Standard

Every framework document must include front matter:

```yaml
title: <framework-title>
version: <semver>
status: <draft|experimental|active|stable|deprecated|archived>
owner: <role-or-agent>
last_updated: <YYYY-MM-DD>
review_cycle: <monthly|quarterly|semiannual|annual>
related_engines:
  - <engine>
related_protocols:
  - <protocol>
related_templates:
  - <template>
required_adrs:
  - <adr>
```

## 5. Versioning Policy

AI-SEOS frameworks must follow semantic versioning principles where applicable.

### 5.1 Major Version

Increment major version when:

- framework structure changes incompatibly;
- required artifacts change significantly;
- quality gates change in a way that affects adoption;
- existing playbooks become incompatible.

### 5.2 Minor Version

Increment minor version when:

- new optional sections are added;
- new examples are added;
- new templates are added without breaking existing usage;
- clarifications improve adoption.

### 5.3 Patch Version

Increment patch version when:

- typos are fixed;
- links are fixed;
- wording is clarified without changing meaning;
- examples are corrected.

## 6. Framework Change Types

### 6.1 Editorial Change

Does not require ADR.

Examples:

- grammar;
- formatting;
- internal links;
- minor clarifications.

### 6.2 Minor Functional Change

May require ADR if it affects usage.

Examples:

- adding a checklist;
- adding optional quality gate;
- adding a new example.

### 6.3 Major Functional Change

Requires ADR.

Examples:

- changing a framework pipeline;
- changing required artifacts;
- redefining readiness criteria;
- replacing a framework.

### 6.4 Governance Change

Always requires ADR.

Examples:

- versioning policy;
- licensing;
- contributor model;
- security policy;
- review authority.

## 7. Framework Proposal Process

New frameworks must be proposed using a standard template.

Codex must create:

```text
templates/frameworks/framework-proposal-template.md
templates/frameworks/framework-spec-template.md
templates/frameworks/framework-review-template.md
```

A proposal must include:

- problem statement;
- why existing frameworks are insufficient;
- proposed scope;
- non-scope;
- related engines;
- related protocols;
- required templates;
- examples;
- risks;
- alternatives;
- migration plan if replacing existing framework.

## 8. Framework Review Board

AI-SEOS must define a lightweight Framework Review Board model.

Review perspectives:

- Architecture coherence;
- Product usefulness;
- Engineering practicality;
- Security and risk implications;
- Documentation quality;
- Agent executability;
- Human reviewability;
- OSS maintainability.

The review board can be simulated by agents or performed by humans.

## 9. Deprecation Policy

A framework may be deprecated when:

- it is replaced by a better framework;
- it duplicates another framework;
- it no longer reflects AI-SEOS principles;
- it creates confusion;
- it is no longer maintained.

Deprecation must include:

- reason;
- replacement;
- migration guidance;
- date;
- owner;
- affected documents.

## 10. Framework Registry

Codex must create:

```text
docs/frameworks/framework-registry.md
```

The registry must list:

- framework name;
- version;
- status;
- owner;
- related engines;
- related protocols;
- related templates;
- ADRs;
- last updated;
- review cycle.

## 11. Required Artifacts

Codex must create:

```text
frameworks/governance-framework/README.md
frameworks/governance-framework/framework-governance.md
docs/frameworks/framework-evolution-policy.md
docs/frameworks/framework-registry.md
templates/frameworks/framework-proposal-template.md
templates/frameworks/framework-spec-template.md
templates/frameworks/framework-review-template.md
templates/frameworks/framework-deprecation-template.md
```

## 12. Required ADR

Codex must create:

```text
adr/0043-adopt-framework-governance-and-versioning.md
```

ADR 0043 must explain why AI-SEOS frameworks require lifecycle status, versioning, review and deprecation rules.

## 13. Definition of Done

Framework governance is complete when:

- lifecycle statuses exist;
- metadata standard exists;
- versioning policy exists;
- proposal process exists;
- review board model exists;
- deprecation policy exists;
- framework registry exists;
- templates exist;
- ADR 0043 exists.
