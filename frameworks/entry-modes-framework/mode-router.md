---
title: "Mode Router"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Maintainers"
last_updated: "2026-07-03"
document_type: "Framework"
source: "bootstrap-source/pt67_MODE_ROUTER_AND_TRANSLATION_FRAMEWORK.md"
---

# Mode Router

## Objetivo

Selecionar o modo de entrada correto por escolha explícita ou inferência.

## Explicit Selection

1. I am not technical and want help turning a problem into a software solution.
2. I use AI tools to build and want a practical guided plan.
3. I am a developer or technical professional and want complete engineering artifacts.

## Inferred Signals

| Signal | Likely Mode |
| --- | --- |
| I do not know how to program | Non-Technical Builder |
| I want something to solve my daily problem | Non-Technical Builder |
| Give me a prompt for Codex | Vibe Coder |
| I am building with Cursor | Vibe Coder |
| Generate ADRs and architecture | Professional Engineer |
| We need multi-tenant architecture | Professional Engineer |

## Mode Switching

Mode switching must be explicit and recorded in generated artifacts.
