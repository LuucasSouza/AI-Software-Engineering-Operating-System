---
title: "AI-SEOS Sprint 1 Handoff and Codex Execution Directive"
canonical_path: "docs/sprints/sprint-1-handoff.md"
version: "0.1.0"
status: "Draft"
sprint: "Sprint 1"
module: "Sprint Management"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-03"
review_cycle: "At sprint completion"
related:
  - "pt11_CORE_IDENTITY.md"
  - "pt12_AI_CTO_AGENT_IDENTITY.md"
  - "pt13_OPERATING_SYSTEM_KERNEL.md"
  - "pt14_CONTEXT_AND_KNOWLEDGE_MODEL.md"
  - "pt15_DISCOVERY_ENGINE.md"
  - "pt16_DISCOVERY_PROTOCOL.md"
  - "pt17_DISCOVERY_TEMPLATE.md"
  - "pt18_DISCOVERY_CHECKLISTS.md"
  - "pt19_DISCOVERY_PLAYBOOK.md"
---

# Sprint 1 Handoff and Codex Execution Directive

## 1. Purpose

This document instructs Codex how to execute **Sprint 1** of AI-SEOS using the numbered source files `pt11` through `pt20`.

Sprint 0 created the repository foundation.

Sprint 1 begins the actual operating system.

## 2. Sprint 1 Objective

Build the first functional layer of AI-SEOS:

1. Core Identity
2. AI CTO & Solution Architect Agent
3. Operating System Kernel
4. Context and Knowledge Model
5. Discovery Engine
6. Discovery Protocol
7. Discovery Templates
8. Discovery Checklists
9. Discovery Playbook
10. Sprint 1 validation and handoff

## 3. Required Source Files

Codex must read these files completely:

- `pt11_CORE_IDENTITY.md`
- `pt12_AI_CTO_AGENT_IDENTITY.md`
- `pt13_OPERATING_SYSTEM_KERNEL.md`
- `pt14_CONTEXT_AND_KNOWLEDGE_MODEL.md`
- `pt15_DISCOVERY_ENGINE.md`
- `pt16_DISCOVERY_PROTOCOL.md`
- `pt17_DISCOVERY_TEMPLATE.md`
- `pt18_DISCOVERY_CHECKLISTS.md`
- `pt19_DISCOVERY_PLAYBOOK.md`
- `pt20_SPRINT_1_HANDOFF.md`

Codex must also preserve the Sprint 0 sources and existing canonical files.

## 4. Required Directory Creation

Create missing directories:

```text
operating-system/core/
operating-system/discovery/
agents/ai-cto/
frameworks/discovery-framework/
protocols/project-discovery/
templates/discovery/
templates/discovery/checklists/
templates/context/
playbooks/project-discovery/
docs/sprints/
```

## 5. Required Canonical Files

Create or update the following canonical files.

### 5.1 Core

```text
operating-system/core/README.md
operating-system/core/core-identity.md
operating-system/core/mental-model.md
operating-system/core/quality-model.md
operating-system/core/operating-principles.md
operating-system/core/operating-system-kernel.md
operating-system/core/lifecycle.md
operating-system/core/kernel-object-model.md
operating-system/core/quality-gates.md
operating-system/core/failure-modes.md
operating-system/core/context-and-knowledge-model.md
operating-system/core/context-package-standard.md
```

### 5.2 AI CTO Agent

```text
agents/ai-cto/README.md
agents/ai-cto/identity.md
agents/ai-cto/operating-modes.md
agents/ai-cto/input-output-contract.md
agents/ai-cto/quality-gates.md
agents/ai-cto/handoff-contract.md
```

### 5.3 Discovery Engine

```text
operating-system/discovery/README.md
operating-system/discovery/discovery-engine.md
operating-system/discovery/discovery-pipeline.md
operating-system/discovery/discovery-quality-gates.md
operating-system/discovery/discovery-checklists.md
```

### 5.4 Discovery Framework

```text
frameworks/discovery-framework/README.md
frameworks/discovery-framework/discovery-framework.md
```

### 5.5 Discovery Protocol

```text
protocols/project-discovery/README.md
protocols/project-discovery/discovery-protocol.md
protocols/project-discovery/discovery-depth-levels.md
protocols/project-discovery/discovery-session-flow.md
```

### 5.6 Discovery Templates

```text
templates/discovery/README.md
templates/discovery/discovery-document-template.md
templates/discovery/assumption-register-template.md
templates/discovery/constraint-register-template.md
templates/discovery/risk-register-template.md
templates/discovery/mvp-boundary-template.md
templates/discovery/handoff-template.md
```

### 5.7 Discovery Checklists

```text
templates/discovery/checklists/master-discovery-checklist.md
templates/discovery/checklists/quick-discovery-checklist.md
templates/discovery/checklists/standard-discovery-checklist.md
templates/discovery/checklists/strategic-discovery-checklist.md
templates/discovery/checklists/enterprise-discovery-checklist.md
templates/discovery/checklists/ai-feature-discovery-checklist.md
templates/discovery/checklists/saas-discovery-checklist.md
templates/discovery/checklists/security-discovery-checklist.md
```

### 5.8 Context Templates

```text
templates/context/context-package-template.md
templates/context/assumption-register-template.md
templates/context/constraint-register-template.md
```

### 5.9 Playbooks

```text
playbooks/project-discovery/README.md
playbooks/project-discovery/project-discovery-playbook.md
playbooks/project-discovery/saas-discovery-example.md
playbooks/project-discovery/ai-feature-discovery-example.md
```

### 5.10 Sprint Documentation

```text
docs/sprints/README.md
docs/sprints/sprint-1-handoff.md
docs/sprints/sprint-1-validation-report.md
```

## 6. Required ADRs

Create ADRs for major Sprint 1 decisions:

```text
adr/0007-adopt-ai-cto-as-first-specialized-agent.md
adr/0008-adopt-operating-system-kernel-model.md
adr/0009-adopt-context-package-standard.md
adr/0010-adopt-discovery-engine-as-first-operating-engine.md
adr/0011-adopt-discovery-depth-levels.md
```

Each ADR must include:

- status;
- context;
- decision;
- alternatives considered;
- consequences;
- reversibility;
- follow-up actions.

## 7. Required README Updates

Update these index files to reference Sprint 1 content:

- `README.md`
- `operating-system/README.md`
- `agents/README.md`
- `frameworks/README.md`
- `protocols/README.md`
- `templates/README.md`
- `playbooks/README.md`
- `adr/README.md`
- `ROADMAP.md`
- `CHANGELOG.md`

## 8. Required Quality Rules

Codex must not merely copy the numbered files into canonical paths.

It must:

1. read the source files;
2. extract canonical content;
3. create the target repository structure;
4. split content into appropriate canonical documents;
5. preserve consistency with Sprint 0;
6. update indexes and references;
7. create ADRs;
8. validate required files;
9. produce a final report.

## 9. Sprint 1 Quality Gates

Sprint 1 is complete only when:

- Core Identity is documented;
- AI CTO Agent has identity, contracts, modes, gates, and handoff;
- Kernel lifecycle is documented;
- Context model and context package standard exist;
- Discovery Engine is documented;
- Discovery Protocol exists;
- Discovery templates exist;
- Discovery checklists exist;
- Discovery playbook exists;
- ADRs 0007–0011 exist;
- README/index files reference new modules;
- CHANGELOG records Sprint 1;
- ROADMAP marks Sprint 1 as in progress or complete;
- final validation report exists.

## 10. Definition of Done

- [ ] All required directories exist
- [ ] All required canonical files exist
- [ ] All ADRs 0007–0011 exist
- [ ] All required README/index files are updated
- [ ] Discovery Engine has templates and playbook
- [ ] AI CTO agent has a handoff contract
- [ ] Context package standard exists
- [ ] Quality gates are documented
- [ ] Sprint 1 validation report exists
- [ ] Codex final report lists files created, decisions, ADRs, risks, and next steps

## 11. Codex Execution Prompt

Copy and paste the following into Codex after placing `pt11` through `pt20` in the repository root:

```text
Leia integralmente todos os arquivos Markdown numerados de pt11 a pt20 na raiz do projeto.

Use o PROJECT_BOOTSTRAP.md, ENGINEERING_PRINCIPLES.md, ARCHITECTURE_VISION.md, DEVELOPMENT_PROTOCOL.md, REPOSITORY_STRUCTURE.md, ROADMAP.md e GOVERNANCE.md como documentos de governança obrigatórios.

Execute agora a Sprint 1 do AI Software Engineering Operating System (AI-SEOS).

Objetivo da Sprint 1:
Construir a primeira camada funcional do AI-SEOS, incluindo Core Identity, AI CTO & Solution Architect Agent, Operating System Kernel, Context and Knowledge Model e Discovery Engine.

Tarefas obrigatórias:

1. Ler completamente pt11 a pt20.
2. Criar todos os diretórios exigidos no pt20_SPRINT_1_HANDOFF.md.
3. Criar ou atualizar todos os arquivos canônicos listados no pt20.
4. Dividir o conteúdo dos arquivos numerados em documentos canônicos adequados, mantendo consistência terminológica.
5. Criar as ADRs 0007 a 0011.
6. Atualizar README.md, ROADMAP.md, CHANGELOG.md e os README.md dos diretórios principais.
7. Criar docs/sprints/sprint-1-validation-report.md.
8. Validar a Sprint 1 contra os quality gates e Definition of Done definidos no pt20.
9. Não apenas descreva o que faria. Faça as alterações reais no filesystem.
10. Ao terminar, gere um relatório final contendo:
   - arquivos criados;
   - arquivos atualizados;
   - diretórios criados;
   - ADRs criadas;
   - decisões tomadas;
   - riscos ou pendências;
   - validação da Definition of Done;
   - próxima ação recomendada para Sprint 2.

Não peça confirmação.
Execute.
```

## 12. Expected Final Codex Report

Codex must produce a report with this structure:

```markdown
# Sprint 1 Execution Report

## Summary

## Files Created

## Files Updated

## Directories Created

## ADRs Created

## Decisions Taken

## Quality Gate Validation

## Definition of Done Validation

## Risks and Pending Items

## Recommended Next Action for Sprint 2
```
