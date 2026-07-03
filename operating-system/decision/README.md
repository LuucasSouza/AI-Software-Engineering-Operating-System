---
title: "AI-SEOS Decision Engine"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Decision Maintainers"
last_updated: "2026-07-03"
document_type: "Engine Index"
---

# Decision Engine

## Objetivo

Transformar opções ambíguas em decisões explícitas, rastreáveis, revisáveis e reversíveis quando possível.

## Arquivos

- `decision-engine.md`
- `decision-lifecycle.md`
- `decision-object-model.md`
- `decision-quality-gates.md`
- `decision-anti-patterns.md`

## Interfaces

Consome Discovery, Product e Architecture artifacts. Produz decision records, decision matrices, ADRs, risk review requests, optimization review requests e constraints para Execution Engine.

## Integração Sprint 4

- Execution Engine usa decisões e ADRs em work packages e readiness gates.
- Documentation Engine mantém ADR index e decision log atualizados.
- Handoff Engine transporta binding decisions entre agentes e fases.
- Reflection Engine revisa qualidade e efeitos das decisões.
