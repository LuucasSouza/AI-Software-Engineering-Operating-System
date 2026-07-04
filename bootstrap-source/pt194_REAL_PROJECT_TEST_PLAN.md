---
title: Real Project Test Plan
status: Draft
version: 0.1.0-alpha
phase: 11
owner: Resolve Aí Maintainers
---

# Real Project Test Plan

## Purpose

Define how to test Resolve Aí in real or representative projects without exposing sensitive data or damaging user work.

## Test project categories

### 1. Empty project

Goal: verify new project behavior.

Expected:

- `resolve-ai começar` creates `.resolve-ai/` and `docs/resolve-ai/`.
- `diagnosticar` identifies low context and recommends discovery.
- `planejar` warns about low confidence.

### 2. Basic Node project

Goal: verify package detection.

Expected:

- detects Node/package.json;
- identifies missing docs/tests if applicable;
- generates useful docs 00–09.

### 3. Vite/React project

Goal: validate common vibe coder case.

Expected:

- detects React/Vite/TypeScript when present;
- recommends Vibe Coder or Professional Engineer depending on maturity;
- generates backlog and execution prep.

### 4. Existing in-progress product

Goal: validate the official flow:

```text
Projeto em Andamento — Diagnóstico e Continuação
```

Expected:

- detects existing state;
- does not treat project as greenfield;
- prioritizes risk and verification before new features;
- creates continuation plan.

### 5. Messy/legacy project

Goal: validate safety and ambiguity handling.

Expected:

- recommends documentation first;
- detects possible sensitive files by path/name;
- avoids copying file contents;
- produces stabilization plan.

## Mandatory test matrix

| Scenario | começar | ligar | diagnosticar | planejar | preparar | resolver | validar | status |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Empty | Required | Required | Required | Required | Optional | Optional | Optional | Required |
| Node | Required | Required | Required | Required | Required | Required | Required | Required |
| React/Vite | Required | Required | Required | Required | Required | Required | Required | Required |
| Existing | Required | Required | Required | Required | Required | Required | Required | Required |
| Legacy | Required | Required | Required | Required | Required | Optional | Required | Required |

## Data safety

Do not include real sensitive file contents in committed validation docs.

Allowed:

```text
Detected possible sensitive file path: backups/users.csv
```

Not allowed:

```text
CPF, email, phone, token or database dump contents.
```

## Output folder

Validation reports must live in:

```text
docs/alpha-validation/
```

