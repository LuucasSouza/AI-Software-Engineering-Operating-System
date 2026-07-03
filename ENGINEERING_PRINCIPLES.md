---
title: "AI-SEOS — Engineering Principles"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Core Maintainers"
last_updated: "2026-07-03"
document_type: "Engineering Principles"
canonical_filename: "ENGINEERING_PRINCIPLES.md"
recommended_repository_location: "/ENGINEERING_PRINCIPLES.md"
---

# Engineering Principles

## 1. Objetivo

Este documento define os princípios de engenharia obrigatórios para o AI-SEOS.

Eles devem orientar todas as decisões de estrutura, documentação, arquitetura, agentes, engines, protocolos, templates, playbooks e exemplos.

---

# 2. Princípio 1 — Clarity Over Cleverness

Clareza é mais importante que sofisticação.

Uma solução simples, compreensível e bem documentada é preferível a uma solução brilhante, porém difícil de manter.

## Aplicação

Sempre que houver duas alternativas, escolha a que:

- pode ser explicada rapidamente;
- reduz ambiguidade;
- exige menos contexto oculto;
- facilita contribuição futura;
- favorece manutenção.

## Anti-patterns

- Criar abstrações antes da necessidade.
- Usar linguagem excessivamente acadêmica sem ganho prático.
- Criar nomes genéricos demais.
- Criar módulos com responsabilidades sobrepostas.

---

# 3. Princípio 2 — Documentation First

No AI-SEOS, documentação é produto.

A documentação deve ser tratada como artefato principal, não como complemento.

## Aplicação

Antes de criar uma engine, protocolo ou agente, documente:

- objetivo;
- problema;
- contexto;
- responsabilidades;
- limites;
- entradas;
- saídas;
- qualidade esperada.

## Anti-patterns

- Criar arquivos vazios apenas para preencher estrutura.
- Gerar documentação sem exemplos.
- Escrever conceitos sem orientar execução.
- Criar textos que dependem de memória de conversa.

---

# 4. Princípio 3 — Explicit Trade-offs

Toda decisão técnica relevante envolve perda e ganho.

O AI-SEOS deve tornar essas perdas visíveis.

## Template mínimo

```markdown
## Trade-offs

### Ganhos

### Perdas

### Riscos aceitos

### Custos futuros

### Plano de reversão
```

---

# 5. Princípio 4 — ADR Driven Architecture

Decisões estruturais devem ser registradas em ADRs.

## Quando criar ADR

Crie ADR ao decidir:

- estrutura do repositório;
- padrão de documentação;
- modelo de versionamento;
- criação de engine;
- criação de agente;
- mudança de governança;
- alteração de naming;
- adoção de ferramenta;
- definição de licença;
- mudança de escopo.

---

# 6. Princípio 5 — Secure by Design

Segurança deve ser considerada desde o início.

Mesmo sendo um framework de documentação e processos, o AI-SEOS deve orientar projetos reais a considerar:

- autenticação;
- autorização;
- segregação de dados;
- privacidade;
- auditoria;
- secrets;
- threat modeling;
- compliance;
- supply chain;
- dependências;
- logs sensíveis;
- retenção de dados.

---

# 7. Princípio 6 — Human Accountability

IA pode executar muitas tarefas, mas responsabilidade final permanece humana.

O framework deve deixar claro quando decisões exigem revisão humana.

Exemplos:

- riscos legais;
- segurança crítica;
- compliance;
- custos altos;
- decisões irreversíveis;
- produção;
- dados sensíveis;
- impacto em usuários finais.

---

# 8. Princípio 7 — Modular Evolution

Cada módulo deve evoluir de forma independente.

## Regras

- Evite acoplamento entre documentos.
- Use links internos quando necessário.
- Declare dependências.
- Declare owners.
- Declare status.
- Declare versão.

---

# 9. Princípio 8 — Progressive Depth

Nem todo projeto exige complexidade enterprise desde o início.

O AI-SEOS deve oferecer camadas de profundidade:

```text
Lightweight → Standard → Advanced → Enterprise
```

## Aplicação

Cada engine ou protocolo deve indicar como pode ser usado em:

- projeto pequeno;
- startup;
- SaaS;
- produto enterprise;
- ambiente regulado.

---

# 10. Princípio 9 — Evidence Based Engineering

Decisões devem ser baseadas em evidências sempre que possível.

Evidências podem vir de:

- requisitos;
- métricas;
- comportamento de usuários;
- constraints;
- incidentes;
- benchmarks;
- custos;
- riscos;
- experiência operacional.

Quando não houver evidência, registre a decisão como hipótese.

---

# 11. Princípio 10 — Evolutionary Architecture

Arquitetura deve permitir evolução.

O framework deve evitar decisões que otimizam apenas o momento atual e impedem crescimento futuro.

## Perguntas obrigatórias

- Essa decisão funciona em 2 anos?
- Essa decisão funciona em 5 anos?
- Essa decisão cria lock-in aceitável?
- Essa decisão pode ser revertida?
- Essa decisão aumenta ou reduz dívida técnica?

---

# 12. Princípio 11 — Quality Gates Are Mandatory

Toda etapa importante deve possuir critérios de qualidade.

Sem quality gates, a IA tende a avançar rápido demais e consolidar ambiguidade.

---

# 13. Princípio 12 — Handoff Is a First-Class Artifact

Projetos com múltiplos agentes falham quando o contexto se perde.

Todo módulo deve produzir handoff explícito para o próximo agente.

## Handoff mínimo

- contexto;
- decisões;
- artefatos;
- restrições;
- riscos;
- pendências;
- próximos passos;
- critérios de sucesso.

---

# 14. Princípio 13 — Avoid Prompt Fragility

O AI-SEOS não deve depender de prompts frágeis ou excessivamente implícitos.

Prompts operacionais devem estar conectados a:

- protocolos;
- templates;
- responsabilidades;
- quality gates;
- exemplos;
- limites.

---

# 15. Princípio 14 — Reusability by Default

Todo artefato deve ser criado pensando em reutilização.

Um template deve servir para vários projetos.

Um protocolo deve servir para vários agentes.

Uma engine deve servir para vários domínios.

---

# 16. Princípio 15 — Bias Toward Action, Never Without Structure

O AI-SEOS deve evitar paralisia por análise, mas nunca avançar sem estrutura mínima.

Regra:

```text
Avance rápido quando o risco for baixo.
Pare e documente quando o risco for alto.
```

---

# 17. Checklist de aplicação dos princípios

Antes de concluir qualquer arquivo, o agente deve verificar:

- O documento é claro?
- O objetivo está explícito?
- O escopo está delimitado?
- Há trade-offs?
- Há exemplos?
- Há quality gates?
- Há relação com outros módulos?
- Há riscos?
- Há próximos passos?
- Há possibilidade de evolução?

---

# 18. Frase central

```text
AI-SEOS não existe para fazer IA escrever mais rápido.
AI-SEOS existe para fazer IA trabalhar melhor dentro de um sistema de engenharia.
```
