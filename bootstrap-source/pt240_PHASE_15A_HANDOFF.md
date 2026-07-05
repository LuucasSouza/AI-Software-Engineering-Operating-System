# pt240 — Phase 15A Handoff

## 1. Nome da fase

Phase 15A — Private Alpha Expansion and Fixes

## 2. Estado de entrada

A Phase 14 terminou com:

- decisão: LIMITED GO;
- readiness: 78/100;
- nenhum P0;
- nenhum P1 de segurança;
- validação real pendente em 3/3 perfis;
- package dry-run limpo com 32 arquivos;
- fluxo CLI funcional;
- npm/tag/release bloqueados.

## 3. Objetivo da fase

Validar o Resolve Aí com usuários reais em alpha privado, aplicar correções pequenas e seguras, recalcular readiness e decidir o próximo caminho.

## 4. Entradas obrigatórias

- `pt231` a `pt240`.
- Docs de Phase 14.
- Release docs v0.1.0-alpha.
- Alpha validation docs.
- CLI em `packages/resolve-ai-cli/`.
- Templates de feedback/validation.

## 5. Saídas obrigatórias

### 5.1 Bootstrap

- `bootstrap-source/pt231...pt240`

### 5.2 Alpha privado

- `docs/alpha-validation/private-alpha/participant-recruitment-plan.md`
- `docs/alpha-validation/private-alpha/participant-screening-checklist.md`
- `docs/alpha-validation/private-alpha/participant-consent-note.md`
- `docs/alpha-validation/private-alpha/session-prep-checklist.md`
- `docs/alpha-validation/private-alpha/private-alpha-onboarding-guide.md`
- `docs/alpha-validation/private-alpha/privacy-and-consent-guidelines.md`
- `docs/alpha-validation/private-alpha/safe-project-selection-guide.md`
- `docs/alpha-validation/private-alpha/sensitive-data-handling-note.md`
- `docs/alpha-validation/private-alpha/session-non-technical-builder-01.md`
- `docs/alpha-validation/private-alpha/session-vibe-coder-01.md`
- `docs/alpha-validation/private-alpha/session-professional-engineer-01.md`
- `docs/alpha-validation/private-alpha/private-alpha-consolidated-results.md`
- `docs/alpha-validation/private-alpha/private-alpha-profile-scorecard.md`

### 5.3 Feedback e correções

- `docs/community/private-alpha-feedback-triage.md`
- `docs/community/private-alpha-fix-backlog.md`
- `docs/community/private-alpha-fixes-applied.md`

### 5.4 Release

- `docs/release/v0.1.0-alpha-phase-15a-readiness-scorecard.md`
- `docs/release/v0.1.0-alpha-phase-15a-go-no-go-decision.md`
- `docs/release/v0.1.0-alpha-phase-15a-blockers.md`
- `docs/release/v0.1.0-alpha-phase-15a-package-review.md`
- `docs/release/v0.1.0-alpha-phase-15a-release-recommendation.md`
- `docs/release/v0.1.0-alpha-private-alpha-security-review.md`

### 5.5 Sprint docs

- `docs/sprints/phase-15a-handoff.md`
- `docs/sprints/phase-15a-validation-report.md`
- `docs/sprints/phase-15a-retrospective.md`

### 5.6 ADRs

- ADR 0206 a 0215

## 6. Validação técnica obrigatória

Executar:

```bash
npm run build --prefix packages/resolve-ai-cli
npm test --prefix packages/resolve-ai-cli
npm run smoke --prefix packages/resolve-ai-cli
```

Dentro de `packages/resolve-ai-cli`:

```bash
npm pack --dry-run
```

Também executar:

```bash
git diff --check
```

E validar fluxo local mínimo em diretório temporário:

```bash
resolve-ai ajuda
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

## 7. Decisão final

Registrar uma decisão:

- GO;
- LIMITED GO;
- NO-GO.

## 8. Próximas fases possíveis

### 8.1 Se GO

Phase 16 — Public Alpha Release Execution

Escopo:

- tag v0.1.0-alpha;
- GitHub release;
- npm publish;
- release notes finais;
- post-release monitoring.

### 8.2 Se LIMITED GO

Phase 15B — Private Alpha Fixes and Second Validation Round

Escopo:

- corrigir blockers P1/P2;
- ampliar participantes;
- repetir validação real.

### 8.3 Se NO-GO

Phase 15C — Alpha Blocker Resolution

Escopo:

- corrigir P0/P1;
- congelar release;
- nova validação antes de qualquer publicação.

## 9. Mensagem ao usuário final

O Resolve Aí está tecnicamente forte, mas precisa provar clareza e utilidade com pessoas reais antes de ser lançado publicamente. Essa fase existe para proteger a qualidade da primeira impressão pública.
