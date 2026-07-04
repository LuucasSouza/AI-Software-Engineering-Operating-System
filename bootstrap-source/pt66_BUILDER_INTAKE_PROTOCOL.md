---
title: Builder Intake Protocol
version: 0.1.0
status: Draft
sprint: 5.5
module: Entry Modes Layer
owner: AI-SEOS Maintainers
last_updated: 2026-07-03
---


# Builder Intake Protocol

## 1. Objective

The Builder Intake Protocol defines how AI-SEOS receives a raw idea, interviews the user according to their mode, and produces a structured Discovery Intake Package.

This protocol is mandatory before Discovery when the input is incomplete, ambiguous, non-technical, solution-biased or too implementation-focused.

## 2. Inputs

Possible inputs:

- one-sentence idea;
- business problem;
- personal workflow problem;
- rough app concept;
- existing manual process;
- screenshot or description of current tool;
- request to build something with AI;
- request from a professional engineer.

## 3. Outputs

Mandatory output:

- Discovery Intake Package.

Optional outputs:

- plain-language summary;
- vibe coder build brief;
- professional technical intake brief;
- recommended solution type;
- glossary of explained technical terms;
- list of assumptions;
- readiness level for Discovery.

## 4. Intake Phases

### Phase 1 — Mode Identification

Ask or infer mode.

Preferred explicit question:

> Before we start, choose the best mode:
>
> 1. I am not technical and want help turning a problem into a solution.
> 2. I use AI tools to build and want a practical guided plan.
> 3. I am a developer or technical professional and want complete engineering artifacts.

### Phase 2 — Problem Capture

Capture the real-world problem before discussing solution.

### Phase 3 — Current Workflow

Understand what the user does today.

### Phase 4 — Actors and Users

Identify who uses, pays, approves, manages, benefits from or is affected by the solution.

### Phase 5 — Data and Objects

Identify things the system needs to remember.

### Phase 6 — Workflow and States

Identify sequence, status, transitions and exceptions.

### Phase 7 — Constraints

Identify time, budget, skill, device, legal, security, data and operational constraints.

### Phase 8 — First Useful Version

Define the smallest useful version.

### Phase 9 — Translation

Translate to software concepts.

### Phase 10 — Discovery Handoff

Package the result for Discovery Engine.

## 5. Discovery Intake Package Template

```markdown
# Discovery Intake Package

## Mode

## User Profile

## Raw Idea

## Plain-Language Problem

## Current Workaround

## Target Users

## Jobs to Be Done

## Information to Store

## Workflows

## Constraints

## First Useful Version

## Not Now

## Assumptions

## Unknowns

## Software Translation

### Candidate Solution Type

### Candidate Entities

### Candidate Roles

### Candidate Workflows

### Candidate Features

### Candidate Integrations

### Risk Flags

## Recommended Discovery Depth

## Next Step
```

## 6. Recommended Discovery Depth

The protocol must recommend D0-D3 Discovery Depth:

- D0: extremely simple personal tool;
- D1: simple internal workflow;
- D2: business system with multiple users or sensitive data;
- D3: commercial product, regulated domain, payment, scale, integration or multi-tenant use.

## 7. Solution Type Recommendation

The protocol may recommend:

- do not build software yet;
- spreadsheet improvement;
- no-code tool;
- automation workflow;
- AI-assisted custom app;
- professional custom software;
- enterprise project.

## 8. Safety and Honesty Rules

The system must not oversell software.

It must say when:

- a spreadsheet is enough;
- automation is enough;
- the idea is too vague;
- the risk is high;
- payments or sensitive data require stronger engineering;
- the user needs a professional developer;
- the MVP should be much smaller.

## 9. Quality Gates

Builder Intake passes when:

- mode is selected;
- problem is captured;
- current workaround is known;
- target users are known;
- first useful version is defined;
- assumptions are explicit;
- software translation exists;
- Discovery Depth is recommended.
