# pt128 — Phase 4 ADRs

---
title: Phase 4 ADRs
phase: 4
status: Draft Implementation Directive
adr_range: 0097-0105
---

## 1. Objetivo

Criar ADRs para as decisões estruturais da implementação inicial da CLI.

## 2. ADRs obrigatórias

Criar:

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

## 3. Padrão mínimo de cada ADR

Cada ADR deve conter:

- Status
- Contexto
- Problema
- Alternativas consideradas
- Decisão
- Consequências positivas
- Consequências negativas
- Reversal plan

## 4. Decisões esperadas

A Phase 4 deve registrar que:

- a CLI MVP será simples;
- comandos serão em português;
- `resolve-ai começar` não altera código do produto;
- `ligar/desligar` controla estado persistido;
- MCP e hooks ficam para depois;
- experiência brasileira é prioridade pública.
