---
title: "AI-SEOS — Changelog"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Maintainers"
last_updated: "2026-07-03"
document_type: "Changelog"
canonical_filename: "CHANGELOG.md"
recommended_repository_location: "/CHANGELOG.md"
---

# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato segue a ideia do Keep a Changelog e o projeto deve adotar versionamento semântico.

---

# [Unreleased]

## Added

- Phase 12 executada.
- Criados documentos de validação real em `docs/alpha-validation/real-users/`.
- Criados release candidate docs para `v0.1.0-alpha`.
- Criados quickstarts alpha em `docs/getting-started/`.
- Criadas ADRs 0176 a 0185.
- Criados Phase 12 handoff, validation report e retrospective.
- Phase 11 executada.
- Criada documentação de alpha validation em `docs/alpha-validation/`.
- Criado protocolo de validação alpha, matriz por perfil e plano de testes reais/simulados.
- Criados templates de feedback, triagem, issue e relatório de validação.
- Criado scorecard externo `v0.1.0-alpha` com score honesto 72/100, Private alpha only.
- Criada validação local simulada em diretório vazio, Node fake e Vite/React fake.
- Criados registros de blockers e backlog de melhoria alpha.
- Criadas ADRs 0166 a 0175.
- Criados Phase 11 handoff, validation report e retrospective.
- Phase 10 executada.
- Criado build local da CLI por `npm run build --prefix packages/resolve-ai-cli`.
- Criado smoke test por `npm run smoke --prefix packages/resolve-ai-cli`.
- Criado script `check` para build, testes e smoke.
- Criada documentação de instalação local com `npm link`.
- Criado release readiness da CLI `v0.1.0-alpha`.
- Criada política de `.resolve-ai/` e `docs/resolve-ai/`.
- Atualizado remote canônico para `Resolve-Ai`.
- Criadas ADRs 0156 a 0165.
- Criados Phase 10 handoff, validation report e retrospective.
- Phase 9 executada.
- Implementado comando `resolve-ai validar`.
- Implementados aliases `valida` e `revisar`.
- Criada detecção segura de mudanças locais via Git metadata quando disponível.
- Criada detecção de arquivos sensíveis por nome/caminho sem copiar conteúdo.
- Criada geração dos documentos `docs/resolve-ai/25` a `29`.
- Atualizado `.resolve-ai/state.json` com `ultimaValidacao`.
- Atualizado `resolve-ai status` para mostrar resumo da última validação.
- Criados testes automatizados para validação guiada.
- Criadas ADRs 0146 a 0155.
- Criados Phase 9 handoff, validation report e retrospective.
- Phase 8 executada.
- Implementado comando `resolve-ai resolver`.
- Implementados aliases `resolva` e `fazer`.
- Criada geração dos documentos `docs/resolve-ai/20` a `24`.
- Criada aprovação humana documental antes da execução assistida.
- Criado prompt final para agente externo.
- Criado checklist pós-execução e registro de execução.
- Atualizado `.resolve-ai/state.json` com `ultimaExecucaoAssistida` e `canAutoExecute: false`.
- Atualizado `resolve-ai status` para mostrar execução assistida pendente.
- Criados testes automatizados para execução assistida.
- Criadas ADRs 0136 a 0145.
- Criados Phase 8 handoff, validation report e retrospective.
- Phase 7 executada.
- Implementado comando `resolve-ai preparar`.
- Implementados aliases `tarefa` e `executar`.
- Criada seleção segura de tarefa a partir de diagnóstico/planejamento.
- Criada geração dos documentos `docs/resolve-ai/15` a `19`.
- Atualizado `.resolve-ai/state.json` com `ultimoPreparo` e `canAutoExecute: false`.
- Atualizado `resolve-ai status` para mostrar tarefa preparada.
- Criados testes automatizados para preparação de execução.
- Criadas ADRs 0126 a 0135.
- Criados Phase 7 handoff, validation report e retrospective.
- Phase 6 executada.
- Implementado comando `resolve-ai planejar`.
- Implementados aliases `plano` e `planejamento`.
- Criada geração dos documentos `docs/resolve-ai/10` a `14`.
- Criado backlog priorizado, próximas sprints, prompts de execução e checklist de validação.
- Atualizado `.resolve-ai/state.json` com resumo do último planejamento.
- Atualizado `resolve-ai status` para mostrar último plano.
- Criados testes automatizados para planejamento guiado.
- Criadas ADRs 0116 a 0125.
- Criados Phase 6 handoff, validation report e retrospective.
- Phase 5 executada.
- Implementado comando `resolve-ai diagnosticar`.
- Implementados aliases `diagnostico` e `diagnóstico`.
- Criada inspeção local heurística de projeto, stack, modo recomendado e riscos por nome.
- Criada geração de documentos `docs/resolve-ai/00` a `09` sem sobrescrever por padrão.
- Atualizado `.resolve-ai/state.json` com resumo do último diagnóstico.
- Atualizado `resolve-ai status` para mostrar último diagnóstico quando existir.
- Criados testes automatizados para diagnóstico local seguro.
- Criadas ADRs 0106 a 0115.
- Criados Phase 5 handoff, validation report e retrospective.
- Phase 4 executada.
- Criado pacote `packages/resolve-ai-cli/`.
- Implementados comandos `ajuda`, `começar`, `comecar`, `ligar`, `desligar` e `status`.
- Implementado Modo Liga/Desliga com estado persistente em `.resolve-ai/state.json`.
- Implementada criação local de `.resolve-ai/config.json` e `.resolve-ai/state.json`.
- Implementada criação não destrutiva de `docs/resolve-ai/README.md`, `00-project-intake.md` e `09-handoff.md`.
- Criados testes mínimos com Node `node:test`.
- Criada documentação do pacote CLI.
- Criadas ADRs 0097 a 0105.
- Criados Phase 4 handoff, validation report e retrospective.
- Phase 3 executada.
- Criada Runtime Vision do Resolve Aí.
- Criada arquitetura da futura CLI `resolve-ai`, sem implementação nesta fase.
- Documentado Modo Liga/Desliga como controle público oficial.
- Documentado Project Adapter com `.resolve-ai/` e `docs/resolve-ai/`.
- Formalizado fluxo “Projeto em Andamento — Diagnóstico e Continuação”.
- Documentada estratégia CLI-first, MCP/adapters later.
- Criadas mensagens de comandos e UX copy em português.
- Criada documentação de segurança, privacidade e economia de tokens da runtime.
- Criados templates runtime e arquivos de instrução para agentes.
- Criadas ADRs 0087 a 0096.
- Criados Phase 3 handoff, validation report e retrospective.
- Phase 2.5 executada.
- Resolve Aí adotado como nome público oficial do projeto.
- AI-SEOS mantido como nome técnico/histórico durante a transição.
- Promessa pública definida: “Me dá o problema ou a ideia, e eu te ajudo a resolver.”
- Criadas documentações de brand identity, brand voice, rename strategy, public positioning e runtime naming prep.
- Preparado o futuro comando `resolve-ai` para Phase 3.
- Phase 3 renomeada para Resolve Aí Runtime Productization.
- Criadas ADRs 0081 a 0086.
- Criados Phase 2.5 handoff, validation report e retrospective.
- Phase 2 executada.
- Criado repository audit and hardening report.
- Criado first end-to-end validation case com cadeia completa de artefatos.
- Criado SenseiHub como primeiro caso real de validação.
- Criadas validações para Non-Technical Builder, Vibe Coder e Professional Engineer.
- Criada estratégia de publicação GitHub-first com information architecture.
- Criado plano de release `v0.1.0-alpha`, release notes, checklist e known limitations.
- Criado feedback and improvement loop com protocolo, templates e backlog.
- Criado release readiness report com score 47/50, Strong public alpha candidate.
- Criadas ADRs 0071 a 0080.
- Criados Phase 2 handoff, validation report e retrospective.
- Sprint 7 executada.
- Criado sistema oficial de protocolos com lifecycle, registry, taxonomy e templates.
- Criada case library com caso cross-mode e casos para Non-Technical Builder, Vibe Coder e Professional Engineer.
- Criados casos reais para martial arts academy SaaS, WhatsApp order tracker, internal operations dashboard, AI document assistant e multi-tenant SaaS.
- Criado catálogo de anti-patterns com 25 anti-patterns e countermeasures do AI-SEOS.
- Criado catálogo de best practices com mais de 40 práticas mapeadas a engines, entry modes e templates.
- Criada documentação pública de adoção, choose your path, glossário para iniciantes e first project walkthrough.
- Criadas documentações de release, known limitations, release notes draft e post-Sprint 7 roadmap.
- Criada documentação comunitária, maintainer guide e proposal process.
- Criados templates de GitHub issue e pull request.
- Criada auditoria de release readiness com score 43/50, Public alpha.
- Criadas ADRs 0061 a 0070.
- Criados Sprint 7 handoff, validation report e retrospective.
- Sprint 6 executada.
- Criados template packs completos para Non-Technical Builder, Vibe Coder e Professional Engineer.
- Criados templates universais de lifecycle de intake a reflection.
- Criados templates operacionais para Discovery, Product, Architecture, Decision, Risk, Optimization, Execution, Documentation, Handoff e Reflection Engines.
- Criados templates de handoff para AI CTO, Product Owner, Solution Architect, Security Lead, Implementation Lead, QA Lead, Documentation Lead, DevOps Lead e Reviewer.
- Criados exemplos preenchidos com o cenário de academia de artes marciais.
- Criados template registry, taxonomy, maintenance policy, quality standard e review checklist.
- Criado protocolo de manutenção de templates.
- Criadas ADRs 0052 a 0060.
- Criados Sprint 6 handoff, validation report e retrospective.
- Sprint 5.5 executada.
- Criada Entry Modes Layer antes do Discovery Engine.
- Criados Non-Technical Builder Mode, Vibe Coder Mode e Professional Engineer Mode.
- Criados Mode Router, Builder Intake Protocol e Problem-to-Software Translation Framework.
- Criados templates iniciais de mode selection, discovery intake, builder interview, vibe coder build brief e technical intake.
- Criados playbooks de Builder Intake por modo.
- Criado exemplo comparando a mesma ideia nos três modos.
- Criadas ADRs 0046 a 0051.
- Criados Sprint 5.5 handoff, validation report e retrospective.
- Sprint 5 executada.
- Criados framework catalog, taxonomy, map, registry e evolution policy.
- Criados AI-SEOS Meta-Framework, Discovery-to-Delivery Framework e operating paths.
- Criados Cross-Engine Integration Model, traceability matrix e cross-engine handoff protocol.
- Criados AI-SEOS Maturity Model M0-M5 e templates de maturity assessment.
- Criados Project Readiness Framework, readiness levels, scorecards e blocking conditions.
- Criado Agent Collaboration Framework com role map, handoff map e conflict resolution.
- Criados Framework Governance, versioning, proposal/review/deprecation templates e registry.
- Criado Framework Quality Assurance com quality dimensions, scoring, gates e validation templates.
- Criado Reference Implementation Framework, playbook e skeleton `examples/reference-project/greenfield-saas/`.
- Criadas ADRs 0037 a 0045.
- Criados Sprint 5 handoff, validation report e retrospective.
- Sprint 4 executada.
- Criado Execution Engine.
- Criados execution lifecycle, execution object model e execution readiness gates.
- Criados execution planning, delivery control e release candidate protocols.
- Criados templates de execution plan, milestone, sprint plan, work package, readiness report, release candidate e technical backlog.
- Criado Documentation Engine.
- Criados documentation lifecycle, object model, quality gates, documentation standards, information architecture e front matter standard.
- Criados templates de documentation review checklist e documentation index.
- Criado Handoff Engine.
- Criados handoff lifecycle, object model, quality gates, contract model e protocolos de handoff.
- Criados templates de handoff package, agent handoff, sprint handoff e validation checklist.
- Criado Reflection Engine.
- Criados reflection lifecycle, object model, quality gates, reflection protocol, system review playbooks e templates de reflexão.
- Criadas ADRs 0027 a 0036.
- Criados Sprint 4 handoff, validation report e retrospective.
- Sprint 3 executada.
- Criado Decision Engine.
- Criados Decision lifecycle, Decision object model, quality gates e anti-patterns.
- Criados Decision Framework, weighted decision matrix e decision confidence model.
- Criado ADR Decision Protocol e templates de decisão e ADR.
- Criado Risk Engine.
- Criados Risk lifecycle, taxonomy, object model e quality gates.
- Criados Risk Framework, risk register standard, scoring model e modelos de risco de segurança, compliance, vendor e AI.
- Criado Optimization Engine.
- Criados Optimization lifecycle, object model e quality gates.
- Criados Optimization Framework e modelos de custo, complexidade, escalabilidade e custo de AI.
- Criado playbook integrado de Decision, Risk and Optimization.
- Criadas ADRs 0019 a 0026.
- Criados handoff e relatório de validação da Sprint 3.
- Sprint 2 executada.
- Criado Product Engine.
- Criados Product lifecycle, Product Readiness Levels, quality gates e handoff contract.
- Criados Product Framework, MVP Scope Framework, scope decision matrix, capability mapping e prioritization framework.
- Criados Product Definition Protocols e templates de PRD, MVP, roadmap, backlog e handoff.
- Criado Architecture Engine.
- Criados Architecture lifecycle, Architecture Readiness Levels, quality gates e handoff contract.
- Criados Architecture Framework, Architecture Decision Protocol, Architecture View Standard e templates de arquitetura.
- Criados Domain Modeling Standard e Integration Modeling Standard.
- Criado template ADR estendido e architecture decision log.
- Criadas ADRs 0012 a 0018.
- Criado relatório de validação da Sprint 2.
- Sprint 1 executada.
- Criado Core Identity do AI-SEOS.
- Criado Operating System Kernel.
- Criado Context and Knowledge Model.
- Criado Context Package Standard.
- Criado AI CTO & Solution Architect Agent.
- Criada Discovery Engine.
- Criado Discovery Framework.
- Criado Project Discovery Protocol.
- Criados templates de discovery e contexto.
- Criados checklists de discovery.
- Criado Project Discovery Playbook.
- Criado relatório de validação da Sprint 1.
- Criadas ADRs 0007 a 0011.
- Criada diretiva inicial do projeto AI-SEOS.
- Criada estrutura real da Sprint 0.
- Criados documentos canônicos na raiz do repositório.
- Criadas políticas iniciais de licença, segurança e código de conduta.
- Criados READMEs base para diretórios principais.
- Criadas ADRs iniciais da fundação.
- Definida missão do framework.
- Definida estrutura de sprints.
- Definida estrutura inicial do repositório.
- Definidos documentos raiz.
- Definido uso de ADRs para decisões estruturais.
- Definido Markdown como formato primário.
- Definido Mermaid como formato textual de diagramas.
- Definido modelo inicial de governança.
- Definido protocolo inicial de desenvolvimento.

## Changed

- Melhorada detecção/exibição de stack provável da CLI para Node.js, TypeScript, Vite, React, Firebase, Supabase, Python e monorepo simples.
- `resolve-ai status` agora mostra stack provável após diagnóstico.
- Docs 00-09 agora registram stack provável com evidências seguras.
- Calibrado risco para projeto novo sem testes/CI não virar crítico por esse motivo isolado.

## Deprecated

- N/A

## Removed

- N/A

## Fixed

- Corrigida copy de `resolve-ai resolver` para mencionar `resolve-ai validar` como comando existente.

## Security

- Criado espaço para futura política de segurança.

---

# [0.1.0] — 2026-07-03

## Added

- Versão bootstrap inicial do AI-SEOS.
- Foundation kit inicial.
- Roadmap de sprints 0 a 7.

---

# Convenções

## Added

Novos documentos, módulos, templates, engines ou capacidades.

## Changed

Mudanças em comportamento, estrutura ou documentação existente.

## Deprecated

Itens que serão removidos futuramente.

## Removed

Itens removidos.

## Fixed

Correções.

## Security

Mudanças relacionadas a segurança.
