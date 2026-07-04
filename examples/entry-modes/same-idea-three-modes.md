---
title: "Same Idea Across Three Entry Modes"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Example Maintainers"
last_updated: "2026-07-03"
document_type: "Example"
source: "bootstrap-source/pt69_ENTRY_MODE_EXAMPLES_AND_ANTI_PATTERNS.md"
---

# Same Idea Across Three Entry Modes

## Raw Idea

> I want a system to organize customer orders for my small store.

## Non-Technical Builder

The system starts with plain-language workflow questions:

- Where do orders arrive today: WhatsApp, Instagram, phone, paper, spreadsheet or another system?
- What information do you need for each order?
- Who updates the order status?
- Do you need to know whether the customer paid?
- What would be the simplest version that already helps this week?

Avoid database names, deployment providers and acronyms.

## Vibe Coder

The system creates controlled build phases:

1. Project setup and README.
2. Customer and order model.
3. Order list and status update.
4. Simple dashboard.
5. Validation and deploy.

Each phase gets a Codex-ready prompt and validation checkpoint.

## Professional Engineer

The system produces technical framing:

- Domain candidates: Customer, Order, OrderItem, PaymentStatus, OrderStatus.
- Architecture consideration: modular monolith is sufficient for MVP.
- ADR candidates: data store selection, authentication model, order status model, notification deferral.
- Risk flags: payment tracking accuracy, authorization, backup, customer personal data.

## Positive Pattern

Adapt language to user maturity. Preserve engineering quality internally. Produce normalized artifacts for downstream engines.
