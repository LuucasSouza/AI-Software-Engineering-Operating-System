---
title: "Execution Planning Model"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Execution Maintainers"
last_updated: "2026-07-03"
document_type: "Framework"
source: "bootstrap-source/pt42_EXECUTION_PLANNING_AND_DELIVERY_PROTOCOL.md"
---

# Execution Planning Model

## Objetivo

Escolher estratégia de entrega e decompor trabalho em increments seguros.

## Estratégias

| Strategy | Use When | Trade-off |
| --- | --- | --- |
| Vertical Slice | Need early user validation | Requires broad setup |
| Architecture Skeleton | Architecture risk is high | May delay visible value |
| Integration First | External systems are critical | Exposes vendor constraints |
| Security First | Sensitive data exists | Slower throughput |
| Data Foundation First | Domain data is central | Risk of over-modeling |
| Spike | Unknown is too high | Must not become production by accident |
| Migration First | Legacy constraints dominate | Requires rollback plan |

## Regras

- Milestones representam estados validados, não períodos.
- Work items rastreiam requisito, ADR, risco, recomendação de otimização ou operação.
- Mudanças de escopo, arquitetura, risco, custo e release acionam protocolos próprios.
