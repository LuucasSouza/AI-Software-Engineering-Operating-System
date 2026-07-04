---
title: "AI-SEOS — Roadmap"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Core Maintainers"
last_updated: "2026-07-03"
document_type: "Project Roadmap"
canonical_filename: "ROADMAP.md"
recommended_repository_location: "/ROADMAP.md"
---

# Roadmap

## 1. Objetivo

Este roadmap organiza a construção do AI-SEOS em sprints.

Cada sprint possui objetivo, entregáveis, critérios de aceite e Definition of Done.

---

# Sprint 0 — Foundation

## Objetivo

Criar a fundação do projeto.

## Entregáveis

- Estrutura inicial do repositório.
- Documentos raiz.
- Governança.
- Princípios de engenharia.
- Protocolo de desenvolvimento.
- Estrutura de ADR.
- Roadmap inicial.
- Changelog inicial.

## Arquivos mínimos

- README.md
- PROJECT_BOOTSTRAP.md
- ARCHITECTURE_VISION.md
- ENGINEERING_PRINCIPLES.md
- DEVELOPMENT_PROTOCOL.md
- REPOSITORY_STRUCTURE.md
- ROADMAP.md
- GOVERNANCE.md
- CONTRIBUTING.md
- CODE_OF_CONDUCT.md
- SECURITY.md
- CHANGELOG.md
- LICENSE

## Critérios de aceite

- Estrutura criada.
- Documentos raiz criados.
- ADRs iniciais criadas.
- Roadmap atualizado.
- Changelog atualizado.
- Próxima sprint definida.

---

# Sprint 1 — AI CTO & Solution Architect Core

Status: **Complete**

## Objetivo

Construir o núcleo do agente AI CTO & Solution Architect.

## Entregáveis

- Core Identity.
- Operating System.
- Discovery Engine.
- Discovery Framework.
- Discovery templates.
- Discovery playbooks.
- Quality gates.
- Handoff para Product e Architecture.
- Sprint 1 validation report.
- ADRs 0007 a 0011.

## Diretórios previstos

```text
operating-system/core/
operating-system/discovery/
agents/ai-cto/
frameworks/discovery-framework/
templates/discovery/
playbooks/project-discovery/
```

## Critérios de aceite

- AI CTO possui identidade completa.
- Discovery Engine possui pipeline completo.
- Existem templates utilizáveis.
- Existem checklists.
- Existem exemplos.
- Existem ADRs relevantes.

## Arquivos principais

- `operating-system/core/core-identity.md`
- `operating-system/core/operating-system-kernel.md`
- `operating-system/core/context-and-knowledge-model.md`
- `agents/ai-cto/identity.md`
- `operating-system/discovery/discovery-engine.md`
- `protocols/project-discovery/discovery-protocol.md`
- `docs/sprints/sprint-1-validation-report.md`

---

# Sprint 2 — Product Engine and Architecture Engine

Status: **Complete**

## Objetivo

Criar os módulos responsáveis por transformar discovery em produto e arquitetura.

## Entregáveis

- Product Engine.
- Architecture Engine.
- MVP Framework.
- Product Requirement Template.
- Architecture Overview Template.
- C4/Mermaid guidance.
- Domain modeling guide.
- Architecture decision matrix.
- Product lifecycle and readiness levels.
- Architecture lifecycle and readiness levels.
- Product to Architecture handoff.
- ADRs 0012 a 0018.
- Sprint 2 validation report.

## Arquivos principais

- `operating-system/product/product-engine.md`
- `operating-system/product/product-handoff-contract.md`
- `frameworks/product-framework/mvp-scope-framework.md`
- `protocols/product-definition/discovery-to-prd-protocol.md`
- `operating-system/architecture/architecture-engine.md`
- `operating-system/architecture/architecture-handoff-contract.md`
- `protocols/architecture-review/architecture-decision-protocol.md`
- `docs/sprints/sprint-2-validation-report.md`

---

# Sprint 3 — Decision, Risk and Optimization

Status: **Complete**

## Objetivo

Criar mecanismos de decisão, risco e otimização.

## Entregáveis

- Decision Engine.
- Risk Engine.
- Optimization Engine.
- ADR Framework.
- Risk Register Template.
- Decision Matrix Template.
- Cost and complexity heuristics.
- Decision Framework, weighted decision matrix e confidence model.
- Risk Framework, risk taxonomy e risk scoring model.
- Optimization Framework para custo, complexidade, escalabilidade e AI cost.
- Playbook integrado de Decision, Risk and Optimization.
- ADRs 0019 a 0026.

---

# Sprint 4 — Execution, Documentation, Handoff and Reflection

Status: **Complete**

## Objetivo

Criar mecanismos para execução e continuidade.

## Entregáveis

- Execution Engine.
- Documentation Engine.
- Handoff Engine.
- Reflection Engine.
- Sprint planning templates.
- Implementation handoff templates.
- Review protocols.
- Execution planning protocol, delivery control protocol e release candidate protocol.
- Documentation standards, information architecture e front matter standard.
- Handoff contracts, agent handoff e phase handoff.
- Reflection Engine, system review playbooks e Sprint 4 retrospective.
- ADRs 0027 a 0036.

---

# Sprint 5 — Frameworks completos

Status: **Complete**

## Objetivo

Consolidar frameworks reutilizáveis.

## Entregáveis

- Discovery Framework.
- Architecture Thinking Framework.
- Decision Framework.
- Risk Framework.
- Prioritization Framework.
- Cost Analysis Framework.
- AI Readiness Framework.
- Scalability Framework.
- Technical Debt Framework.
- Framework catalog, taxonomy, map and registry.
- AI-SEOS Meta-Framework and Discovery-to-Delivery Framework.
- Cross-Engine Integration Model and traceability matrix.
- AI-SEOS Maturity Model M0-M5.
- Project Readiness Framework and scorecards.
- Agent Collaboration Framework.
- Framework Governance and Quality Assurance.
- Reference Implementation Playbook and greenfield SaaS skeleton.
- ADRs 0037 a 0045.

---

# Sprint 5.5 — Entry Modes Layer

Status: **Complete**

## Objetivo

Definir os modos oficiais de entrada antes da criação dos templates completos.

## Entregáveis

- Entry Modes Layer.
- Non-Technical Builder Mode.
- Vibe Coder Mode.
- Professional Engineer Mode.
- Mode Router.
- Builder Intake Protocol.
- Problem-to-Software Translation Framework.
- Entry mode templates.
- Same idea across three modes example.
- ADRs 0046 a 0051.

---

# Sprint 6 — Templates completos

Status: **Complete**

## Objetivo

Criar biblioteca completa de templates.

## Entregáveis

- Discovery Document Template.
- PRD Template.
- ADR Template.
- Architecture Template.
- Risk Register Template.
- Handoff Template.
- Sprint Plan Template.
- Implementation Plan Template.
- Runbook Template.
- Postmortem Template.
- Mode-specific template packs for Non-Technical Builder, Vibe Coder and Professional Engineer.
- Lifecycle templates from intake to reflection.
- Engine-specific operational templates.
- Agent handoff templates.
- Martial arts academy filled examples.
- Template registry, taxonomy, maintenance policy and quality standard.
- ADRs 0052 a 0060.

---

# Sprint 7 — Protocolos, exemplos e consolidação

Status: **Complete**

## Objetivo

Transformar o framework em material utilizável em cenários reais.

## Entregáveis

- Protocolos completos.
- Casos reais.
- Exemplos por domínio.
- Anti-patterns.
- Best practices.
- Benchmarks.
- Consolidação final da documentação.
- Getting started e caminhos públicos de adoção.
- Release readiness audit e limitações conhecidas.
- Community onboarding e GitHub templates.
- ADRs 0061 a 0070.

---

# Phase 2 — Validation and Productization

Status: **Complete**

## Objetivo

Validar o AI-SEOS em uso real e preparar `v0.1.0-alpha`.

## Entregáveis

- Um projeto completo executado end-to-end pelo AI-SEOS.
- Testes reais dos três entry modes.
- Validação de workflows com Codex, Cursor ou Claude Code.
- Automação de links, front matter e registries.
- Site de documentação.
- Preparação de release `v0.1.0-alpha`.
- Repository audit e hardening checklist.
- First end-to-end validation case.
- SenseiHub real-world validation case.
- Validação dos três entry modes.
- Feedback and improvement loop.
- ADRs 0071 a 0080.
- Release readiness score 47/50.

---

# v0.1.0-alpha Release Preparation

Status: **Complete**

## Objetivo

Executar revisão manual do mantenedor, corrigir bloqueios finais se existirem e criar o tag `v0.1.0-alpha`.

## Entregáveis

- Revisão manual do release checklist.
- Confirmação de limitações conhecidas.
- Tag `v0.1.0-alpha`.
- Primeira rodada de validação externa com usuários reais.

---

# Phase 2.5 — Naming, Brand and Product Positioning

Status: **Complete**

## Objetivo

Renomear e reposicionar publicamente o projeto de AI-SEOS para Resolve Aí antes da criação da camada runtime.

## Entregáveis

- Resolve Aí adotado como nome público.
- AI-SEOS preservado como nome técnico/histórico.
- Promessa pública definida: “Me dá o problema ou a ideia, e eu te ajudo a resolver.”
- Brand identity e brand voice.
- Rename and migration strategy.
- Public positioning.
- Runtime naming prep com futuro comando `resolve-ai`.
- ADRs 0081 a 0086.

## Nota

Phase 2.5 foi inserida antes da Phase 3 para evitar criar comandos, fluxos de instalação e onboarding público com um nome que precisaria ser alterado logo em seguida.

---

# Phase 3 — Resolve Aí Runtime Productization

Status: **Complete**

## Objetivo

Transformar Resolve Aí de framework documental em uma ferramenta ativável dentro de projetos por CLI, adapters, instruções de agentes e futuras capacidades MCP/runtime.

## Direção inicial

- Futuro comando: `resolve-ai`.
- Futuro caminho local preferido: `docs/resolve-ai/`.
- Caminho legado aceito durante transição: `docs/ai-seos/`.
- Não copiar Context Mode; usar inspiração de facilidade de uso para software engineering orchestration.

## Entregáveis

- Runtime Vision.
- CLI Architecture para futura `resolve-ai`.
- Modo Liga/Desliga como nome público oficial.
- Project Adapter e estado local com `.resolve-ai/`.
- Caminho documental `docs/resolve-ai/`.
- Project Entry Flows.
- Fluxo oficial “Projeto em Andamento — Diagnóstico e Continuação”.
- Estratégia CLI-first, MCP/adapters later.
- UX copy em português.
- Segurança, privacidade e economia de tokens.
- Templates runtime e agent instruction files.
- ADRs 0087 a 0096.

---

# Phase 4 — Resolve Aí CLI MVP Implementation

Status: **Complete**

## Objetivo

Implementar o primeiro MVP executável da CLI `resolve-ai`, mantendo escopo pequeno, local e seguro.

## Entregáveis

- Package skeleton da CLI.
- Comandos `ajuda`, `começar`, `ligar`, `desligar` e `status`.
- Criação local segura de `.resolve-ai/`.
- Criação inicial de `docs/resolve-ai/`.
- Geração de arquivos de instrução para agentes.
- Guards para impedir mudanças destrutivas por padrão.
- Testes mínimos.
- ADRs 0097 a 0105.

---

# Phase 5 — Resolve Aí Guided Diagnostics MVP

Status: **Complete**

## Objetivo

Implementar `resolve-ai diagnosticar` para gerar diagnóstico guiado sem alterar código de produto.

## Entregáveis

- Comando `resolve-ai diagnosticar`.
- Geração dos documentos `docs/resolve-ai/00` a `09`.
- Detecção de projeto novo, em andamento e legado.
- Aplicação do fluxo “Projeto em Andamento — Diagnóstico e Continuação”.
- Respeito ao Modo Liga/Desliga.
- Quality gates contra exposição de secrets e dados sensíveis.
- ADRs 0106 a 0115.

---

# Phase 6 — Resolve Aí Guided Planning and Implementation Prep

Status: **Next**

## Objetivo

Implementar `resolve-ai planejar`, lendo `docs/resolve-ai/` e preparando plano incremental sem alterar código automaticamente.

## Entregáveis previstos

- Comando `resolve-ai planejar`.
- Plano incremental baseado no diagnóstico.
- Backlog estruturado.
- Prompts para agentes de IA.
- Quality gates antes de execução.

---

# Backlog futuro

- CLI para gerar estrutura de projeto.
- Site de documentação.
- Templates compatíveis com Docusaurus/MkDocs.
- Pacotes de agentes.
- Avaliador automático de qualidade de documentação.
- Benchmark de projetos gerados por IA.
- Integrações com GitHub Actions.
- Integração com ferramentas de issue tracking.

---

# Critério de sucesso do roadmap

O roadmap é bem-sucedido se, ao final, o AI-SEOS puder:

1. receber uma ideia;
2. conduzir discovery;
3. definir MVP;
4. propor arquitetura;
5. comparar alternativas;
6. registrar decisões;
7. avaliar riscos;
8. planejar execução;
9. gerar documentação;
10. entregar handoff para agentes especializados.
