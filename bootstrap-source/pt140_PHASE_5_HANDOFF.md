# pt140 — Phase 5 Handoff

```yaml
title: Phase 5 Handoff — Guided Diagnostics MVP
phase: 5
status: Ready for execution
previous_phase: Phase 4 — CLI MVP Implementation
next_phase: Phase 6 — Guided Planning and Implementation Prep
```

## 1. Objetivo da Phase 5

Implementar o comando:

```bash
resolve-ai diagnosticar
```

Esse comando deve transformar o Resolve Aí de um CLI básico em uma ferramenta útil para diagnosticar projetos reais.

## 2. Arquivos canônicos esperados

### Código

```text
packages/resolve-ai-cli/src/commands/diagnosticar.ts
packages/resolve-ai-cli/src/core/project-inspector.ts
packages/resolve-ai-cli/src/core/project-detector.ts
packages/resolve-ai-cli/src/core/diagnostic-docs.ts
packages/resolve-ai-cli/src/core/recommendation-engine.ts
packages/resolve-ai-cli/src/core/safe-file-reader.ts
```

A estrutura exata pode variar se o pacote existente usar outra organização, desde que a separação de responsabilidades seja preservada.

### Testes

```text
packages/resolve-ai-cli/src/__tests__/diagnosticar.test.ts
```

ou equivalente conforme padrão existente.

### Documentação gerada/atualizada

```text
packages/resolve-ai-cli/README.md
README.md
ROADMAP.md
CHANGELOG.md
adr/README.md
docs/architecture/decision-log.md
docs/sprints/phase-5-handoff.md
docs/sprints/phase-5-validation-report.md
docs/sprints/phase-5-retrospective.md
```

### ADRs

```text
adr/0106-adopt-diagnosticar-as-first-useful-runtime-command.md
adr/0107-adopt-read-only-diagnostic-execution-model.md
adr/0108-adopt-docs-resolve-ai-diagnostic-output-standard.md
adr/0109-preserve-docs-ai-seos-as-legacy-without-automatic-migration.md
adr/0110-adopt-heuristic-project-detection.md
adr/0111-adopt-safe-sensitive-file-detection-by-name-only.md
adr/0112-adopt-non-overwrite-default-for-diagnostic-documents.md
adr/0113-adopt-portuguese-first-diagnostic-ux.md
adr/0114-adopt-local-state-updates-after-diagnostics.md
adr/0115-defer-deep-ai-analysis-to-future-phases.md
```

## 3. Quality Gates

A Phase 5 só passa se:

- `resolve-ai diagnosticar` funciona.
- `resolve-ai diagnostico` funciona.
- `docs/resolve-ai/00` a `09` são criados.
- Arquivos existentes não são sobrescritos.
- `.resolve-ai/state.json` é atualizado.
- `resolve-ai status` mostra último diagnóstico.
- Testes automatizados passam.
- Nenhuma API externa é chamada.
- Nenhuma telemetria é adicionada.
- Nenhum MCP/hook é implementado.
- Documentos e ADRs são criados.

## 4. Definition of Done

- Código implementado.
- Testes passando.
- Documentação atualizada.
- ADRs 0106 a 0115 criadas.
- pt131 a pt140 preservados em `bootstrap-source/`.
- Commit criado.
- Push realizado se remoto existir.
- Relatório final gerado.

## 5. Próxima fase recomendada

Após a Phase 5, iniciar:

```text
Phase 6 — Resolve Aí Guided Planning and Implementation Prep
```

Objetivo futuro:

- Criar comando `resolve-ai planejar`.
- Ler `docs/resolve-ai/`.
- Gerar plano incremental de implementação.
- Criar backlog estruturado.
- Preparar prompts para agentes de IA.
- Ainda sem alterar código automaticamente.

## 6. Nota de produto

A Phase 5 deve manter o Resolve Aí simples e brasileiro.

Mensagem esperada para usuário:

```text
Diagnóstico pronto. Agora eu já entendi melhor esse projeto.
O próximo passo recomendado está em docs/resolve-ai/09-handoff.md.
```
