# ADR 0155 — Defer Deep Semantic Validation

## Status

Accepted

## Contexto

Phase 9 valida por paths, Git metadata e documentos locais.

## Problema

Validação semântica profunda exigiria análise de conteúdo, execução de testes ou IA/adapters.

## Opções consideradas

- Implementar semântica profunda agora.
- Usar apenas heurística segura.
- Chamar IA externa.

## Decisão

Adiar validação semântica profunda para fase futura.

## Consequências positivas

- Evita chamadas externas.
- Não lê conteúdo sensível.
- Mantém Phase 9 simples e segura.

## Consequências negativas

- A confiança permanece limitada.

## Critérios de reversão

Revisar quando houver MCP/adapters, política de privacidade e autorização explícita.

## Relação com outras ADRs

Relaciona-se às ADRs 0148 e 0150.
