# ADR 0146 — Adopt Guided Validation Command

## Status

Accepted

## Contexto

Após `resolver`, o usuário ou agente externo pode alterar o projeto. O Resolve Aí precisa revisar evidências antes de commit ou deploy.

## Problema

Sem validação guiada, o fluxo termina no prompt de execução e deixa riscos, diffs e próximos passos sem registro.

## Opções consideradas

- Encerrar no `resolver`.
- Criar `resolve-ai validar`.
- Executar testes automaticamente.

## Decisão

Introduzir `resolve-ai validar` como comando de revisão pós-execução.

## Consequências positivas

- Fecha o primeiro ciclo runtime prático.
- Cria evidência antes de commit.
- Mantém revisão em português e com linguagem acessível.

## Consequências negativas

- A validação ainda é heurística.

## Critérios de reversão

Revisar se o comando for substituído por fluxo interativo mais robusto.

## Relação com outras ADRs

Relaciona-se às ADRs 0144 e 0145.
