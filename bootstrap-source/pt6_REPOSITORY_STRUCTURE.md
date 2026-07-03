---
title: "AI-SEOS — Repository Structure"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Maintainers"
last_updated: "2026-07-03"
document_type: "Repository Structure Standard"
canonical_filename: "REPOSITORY_STRUCTURE.md"
recommended_repository_location: "/REPOSITORY_STRUCTURE.md"
---

# Repository Structure

## 1. Objetivo

Este documento define a estrutura oficial do repositório AI-SEOS.

Ele orienta onde arquivos devem ser criados, como devem ser nomeados e como módulos devem evoluir.

---

# 2. Estrutura canônica inicial

```text
ai-seos/
├── README.md
├── PROJECT_BOOTSTRAP.md
├── ARCHITECTURE_VISION.md
├── ENGINEERING_PRINCIPLES.md
├── DEVELOPMENT_PROTOCOL.md
├── REPOSITORY_STRUCTURE.md
├── ROADMAP.md
├── GOVERNANCE.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── CHANGELOG.md
├── LICENSE
├── docs/
├── operating-system/
├── frameworks/
├── protocols/
├── templates/
├── playbooks/
├── agents/
├── examples/
├── adr/
└── assets/
```

---

# 3. Diretórios raiz

## 3.1 `/docs`

Documentação conceitual e institucional.

Subdiretórios recomendados:

```text
docs/
├── vision/
├── philosophy/
├── glossary/
├── governance/
├── architecture/
├── getting-started/
└── reference/
```

## 3.2 `/operating-system`

Núcleo operacional do AI-SEOS.

```text
operating-system/
├── core/
├── discovery/
├── product/
├── architecture/
├── decision/
├── risk/
├── optimization/
├── execution/
├── documentation/
├── handoff/
└── reflection/
```

## 3.3 `/frameworks`

Frameworks reutilizáveis independentes.

```text
frameworks/
├── discovery-framework/
├── architecture-thinking-framework/
├── decision-framework/
├── risk-framework/
├── prioritization-framework/
├── domain-modeling-framework/
├── cost-analysis-framework/
└── ai-readiness-framework/
```

## 3.4 `/protocols`

Protocolos operacionais executáveis.

```text
protocols/
├── project-init/
├── project-discovery/
├── architecture-review/
├── adr/
├── handoff/
├── implementation/
├── testing/
├── release/
├── incident/
└── retrospective/
```

## 3.5 `/templates`

Templates reutilizáveis.

```text
templates/
├── discovery/
├── product/
├── architecture/
├── adr/
├── roadmap/
├── sprint/
├── risk/
├── runbook/
├── handoff/
└── review/
```

## 3.6 `/playbooks`

Guias práticos para cenários recorrentes.

```text
playbooks/
├── greenfield-saas/
├── legacy-modernization/
├── startup-mvp/
├── enterprise-platform/
├── ai-first-product/
├── marketplace/
├── internal-tools/
└── regulated-system/
```

## 3.7 `/agents`

Definições dos agentes especializados.

```text
agents/
├── ai-cto/
├── product-owner/
├── solution-architect/
├── principal-engineer/
├── security-engineer/
├── qa-lead/
├── devops-engineer/
├── implementation-lead/
├── documentation-architect/
└── reviewer/
```

## 3.8 `/examples`

Exemplos aplicados.

```text
examples/
├── saas/
├── marketplace/
├── fintech/
├── crm/
├── erp/
├── healthcare/
├── logistics/
└── ai-product/
```

## 3.9 `/adr`

Architecture Decision Records.

```text
adr/
├── 0001-record-architecture-decisions.md
├── 0002-adopt-markdown-as-primary-format.md
└── README.md
```

## 3.10 `/assets`

Diagramas, imagens, mídia e materiais auxiliares.

---

# 4. Convenções de nome

## 4.1 Diretórios

Use kebab-case:

```text
architecture-review
risk-framework
ai-readiness-framework
```

## 4.2 Arquivos Markdown

Use kebab-case para arquivos internos:

```text
discovery-engine.md
architecture-review-protocol.md
risk-register-template.md
```

Arquivos raiz tradicionais podem usar uppercase:

```text
README.md
CONTRIBUTING.md
CHANGELOG.md
```

---

# 5. README por diretório

Todo diretório relevante deve possuir `README.md` explicando:

- objetivo do diretório;
- arquivos contidos;
- como usar;
- relação com outros módulos;
- status de maturidade.

---

# 6. Versionamento documental

Documentos devem usar front matter com:

- title;
- version;
- status;
- owner;
- last_updated;
- document_type.

---

# 7. Regras para expansão

Antes de criar novo diretório, verifique:

- ele representa uma responsabilidade distinta?
- ele não duplica outro diretório?
- ele terá conteúdo suficiente?
- ele melhora navegação?
- ele será compreensível para novos contribuidores?

---

# 8. Anti-patterns

Evite:

- diretórios genéricos como `misc`, `others`, `stuff`;
- arquivos sem owner;
- arquivos sem objetivo;
- duplicação entre docs e frameworks;
- estruturas profundas demais sem necessidade;
- nomes que dependem de contexto interno.

---

# 9. Critério de aceite da estrutura

A estrutura é aceitável quando:

- novo contribuidor entende onde procurar;
- novo agente entende onde criar arquivos;
- responsabilidades estão separadas;
- documentação raiz orienta navegação;
- módulos possuem espaço para evolução;
- ADRs registram decisões estruturais.
