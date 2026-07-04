---
title: Feedback Capture and Triage
status: Draft
version: 0.1.0-alpha
phase: 11
owner: Resolve Aí Maintainers
---

# Feedback Capture and Triage

## Purpose

Create a repeatable process for collecting and triaging alpha feedback.

## Feedback categories

Use these categories:

```text
UX
Comando
Documentação
Diagnóstico
Planejamento
Segurança
Português/linguagem
Instalação
Bug
Melhoria
Bloqueador de release
```

## Feedback template

```markdown
# Alpha Feedback

## Perfil

- [ ] Non-Technical Builder
- [ ] Vibe Coder
- [ ] Professional Engineer

## Projeto testado

## Comandos executados

## O que funcionou bem?

## Onde travou?

## O que ficou confuso?

## O que pareceu perigoso?

## O que deveria ser mais simples?

## Você usaria de novo?

- [ ] Sim
- [ ] Talvez
- [ ] Não

## Nota de utilidade

0–10:

## Nota de clareza

0–10:

## Nota de confiança

0–10:
```

## Triage levels

### P0 — Release blocker

Blocks alpha release.

Examples:

- overwrites files unexpectedly;
- leaks sensitive file contents;
- command breaks basic flow;
- install instructions do not work.

### P1 — Must fix before public npm

Important but not blocking private alpha.

Examples:

- unclear command output;
- bad recommendation in common project;
- poor docs structure.

### P2 — Improve soon

Useful improvement.

### P3 — Later

Enhancement or nice-to-have.

## Required output

Create or update:

```text
docs/community/alpha-feedback-log.md
docs/community/alpha-feedback-triage.md
docs/community/alpha-improvement-backlog.md
```

