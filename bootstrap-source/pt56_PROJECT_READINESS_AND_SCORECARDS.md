---
title: "Project Readiness and Scorecards Framework"
version: "0.5.0"
status: "Sprint 5 Source"
sprint: "5"
part: "pt56"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-03"
canonical_target:
  - "frameworks/project-readiness/readiness-scorecards.md"
  - "frameworks/project-readiness/project-readiness-framework.md"
  - "templates/readiness/project-readiness-scorecard-template.md"
  - "adr/0042-adopt-project-readiness-scorecards.md"
---

# Project Readiness and Scorecards Framework

## 1. Purpose

The Project Readiness and Scorecards Framework defines how AI-SEOS determines whether a project is ready to move from one lifecycle stage to another.

Readiness must not be a vague feeling. It must be observable through artifacts, quality gates, known risks, and explicit confidence levels.

## 2. Readiness Philosophy

AI-SEOS readiness is based on four questions:

1. Do we have the required artifacts?
2. Are those artifacts good enough for the next stage?
3. Are the risks understood and acceptable?
4. Is the next agent or team able to continue without guessing?

Readiness does not mean perfection. It means sufficient clarity for responsible progress.

## 3. Readiness Levels

AI-SEOS uses readiness levels across engines.

| Code | Name | Engine | Meaning |
|---|---|---|---|
| DRL | Discovery Readiness Level | Discovery | Problem and context are ready for product definition. |
| PRL | Product Readiness Level | Product | Product scope is ready for architecture. |
| ARL | Architecture Readiness Level | Architecture | Architecture is ready for decision/risk review. |
| DCL | Decision Confidence Level | Decision | Decisions are justified with acceptable confidence. |
| RRL | Risk Readiness Level | Risk | Risks are visible and manageable. |
| ORL | Optimization Readiness Level | Optimization | Solution has been optimized responsibly. |
| ERL | Execution Readiness Level | Execution | Work is ready to be implemented. |
| DORL | Documentation Readiness Level | Documentation | Documentation is ready for handoff. |
| HRL | Handoff Readiness Level | Handoff | Receiver can continue with context. |
| LRL | Learning Readiness Level | Reflection | Learning loop can update the system. |

## 4. Generic Scorecard Structure

Every readiness scorecard must include:

```yaml
readiness_area: <area>
version: <version>
project: <project-name>
assessed_by: <agent-or-human>
date: <date>
score: <0-5>
status: <blocked|weak|acceptable|strong|excellent>
required_artifacts:
  - artifact: <name>
    status: <missing|partial|complete|validated>
quality_gates:
  - gate: <name>
    status: <pass|fail|warning>
risks:
  - <risk>
open_questions:
  - <question>
recommendation: <proceed|proceed-with-caution|rework|required-review>
```

## 5. Readiness Status Definitions

| Status | Score Range | Meaning |
|---|---:|---|
| Blocked | 0-1 | Cannot proceed responsibly. |
| Weak | 2 | Can proceed only for low-risk exploration. |
| Acceptable | 3 | Can proceed with known gaps. |
| Strong | 4 | Ready for professional execution. |
| Excellent | 5 | Ready with strong traceability and review. |

## 6. Discovery Readiness Scorecard

Criteria:

- problem clarity;
- target user clarity;
- stakeholder clarity;
- domain clarity;
- assumptions identified;
- constraints identified;
- success metrics identified;
- validation gaps documented.

Blocking conditions:

- no clear user;
- no clear problem;
- solution defined before problem;
- major assumptions hidden.

## 7. Product Readiness Scorecard

Criteria:

- product vision;
- MVP scope;
- non-goals;
- feature prioritization;
- user journeys;
- functional requirements;
- non-functional requirements;
- roadmap;
- success metrics.

Blocking conditions:

- MVP cannot be distinguished from future scope;
- no prioritization;
- requirements conflict with constraints;
- architecture lacks enough product context.

## 8. Architecture Readiness Scorecard

Criteria:

- architecture overview;
- domain model;
- context diagram;
- integration map;
- NFR mapping;
- technology alternatives;
- scalability assumptions;
- security considerations;
- operational considerations.

Blocking conditions:

- no alternatives;
- no NFR mapping;
- integration boundaries unclear;
- major technology choices unjustified.

## 9. Decision Readiness Scorecard

Criteria:

- alternatives;
- criteria;
- weighted matrix;
- confidence level;
- ADRs;
- consequences;
- reversibility;
- rejected options.

Blocking conditions:

- decision has only one option;
- no documented criteria;
- no consequences;
- irreversible decision without review.

## 10. Risk Readiness Scorecard

Criteria:

- risk taxonomy;
- risk register;
- severity;
- probability;
- mitigation;
- owners;
- residual risk;
- escalation triggers.

Blocking conditions:

- high risk without mitigation;
- security risk ignored;
- compliance assumption undocumented;
- vendor lock-in not assessed.

## 11. Optimization Readiness Scorecard

Criteria:

- cost review;
- complexity review;
- scalability review;
- maintainability review;
- AI cost/latency review when applicable;
- simplification opportunities;
- accepted trade-offs.

Blocking conditions:

- obvious simpler path ignored;
- premature optimization;
- optimization increases unacceptable risk;
- cost assumptions missing.

## 12. Execution Readiness Scorecard

Criteria:

- work packages;
- milestones;
- dependencies;
- acceptance criteria;
- delivery risks;
- owners or responsible agents;
- release strategy;
- quality plan.

Blocking conditions:

- tasks lack acceptance criteria;
- dependencies unknown;
- risks not assigned;
- architecture not approved.

## 13. Documentation Readiness Scorecard

Criteria:

- README updated;
- ADR index updated;
- changelog updated;
- architecture docs updated;
- templates findable;
- drift report;
- links valid.

Blocking conditions:

- source of truth unclear;
- critical ADRs missing;
- stale docs likely to mislead downstream work.

## 14. Required Artifacts

Codex must create:

```text
frameworks/project-readiness/README.md
frameworks/project-readiness/project-readiness-framework.md
frameworks/project-readiness/readiness-levels.md
frameworks/project-readiness/readiness-scorecards.md
frameworks/project-readiness/blocking-conditions.md
templates/readiness/project-readiness-scorecard-template.md
templates/readiness/engine-readiness-scorecard-template.md
templates/readiness/readiness-summary-template.md
```

## 15. Required ADR

Codex must create:

```text
adr/0042-adopt-project-readiness-scorecards.md
```

ADR 0042 must explain why readiness should be scored through explicit criteria instead of informal judgment.

## 16. Definition of Done

The Readiness Framework is complete when:

- readiness levels are documented;
- generic scorecard structure exists;
- engine-specific scorecards exist;
- blocking conditions exist;
- templates exist;
- ADR 0042 exists;
- Execution Engine and Handoff Engine documentation reference readiness scorecards.
