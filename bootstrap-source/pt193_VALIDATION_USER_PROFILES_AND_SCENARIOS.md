---
title: Validation User Profiles and Scenarios
status: Draft
version: 0.1.0-alpha
phase: 11
owner: Resolve Aí Maintainers
---

# Validation User Profiles and Scenarios

## Purpose

Define how Resolve Aí should be tested across its three public user profiles and the official project-entry flow.

## Profile 1 — Non-Technical Builder

### User description

A Brazilian user who has a real problem or idea but does not understand GitHub, Vercel, database, deploy or architecture.

### Validation goal

Check whether Resolve Aí can explain what is happening in plain Portuguese and generate documents that a non-technical person can understand.

### Scenario

```text
A person wants to create a tool to manage customer orders, payments and delivery status for a small business.
```

### Commands

The validator may run commands with assistance:

```bash
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai status
```

### Success criteria

- User understands what Resolve Aí is doing.
- User understands the next step.
- User does not feel forced to choose technical stack.
- Generated documents explain the problem and solution clearly.

## Profile 2 — Vibe Coder

### User description

A user building with Codex, Claude Code, Cursor, Gemini CLI or similar tools, but without strong engineering process.

### Validation goal

Check whether Resolve Aí reduces chaos and creates a safe path from idea to implementation.

### Scenario

```text
A partially built React/Vite app with weak docs, no tests and scattered decisions.
```

### Commands

```bash
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
```

### Success criteria

- User gets a clear backlog.
- User understands what not to do yet.
- Risks are visible.
- The prepared execution prompt is useful for an AI coding agent.

## Profile 3 — Professional Engineer

### User description

A developer, tech lead, principal engineer or architect.

### Validation goal

Check whether Resolve Aí adds enough engineering rigor to be useful rather than annoying.

### Scenario

```text
A mature codebase with stack, tests, CI or architecture docs, but incomplete delivery planning.
```

### Success criteria

- Stack detection is acceptable.
- Generated docs are not superficial.
- Risk and decision logs are technically relevant.
- Professional user trusts the safety boundaries.

## Official cross-profile flow

All profiles must converge into the same runtime flow:

```text
começar
↓
ligar
↓
diagnosticar
↓
planejar
↓
preparar
↓
resolver
↓
validar
↓
status
```

The difference is language, depth and recommended next action.

