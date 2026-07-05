---
title: "Sensitive Data Handling Note"
status: "Draft"
version: "0.1.0-alpha.0"
phase: "Phase 15A"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-05"
---

# Sensitive Data Handling Note

## If Sensitive Data Appears

1. Do not open the file content.
2. Do not copy the content into a report.
3. Record only safe metadata if necessary.
4. Recommend rotation or cleanup outside the session.
5. Classify the finding.
6. Stop or switch to a sanitized project.

## Examples

- `.env`
- `secret`
- `token`
- database dump
- customer export
- credential backup

## Release Impact

Any exposure that creates safety risk may become P1 security or P0, depending on severity, and can force NO-GO.
