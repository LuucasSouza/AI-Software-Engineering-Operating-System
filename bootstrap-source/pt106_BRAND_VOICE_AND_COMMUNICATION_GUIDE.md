---
title: "Resolve Aí — Brand Voice and Communication Guide"
version: "0.1.0-alpha"
status: "Draft"
phase: "2.5"
owner: "Documentation Lead"
---

# Brand Voice and Communication Guide

## 1. Purpose

Resolve Aí must communicate clearly to both non-technical and technical audiences.

This document defines the voice, tone, vocabulary, and communication rules.

## 2. Core voice

Resolve Aí should sound like:

- a practical builder;
- a technical friend;
- a calm architect;
- a project organizer;
- a senior engineer who can explain things simply.

It should not sound like:

- a corporate consultant;
- an academic paper;
- a hype AI tool;
- a childish chatbot;
- a generic prompt pack.

## 3. Main sentence

Always preserve the emotional promise:

> Me dá o problema ou a ideia, e eu te ajudo a resolver.

This sentence can be used in README, website, docs, examples, and public positioning.

## 4. Language levels

### Level 1 — Non-technical

Use when speaking to people who do not code.

Prefer:

```text
O que você quer resolver?
```

Avoid:

```text
Quais são os requisitos funcionais e não funcionais?
```

### Level 2 — Vibe coder

Use when speaking to people who build with AI but need structure.

Prefer:

```text
Antes de pedir para a IA codar, vamos organizar o plano.
```

Avoid:

```text
Implemente uma arquitetura hexagonal com boundaries explícitos.
```

Unless needed and explained.

### Level 3 — Professional engineer

Use precise terms.

Include:

- ADR;
- domain model;
- architecture view;
- risk register;
- readiness score;
- quality gates;
- handoff contract.

## 5. Vocabulary mapping

| Technical term | Simple explanation |
|---|---|
| Repository | Pasta/projeto onde o código fica guardado |
| Deploy | Colocar o sistema no ar |
| Backend | Parte que guarda regras, dados e processamento |
| Frontend | Parte visual que o usuário vê |
| Database | Lugar onde as informações ficam salvas |
| API | Caminho para sistemas conversarem |
| Authentication | Login e controle de acesso |
| ADR | Registro do motivo de uma decisão técnica |
| Architecture | Como as partes do sistema se organizam |
| Handoff | Pacote para outra IA ou pessoa continuar o trabalho |

## 6. Communication rules

1. Start with the user problem.
2. Avoid unnecessary English when writing for Brazilian users.
3. Explain technical words before requiring decisions.
4. Never shame the user for not knowing technology.
5. Make the next action obvious.
6. Separate “what this means” from “what to do next”.
7. Keep engineering rigor under the surface even when the language is simple.

## 7. Examples

### Bad

```text
Configure your repo, initialize the framework and run the context package protocol.
```

### Better

```text
Abra a pasta do seu projeto no VS Code. Depois peça para o agente usar o Resolve Aí para analisar o projeto antes de mexer no código.
```

### Bad

```text
Choose a cloud deployment target.
```

### Better

```text
Você quer que esse sistema fique disponível na internet para outras pessoas acessarem?
```

## 8. Definition of Done

Brand voice is ready when public docs:

- explain the project without jargon;
- preserve technical depth in advanced sections;
- provide clear next steps;
- support the three entry modes.
