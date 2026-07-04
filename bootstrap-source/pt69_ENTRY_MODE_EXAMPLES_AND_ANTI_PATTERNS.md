---
title: Entry Mode Examples and Anti-Patterns
version: 0.1.0
status: Draft
sprint: 5.5
module: Entry Modes Layer
owner: AI-SEOS Maintainers
last_updated: 2026-07-03
---


# Entry Mode Examples and Anti-Patterns

## 1. Objective

This document defines initial examples and anti-patterns for the Entry Modes Layer.

The examples are intentionally simple because their purpose is to validate mode behavior before Sprint 6 creates complete template packs and Sprint 7 creates full case studies.

## 2. Same Idea, Three Modes

Raw idea:

> I want a system to organize customer orders for my small store.

## 3. Non-Technical Builder Response

The system should respond:

> Let us understand how your store works today before choosing technology.
>
> 1. Where do orders arrive today: WhatsApp, Instagram, phone, paper, spreadsheet or another system?
> 2. What information do you need for each order?
> 3. Who updates the order status?
> 4. Do you need to know whether the customer paid?
> 5. Do you need to notify the customer?
> 6. What would be the simplest version that already helps you this week?

The output should avoid:

- database names;
- deployment providers;
- technical acronyms;
- advanced architecture.

## 4. Vibe Coder Response

The system should respond:

> We can build this as a small web app in phases. Do not generate the whole app in one prompt.
>
> Phase 1: project setup and README.
> Phase 2: customer and order model.
> Phase 3: order list and status update.
> Phase 4: simple dashboard.
> Phase 5: validation and deploy.

It should generate Codex-ready prompts and validation checkpoints.

## 5. Professional Engineer Response

The system should respond:

> Initial domain candidates: Customer, Order, OrderItem, PaymentStatus, OrderStatus.
>
> Architecture consideration: modular monolith is sufficient for MVP.
>
> ADR candidates: data store selection, authentication model, order status model, notification integration deferral.
>
> Risk flags: payment tracking accuracy, authorization, data backup, customer personal data.

## 6. Anti-Pattern: Wrong Mode for User

Bad response to non-technical builder:

> Use Next.js, Supabase, Prisma, PostgreSQL and Vercel.

Why it is bad:

- starts with tools before problem;
- assumes technical vocabulary;
- may intimidate the user;
- may create premature architecture.

## 7. Anti-Pattern: Vibe Coding Without Guardrails

Bad response:

> Create the entire SaaS with login, payments, dashboard, admin, analytics and deploy.

Why it is bad:

- too large;
- hard to validate;
- invites AI hallucination;
- creates hidden coupling;
- makes debugging difficult.

## 8. Anti-Pattern: Professional Mode Too Generic

Bad response:

> Use best practices and scalable architecture.

Why it is bad:

- no alternatives;
- no constraints;
- no trade-offs;
- no ADRs;
- no risk analysis.

## 9. Positive Pattern

The best pattern is:

```text
Adapt language to user maturity.
Preserve engineering quality internally.
Produce normalized artifacts for downstream engines.
```

## 10. Future Sprint 7 Expansion

Sprint 7 should expand these examples into full case studies:

- small store order management;
- martial arts academy SaaS;
- freelancer invoice tracker;
- internal team task tracker;
- appointment scheduling system;
- marketplace MVP;
- AI-enabled support assistant.
