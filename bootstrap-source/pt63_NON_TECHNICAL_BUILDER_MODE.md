---
title: Non-Technical Builder Mode
version: 0.1.0
status: Draft
sprint: 5.5
module: Entry Modes Layer
owner: AI-SEOS Maintainers
last_updated: 2026-07-03
---


# Non-Technical Builder Mode

## 1. Objective

Non-Technical Builder Mode allows a person with little or no software knowledge to use AI-SEOS to transform a real-world problem into a structured software solution.

The user does not need to know GitHub, Vercel, cloud, APIs, databases, frontend, backend, authentication, deployment, CI/CD, observability, tenancy, or software architecture.

The system must meet the user where they are.

## 2. Target User

This mode is for people who say things like:

- I have a problem in my business and want to solve it with software.
- I use spreadsheets and WhatsApp and want something better.
- I do not know how to program.
- I do not know what technology to use.
- I want to build an app, system, dashboard or automation.
- I want to explain my idea to an AI or a developer.

## 3. Core Principle

Start with life, not technology.

The system must ask about the user's work, pain, workflow, people, information, time loss, repeated tasks, mistakes, money loss, communication gaps, and desired result before mentioning implementation.

## 4. Interview Style

The tone must be:

- simple;
- respectful;
- non-patronizing;
- practical;
- calm;
- clear;
- guided;
- jargon-free.

The system must not make the user feel ignorant.

Wrong:

> Do you want to use PostgreSQL, Firebase, or Supabase?

Correct:

> What information do you need to save, search, update, or share with other people?

## 5. Interview Phases

### 5.1 Problem Story

Questions:

- What problem are you trying to solve?
- When does this problem happen?
- Who suffers from it?
- What happens if it is not solved?
- How often does it happen?
- How much time or money does it cost?

### 5.2 Current Workaround

Questions:

- How do you solve this today?
- Do you use paper, WhatsApp, spreadsheet, memory, another system, or manual messages?
- What part is most annoying?
- What part causes mistakes?
- What part depends too much on you?

### 5.3 People Involved

Questions:

- Who would use this solution?
- Is it only you, your team, your customers, students, suppliers, or managers?
- Does each person need to see different information?
- Does anyone need permission to approve, edit, delete, or view data?

### 5.4 Information

Questions:

- What information needs to be stored?
- What information changes over time?
- What information needs to be searched later?
- Is any information sensitive, personal, financial, private, or confidential?

### 5.5 Workflow

Questions:

- What is the step-by-step process today?
- What happens first?
- What happens next?
- When is the process complete?
- What status does each item pass through?

### 5.6 First Useful Version

Questions:

- What is the simplest version that would already help you?
- What can wait for later?
- What would make you say: this already solved 70% of the problem?

## 6. Translation Rules

The system must translate everyday answers into software artifacts.

Example:

User says:

> I need to know who paid me and who is late.

AI-SEOS translates:

- entities: Customer, Payment, Invoice, BillingStatus;
- features: customer registration, payment tracking, overdue list;
- workflows: create charge, mark paid, detect overdue;
- risks: financial data, reconciliation, data accuracy;
- possible integration: payment provider, manual import, Pix/Boleto depending on country.

## 7. Output Format

The output must include two layers:

1. Plain-language explanation for the user.
2. Technical translation for downstream AI-SEOS engines.

Example structure:

```markdown
# Builder Summary

## What you are trying to solve

## How it works today

## What the first useful version should do

## What should not be built yet

## Suggested solution in simple words

## Technical translation for AI-SEOS

## Recommended next step
```

## 8. Solution Recommendation

For non-technical users, the system may recommend one of four paths:

1. manual improvement;
2. no-code tool;
3. low-code or automation;
4. custom software with AI-assisted development;
5. professional engineering project.

The system must not recommend custom software when a spreadsheet or no-code workflow is enough.

## 9. Quality Gates

Non-Technical Builder Mode passes when:

- user problem is understandable;
- current workaround is known;
- target user is identified;
- first useful version is defined;
- software translation is generated;
- technical jargon is avoided or explained;
- the next step is clear.

## 10. Anti-Patterns

Avoid:

- forcing the user to choose a stack;
- using acronyms without explanation;
- assuming the user wants a SaaS;
- overbuilding the solution;
- treating software as always the answer;
- hiding operational complexity;
- jumping directly to code.
