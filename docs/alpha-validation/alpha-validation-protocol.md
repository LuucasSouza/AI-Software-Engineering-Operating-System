---
title: "Alpha Validation Protocol"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 11"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-04"
---

# Alpha Validation Protocol

## Objetivo

Definir o protocolo oficial para validar o Resolve Ai com usuarios reais ou cenarios representativos antes de publicacao npm.

## Escopo

Cada rodada deve avaliar instalacao local, clareza dos comandos em portugues, utilidade dos documentos gerados, seguranca operacional e confianca do usuario.

## Fluxo obrigatorio

```text
resolve-ai ajuda
resolve-ai comecar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

## Criterios observados

- O usuario entende o que aconteceu.
- O usuario sabe qual e o proximo passo.
- A CLI nao altera codigo do produto.
- Arquivos existentes nao sao sobrescritos por padrao.
- Conteudo sensivel nao e copiado para relatorios.
- O Modo Liga/Desliga fica claro.
- Os documentos em `docs/resolve-ai/` ajudam a continuar o projeto.

## Artefatos por cenario

Cada cenario deve registrar:

```text
00-scenario.md
01-setup.md
02-command-run-log.md
03-generated-docs-review.md
04-user-feedback.md
05-issues-found.md
06-readiness-score.md
07-recommendation.md
```

## Principios

- Evidencia observada vale mais que expectativa.
- P0 bloqueia release mesmo com score alto.
- Validacao simulada ajuda, mas nao substitui usuario real.

## Responsabilidades

O responsavel pela rodada deve registrar ambiente, comandos, resultado, achados e recomendacao final.

## Proximos passos

Expandir a validacao para projetos reais anonimizados antes da publicacao publica.
