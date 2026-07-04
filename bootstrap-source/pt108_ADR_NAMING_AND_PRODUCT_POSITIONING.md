---
title: "ADR Pack — Naming and Product Positioning"
version: "0.1.0-alpha"
status: "Draft"
phase: "2.5"
owner: "Architecture Decision Lead"
---

# ADR Pack — Naming and Product Positioning

## 1. Purpose

This document defines the ADRs that must be created during Phase 2.5.

## 2. Required ADRs

Create ADRs 0081 to 0086.

## ADR 0081 — Adopt Resolve Aí as Public Project Name

### Context

The project started as AI-SEOS, a technically accurate name but difficult for broad public adoption.

### Decision

Adopt **Resolve Aí** as the public name.

### Consequences

- More accessible to non-technical builders;
- stronger Brazilian identity;
- easier to explain;
- requires controlled migration from AI-SEOS.

## ADR 0082 — Keep AI-SEOS as Historical Technical Name During Transition

### Context

Existing documentation, ADRs, sprint reports, and source files refer to AI-SEOS.

### Decision

Keep AI-SEOS references where historically relevant and introduce Resolve Aí as the public identity.

### Consequences

- Avoids destructive rename;
- preserves traceability;
- requires transition notes.

## ADR 0083 — Adopt `resolve-ai` as Future CLI Name

### Context

The future runtime needs a command name.

### Decision

Use `resolve-ai` as the recommended CLI/package command.

### Consequences

- Clearer than `resolve`;
- less conflict-prone;
- aligned with AI-assisted purpose.

## ADR 0084 — Insert Phase 2.5 Before Runtime Productization

### Context

Runtime Productization would create commands, install flows and public user journeys.

### Decision

Insert Phase 2.5 to define naming and positioning before building runtime tooling.

### Consequences

- Reduces rework;
- improves public clarity;
- delays runtime implementation slightly but improves product coherence.

## ADR 0085 — Adopt Dual Audience Communication Model

### Context

Resolve Aí serves non-technical builders, vibe coders and professional engineers.

### Decision

Adopt communication rules that adapt language by entry mode while preserving engineering rigor.

### Consequences

- Docs become more accessible;
- technical docs remain precise;
- requires voice guide and glossary.

## ADR 0086 — Adopt Resolve Aí Runtime Direction Inspired by Ease of Use, Not Copying Context Mode

### Context

The project wants to be easy to activate like Context Mode, but has a different mission.

### Decision

Use ease-of-use patterns such as CLI, adapters, project-local state, agent instructions and future MCP tools, without copying Context Mode.

### Consequences

- Product becomes more usable;
- runtime has clear inspiration but unique mission;
- Phase 3 will design implementation around software engineering orchestration.

## 3. ADR index update

Update:

```text
adr/README.md
```

Add ADRs 0081–0086.

## 4. Decision log update

Update:

```text
docs/architecture/decision-log.md
```

Add Phase 2.5 decisions.

## 5. Definition of Done

ADR pack is complete when all six ADRs exist and are linked from the ADR index and decision log.
