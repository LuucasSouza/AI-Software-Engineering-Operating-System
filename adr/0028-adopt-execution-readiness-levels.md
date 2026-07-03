# ADR-0028 — Adopt Execution Readiness Levels

## Status

Accepted

## Context

Projetos podem iniciar implementação antes de possuírem contexto suficiente.

## Decision

Adotar Execution Readiness Levels de ERL-0 a ERL-5.

## Alternatives Considered

- Usar apenas checklist binário.
- Permitir implementação com julgamento ad hoc.

## Consequences

Readiness passa a ser progressiva e auditável.

## Trade-offs

Adiciona uma camada de classificação, mas evita execução prematura.

## Reversibility

High. Os níveis podem ser renomeados ou refinados sem quebrar a estrutura.

## Related Artifacts

- `operating-system/execution/execution-readiness-gates.md`
- `templates/execution/execution-readiness-report-template.md`
