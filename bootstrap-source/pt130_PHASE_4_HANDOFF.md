# pt130 — Phase 4 Handoff

---
title: Phase 4 Handoff
phase: 4
status: Handoff Directive
---

## 1. Objetivo da Phase 4

Implementar o primeiro MVP real da CLI `resolve-ai`.

## 2. Diretórios obrigatórios

Criar ou atualizar:

```text
packages/resolve-ai-cli/
docs/runtime/
docs/sprints/
adr/
bootstrap-source/
```

## 3. Arquivos obrigatórios da CLI

```text
packages/resolve-ai-cli/package.json
packages/resolve-ai-cli/tsconfig.json
packages/resolve-ai-cli/README.md
packages/resolve-ai-cli/src/index.ts
packages/resolve-ai-cli/src/cli.ts
packages/resolve-ai-cli/src/commands/ajuda.ts
packages/resolve-ai-cli/src/commands/comecar.ts
packages/resolve-ai-cli/src/commands/ligar.ts
packages/resolve-ai-cli/src/commands/desligar.ts
packages/resolve-ai-cli/src/commands/status.ts
packages/resolve-ai-cli/src/core/paths.ts
packages/resolve-ai-cli/src/core/local-state.ts
packages/resolve-ai-cli/src/core/docs-writer.ts
packages/resolve-ai-cli/src/core/project-detector.ts
packages/resolve-ai-cli/src/core/output.ts
packages/resolve-ai-cli/src/types/runtime.ts
```

## 4. Testes obrigatórios

```text
packages/resolve-ai-cli/tests/local-state.test.ts
packages/resolve-ai-cli/tests/project-detector.test.ts
packages/resolve-ai-cli/tests/commands.test.ts
```

## 5. ADRs obrigatórias

```text
adr/0097-adopt-node-typescript-for-resolve-ai-cli-mvp.md
adr/0098-adopt-portuguese-first-cli-commands.md
adr/0099-adopt-modo-liga-desliga-as-runtime-control.md
adr/0100-adopt-project-local-resolve-ai-state.md
adr/0101-adopt-docs-resolve-ai-as-human-project-context.md
adr/0102-limit-phase-4-cli-to-non-destructive-commands.md
adr/0103-defer-mcp-and-hooks-to-future-phase.md
adr/0104-adopt-idempotent-cli-commands.md
adr/0105-adopt-cli-mvp-before-runtime-automation.md
```

## 6. Relatórios obrigatórios

```text
docs/sprints/phase-4-handoff.md
docs/sprints/phase-4-validation-report.md
docs/sprints/phase-4-retrospective.md
```

## 7. Quality Gates

- CLI package exists.
- Portuguese commands work.
- `começar/comecar` creates local structure.
- `ligar/desligar` persist active state.
- `status` handles non-started, active and inactive states.
- Existing files are not overwritten.
- No destructive behavior exists.
- Tests exist and run.
- ADRs exist.
- Documentation is updated.

## 8. Próxima fase recomendada

Após Phase 4, iniciar:

```text
Phase 5 — Resolve Aí Guided Diagnostics MVP
```

Objetivo da Phase 5:

- implementar `resolve-ai diagnosticar`;
- gerar documentos `docs/resolve-ai/00` a `09`;
- detectar projeto novo vs projeto em andamento;
- aplicar fluxo “Projeto em Andamento — Diagnóstico e Continuação”;
- manter Modo Liga/Desliga respeitado;
- ainda evitar alteração de código do produto.
