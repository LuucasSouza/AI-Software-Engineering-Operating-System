# ADR 0102 — Limit Phase 4 CLI to Non-Destructive Commands

## Status

Accepted

## Contexto

O primeiro MVP deve provar a experiência básica sem risco para projetos-alvo.

## Problema

Uma CLI nova poderia causar perda de confiança se alterasse código, dependências ou histórico Git cedo demais.

## Alternativas consideradas

- Implementar diagnóstico e alterações automáticas.
- Implementar comandos de setup não destrutivos.
- Implementar integração com agentes desde o MVP.

## Decisão

Limitar a Phase 4 a comandos não destrutivos que criam estado e documentação mínima sem sobrescrever arquivos existentes.

## Consequências positivas

- Reduz risco.
- Facilita testes em projetos reais.
- Mantém confiança no runtime.

## Consequências negativas

- Valor funcional ainda é inicial.
- Diagnóstico completo fica para fase posterior.

## Reversal plan

Adicionar comandos mais avançados em fases futuras mantendo guards e confirmação explícita.
