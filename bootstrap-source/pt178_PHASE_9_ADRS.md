# pt178 — Phase 9 ADRs

## Objective
Create ADRs 0146 to 0155 for Phase 9.

## Required ADRs

### ADR 0146 — Adopt Guided Validation Command
Decision: introduce `resolve-ai validar` as the post-execution review command.

### ADR 0147 — Keep Validation Read-Only for Product Code
Decision: validation may write Resolve Aí docs/state but must not modify product code.

### ADR 0148 — Use Git Metadata as Optional Evidence
Decision: use safe read-only Git metadata when available, without requiring Git.

### ADR 0149 — Generate Post-Execution Docs 25 to 29
Decision: validation outputs are standardized as docs 25 through 29.

### ADR 0150 — Avoid Automatic Test Execution in Phase 9
Decision: Phase 9 recommends tests but does not run them automatically.

### ADR 0151 — Block Validation on Sensitive File Signals
Decision: sensitive file names/paths should block validation and warn the user.

### ADR 0152 — Preserve Human Approval Before Commit
Decision: Resolve Aí should not commit or approve commit automatically.

### ADR 0153 — Adopt Validation Status Model
Decision: validation statuses are `pendente`, `parcial`, `aprovada-com-ressalvas`, `bloqueada`.

### ADR 0154 — Extend Runtime State with `ultimaValidacao`
Decision: local state records the latest validation summary.

### ADR 0155 — Defer Deep Semantic Validation
Decision: semantic validation using AI/MCP/adapters is deferred to a future phase.

## ADR location

```text
adr/0146-*.md
...
adr/0155-*.md
```

## ADR update requirements
Update:

```text
adr/README.md
docs/architecture/decision-log.md
CHANGELOG.md
ROADMAP.md
```
