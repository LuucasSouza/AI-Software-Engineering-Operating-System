---
title: "AI-SEOS - Templates"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Template Maintainers"
last_updated: "2026-07-03"
document_type: "Module Overview"
---

# Templates

## Objetivo

Fornecer modelos reutilizáveis para documentos, decisões, riscos, handoffs, sprints e revisão.

## Escopo

Templates devem padronizar artefatos sem bloquear adaptação por contexto.

## Princípios

- Campos essenciais primeiro.
- Exemplos quando necessário.
- Compatibilidade com Markdown e GitHub.

## Responsabilidades

Template Maintainers mantêm consistência, clareza e versionamento dos modelos.

## Próximos passos

- Sprint 1 criou `discovery/` e `context/`.
- Sprint 2 criou templates de produto e arquitetura.
- Sprint 3 criou templates de decisão, risco, ADR e otimização.
- Sprint 4 criou templates de execução, backlog, documentação, handoff e reflexão.
- Sprint 5 criou templates cross-engine, meta-framework, maturity, readiness, frameworks, quality e agent collaboration.
- Sprint 5.5 criou templates iniciais de entry modes e intake.
- Sprint 6 criou packs completos por perfil, lifecycle, engines, agent handoff, exemplos preenchidos e governança de templates.
- Sprint 7 criou templates para protocolos e estudos de caso.
- Phase 2 criou templates de validação, auditoria, publicação e feedback.
- Phase 2.5 criou prompt canônico para aplicar Resolve Aí em projetos existentes.

## Templates disponíveis

- `discovery/`: discovery document, registers, MVP boundary, handoff e checklists.
- `context/`: context package, assumption register e constraint register.

## Sprint 2

- `product/`: PRD, MVP, roadmap, backlog, handoff e scope matrix.
- `architecture/`: architecture overview, decision matrix, quality scenarios, domain model e integration map.
- `adr/`: extended ADR template.

## Sprint 3

- `decision/`: decision record, decision matrix e decision log.
- `risk/`: risk register, assessment, acceptance, review e checklists especializados.
- `optimization/`: optimization review, cost model, complexity assessment e scalability assessment.
- `adr/`: ADR template, ADR lite e decision log entry.

## Sprint 4

- `execution/`: execution plan, milestone, sprint plan, work package, readiness report e release candidate checklist.
- `backlog/`: technical backlog.
- `documentation/`: documentation review checklist e documentation index.
- `handoff/`: handoff package, agent handoff, sprint handoff e validation checklist.
- `reflection/`: reflection report, improvement backlog e sprint retrospective.

## Sprint 5

- `cross-engine/`: engine interface e integration map.
- `meta-framework/`: operating path e intake brief.
- `maturity/`: maturity assessment e improvement backlog.
- `readiness/`: project, engine e summary scorecards.
- `frameworks/`: proposal, spec, review e deprecation.
- `quality/`: validation report e documentation quality checklist.
- `agent-collaboration/`: operating contract, handoff map e review board.

## Sprint 5.5

- `entry-modes/`: mode selection.
- `intake/`: Discovery Intake Package.
- `intake/non-technical-builder/`: builder interview.
- `intake/vibe-coder/`: vibe coder build brief.
- `intake/professional-engineer/`: technical intake.

## Sprint 6

- `packs/non-technical-builder-pack/`: templates em linguagem simples para problemas reais.
- `packs/vibe-coder-pack/`: prompts, slices, validação e deploy readiness.
- `packs/professional-engineer-pack/`: discovery técnico, NFRs, domínio, ADRs, risco e handoff.
- `packs/full-lifecycle-pack/`: trilha universal do AI-SEOS.
- `lifecycle/`: templates de intake, discovery, product, architecture, decision, risk, optimization, execution, documentation, handoff e reflection.
- `engines/`: templates operacionais por engine.
- `agents/`: handoffs entre agentes especializados.
- `examples-filled/`: exemplos preenchidos com academia de artes marciais.
- `quality/`: checklist de revisão de templates.

## Sprint 7

- `protocols/`: protocol template e protocol review checklist.
- `cases/`: case study template e case quality checklist.

## Phase 2

- `validation/`: scripts, reports e scorecards de validação.
- `repository-audit/`: template de repository audit report.
- `publication/`: docs site page template.
- `feedback/`: user feedback e framework improvement proposal.

## Phase 2.5

- `prompts/`: existing project assessment prompt para uso do Resolve Aí em repositórios existentes.

## Phase 3

- `runtime/`: templates de `config.yml` e `state.json` para a runtime futura.
- `agent-instructions/`: templates para AGENTS.md, CLAUDE.md e Copilot instructions.
- `prompts/runtime/`: prompt de diagnóstico runtime para projetos em andamento.

## Phase 4

- O CLI MVP materializa templates mínimos diretamente em `docs/resolve-ai/README.md`, `00-project-intake.md` e `09-handoff.md` quando `resolve-ai começar` é executado.

## Phase 5

- `resolve-ai diagnosticar` materializa templates diagnósticos `00` a `09` em `docs/resolve-ai/`, preservando arquivos existentes por padrão.

## Phase 6

- `resolve-ai planejar` materializa templates de planejamento `10` a `14` em `docs/resolve-ai/`, preservando arquivos existentes por padrão.

## Phase 7

- `resolve-ai preparar` materializa templates de pacote de execução `15` a `19` em `docs/resolve-ai/`, preservando arquivos existentes por padrão.

## Phase 8

- `resolve-ai resolver` materializa templates de execução assistida `20` a `24` em `docs/resolve-ai/`, preservando arquivos existentes por padrão.

## Phase 9

- `resolve-ai validar` materializa templates de validação pós-execução `25` a `29` em `docs/resolve-ai/`, preservando arquivos existentes por padrão.

## Phase 10

- A documentação de release define checklist e política de uso local para validar a CLI antes de publicação.
