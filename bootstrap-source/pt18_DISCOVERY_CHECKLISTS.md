---
title: "AI-SEOS Discovery Checklists"
canonical_path: "operating-system/discovery/discovery-checklists.md"
version: "0.1.0"
status: "Draft"
sprint: "Sprint 1"
module: "Discovery Engine"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-03"
review_cycle: "Every minor release"
related:
  - "operating-system/discovery/discovery-engine.md"
  - "protocols/project-discovery/discovery-protocol.md"
---

# AI-SEOS Discovery Checklists

## 1. Purpose

This document provides operational checklists for executing discovery consistently.

Checklists are not bureaucracy. They are safeguards against missed context, hidden assumptions, premature architecture, and incomplete handoffs.

## 2. Master Discovery Checklist

Use this checklist for every new project or major feature.

### 2.1 Intake

- [ ] Raw idea captured exactly as provided
- [ ] Requester or sponsor identified
- [ ] Expected output identified
- [ ] Urgency documented
- [ ] Known context captured
- [ ] Unknowns listed
- [ ] Discovery depth selected: D0, D1, D2, or D3

### 2.2 Problem

- [ ] Problem statement written
- [ ] Affected users identified
- [ ] Pain described
- [ ] Frequency estimated
- [ ] Severity estimated
- [ ] Current workaround documented
- [ ] Cost of inaction described
- [ ] Evidence level documented

### 2.3 Users

- [ ] Primary users identified
- [ ] Secondary users identified
- [ ] Buyer identified
- [ ] Approver identified
- [ ] Operator/support owner identified
- [ ] Persona assumptions labeled
- [ ] User workflow described
- [ ] Adoption barriers listed

### 2.4 Alternatives

- [ ] Manual alternatives documented
- [ ] Existing tools documented
- [ ] Competitors/substitutes listed
- [ ] Switching costs estimated
- [ ] Differentiation hypothesis written
- [ ] Reason current alternatives fail is clear

### 2.5 Business

- [ ] Business objective written
- [ ] Value hypothesis written
- [ ] Revenue/cost-saving model noted
- [ ] Success metrics defined
- [ ] Timeline constraints captured
- [ ] Budget constraints captured
- [ ] Decision owner identified

### 2.6 Domain

- [ ] Domain glossary started
- [ ] Main entities identified
- [ ] Workflows documented
- [ ] Domain events listed
- [ ] Lifecycle states identified
- [ ] Invariants documented
- [ ] Ambiguous terms flagged

### 2.7 Technical

- [ ] Existing systems identified
- [ ] Integrations listed
- [ ] Data types identified
- [ ] Data sensitivity assessed
- [ ] Authentication needs noted
- [ ] Authorization needs noted
- [ ] Scale assumptions captured
- [ ] Reliability needs captured
- [ ] Observability needs captured
- [ ] AI capability needs documented, if any

### 2.8 Security and Compliance

- [ ] Sensitive data identified
- [ ] Regulatory concerns listed
- [ ] Access control needs captured
- [ ] Audit requirements noted
- [ ] Retention requirements noted
- [ ] Third-party data sharing noted
- [ ] Security agent handoff required if risk is medium or higher

### 2.9 Assumptions

- [ ] Business assumptions listed
- [ ] Product assumptions listed
- [ ] Technical assumptions listed
- [ ] Security assumptions listed
- [ ] Cost assumptions listed
- [ ] Delivery assumptions listed
- [ ] Confidence levels assigned
- [ ] Impact if wrong assigned
- [ ] Validation methods proposed

### 2.10 Constraints

- [ ] Time constraints documented
- [ ] Budget constraints documented
- [ ] Team constraints documented
- [ ] Technology constraints documented
- [ ] Compliance constraints documented
- [ ] Operational constraints documented
- [ ] Fixed vs negotiable constraints marked

### 2.11 Risks

- [ ] Product risks identified
- [ ] Technical risks identified
- [ ] Security risks identified
- [ ] Data risks identified
- [ ] Compliance risks identified
- [ ] Cost risks identified
- [ ] Delivery risks identified
- [ ] Adoption risks identified
- [ ] Mitigations proposed

### 2.12 MVP

- [ ] MVP goal written
- [ ] In-scope items listed
- [ ] Out-of-scope items listed
- [ ] Manual/deferred work identified
- [ ] Learning goals documented
- [ ] MVP exit criteria defined
- [ ] Scope inflation reviewed

### 2.13 Validation

- [ ] Critical assumptions selected for validation
- [ ] Validation method chosen
- [ ] Success criteria defined
- [ ] Owner assigned
- [ ] Timeline defined
- [ ] Decision trigger documented

### 2.14 Handoff

- [ ] Next agent selected
- [ ] Handoff reason written
- [ ] Artifacts linked
- [ ] Decisions listed
- [ ] Assumptions listed
- [ ] Risks listed
- [ ] Open questions listed
- [ ] Next actions written

## 3. Quick Discovery Checklist — D0

Use for small internal improvements or low-risk ideas.

- [ ] What is the idea?
- [ ] What problem does it solve?
- [ ] Who benefits?
- [ ] What is the smallest useful version?
- [ ] What assumptions are being made?
- [ ] What could go wrong?
- [ ] What is the next action?

## 4. Standard Discovery Checklist — D1

Use for new features or early products.

- [ ] Complete problem statement
- [ ] User and buyer distinction
- [ ] Stakeholder map
- [ ] Current alternatives
- [ ] Business objective
- [ ] Domain glossary
- [ ] Technical context
- [ ] Assumption register
- [ ] Constraint register
- [ ] Risk register
- [ ] MVP boundary
- [ ] Validation plan
- [ ] Handoff package

## 5. Strategic Discovery Checklist — D2

Use for major products, substantial investment, or high uncertainty.

Everything in D1 plus:

- [ ] Market research plan
- [ ] Competitive analysis
- [ ] Pricing/value hypothesis
- [ ] Go-to-market assumptions
- [ ] Technical spike plan
- [ ] Security pre-review
- [ ] Architecture pre-review
- [ ] Cost model draft
- [ ] 2-year evolution scenario
- [ ] Kill criteria

## 6. Enterprise Discovery Checklist — D3

Use for regulated, high-integration, high-cost, or enterprise contexts.

Everything in D2 plus:

- [ ] Compliance mapping
- [ ] Data classification
- [ ] Threat model starter
- [ ] Integration dependency map
- [ ] Vendor risk assessment
- [ ] Operational ownership model
- [ ] Audit requirements
- [ ] Disaster recovery assumptions
- [ ] Migration strategy assumptions
- [ ] Architecture Review Board handoff

## 7. AI Feature Discovery Checklist

Use when the initiative includes AI capabilities.

- [ ] What user outcome requires AI?
- [ ] Could the problem be solved without AI?
- [ ] What AI task type is required? Classification, generation, extraction, retrieval, reasoning, agentic workflow, recommendation, automation?
- [ ] What data is needed?
- [ ] Is user data sent to third-party models?
- [ ] What latency is acceptable?
- [ ] What accuracy is required?
- [ ] What happens when AI is wrong?
- [ ] Is human review required?
- [ ] How will outputs be evaluated?
- [ ] What abuse or misuse cases exist?
- [ ] What cost constraints apply?
- [ ] What fallback exists if the model fails?
- [ ] Does the feature require prompt management, RAG, fine-tuning, tools, or agents?

## 8. SaaS Discovery Checklist

Use for SaaS products.

- [ ] Tenant model identified
- [ ] User roles identified
- [ ] Billing model considered
- [ ] Trial/onboarding path considered
- [ ] Data isolation requirements captured
- [ ] Admin workflows listed
- [ ] Customer support workflows considered
- [ ] Subscription lifecycle considered
- [ ] Usage metrics identified
- [ ] Churn/adoption signals identified

## 9. Security Discovery Checklist

- [ ] Authentication requirements
- [ ] Authorization model
- [ ] Sensitive data types
- [ ] PII handling
- [ ] Payment data handling
- [ ] Secrets management
- [ ] Audit logging needs
- [ ] Rate limiting needs
- [ ] Abuse cases
- [ ] Backup/restore needs
- [ ] Access review process
- [ ] Security handoff required?

## 10. Discovery Exit Checklist

Discovery can exit only when:

- [ ] The problem is understandable by someone not present in discovery
- [ ] The MVP boundary is explicit
- [ ] Assumptions are visible
- [ ] Constraints are visible
- [ ] Risks are visible
- [ ] The next agent can act
- [ ] Human sponsor can approve or reject direction
- [ ] Open questions are separated from decisions

## 11. Codex Implementation Instructions

Create or update:

- `operating-system/discovery/discovery-checklists.md`
- `templates/discovery/checklists/master-discovery-checklist.md`
- `templates/discovery/checklists/quick-discovery-checklist.md`
- `templates/discovery/checklists/standard-discovery-checklist.md`
- `templates/discovery/checklists/strategic-discovery-checklist.md`
- `templates/discovery/checklists/enterprise-discovery-checklist.md`
- `templates/discovery/checklists/ai-feature-discovery-checklist.md`
- `templates/discovery/checklists/saas-discovery-checklist.md`
- `templates/discovery/checklists/security-discovery-checklist.md`

Create directory if missing:

- `templates/discovery/checklists/`
