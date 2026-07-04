# ADR 0109 — Preserve docs/ai-seos as Legacy Without Automatic Migration

## Status

Accepted

## Contexto

Projetos antigos podem conter `docs/ai-seos/` por causa do nome técnico histórico.

## Decisão

O CLI detecta legado, mas não migra automaticamente na Phase 5.

## Consequências positivas

- Preserva histórico.
- Evita perda de contexto ou sobrescrita acidental.

## Consequências negativas

- Dois caminhos documentais podem coexistir temporariamente.

## Reversal plan

Implementar migração explícita com backup em fase futura.
