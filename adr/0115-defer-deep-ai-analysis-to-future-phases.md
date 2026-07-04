# ADR 0115 — Defer Deep AI Analysis to Future Phases

## Status

Accepted

## Contexto

O diagnóstico profundo com IA exigiria prompts, contexto, custo e segurança adicionais.

## Decisão

Phase 5 não embute IA nem API externa; o diagnóstico é local e heurístico.

## Consequências positivas

- Mantém privacidade local.
- Evita custos e dependência externa.
- Reduz escopo do MVP.

## Consequências negativas

- Algumas inferências permanecem superficiais.

## Reversal plan

Adicionar integração guiada com agentes em fases futuras, mantendo consentimento explícito.
