---
title: "Real and Simulated Project Test Plan"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 11"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-04"
---

# Real and Simulated Project Test Plan

## Objetivo

Definir como testar Resolve Ai em projetos reais ou simulados sem expor dados sensiveis nem alterar codigo de produto.

## Escopo

Inclui diretorio vazio, Node fake, Vite/React fake, projeto em andamento e projeto legado ou baguncado.

## Cenarios minimos locais

| Cenario | Perfil primario | Resultado esperado |
|---|---|---|
| Diretorio vazio | Non-Technical Builder | Baixo contexto, recomendacao de discovery e criacao segura de docs |
| Node fake | Professional Engineer | Deteccao de package.json e plano incremental |
| Vite/React fake | Vibe Coder | Deteccao de React/Vite e backlog orientado a reduzir caos |

## Cenarios futuros com usuario real

- Projeto em andamento anonimo.
- Projeto legado com estrutura ambigua.
- Projeto profissional com testes, README e CI.

## Regras de seguranca

- Nao instalar dependencias no projeto analisado.
- Nao copiar conteudo de secrets, dumps ou dados pessoais.
- Nao fazer commit, tag, push ou deploy no projeto analisado.
- Registrar caminhos suspeitos sem conteudo.

## Responsabilidades

Cada executor deve registrar ambiente, comandos, arquivos gerados, achados e recomendacao.

## Proximos passos

Reexecutar a matriz em projetos reais voluntarios antes da publicacao npm.
