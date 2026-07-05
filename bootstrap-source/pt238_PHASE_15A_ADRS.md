# pt238 — Phase 15A ADRs

## 1. Objetivo

Criar ADRs para registrar as decisões da Phase 15A.

A numeração esperada é:

- ADR 0206 a ADR 0215

## 2. ADRs obrigatórias

### ADR 0206 — Adopt private alpha expansion before public release

Decisão: expandir alpha privado antes de npm público.

Contexto: Phase 14 terminou LIMITED GO por falta de validação real.

### ADR 0207 — Require real user evidence for GO decision

Decisão: GO público exige evidência real de usuários.

### ADR 0208 — Use one participant per profile as minimum public alpha gate

Decisão: mínimo de um participante real por perfil oficial.

### ADR 0209 — Keep validation feedback anonymized

Decisão: registrar feedback sem dados pessoais desnecessários.

### ADR 0210 — Allow small UX and documentation fixes during private alpha

Decisão: permitir correções pequenas de UX/docs sem abrir escopo novo.

### ADR 0211 — Keep resolver safety copy explicit

Decisão: reforçar que `resolver` não altera código automaticamente.

### ADR 0212 — Maintain no telemetry policy during alpha validation

Decisão: não adicionar telemetria durante validação alpha.

### ADR 0213 — Treat sensitive data exposure during validation as release blocker

Decisão: achado sensível pode bloquear public alpha dependendo da severidade.

### ADR 0214 — Use evidence-based readiness scoring

Decisão: score não sobe sem evidência real.

### ADR 0215 — Define Phase 16 / 15B / 15C branch after private alpha

Decisão: próxima fase depende do gate GO / LIMITED GO / NO-GO.

## 3. Template de ADR

Cada ADR deve conter:

```markdown
# ADR NNNN — Title

## Status
Accepted

## Context

## Decision

## Consequences

## Alternatives Considered

## Related Artifacts
```

## 4. Índices a atualizar

- `adr/README.md`
- `docs/architecture/decision-log.md`
- `CHANGELOG.md`
- `docs/sprints/README.md`
