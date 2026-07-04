---
title: Alpha Readiness Scorecard
status: Draft
version: 0.1.0-alpha
phase: 11
owner: Resolve Aí Maintainers
---

# Alpha Readiness Scorecard

## Purpose

Define the scoring model used to decide whether Resolve Aí is ready for public alpha packaging/publication preparation.

## Score scale

Total: 100 points.

## Categories

| Category | Points |
|---|---:|
| Local installation | 10 |
| Command flow | 15 |
| Safety | 15 |
| Portuguese UX clarity | 10 |
| Generated docs usefulness | 15 |
| Three-profile validation | 15 |
| Real project validation | 10 |
| Release documentation | 10 |

## Readiness interpretation

| Score | Status |
|---:|---|
| 90–100 | Strong public alpha candidate |
| 80–89 | Public alpha candidate with known issues |
| 70–79 | Private alpha only |
| 60–69 | Internal validation only |
| < 60 | Not ready |

## Minimum gates

Even with a high score, release is blocked if any P0 issue exists.

P0 examples:

- command overwrites user docs without permission;
- sensitive contents copied into docs;
- `diagnosticar` or `começar` fails in common scenario;
- Modo Liga/Desliga state is unreliable;
- install instructions do not work.

## Required scorecard file

Create:

```text
docs/release/v0.1.0-alpha-external-validation-scorecard.md
```

## Honest scoring rule

Do not inflate readiness because the implementation exists.

Score based on observed validation evidence.

