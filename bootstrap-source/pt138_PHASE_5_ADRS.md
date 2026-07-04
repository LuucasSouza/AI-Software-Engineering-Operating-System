# pt138 — Phase 5 ADRs

```yaml
title: Phase 5 ADR Plan
phase: 5
status: Draft for execution
adr_range: 0106-0115
```

## ADRs obrigatórias

Criar ADRs 0106 a 0115.

### ADR 0106 — Adopt `diagnosticar` as first useful runtime command

Decisão:

O primeiro comando funcional de valor real do Resolve Aí será `resolve-ai diagnosticar`.

Motivo:

Projetos existentes precisam de entendimento antes de alteração.

### ADR 0107 — Adopt read-only diagnostic execution model

Decisão:

Diagnóstico deve ser seguro, local e não destrutivo.

### ADR 0108 — Adopt `docs/resolve-ai/` diagnostic output standard

Decisão:

Documentos de diagnóstico gerados pelo runtime vivem em `docs/resolve-ai/`.

### ADR 0109 — Preserve `docs/ai-seos/` as legacy without automatic migration

Decisão:

O CLI detecta legado, mas não migra automaticamente na Phase 5.

### ADR 0110 — Adopt heuristic project detection

Decisão:

O MVP usa heurísticas locais para detectar tipo de projeto, stack e modo recomendado.

### ADR 0111 — Adopt safe sensitive-file detection by name only

Decisão:

Arquivos sensíveis podem ser detectados por nome/caminho, mas conteúdo não deve ser copiado.

### ADR 0112 — Adopt non-overwrite default for diagnostic documents

Decisão:

O comando não sobrescreve documentos existentes por padrão.

### ADR 0113 — Adopt Portuguese-first diagnostic UX

Decisão:

A experiência pública do comando deve ser em português, leve e brasileira.

### ADR 0114 — Adopt local state updates after diagnostics

Decisão:

O comando atualiza `.resolve-ai/state.json` com resumo do diagnóstico.

### ADR 0115 — Defer deep AI analysis to future phases

Decisão:

A Phase 5 não embute IA nem API externa; o diagnóstico é local e heurístico.

## Atualizações obrigatórias

Atualizar:

- `adr/README.md`
- `docs/architecture/decision-log.md`
- `CHANGELOG.md`
