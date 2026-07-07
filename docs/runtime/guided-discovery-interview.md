---
title: "Guided Discovery Interview"
status: "Draft"
version: "0.1.0-alpha.0"
phase: "Phase 17"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-06"
---

# Guided Discovery Interview

## Purpose

`resolve-ai entrevistar` is the local guided interview for projects that start from an idea, an empty folder, or very little structure.

It exists because file-based diagnosis cannot understand intent when there is almost no project yet.

## Commands

- `resolve-ai entrevistar`
- `resolve-ai entrevista`
- `resolve-ai ideia`

## Behavior

The command asks for the idea, problem, audience, users, product type, initial strategy, MVP, out-of-scope items, preferred stack, avoided stack, constraints, sensitive-data context, success criteria, and preferred work mode.

It writes UTF-8 Markdown and updates:

- `docs/resolve-ai/00-project-intake.md`
- `docs/resolve-ai/02-discovery.md`
- `docs/resolve-ai/03-product-definition.md`
- `.resolve-ai/state.json`

## Safety

The interview is local and non-telemetric.

It must not request passwords, tokens, `.env` content, customer data, backups, API keys, or private data. Sensitive data should only be described at a high level.

## Overwrite Policy

Existing documents are not overwritten by default. If a document exists, the interview appends an `Entrevista guiada — Resolve Aí` section or preserves an existing interview section.

## Non-Interactive Mode

If the terminal does not provide answers through stdin, the command does not crash. It creates safe placeholder content and prints the questions so the user can fill the documents manually.


## After the Interview (Phase 17B)

Once `ultimaEntrevista` exists in `.resolve-ai/state.json`, all commands read the same derived context (`src/core/runtime-context.ts`):

- `diagnosticar` reports "Entrevista: feita" with the registered idea and stops recommending `resolve-ai entrevistar`.
- `planejar` extracts the project scope from the interview (name, MVP features, constraints, out-of-scope) and personalizes the plan and beginner backlog.
- `preparar` selects a concrete first MVP slice (for example, "Criar a primeira tela de \"Controle Simples de Gastos\"") and `resolver` keeps the same task title.
- `status` shows the flow "Projeto do Zero — Entrevista e Planejamento", the recommended profile, and a single primary next action.

Negated sensitive-data answers (such as "Não usar dados reais, senhas, tokens...") are not treated like critical risks. Public risk labels are always Portuguese: baixo, médio, alto, crítico.
