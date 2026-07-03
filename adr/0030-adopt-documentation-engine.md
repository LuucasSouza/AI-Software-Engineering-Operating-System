# ADR-0030 — Adopt Documentation Engine

## Status

Accepted

## Context

Documentação no AI-SEOS é infraestrutura operacional, não complemento.

## Decision

Adotar Documentation Engine como engine oficial para governar lifecycle, quality gates, indexes, front matter e drift.

## Alternatives Considered

- Manter documentação apenas por convenção.
- Delegar documentação integralmente ao changelog e READMEs.

## Consequences

Documentação passa a ter lifecycle, object model e protocolos de manutenção.

## Trade-offs

Aumenta disciplina documental, mas reduz inconsistência e perda de conhecimento.

## Reversibility

Medium. A engine pode ser reduzida, mas padrões documentais devem permanecer.

## Related Artifacts

- `operating-system/documentation/documentation-engine.md`
- `docs/documentation/documentation-standards.md`
