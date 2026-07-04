# ADR 0104 — Adopt Idempotent CLI Commands

## Status

Accepted

## Contexto

Usuários podem rodar comandos mais de uma vez em projetos reais.

## Problema

Comandos que sobrescrevem arquivos ou falham em reexecução tornam a CLI insegura.

## Alternativas consideradas

- Falhar se arquivos já existirem.
- Sobrescrever arquivos existentes.
- Manter comandos idempotentes.

## Decisão

Todos os comandos do MVP devem ser idempotentes e não sobrescrever arquivos existentes.

## Consequências positivas

- Reexecução segura.
- Menos risco de perda de documentação.
- Testes mais previsíveis.

## Consequências negativas

- Atualizações automáticas de templates existentes não acontecem no MVP.

## Reversal plan

Adicionar comando explícito de upgrade/migração no futuro com backup e confirmação.
