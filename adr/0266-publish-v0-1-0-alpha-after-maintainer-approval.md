# ADR 0266 — Publish v0.1.0-alpha After Maintainer Approval

## Status

Accepted

## Context

A Phase 18 deixou o release candidate pronto (90/100) com gate do mantenedor desmarcado. Em 2026-07-08 o mantenedor registrou a decisão explícita de publicar ("Quero apertar o botão"), assumindo os riscos conhecidos do alpha, incluindo a lacuna de validação humana real.

## Decision

Publicar o Resolve Aí `v0.1.0-alpha` como public alpha, executando a Phase 19 somente após o registro da aprovação em `docs/release/v0.1.0-alpha-rc/maintainer-approval-gate.md`. A publicação é pública, mas permanece classificada como alpha experimental, nunca stable.

## Consequences

### Positive

- O projeto ganha usuários públicos e canal real de feedback.
- A decisão fica rastreável: quem, quando e sob quais condições.

### Negative

- Exposição pública antes de validação humana ampla; expectativas precisam ser controladas pelas known limitations.

### Neutral

- O score permanece limitado (máx. 92/100) até validação humana real.

## Alternatives Considered

- Aguardar validação Non-Technical Builder antes de publicar: rejeitada pelo mantenedor; o alpha público é o caminho escolhido para obter essa validação.
- Publicação silenciosa sem gate: rejeitada; violaria ADR-0257.

## Follow-up

Registrar todo o processo em `publication-execution-report.md`.
