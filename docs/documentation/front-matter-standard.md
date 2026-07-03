---
title: "Front Matter Standard"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Documentation Maintainers"
last_updated: "2026-07-03"
document_type: "Standard"
source: "bootstrap-source/pt45_DOCUMENTATION_STANDARDS_AND_INFORMATION_ARCHITECTURE.md"
---

# Front Matter Standard

## Objetivo

Padronizar metadata de documentos canônicos.

## Campos obrigatórios

```yaml
---
title: "<Document Title>"
version: "0.x.y"
status: "Draft | Active | Stable | Deprecated | Superseded"
owner: "<Role or Team>"
last_updated: "YYYY-MM-DD"
document_type: "<Type>"
---
```

## Campos opcionais

```yaml
related_artifacts:
  - <path>
review_cycle: Quarterly
supersedes: <path>
superseded_by: <path>
applies_to:
  - <module>
```
