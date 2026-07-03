---
title: "Documentation Object Model"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Documentation Maintainers"
last_updated: "2026-07-03"
document_type: "Object Model"
source: "bootstrap-source/pt44_DOCUMENTATION_ENGINE.md"
---

# Documentation Object Model

## Objetivo

Padronizar tipos de documentos e responsabilidades.

## Objetos

| Objeto | Finalidade | Exemplos |
| --- | --- | --- |
| Canonical Document | Fonte autoritativa de um tópico | engine docs, standards |
| Index Document | Navegação de diretório ou domínio | README.md, adr/README.md |
| Decision Document | Preservar decisão e rationale | ADR, decision matrix |
| Operational Document | Guiar execução | protocol, runbook, checklist, handoff |
| Reference Document | Referência estável | principles, glossary, architecture |

## Responsabilidades

- Todo documento canônico deve ter owner, status e last_updated.
- Índices devem ser curados, não dumps automáticos.
- Documentos operacionais devem ser executáveis.
