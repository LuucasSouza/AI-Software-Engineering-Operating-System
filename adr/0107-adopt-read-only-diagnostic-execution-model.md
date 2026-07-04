# ADR 0107 — Adopt Read-Only Diagnostic Execution Model

## Status

Accepted

## Contexto

Diagnóstico em projetos reais pode ser arriscado se alterar código ou executar scripts.

## Decisão

O diagnóstico deve ser local, seguro e não destrutivo.

## Consequências positivas

- Reduz risco em projetos de usuários.
- Evita instalação de dependências, commits e execução de scripts.

## Consequências negativas

- O comando não corrige problemas automaticamente.

## Reversal plan

Adicionar comandos de execução separados, com confirmação explícita e ADR própria.
