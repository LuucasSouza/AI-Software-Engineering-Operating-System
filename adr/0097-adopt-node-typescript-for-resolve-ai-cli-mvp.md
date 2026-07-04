# ADR 0097 — Adopt Node TypeScript for Resolve Aí CLI MVP

## Status

Accepted

## Contexto

Phase 4 precisa entregar uma CLI real, local e simples, sem depender de APIs externas.

## Problema

O projeto precisava escolher uma base tecnológica com baixo atrito para usuários de terminal, VS Code, Codex e ecossistemas web.

## Alternativas consideradas

- Node.js com TypeScript.
- Python.
- Shell scripts.
- Framework CLI pesado.

## Decisão

Adotar Node.js com TypeScript como base canônica da CLI MVP.

## Consequências positivas

- Facilita distribuição futura via npm.
- Mantém compatibilidade com projetos web.
- Permite testes com Node local.
- Reduz atrito para evolução incremental.

## Consequências negativas

- Exige cuidado com build e tipos.
- Usuários fora do ecossistema Node precisarão de runtime Node instalado.

## Reversal plan

Se Node se mostrar inadequado, manter contratos de comandos e migrar implementação para outro runtime preservando `resolve-ai`.
