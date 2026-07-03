# ADR-0034 — Adopt Structured Handoff Packages

## Status

Accepted

## Context

Agentes precisam receber objetivo, contexto, decisões, constraints, riscos e done criteria em um pacote único.

## Decision

Adotar Handoff Package estruturado como formato padrão de transferência.

## Alternatives Considered

- Referenciar apenas documentos upstream.
- Usar mensagens livres.

## Consequences

Receivers podem aceitar, rejeitar ou apontar gaps explicitamente.

## Trade-offs

Duplica algum resumo contextual, mas reduz reinterpretação e perguntas repetidas.

## Reversibility

High. O template pode ser refinado sem quebrar o princípio.

## Related Artifacts

- `frameworks/handoff-framework/handoff-contract-model.md`
- `protocols/handoff/handoff-protocol.md`
