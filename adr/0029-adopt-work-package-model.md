# ADR-0029 — Adopt Work Package Model

## Status

Accepted

## Context

Agentes de implementação precisam de unidades de trabalho pequenas, rastreáveis e revisáveis.

## Decision

Adotar Work Package como unidade padrão de execução.

## Alternatives Considered

- Usar tarefas livres.
- Usar apenas epics e user stories.

## Consequences

Cada unidade de implementação deve conter objetivo, contexto, constraints, outputs, tests, documentação e done evidence.

## Trade-offs

Mais preenchimento inicial, em troca de melhor handoff e revisão.

## Reversibility

High. O modelo pode ser ajustado por templates futuros.

## Related Artifacts

- `operating-system/execution/execution-object-model.md`
- `templates/execution/work-package-template.md`
