---
title: "Resolve Aí — Public Positioning and README Update"
version: "0.1.0-alpha"
status: "Draft"
phase: "2.5"
owner: "Documentation Lead"
---

# Public Positioning and README Update

## 1. Purpose

This document defines how the README and public-facing documentation should present Resolve Aí.

## 2. README opening

Recommended opening:

```markdown
# Resolve Aí

> Me dá o problema ou a ideia, e eu te ajudo a resolver.

Resolve Aí is an open-source framework for turning problems, ideas, and existing software projects into structured software plans using AI.

It helps non-technical builders, vibe coders, and professional engineers move from confusion to clarity before writing code.

Resolve Aí was originally created under the technical name AI-SEOS — AI Software Engineering Operating System.
```

## 3. Explain in simple language

The README must include a section for non-technical users.

Suggested copy:

```markdown
## What is Resolve Aí?

Resolve Aí helps you organize an idea before asking AI to code it.

Instead of starting with “build an app”, it helps you understand the problem, define the first useful version, identify risks, choose a path, and prepare a plan that a coding AI or developer can follow.
```

## 4. Three paths

README must keep the three entry paths:

```markdown
## Choose your path

### 1. I have an idea or problem, but I don't code
Use Non-Technical Builder Mode.

### 2. I use AI to code, but my projects get messy
Use Vibe Coder Mode.

### 3. I am a developer or technical team
Use Professional Engineer Mode.
```

## 5. New project vs existing project

The README must clearly explain two uses:

```markdown
## Use Resolve Aí with a new project

Use this when you only have an idea and want to create a plan from scratch.

## Use Resolve Aí with an existing project

Use this when you already have a repository and want Resolve Aí to diagnose, document, and plan before changing code.
```

## 6. Existing project instruction

The README must teach users to open the project they want to analyze, not the Resolve Aí repository itself.

Suggested wording:

```markdown
To use Resolve Aí in an existing project, open that project in your AI terminal or coding agent and ask it to apply Resolve Aí as a diagnostic and planning framework.

The agent should create:

`docs/ai-seos/`

or, after the rename is complete:

`docs/resolve-ai/`

During migration, both may be accepted, but `docs/resolve-ai/` is the preferred future path.
```

## 7. Canonical existing-project prompt

The README should point to a canonical prompt file rather than embedding everything in the main README.

Recommended file:

```text
docs/getting-started/use-resolve-ai-in-existing-project.md
```

Template file:

```text
templates/prompts/existing-project-assessment-prompt.md
```

## 8. Tone

The README should feel helpful, not corporate.

Avoid:

```text
Enterprise-grade AI-driven SDLC orchestration system
```

Prefer:

```text
A practical way to organize software projects before asking AI to code.
```

Technical detail can exist later in the docs.

## 9. README sections

Recommended README structure:

1. Name and promise;
2. What it is;
3. Who it is for;
4. Choose your path;
5. New project vs existing project;
6. How it works;
7. What it creates;
8. Current status;
9. Roadmap;
10. Contributing;
11. License;
12. Formerly AI-SEOS note.

## 10. Definition of Done

The README update is complete when:

- Resolve Aí is the public name;
- the promise appears near the top;
- three user paths are visible;
- new vs existing project usage is clear;
- future CLI name `resolve-ai` is introduced as planned;
- AI-SEOS is explained as the former technical name.
