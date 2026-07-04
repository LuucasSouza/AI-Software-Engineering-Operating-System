# ADR 0150 — Avoid Automatic Test Execution in Phase 9

## Status

Accepted

## Contexto

Projetos analisados podem ter testes caros, destrutivos ou dependentes de ambiente.

## Problema

Executar testes automaticamente pode alterar estado, instalar dependências indiretamente ou falhar por ambiente.

## Opções consideradas

- Rodar testes automaticamente.
- Recomendar testes manualmente.
- Ignorar testes.

## Decisão

Phase 9 recomenda testes, mas não os executa automaticamente.

## Consequências positivas

- Evita efeitos colaterais.
- Mantém validação segura.
- Deixa controle com o usuário.

## Consequências negativas

- A validação não comprova funcionalidade automaticamente.

## Critérios de reversão

Revisar em fase futura com allowlist e confirmação explícita.

## Relação com outras ADRs

Relaciona-se à ADR 0144.
