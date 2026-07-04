# pt210 — Phase 12 Handoff

## 1. Nome da fase

Phase 12 — Public Alpha Release Prep and Blocker Resolution

## 2. Objetivo

Corrigir os achados da Phase 11, preparar validação real com usuários, recalcular readiness e criar decisão formal sobre public alpha/npm sem publicar automaticamente.

## 3. Entradas obrigatórias

- pt201 a pt210.
- Phase 11 validation report.
- Phase 11 scorecard.
- Current CLI package.
- README e release docs.
- Alpha validation docs.

## 4. Saídas obrigatórias

### 4.1 Código

Possíveis ajustes em:

```text
packages/resolve-ai-cli/src/core/project-inspector.ts
packages/resolve-ai-cli/src/core/recommendation-engine.ts
packages/resolve-ai-cli/src/core/diagnostic-docs.ts
packages/resolve-ai-cli/src/commands/resolver.ts
packages/resolve-ai-cli/src/commands/status.ts
packages/resolve-ai-cli/tests/*.test.ts
packages/resolve-ai-cli/dist/
```

### 4.2 Documentação

Criar ou atualizar:

```text
docs/alpha-validation/real-users/README.md
docs/alpha-validation/real-users/non-technical-builder-validation-template.md
docs/alpha-validation/real-users/vibe-coder-validation-template.md
docs/alpha-validation/real-users/professional-engineer-validation-template.md
docs/release/v0.1.0-alpha-release-candidate.md
docs/release/v0.1.0-alpha-release-notes-draft.md
docs/release/v0.1.0-alpha-npm-publication-checklist.md
docs/release/v0.1.0-alpha-go-no-go-decision.md
docs/release/v0.1.0-alpha-risk-review.md
docs/release/v0.1.0-alpha-security-privacy-review.md
docs/release/v0.1.0-alpha-npm-and-tagging-decision-gate.md
docs/getting-started/quickstart-alpha.md
docs/getting-started/first-project-with-resolve-ai.md
docs/sprints/phase-12-handoff.md
docs/sprints/phase-12-validation-report.md
docs/sprints/phase-12-retrospective.md
```

### 4.3 ADRs

Criar:

```text
adr/0176-require-blocker-correction-before-public-alpha.md
adr/0177-improve-stack-detection-before-npm-release.md
adr/0178-calibrate-risk-severity-by-project-type.md
adr/0179-require-real-user-validation-evidence.md
adr/0180-keep-npm-publication-manual.md
adr/0181-keep-git-tagging-manual.md
adr/0182-use-public-alpha-release-candidate-documents.md
adr/0183-keep-portuguese-first-public-ux.md
adr/0184-maintain-no-telemetry-alpha-policy.md
adr/0185-separate-release-prep-from-release-execution.md
```

## 5. Critérios de validação

- Build passa.
- Testes passam.
- Smoke passa.
- Node fake detecta Node.js.
- Vite/React fake detecta Vite e React.
- TypeScript fake detecta TypeScript.
- Projeto novo sem testes não vira crítico por isso sozinho.
- Arquivos sensíveis seguem como risco alto/crítico.
- Copy do resolver atualizada.
- Docs de validação real criados.
- Scorecard recalculado honestamente.
- Go/No-Go criado.
- Nenhum npm publish.
- Nenhuma tag Git.

## 6. Readiness score esperado

O score pode subir de 72/100 apenas se houver evidência.

Possíveis resultados:

| Resultado | Interpretação |
|---|---|
| < 75 | continuar private alpha |
| 75–84 | limited alpha controlada |
| 85–90 | public alpha candidate |
| > 90 | forte public alpha candidate, ainda não stable |

## 7. Recomendação de próxima fase

Se GO ou LIMITED GO:

```text
Phase 13 — Public Alpha Release Execution
```

Se NO-GO:

```text
Phase 13 — Alpha Blocker Resolution
```

## 8. Commit esperado

```text
chore: prepare public alpha release candidate
```

## 9. Observação final

A Phase 12 deve ser honesta. O objetivo não é forçar publicação. O objetivo é saber, com evidência, se o Resolve Aí está pronto para sair do ambiente do mantenedor e começar a ser usado por outras pessoas.
