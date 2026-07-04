---
title: "Reference Implementation Playbook"
version: "0.5.0"
status: "Sprint 5 Source"
sprint: "5"
part: "pt59"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-03"
canonical_target:
  - "frameworks/reference-implementation/reference-implementation-framework.md"
  - "playbooks/reference-implementation/reference-implementation-playbook.md"
  - "examples/reference-project/README.md"
  - "adr/0045-adopt-reference-implementation-playbook.md"
---

# Reference Implementation Playbook

## 1. Purpose

The Reference Implementation Playbook defines how AI-SEOS should create example projects that demonstrate the complete lifecycle.

AI-SEOS cannot remain only conceptual. It must include reference implementations that show how the framework works from idea to execution-ready artifacts.

Sprint 5 does not need to build full application code. It must create the framework and playbook for future reference implementations.

## 2. Why Reference Implementations Matter

Documentation explains the framework. Reference implementations prove it.

They help users understand:

- what artifacts look like in practice;
- how engines connect;
- how decisions are recorded;
- how risks are assessed;
- how architecture evolves;
- how handoffs work;
- how reflection improves the project.

## 3. Reference Implementation Definition

A reference implementation is a complete example project that applies AI-SEOS end to end.

It should include:

- idea/intake brief;
- discovery document;
- product definition;
- PRD;
- MVP scope;
- architecture overview;
- domain model;
- decision matrix;
- ADRs;
- risk register;
- optimization review;
- execution plan;
- documentation index;
- handoff package;
- retrospective;
- maturity assessment.

## 4. Reference Project Types

AI-SEOS should eventually include multiple reference project types:

| Reference Project | Purpose |
|---|---|
| Greenfield SaaS | Demonstrate a standard modern SaaS build. |
| Marketplace | Demonstrate multi-sided product complexity. |
| Internal Tool | Demonstrate lightweight enterprise workflows. |
| AI-First Product | Demonstrate AI-specific risks, costs and architecture. |
| Legacy Modernization | Demonstrate migration and incremental architecture. |
| Fintech-like System | Demonstrate compliance, risk and reliability concerns. |
| Education Platform | Demonstrate multi-role product architecture. |
| Mobile Companion App | Demonstrate client/backend integration. |

Sprint 5 should create the reference implementation structure and one placeholder reference project skeleton, not complete all examples.

## 5. Recommended Initial Reference Project

The first reference implementation should be:

```text
examples/reference-project/greenfield-saas/
```

Purpose:

Demonstrate the standard AI-SEOS path for a greenfield SaaS product from idea to execution-ready project plan.

The example should not be tied to a real commercial product. It should be generic enough for public open-source use.

## 6. Reference Implementation Folder Structure

Codex must create the following structure:

```text
examples/reference-project/README.md
examples/reference-project/greenfield-saas/README.md
examples/reference-project/greenfield-saas/00-intake/
examples/reference-project/greenfield-saas/01-discovery/
examples/reference-project/greenfield-saas/02-product/
examples/reference-project/greenfield-saas/03-architecture/
examples/reference-project/greenfield-saas/04-decisions/
examples/reference-project/greenfield-saas/05-risk/
examples/reference-project/greenfield-saas/06-optimization/
examples/reference-project/greenfield-saas/07-execution/
examples/reference-project/greenfield-saas/08-documentation/
examples/reference-project/greenfield-saas/09-handoff/
examples/reference-project/greenfield-saas/10-reflection/
examples/reference-project/greenfield-saas/11-maturity/
```

Each directory must include a README explaining what belongs there.

## 7. Reference Implementation Quality Rules

A reference implementation must:

- be realistic;
- show imperfect but responsible decisions;
- include trade-offs;
- include risks;
- include at least one rejected alternative;
- include at least one scope reduction;
- include at least one architecture compromise;
- include at least one reflection improvement;
- be traceable from discovery to execution;
- not hide assumptions;
- not pretend that all decisions are obvious.

## 8. Example Project Artifact Map

| Stage | Required Example Artifact |
|---|---|
| Intake | intake-brief.md |
| Discovery | discovery-document.md |
| Product | prd.md, mvp-scope.md, roadmap.md |
| Architecture | architecture-overview.md, domain-model.md, integration-map.md |
| Decisions | decision-matrix.md, adr-index.md |
| Risk | risk-register.md |
| Optimization | optimization-review.md |
| Execution | execution-plan.md, sprint-plan.md |
| Documentation | documentation-index.md |
| Handoff | handoff-package.md, handoff-receipt.md |
| Reflection | retrospective.md, improvement-backlog.md |
| Maturity | maturity-assessment.md |

## 9. Reference Implementation Playbook Steps

### Step 1 — Select Project Type

Choose the project type and define scope.

### Step 2 — Create Intake Brief

Capture the idea, business context, constraints and intended outcome.

### Step 3 — Run Discovery

Use Discovery Engine and Discovery Framework.

### Step 4 — Generate Product Definition

Use Product Engine and MVP Scope Framework.

### Step 5 — Generate Architecture

Use Architecture Engine and Architecture Framework.

### Step 6 — Run Decision Review

Use Decision Engine and ADR protocol.

### Step 7 — Run Risk Assessment

Use Risk Engine and Risk Register.

### Step 8 — Run Optimization

Use Optimization Engine.

### Step 9 — Build Execution Plan

Use Execution Engine.

### Step 10 — Produce Documentation and Handoff

Use Documentation and Handoff Engines.

### Step 11 — Reflect and Assess Maturity

Use Reflection Engine and Maturity Model.

## 10. Required Artifacts

Codex must create:

```text
frameworks/reference-implementation/README.md
frameworks/reference-implementation/reference-implementation-framework.md
playbooks/reference-implementation/README.md
playbooks/reference-implementation/reference-implementation-playbook.md
examples/reference-project/README.md
examples/reference-project/greenfield-saas/README.md
examples/reference-project/greenfield-saas/00-intake/README.md
examples/reference-project/greenfield-saas/01-discovery/README.md
examples/reference-project/greenfield-saas/02-product/README.md
examples/reference-project/greenfield-saas/03-architecture/README.md
examples/reference-project/greenfield-saas/04-decisions/README.md
examples/reference-project/greenfield-saas/05-risk/README.md
examples/reference-project/greenfield-saas/06-optimization/README.md
examples/reference-project/greenfield-saas/07-execution/README.md
examples/reference-project/greenfield-saas/08-documentation/README.md
examples/reference-project/greenfield-saas/09-handoff/README.md
examples/reference-project/greenfield-saas/10-reflection/README.md
examples/reference-project/greenfield-saas/11-maturity/README.md
```

## 11. Required ADR

Codex must create:

```text
adr/0045-adopt-reference-implementation-playbook.md
```

ADR 0045 must explain why AI-SEOS needs reference implementations as proof of usability and onboarding tools.

## 12. Definition of Done

The Reference Implementation Playbook is complete when:

- reference implementation framework exists;
- playbook exists;
- examples/reference-project exists;
- greenfield-saas skeleton exists;
- each stage has a README;
- artifact map exists;
- ADR 0045 exists;
- README and roadmap reference future example expansion.
