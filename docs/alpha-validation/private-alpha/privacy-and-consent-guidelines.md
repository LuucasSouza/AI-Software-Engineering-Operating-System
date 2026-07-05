---
title: "Private Alpha Privacy and Consent Guidelines"
status: "Draft"
version: "0.1.0-alpha.0"
phase: "Phase 15A"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-05"
---

# Private Alpha Privacy and Consent Guidelines

## Principles

- Collect the minimum evidence needed for product validation.
- Use anonymized IDs such as `PA-NTB-01`, `PA-VC-01`, and `PA-PE-01`.
- Do not collect sensitive data.
- Do not store personal identifiers in public reports.
- Stop the session if sensitive data appears.

## Data Allowed

- Profile.
- General project type.
- Commands run.
- Observed confusion.
- Bugs and risks.
- Usability scores.
- Moderator recommendation.

## Data Not Allowed

- Full name unless explicitly needed and kept out of public docs.
- Email, phone, address, CPF, RG.
- Credentials, tokens, `.env`.
- Customer data.
- Health, religion, political, financial, or other sensitive data.
- Proprietary code without permission.

## Gate

Any P1 security issue discovered during validation blocks public npm release until fixed and revalidated.
