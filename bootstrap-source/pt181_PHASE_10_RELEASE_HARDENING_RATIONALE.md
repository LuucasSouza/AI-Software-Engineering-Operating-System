---
title: Phase 10 — Release Hardening and Local CLI Usability Rationale
project: Resolve Aí
phase: 10
status: Draft
version: 0.1.0-alpha-prep
owner: Resolve Aí Maintainers
---

# Phase 10 — Release Hardening and Local CLI Usability Rationale

## 1. Contexto

O Resolve Aí já possui um fluxo funcional de CLI em português:

```bash
resolve-ai começar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
resolve-ai ligar
resolve-ai desligar
```

As fases anteriores implementaram diagnóstico, planejamento, preparo, execução assistida e validação, sempre com segurança, sem telemetria, sem hooks, sem MCP e sem alterar automaticamente código de projetos analisados.

A Phase 9 confirmou que o comando `validar` funciona e que o pacote já possui uma base significativa de testes. Porém, o relatório também registrou três pendências operacionais críticas para tornar a CLI utilizável de forma confiável:

1. O TypeScript compiler (`tsc`) não estava disponível no PATH da sessão.
2. O `dist/` foi atualizado manualmente, o que não é sustentável.
3. O remote local ainda aponta para o endereço antigo, mesmo com redirecionamento do GitHub para `Resolve-Ai`.

A Phase 10 existe para resolver essas pendências de produto e preparar o CLI para uso local real.

## 2. Por que esta fase existe

Até agora, o Resolve Aí foi construído em duas camadas:

1. Framework documental e operacional.
2. CLI MVP local.

Agora é necessário endurecer a experiência de uso.

Sem hardening, o projeto corre riscos como:

- novos contribuidores não conseguirem buildar a CLI;
- `dist/` ficar divergente de `src/`;
- instruções de instalação local ficarem confusas;
- testes passarem localmente mas o CLI falhar em uso real;
- usuários não entenderem como rodar o Resolve Aí fora do próprio repositório;
- releases alpha serem publicados sem checklist mínimo.

## 3. Objetivo da Phase 10

A Phase 10 deve transformar o CLI de “funciona no repositório” para “pode ser usado localmente com confiança”.

Ela deve consolidar:

- build automation;
- scripts npm previsíveis;
- smoke tests;
- instruções de instalação local;
- fluxo de uso com `npm link` ou alternativa equivalente;
- política de versionamento local;
- atualização do remote;
- checklist de release alpha;
- documentação de uso real em projetos novos e existentes.

## 4. O que esta fase NÃO deve fazer

A Phase 10 não deve implementar novos comandos de produto.

Não implementar:

- MCP;
- hooks;
- telemetria;
- execução automática de código;
- publicação npm real;
- integração com APIs externas;
- atualização destrutiva de projetos analisados;
- migração automática de `docs/ai-seos/` para `docs/resolve-ai/`.

A fase é de hardening, não de expansão funcional.

## 5. Critérios de sucesso

A Phase 10 será considerada concluída quando:

- houver build automatizado local;
- `npm test` continuar passando;
- houver comando/script de smoke test;
- a documentação explicar como instalar/usar a CLI localmente;
- o remote local for atualizado para o repositório `Resolve-Ai`, se possível;
- houver checklist de release alpha;
- houver instruções claras para testar em projeto externo;
- `dist/` puder ser regenerado por comando documentado;
- a Phase 11 estiver preparada para publicação alpha ou validação externa.

## 6. Posição no roadmap

```text
Phase 9 — Guided Review and Validation
↓
Phase 10 — Release Hardening and Local CLI Usability
↓
Phase 11 — Public Alpha Release Preparation ou External Validation
```

A Phase 10 é o passo entre “temos funcionalidade” e “podemos entregar para alguém testar”.
