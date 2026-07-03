---
title: System Review, Retrospective and Learning Playbook
part: pt49
sprint: 4
version: 0.4.0
status: Draft for implementation
owner: AI-SEOS Core Team
last_updated: 2026-07-03
canonical_targets:
  - playbooks/system-review/README.md
  - playbooks/system-review/sprint-retrospective-playbook.md
  - playbooks/system-review/architecture-reflection-playbook.md
  - playbooks/system-review/documentation-drift-review.md
  - protocols/reflection-review/reflection-review-protocol.md
  - templates/reflection/reflection-report-template.md
  - templates/reflection/improvement-backlog-template.md
  - templates/reflection/sprint-retrospective-template.md
---

# System Review, Retrospective and Learning Playbook

## 1. Purpose

This playbook operationalizes the Reflection Engine.

It defines how AI-SEOS reviews itself after sprints, architecture changes, handoffs, documentation updates and execution cycles.

## 2. Core rule

Every completed sprint must produce a reflection artifact.

A sprint without reflection is considered operationally incomplete.

## 3. Sprint retrospective playbook

### 3.1 Inputs

- sprint plan;
- sprint handoff;
- validation report;
- changelog;
- ADRs created;
- files created;
- files updated;
- unresolved risks;
- handoff results;
- user or maintainer feedback.

### 3.2 Procedure

1. summarize completed scope;
2. compare planned scope versus actual scope;
3. identify created artifacts;
4. validate quality gates;
5. identify decisions made;
6. identify new risks;
7. identify documentation drift;
8. identify protocol gaps;
9. identify agent behavior issues;
10. create improvement backlog items;
11. recommend next sprint adjustments.

### 3.3 Output

- Sprint Retrospective Report;
- Improvement Backlog updates;
- recommended ADRs if needed;
- recommended roadmap updates.

## 4. Architecture reflection playbook

Run when:

- a new architecture engine artifact is created;
- an ADR changes architecture;
- implementation deviates from architecture;
- scalability or security assumptions change.

Questions:

- Is the architecture still aligned with product scope?
- Are module boundaries still clear?
- Are decisions documented?
- Are trade-offs still valid?
- Has implementation created architectural drift?
- Do any ADRs need to be superseded?
- Are diagrams still accurate?
- Are integration contracts still valid?

## 5. Documentation drift review

Run when:

- a sprint ends;
- many files are added;
- README files change;
- ADRs are added;
- templates are added;
- repository structure changes.

Checklist:

- root README links to new major modules;
- directory README files mention new files;
- ADR index includes new ADRs;
- changelog includes meaningful changes;
- roadmap reflects sprint status;
- templates are discoverable;
- protocols link to templates;
- no obvious path mismatches;
- no stale references to removed files.

## 6. Handoff reflection playbook

Run when:

- a handoff is rejected;
- receiver asks repeated clarifying questions;
- implementation violates upstream constraints;
- QA finds misunderstood acceptance criteria;
- documentation agent updates wrong files.

Questions:

- Was the objective explicit?
- Were source artifacts listed?
- Were binding decisions included?
- Were constraints clear?
- Were risks visible?
- Were acceptance criteria testable?
- Were escalation triggers defined?
- Did the receiver acknowledge understanding?

## 7. Agent reflection playbook

Run when evaluating specialized agents.

Questions:

- Did the agent operate within its role boundaries?
- Did the agent use required inputs?
- Did the agent produce expected outputs?
- Did the agent respect ADRs?
- Did the agent update documentation?
- Did the agent escalate uncertainty?
- Did the agent invent unsupported context?
- Did the agent preserve traceability?

## 8. Template — Reflection Report

Create as `templates/reflection/reflection-report-template.md`.

```markdown
---
title: <Subject> Reflection Report
version: 0.1.0
status: Draft
owner: <Owner>
created: <YYYY-MM-DD>
---

# <Subject> Reflection Report

## 1. Trigger

<Why reflection was run.>

## 2. Scope Reviewed

- 

## 3. Evidence Reviewed

| Evidence | Path/Source | Notes |
|---|---|---|
| | | |

## 4. What Worked

- 

## 5. What Did Not Work

- 

## 6. Findings

| ID | Finding | Type | Severity | Evidence |
|---|---|---|---|---|
| F-001 | | | | |

## 7. Recommendations

| Recommendation | Owner | Priority | Target |
|---|---|---|---|
| | | | |

## 8. Improvement Backlog Items

- 

## 9. ADRs Needed

- 

## 10. Roadmap Impact

- 
```

## 9. Template — Improvement Backlog

Create as `templates/reflection/improvement-backlog-template.md`.

```markdown
# Improvement Backlog

| ID | Improvement | Source | Type | Priority | Owner | Target Sprint | Status |
|---|---|---|---|---|---|---|---|
| IMP-001 | | | | | | | |

## Types

- Documentation
- Template
- Protocol
- Engine
- Agent
- Governance
- Automation
- Example
- Validation
```

## 10. Template — Sprint Retrospective

Create as `templates/reflection/sprint-retrospective-template.md`.

```markdown
# Sprint <N> Retrospective

## 1. Sprint Goal

## 2. Completed Work

## 3. Planned vs Actual

## 4. Quality Gate Results

## 5. Decisions Made

## 6. Risks Discovered

## 7. Documentation Changes

## 8. Handoff Quality

## 9. What Worked

## 10. What Should Improve

## 11. Improvement Backlog

## 12. Next Sprint Recommendations
```

## 11. Reflection review protocol

Create as `protocols/reflection-review/reflection-review-protocol.md`.

```markdown
# Reflection Review Protocol

## Steps

1. Define reflection scope.
2. Collect evidence.
3. Classify findings.
4. Identify systemic causes.
5. Create recommendations.
6. Update improvement backlog.
7. Escalate governance issues.
8. Link outputs to roadmap.
9. Update sprint documentation.
10. Close reflection.
```

## 12. Materialization requirements

During Sprint 4, Codex must create:

- `playbooks/system-review/README.md`;
- `playbooks/system-review/sprint-retrospective-playbook.md`;
- `playbooks/system-review/architecture-reflection-playbook.md`;
- `playbooks/system-review/documentation-drift-review.md`;
- `protocols/reflection-review/reflection-review-protocol.md`;
- `templates/reflection/reflection-report-template.md`;
- `templates/reflection/improvement-backlog-template.md`;
- `templates/reflection/sprint-retrospective-template.md`.
