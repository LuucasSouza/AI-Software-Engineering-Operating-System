# pt247 — Phase 15B Documentation Outputs

## 1. Objetivo

Este documento lista os artefatos que a Phase 15B deve produzir.

## 2. Bootstrap source

Preservar:

```text
bootstrap-source/pt231 ... pt240
bootstrap-source/pt241 ... pt250
```

Se os arquivos `pt241–pt250` forem os arquivos da Phase 15B, todos devem ser preservados.

## 3. Diretórios

Criar ou atualizar:

```text
docs/alpha-validation/private-alpha/phase-15b/
docs/community/
docs/release/
docs/sprints/
templates/feedback/
templates/validation/
```

## 4. Alpha validation

Criar:

```text
docs/alpha-validation/private-alpha/phase-15b/second-round-validation-plan.md
docs/alpha-validation/private-alpha/phase-15b/recruitment-tracker.md
docs/alpha-validation/private-alpha/phase-15b/moderator-runbook.md
docs/alpha-validation/private-alpha/phase-15b/session-p15b-ntb-01.md
docs/alpha-validation/private-alpha/phase-15b/session-p15b-vc-01.md
docs/alpha-validation/private-alpha/phase-15b/session-p15b-pe-01.md
docs/alpha-validation/private-alpha/phase-15b/evidence-register.md
docs/alpha-validation/private-alpha/phase-15b/second-round-consolidated-results.md
docs/alpha-validation/private-alpha/phase-15b/profile-scorecard.md
```

## 5. Community feedback

Criar ou atualizar:

```text
docs/community/private-alpha-phase-15b-feedback-triage.md
docs/community/private-alpha-phase-15b-fix-backlog.md
docs/community/private-alpha-phase-15b-fixes-applied.md
```

## 6. Release docs

Criar ou atualizar:

```text
docs/release/v0.1.0-alpha-phase-15b-readiness-scorecard.md
docs/release/v0.1.0-alpha-phase-15b-go-no-go-decision.md
docs/release/v0.1.0-alpha-phase-15b-blockers.md
docs/release/v0.1.0-alpha-phase-15b-package-review.md
docs/release/v0.1.0-alpha-phase-15b-release-recommendation.md
```

## 7. Templates

Criar ou atualizar:

```text
templates/feedback/private-alpha-second-round-feedback.md
templates/validation/private-alpha-second-round-session-report.md
templates/validation/private-alpha-second-round-moderator-script.md
templates/validation/private-alpha-second-round-observation-sheet.md
```

## 8. Sprint docs

Criar:

```text
docs/sprints/phase-15b-handoff.md
docs/sprints/phase-15b-validation-report.md
docs/sprints/phase-15b-retrospective.md
```

## 9. ADRs

Criar ADRs:

```text
0216 a 0225
```

Temas sugeridos:

- ADR 0216 — Adopt validation-blocked state for private alpha
- ADR 0217 — Require real participants before public npm GO
- ADR 0218 — Preserve alpha honesty over release velocity
- ADR 0219 — Treat resolver/executar perception as P1 validation item
- ADR 0220 — Separate technical package readiness from product readiness
- ADR 0221 — Use anonymized participant IDs for alpha validation
- ADR 0222 — Restrict evidence capture to sanitized artifacts
- ADR 0223 — Allow only small evidence-based fixes during private alpha
- ADR 0224 — Avoid infinite documentation-only validation loops
- ADR 0225 — Define next-path branching after Phase 15B

## 10. Índices

Atualizar:

```text
README.md
ROADMAP.md
CHANGELOG.md
adr/README.md
docs/README.md
docs/alpha-validation/README.md
docs/community/README.md
docs/release/README.md
docs/sprints/README.md
templates/README.md
packages/resolve-ai-cli/README.md
```

## 11. Critério de aceite

A Phase 15B está completa se:

- todos os arquivos obrigatórios existem;
- validações reais foram registradas ou pendência foi explicitamente marcada;
- não há validação inventada;
- package dry-run foi revisado;
- testes passaram;
- decisão foi registrada;
- próxima ação não incentiva nova documentação infinita caso não haja participantes.
