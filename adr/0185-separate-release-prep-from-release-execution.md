# ADR 0185 — Separate Release Prep From Release Execution

## Status

Accepted

## Contexto

Preparar um release e executar publicacao sao atividades com riscos diferentes.

## Decisão

Separar Phase 12 como release prep e deixar publicacao/tag para fase futura, se aprovada.

## Alternativas consideradas

- Preparar e publicar na mesma fase.
- Publicar imediatamente apos testes.
- Adiar toda preparacao.

## Consequências

O projeto ganha decisao formal antes de qualquer acao publica irreversivel.

## Documentos relacionados

- `docs/release/v0.1.0-alpha-go-no-go-decision.md`
- `docs/sprints/phase-12-handoff.md`
