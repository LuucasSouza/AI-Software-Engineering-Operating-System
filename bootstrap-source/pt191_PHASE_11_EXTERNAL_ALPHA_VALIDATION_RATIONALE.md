---
title: Phase 11 — External Alpha Validation Rationale
status: Draft
version: 0.1.0-alpha
phase: 11
owner: Resolve Aí Maintainers
---

# Phase 11 — External Alpha Validation Rationale

## Purpose

Phase 11 moves Resolve Aí from **local CLI readiness** to **external alpha validation**.

Until Phase 10, the project proved that the CLI can be built, tested, linked locally and executed through the main flow:

```text
começar → ligar → diagnosticar → planejar → preparar → resolver → validar → status
```

That proves local functionality, but it does not yet prove that real users can understand and apply Resolve Aí in real projects.

Phase 11 exists to answer a different question:

> Can a Brazilian user, with different technical maturity levels, open a real project, run Resolve Aí, understand the outputs and use them to continue building software with less chaos?

## Why this phase is necessary before npm/public release

Publishing too early creates the wrong kind of feedback. If users cannot install, understand, run or interpret the tool, the feedback will be about friction rather than value.

Phase 11 validates:

- installability through local linking or packaged execution;
- command clarity in Portuguese;
- usefulness of generated `docs/resolve-ai/` documents;
- behavior in greenfield, in-progress and messy projects;
- correct differentiation between user profiles;
- clarity of Modo Liga/Desliga;
- whether the generated plan actually helps a user take the next step;
- whether safety restrictions are visible and trusted.

## What Phase 11 is not

Phase 11 is not npm publication.

Phase 11 is not MCP implementation.

Phase 11 is not hooks implementation.

Phase 11 is not automatic execution.

Phase 11 is not a marketing launch.

It is a controlled alpha validation phase.

## Validation principle

Resolve Aí should not be considered ready because its tests pass.

It should be considered ready when users can answer:

```text
Eu entendi o que ele fez.
Eu sei qual é o próximo passo.
Eu confio que ele não mexeu no meu código sem permissão.
Eu usaria isso de novo em outro projeto.
```

## Target profiles

Phase 11 must validate at least three profiles:

1. **Non-Technical Builder** — a person who has a problem or idea but little technical knowledge.
2. **Vibe Coder** — a person building with AI tools but without strong engineering process.
3. **Professional Engineer** — a developer or technical lead evaluating whether the tool is useful and safe.

## Expected outcome

At the end of Phase 11, the repository must contain:

- alpha validation protocol;
- validation scenario matrix;
- test project playbooks;
- feedback capture templates;
- readiness scorecard;
- public alpha decision record;
- clear recommendation: proceed to npm prep, extend validation or block release.

