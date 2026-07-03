# ADR-0032 — Adopt Information Architecture Standard

## Status

Accepted

## Context

O repositório cresce rapidamente e precisa permanecer navegável.

## Decision

Adotar padrão de information architecture por níveis: root, domain indexes, module indexes, canonical documents e generated artifacts.

## Alternatives Considered

- Organizar documentos por ordem de criação.
- Criar apenas diretórios por sprint.

## Consequences

Contribuidores e agentes encontram o local correto para criar e revisar documentos.

## Trade-offs

Exige manutenção de índices, mas reduz duplicação e confusão.

## Reversibility

Medium. Reorganizações futuras exigiriam migração de links.

## Related Artifacts

- `docs/documentation/information-architecture.md`
- `REPOSITORY_STRUCTURE.md`
