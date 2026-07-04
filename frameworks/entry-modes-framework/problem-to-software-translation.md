---
title: "Problem-to-Software Translation Framework"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Maintainers"
last_updated: "2026-07-03"
document_type: "Framework"
source: "bootstrap-source/pt67_MODE_ROUTER_AND_TRANSLATION_FRAMEWORK.md"
---

# Problem-to-Software Translation Framework

## Objetivo

Traduzir linguagem cotidiana em conceitos de engenharia sem forçar usuários a falarem como engenheiros.

## Pipeline

```mermaid
flowchart LR
    A[User Language] --> B[Real-World Object Detection]
    B --> C[Actor Detection]
    C --> D[Workflow Detection]
    D --> E[Data Detection]
    E --> F[Risk Detection]
    F --> G[Software Concept Mapping]
    G --> H[Discovery Intake Package]
```

## Translation Map

| User Says | AI-SEOS Interprets |
| --- | --- |
| I need to control clients | Customer entity, CRM-like workflow |
| I need to know who paid | Payment tracking, billing status |
| I need to schedule appointments | Calendar, availability, booking workflow |
| I need to send reminders | Notification workflow |
| I need my team to see it | Multi-user access, roles, permissions |
| I want to charge online | Payment integration, financial risk |

## Risk Translation

| Signal | Risk Flag |
| --- | --- |
| Stores personal information | Privacy / LGPD / GDPR |
| Handles payments | Financial integrity, reconciliation |
| Multiple people can edit | Authorization, audit trail |
| Public users register | Authentication, abuse prevention |

## Rule

The framework may identify candidate solution types, but must not finalize architecture or stack.
