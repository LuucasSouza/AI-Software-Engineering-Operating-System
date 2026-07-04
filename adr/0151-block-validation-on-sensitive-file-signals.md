# ADR 0151 — Block Validation on Sensitive File Signals

## Status

Accepted

## Contexto

Arquivos sensíveis podem aparecer durante execução assistida.

## Problema

Validar como aceitável um estado com `.env`, chaves ou dumps pode levar a vazamento.

## Opções consideradas

- Ignorar paths sensíveis.
- Alertar sem bloquear.
- Bloquear validação.

## Decisão

Bloquear validação quando nomes/caminhos sensíveis forem detectados.

## Consequências positivas

- Reduz risco de vazamento.
- Recomenda não commitar.
- Não copia conteúdo sensível.

## Consequências negativas

- Pode bloquear falsos positivos.

## Critérios de reversão

Revisar com configuração explícita de allowlist.

## Relação com outras ADRs

Relaciona-se às ADRs 0111 e 0141.
