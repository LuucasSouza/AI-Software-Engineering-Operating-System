---
title: "AI-SEOS Maturity Model"
version: "0.5.0"
status: "Sprint 5 Source"
sprint: "5"
part: "pt53"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-03"
canonical_target:
  - "frameworks/maturity-model/ai-seos-maturity-model.md"
  - "frameworks/maturity-model/maturity-assessment-guide.md"
  - "templates/maturity/maturity-assessment-template.md"
  - "adr/0039-adopt-ai-seos-maturity-model.md"
---

# AI-SEOS Maturity Model

## 1. Purpose

The AI-SEOS Maturity Model defines how teams, projects, organizations and agent ecosystems can assess their adoption of AI-SEOS.

AI-SEOS must support multiple maturity stages. A solo founder, a small startup, a professional SaaS team, and an enterprise architecture group cannot be forced into the same depth of process.

The maturity model allows AI-SEOS to be adopted progressively without losing rigor.

## 2. Maturity Philosophy

Maturity is not bureaucracy.

Maturity means that the team has enough structure to make good decisions repeatedly, learn from outcomes, reduce avoidable risk, and maintain systems over time.

A mature AI-SEOS implementation should show:

- clearer decisions;
- fewer hidden assumptions;
- better traceability;
- stronger documentation;
- better handoffs;
- better risk awareness;
- more reliable execution;
- better agent collaboration;
- faster onboarding;
- better long-term maintainability.

## 3. Maturity Levels

AI-SEOS defines six maturity levels.

| Level | Name | Description |
|---|---|---|
| M0 | Ad Hoc | Work is conversational, unstructured, and mostly undocumented. |
| M1 | Documented | Basic documents exist, but flow and consistency are limited. |
| M2 | Structured | Engines, templates and ADRs are used for important work. |
| M3 | Integrated | Engines are connected through explicit handoffs and traceability. |
| M4 | Governed | Quality gates, reviews, ownership and versioning are enforced. |
| M5 | Adaptive | The system learns continuously and improves through reflection loops. |

## 4. Level Definitions

### 4.1 M0 — Ad Hoc

Characteristics:

- ideas are discussed informally;
- architecture is decided by intuition;
- requirements are incomplete;
- decisions are not traceable;
- risk is discovered late;
- documentation is created after implementation or not created at all;
- AI agents rely mostly on chat context.

This level is acceptable only for experiments, prototypes, or learning exercises.

Exit criteria:

- basic README exists;
- project intent is documented;
- at least one structured artifact exists;
- next maturity target is defined.

### 4.2 M1 — Documented

Characteristics:

- README exists;
- basic discovery exists;
- initial architecture notes exist;
- some decisions are documented;
- templates may be used inconsistently;
- handoffs are informal.

Common problems:

- documentation exists but is not authoritative;
- documents are not connected;
- decisions may still happen outside ADRs;
- AI agents do not consistently consume previous artifacts.

Exit criteria:

- project uses discovery, product and architecture templates;
- key decisions are recorded;
- basic risk register exists;
- README and roadmap are maintained.

### 4.3 M2 — Structured

Characteristics:

- AI-SEOS engines are used intentionally;
- templates are applied;
- ADRs are created for meaningful decisions;
- risk register is maintained;
- execution plan exists;
- documentation is updated during delivery.

Common problems:

- engine transitions may still be inconsistent;
- handoff quality varies;
- readiness scoring may be subjective;
- reflection may be skipped under delivery pressure.

Exit criteria:

- cross-engine handoffs exist;
- readiness scorecards exist;
- quality gates are checked;
- Sprint reports are created.

### 4.4 M3 — Integrated

Characteristics:

- engines are connected by explicit contracts;
- artifacts are traceable;
- upstream gaps block downstream work;
- handoff receipts exist;
- documentation is treated as source of truth;
- agents operate against durable artifacts.

Common problems:

- governance may depend on one maintainer;
- quality gates may not be automated;
- maturity may vary across modules.

Exit criteria:

- framework catalog exists;
- cross-engine traceability matrix exists;
- owners exist for critical artifacts;
- review cadence exists.

### 4.5 M4 — Governed

Characteristics:

- versioning is consistent;
- ADR lifecycle is enforced;
- quality gates are reviewed;
- stale documents are identified;
- contribution rules are followed;
- governance process exists for framework changes.

Common problems:

- too much process may slow small projects;
- governance may become bureaucratic;
- reviews may focus on compliance rather than clarity.

Exit criteria:

- governance is lightweight and effective;
- validation automation exists or is planned;
- risk and quality indicators are tracked;
- process exceptions are documented.

### 4.6 M5 — Adaptive

Characteristics:

- reflection drives real improvement;
- frameworks evolve through evidence;
- agents become easier to orchestrate;
- repeated project patterns become playbooks;
- quality gates improve over time;
- templates evolve based on usage.

This is the target state for AI-SEOS as a living framework.

## 5. Maturity Assessment Dimensions

AI-SEOS maturity must be assessed across at least these dimensions:

| Dimension | Description |
|---|---|
| Discovery Maturity | How well the problem, users, domain and constraints are understood. |
| Product Maturity | How well product scope, MVP, roadmap and value are defined. |
| Architecture Maturity | How well architecture supports requirements, constraints and evolution. |
| Decision Maturity | How well decisions are compared, justified and recorded. |
| Risk Maturity | How well uncertainty is identified, scored and mitigated. |
| Optimization Maturity | How well cost, complexity, scalability and maintainability are improved. |
| Execution Maturity | How well work is planned, sequenced and delivered. |
| Documentation Maturity | How well documentation reflects the source of truth. |
| Handoff Maturity | How well context transfers between agents or humans. |
| Reflection Maturity | How well learning loops improve the system. |
| Agent Collaboration Maturity | How well AI agents coordinate around artifacts and contracts. |
| Governance Maturity | How well the framework is versioned, reviewed and evolved. |

## 6. Maturity Scoring

Each dimension should be scored from 0 to 5.

| Score | Meaning |
|---|---|
| 0 | Not present |
| 1 | Present but informal |
| 2 | Documented and repeatable |
| 3 | Integrated with adjacent processes |
| 4 | Governed and reviewed |
| 5 | Continuously improved |

The overall maturity level is not a simple average. It is the minimum sustainable level across critical dimensions.

Example:

If architecture maturity is 4 but decision maturity is 1, the system is not mature. It has sophisticated architecture without decision traceability.

## 7. Maturity Anti-Patterns

### 7.1 Documentation Theater

The team creates many documents but nobody uses them to make decisions.

### 7.2 Process Inflation

The team adds process without improving outcomes.

### 7.3 AI Autopilot

Agents create artifacts without human review or accountability.

### 7.4 ADR Dumping

Every minor note becomes an ADR, reducing signal quality.

### 7.5 Enterprise Cargo Culting

Small projects copy enterprise process without risk justification.

### 7.6 Maturity Vanity Metrics

Teams optimize maturity scores instead of engineering outcomes.

## 8. Required Artifacts

Codex must create:

```text
frameworks/maturity-model/README.md
frameworks/maturity-model/ai-seos-maturity-model.md
frameworks/maturity-model/maturity-assessment-guide.md
frameworks/maturity-model/maturity-levels.md
templates/maturity/maturity-assessment-template.md
templates/maturity/maturity-improvement-backlog-template.md
```

## 9. Required ADR

Codex must create:

```text
adr/0039-adopt-ai-seos-maturity-model.md
```

ADR 0039 must explain why AI-SEOS needs progressive adoption levels instead of one mandatory process depth for all projects.

## 10. Definition of Done

The maturity model is complete when:

- levels M0 to M5 are documented;
- assessment dimensions exist;
- scoring model exists;
- templates exist;
- maturity anti-patterns are documented;
- ADR 0039 exists;
- README, framework catalog and roadmap reference the maturity model.
