# ADR 0101 — Adopt docs/resolve-ai as Human Project Context

## Status

Accepted

## Contexto

Phase 3 definiu `docs/resolve-ai/` como caminho público preferido.

## Problema

Usuários e agentes precisam de documentos humanos versionáveis sem misturar com estado operacional.

## Alternativas consideradas

- Usar apenas `.resolve-ai/`.
- Continuar usando `docs/ai-seos/`.
- Usar `docs/resolve-ai/`.

## Decisão

Criar `docs/resolve-ai/README.md`, `00-project-intake.md` e `09-handoff.md` no MVP.

## Consequências positivas

- Documentação humana clara.
- Caminho alinhado ao nome público Resolve Aí.
- Base para diagnóstico guiado futuro.

## Consequências negativas

- Projetos com `docs/ai-seos/` terão dois caminhos até migração futura.

## Reversal plan

Criar protocolo de migração explícito em fase futura sem migração automática no MVP.
