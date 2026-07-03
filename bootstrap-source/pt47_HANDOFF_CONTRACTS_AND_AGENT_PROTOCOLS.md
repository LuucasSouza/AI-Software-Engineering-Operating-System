---
title: Handoff Contracts and Agent Protocols
part: pt47
sprint: 4
version: 0.4.0
status: Draft for implementation
owner: AI-SEOS Core Team
last_updated: 2026-07-03
canonical_targets:
  - protocols/handoff/handoff-protocol.md
  - protocols/handoff/agent-handoff-protocol.md
  - protocols/handoff/phase-handoff-protocol.md
  - templates/handoff/handoff-package-template.md
  - templates/handoff/agent-handoff-template.md
  - templates/handoff/sprint-handoff-template.md
  - frameworks/handoff-framework/handoff-contract-model.md
---

# Handoff Contracts and Agent Protocols

## 1. Purpose

This file defines the concrete protocols and templates required to operationalize the Handoff Engine.

It standardizes how responsibility moves between phases, engines and agents.

## 2. Universal handoff protocol

Every handoff follows this procedure:

1. identify sender and receiver;
2. define objective;
3. gather source artifacts;
4. extract binding decisions;
5. extract constraints;
6. extract relevant risks;
7. define expected outputs;
8. define acceptance criteria;
9. define escalation triggers;
10. validate package;
11. deliver package;
12. receive acceptance or gap report;
13. track completion evidence.

## 3. Phase handoff protocol

Phase handoffs occur between engines.

Example:

Discovery Engine → Product Engine.

Required fields:

- phase completed;
- receiving phase;
- summary;
- artifacts produced;
- unresolved assumptions;
- decisions required next;
- risks requiring attention;
- recommended depth level;
- quality gate status.

## 4. Agent handoff protocol

Agent handoffs occur between specialized roles.

Example:

AI CTO → Implementation Lead.

Required fields:

- source agent;
- receiving agent;
- task objective;
- required context;
- files to inspect;
- files to update;
- constraints;
- expected output;
- review requirements;
- escalation triggers.

## 5. Sprint handoff protocol

Sprint handoffs occur between work cycles.

Required fields:

- sprint summary;
- completed work;
- incomplete work;
- created artifacts;
- updated artifacts;
- ADRs created;
- decisions made;
- risks discovered;
- validation status;
- next sprint recommendation.

## 6. Handoff contract model

A handoff contract defines obligations.

### Sender obligations

The sender must provide:

- truthful context;
- complete artifact references;
- explicit constraints;
- known risks;
- decision links;
- done criteria;
- open questions.

### Receiver obligations

The receiver must:

- validate understanding;
- identify gaps;
- follow constraints;
- preserve traceability;
- escalate when necessary;
- produce expected outputs;
- document deviations.

## 7. Template — Handoff Package

Create as `templates/handoff/handoff-package-template.md`.

```markdown
---
id: HOF-<ID>
title: <Handoff Title>
status: Draft
source: <Sender Role or Engine>
receiver: <Receiver Role or Engine>
created: <YYYY-MM-DD>
---

# HOF-<ID> — <Handoff Title>

## 1. Objective

<What responsibility is being transferred?>

## 2. Sender

<Who is sending this handoff?>

## 3. Receiver

<Who is expected to act on this handoff?>

## 4. Context Summary

<Concise but sufficient project context.>

## 5. Source Artifacts

| Artifact | Path | Required? |
|---|---|---|
| | | |

## 6. Binding Decisions

| Decision | ADR/Source | Impact |
|---|---|---|
| | | |

## 7. Assumptions

| Assumption | Confidence | Validation Needed |
|---|---|---|
| | | |

## 8. Constraints

- 

## 9. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| | | |

## 10. Expected Outputs

- 

## 11. Acceptance Criteria

- [ ] 

## 12. Quality Gates

- [ ] Completeness Gate
- [ ] Traceability Gate
- [ ] Safety Gate
- [ ] Acceptance Gate

## 13. Escalation Triggers

- 

## 14. Open Questions

- 

## 15. Receiver Acknowledgement

Decision: <Accepted | Rejected | Accepted with gaps>

Notes:
```

## 8. Template — Agent Handoff

Create as `templates/handoff/agent-handoff-template.md`.

```markdown
# Agent Handoff

## Source Agent

<Agent>

## Receiving Agent

<Agent>

## Mission

<What the receiving agent must accomplish.>

## Operating Mode

<Discovery | Product | Architecture | Decision | Risk | Optimization | Execution | Documentation | QA | Review>

## Required Context

- 

## Files to Read

- 

## Files to Create or Update

- 

## Constraints

- 

## Relevant ADRs

- 

## Quality Gates

- 

## Expected Final Report

The receiving agent must report:

- work completed;
- files changed;
- decisions made;
- risks found;
- validation status;
- remaining gaps.
```

## 9. Template — Sprint Handoff

Create as `templates/handoff/sprint-handoff-template.md`.

```markdown
# Sprint <N> Handoff

## 1. Sprint Summary

## 2. Completed Scope

## 3. Incomplete Scope

## 4. Created Artifacts

## 5. Updated Artifacts

## 6. ADRs Created

## 7. Decisions Made

## 8. Risks and Gaps

## 9. Validation Results

## 10. Recommended Next Sprint

## 11. Instructions for Next Execution
```

## 10. Handoff validation checklist

Create as `templates/handoff/handoff-validation-checklist.md`.

```markdown
# Handoff Validation Checklist

- [ ] Objective is clear
- [ ] Receiver is explicit
- [ ] Source artifacts are listed
- [ ] Binding decisions are listed
- [ ] Constraints are explicit
- [ ] Risks are included
- [ ] Expected outputs are defined
- [ ] Acceptance criteria are testable
- [ ] Escalation triggers are defined
- [ ] Receiver can proceed safely
```

## 11. Materialization requirements

During Sprint 4, Codex must create:

- `protocols/handoff/handoff-protocol.md`;
- `protocols/handoff/agent-handoff-protocol.md`;
- `protocols/handoff/phase-handoff-protocol.md`;
- `frameworks/handoff-framework/handoff-contract-model.md`;
- all templates listed above;
- README updates linking this system.
