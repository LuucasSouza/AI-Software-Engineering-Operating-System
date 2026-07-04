# pt180 — Phase 9 Handoff

## Phase
Phase 9 — Resolve Aí Guided Review and Validation

## Objective
Implement `resolve-ai validar` as the guided post-execution validation command.

## Required canonical files

### CLI source

```text
packages/resolve-ai-cli/src/commands/validar.ts
packages/resolve-ai-cli/src/core/validation-engine.ts
packages/resolve-ai-cli/src/core/validation-docs.ts
```

### CLI dist

```text
packages/resolve-ai-cli/dist/commands/validar.js
packages/resolve-ai-cli/dist/core/validation-engine.js
packages/resolve-ai-cli/dist/core/validation-docs.js
```

### Tests

```text
packages/resolve-ai-cli/tests/validar.test.ts
```

### Documentation

```text
docs/sprints/phase-9-handoff.md
docs/sprints/phase-9-validation-report.md
docs/sprints/phase-9-retrospective.md
```

### ADRs

```text
adr/0146-adopt-guided-validation-command.md
adr/0147-keep-validation-read-only-for-product-code.md
adr/0148-use-git-metadata-as-optional-evidence.md
adr/0149-generate-post-execution-docs-25-to-29.md
adr/0150-avoid-automatic-test-execution-in-phase-9.md
adr/0151-block-validation-on-sensitive-file-signals.md
adr/0152-preserve-human-approval-before-commit.md
adr/0153-adopt-validation-status-model.md
adr/0154-extend-runtime-state-with-ultima-validacao.md
adr/0155-defer-deep-semantic-validation.md
```

## Required generated docs in target projects

```text
docs/resolve-ai/25-relatorio-de-validacao.md
docs/resolve-ai/26-mudancas-detectadas.md
docs/resolve-ai/27-checklist-pos-execucao.md
docs/resolve-ai/28-riscos-pos-execucao.md
docs/resolve-ai/29-handoff-pos-validacao.md
```

## Required command behavior

```bash
resolve-ai validar
resolve-ai valida
resolve-ai revisar
```

## Required state update

```text
.resolve-ai/state.json → ultimaValidacao
```

## Required status update
`resolve-ai status` must show latest validation summary.

## Definition of Done

- [ ] `validar` command implemented.
- [ ] Aliases implemented.
- [ ] Docs 25 to 29 generated.
- [ ] No product code modified.
- [ ] Sensitive file names trigger blocked validation.
- [ ] Git metadata used only read-only.
- [ ] State updated with `ultimaValidacao`.
- [ ] Status displays validation summary.
- [ ] Tests added and passing.
- [ ] ADRs 0146 to 0155 created.
- [ ] Phase 9 reports created.
- [ ] README and package README updated.
- [ ] pt171 to pt180 preserved in bootstrap-source/.

## Recommended next phase
Phase 10 — Resolve Aí Release Hardening and Local CLI Usability

Potential focus:

- refine install instructions;
- improve package build automation;
- update local remote URL guidance;
- add smoke test script;
- prepare npm publication checklist;
- improve `.resolve-ai/config.json` versioning policy;
- optionally add `resolve-ai resumo` or `resolve-ai entregar` after validation.
