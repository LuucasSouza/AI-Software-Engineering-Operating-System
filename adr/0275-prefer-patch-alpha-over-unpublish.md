# ADR 0275 — Prefer Patch Alpha Over Unpublish

## Status

Accepted

## Context

`npm unpublish` tem janela e política restritas e quebra quem já instalou a versão. Com o pacote público, o projeto precisa de uma ordem de preferência clara para correções pós-publicação.

## Decision

Ordem de preferência para problemas pós-publicação (pt286, rollback-plan.md):

1. corrigir documentação;
2. ajustar dist-tag (`npm dist-tag`);
3. publicar patch alpha (`0.1.0-alpha.1`, `--tag alpha`);
4. deprecar versão problemática (`npm deprecate resolve-ai@<versão> "Alpha release superseded. Please install resolve-ai@alpha for the latest alpha."`);
5. `npm unpublish` somente se estritamente necessário (dados sensíveis) e permitido pela política do npm.

## Consequences

### Positive

- Instalações existentes não quebram; histórico permanece rastreável.

### Negative

- Versões com defeito ficam visíveis (deprecadas) no registro.

### Neutral

- Cada ação de correção é registrada no changelog e no publication-execution-report.

## Alternatives Considered

- Unpublish como primeira resposta: rejeitado; janela limitada e efeito destrutivo.

## Follow-up

Aplicar esta ordem em qualquer incidente do v0.1.0-alpha.
