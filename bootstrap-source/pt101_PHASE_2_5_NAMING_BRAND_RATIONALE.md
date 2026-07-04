---
title: "Phase 2.5 — Naming, Brand and Product Positioning Rationale"
version: "0.1.0-alpha"
status: "Draft"
phase: "2.5"
owner: "Principal Maintainer"
---

# Phase 2.5 — Naming, Brand and Product Positioning Rationale

## 1. Purpose

This document defines why Phase 2.5 exists and why it must happen before Runtime Productization.

The project started under the technical name **AI Software Engineering Operating System (AI-SEOS)**. That name is precise, but it is too technical for the broader audience the project now intends to serve.

The project now needs a public-facing identity that works for:

- Non-technical builders;
- vibe coders;
- professional engineers;
- AI coding agents;
- open-source contributors;
- future users of the CLI/runtime layer.

The chosen public name is:

# Resolve Aí

Primary promise:

> Me dá o problema ou a ideia, e eu te ajudo a resolver.

## 2. Why this phase exists

Originally, the next major phase after Phase 2 was expected to be Runtime Productization.

However, Runtime Productization will introduce commands, installation flows, project adapters, agent instructions, and possibly MCP tooling. If the project enters that phase still using the name AI-SEOS everywhere, the runtime will be born with a name that is harder to remember, harder to explain, and less approachable for non-technical users.

Therefore, Phase 2.5 is a controlled branding and positioning phase inserted between:

```text
Phase 2 — Validation and Productization
Phase 3 — Runtime Productization
```

The purpose is not cosmetic. It is architectural and product-oriented.

The name affects:

- CLI command naming;
- README language;
- onboarding flow;
- documentation hierarchy;
- public adoption;
- mental model;
- user trust;
- accessibility for non-technical builders.

## 3. Why not wait until after Phase 3

Waiting would create avoidable migration cost.

If Phase 3 creates a CLI, MCP server, configuration files, agent instructions, examples, and commands under the AI-SEOS identity, the project would later need to rename:

- package names;
- commands;
- documentation references;
- examples;
- setup instructions;
- issue templates;
- release notes;
- community language.

This would create unnecessary churn before the first public alpha.

Phase 2.5 prevents that.

## 4. Brand decision

The public name is:

```text
Resolve Aí
```

The recommended technical command/package identity is:

```text
resolve-ai
```

The former technical name remains useful during transition:

```text
AI-SEOS = legacy technical architecture name
Resolve Aí = public product/framework name
```

For a transition period, documentation may say:

```text
Resolve Aí, formerly AI-SEOS
```

## 5. Positioning

Resolve Aí is not only for programmers.

It is for anyone who has a problem or an idea and wants to transform it into a structured software solution with AI.

Short positioning:

> Resolve Aí is a practical framework that turns problems, ideas, and existing projects into clear plans for building software with AI.

Portuguese positioning:

> Resolve Aí é um framework para transformar problemas, ideias e projetos existentes em soluções digitais bem planejadas com IA.

## 6. Scope of Phase 2.5

Phase 2.5 must:

- formalize the new name;
- define the migration strategy;
- define tagline, promise, tone, and positioning;
- update the roadmap;
- update README and public-facing documents;
- define naming conventions for future runtime commands;
- define how AI-SEOS references should be migrated;
- create ADRs for the naming decision;
- prepare Phase 3 Runtime Productization under the Resolve Aí identity.

## 7. Non-scope

Phase 2.5 does not implement the CLI runtime.

It does not build the MCP server.

It does not remove every AI-SEOS reference immediately if those references are historically relevant.

It does not rewrite the whole repository blindly.

It creates a safe migration strategy.

## 8. Definition of Done

Phase 2.5 is done when:

- the name Resolve Aí is official;
- README explains the new identity;
- roadmap includes Phase 2.5 and moves Runtime Productization after it;
- a migration guide exists;
- brand voice is documented;
- future CLI command naming is defined;
- ADRs are created;
- old AI-SEOS references are classified as legacy, historical, or to-be-renamed;
- Phase 3 handoff is updated to use Resolve Aí.
