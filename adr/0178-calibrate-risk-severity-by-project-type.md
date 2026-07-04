# ADR 0178 — Calibrate Risk Severity by Project Type

## Status

Accepted

## Contexto

Ausencia de testes ou CI em projeto novo nao deve assustar usuario como risco critico.

## Decisão

Calibrar severidade considerando tipo de projeto e manter risco alto/critico para sinais sensiveis por nome/caminho.

## Alternativas consideradas

- Manter todo gap como critico.
- Ignorar riscos em projetos novos.
- Bloquear sempre sem testes.

## Consequências

O CLI fica menos alarmista em projetos novos sem enfraquecer protecao contra secrets, dumps e dados sensiveis.

## Documentos relacionados

- `packages/resolve-ai-cli/src/core/planning-engine.ts`
- `packages/resolve-ai-cli/src/core/task-selection-engine.ts`
