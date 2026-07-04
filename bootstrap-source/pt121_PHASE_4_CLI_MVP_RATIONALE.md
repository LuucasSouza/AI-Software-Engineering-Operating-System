# pt121 — Phase 4 CLI MVP Rationale

---
title: Phase 4 CLI MVP Rationale
project: Resolve Aí
phase: 4
status: Draft Implementation Directive
version: 0.1.0-alpha
public_name: Resolve Aí
legacy_name: AI-SEOS
cli_name: resolve-ai
---

## 1. Propósito

A Phase 4 existe para transformar o Resolve Aí de um framework documentado em uma primeira ferramenta executável. Até a Phase 3, o projeto definiu o modelo operacional, os modos de entrada, os templates, os protocolos, o Modo Liga/Desliga, o Project Adapter e a visão runtime. Agora o objetivo é implementar o primeiro MVP real da CLI `resolve-ai`.

Esta fase deve ser pequena, segura e incremental. O objetivo não é implementar todos os comandos do runtime, MCP, indexação, hooks ou agentes avançados. O objetivo é provar que o Resolve Aí consegue ser instalado/rodado em um repositório e criar uma presença local mínima, clara e útil.

## 2. Por que começar pequeno

O Resolve Aí já possui documentação extensa. O risco agora é tentar implementar um runtime grande demais antes de validar a experiência básica. Um CLI grande, com muitos comandos, hooks e integração com agentes, criaria complexidade antes de termos feedback real.

A Phase 4 deve responder a uma pergunta simples:

> Uma pessoa consegue entrar em um projeto, rodar `resolve-ai começar`, ligar o Resolve Aí, ver o status e desligar sem confusão?

Se a resposta for sim, temos base para comandos avançados na próxima fase.

## 3. Escopo do MVP

A primeira versão executável deve incluir apenas:

- `resolve-ai ajuda`
- `resolve-ai começar`
- `resolve-ai ligar`
- `resolve-ai desligar`
- `resolve-ai status`

Esses comandos devem criar e manter:

- `.resolve-ai/`
- `.resolve-ai/config.json`
- `.resolve-ai/state.json`
- `docs/resolve-ai/`
- `docs/resolve-ai/README.md`
- `docs/resolve-ai/00-project-intake.md`
- `docs/resolve-ai/09-handoff.md`

## 4. Fora de escopo

Não implementar ainda:

- MCP server.
- Hooks automáticos.
- Busca semântica.
- Indexação profunda do repositório.
- Integração direta com Claude/Codex/Cursor/Gemini.
- Execução automática de diagnóstico completo.
- Alteração automática de código de produto.
- Instalação global publicada em npm.
- Telemetria.
- Chamadas para APIs de IA.

## 5. Princípio operacional

O Resolve Aí deve ser útil sem ser invasivo.

Na Phase 4, ele não deve modificar código do projeto-alvo. Ele só cria estrutura local de configuração e documentação.

## 6. Definition of Done

A Phase 4 só estará pronta quando:

- existir um pacote CLI em `packages/resolve-ai-cli/`;
- os comandos básicos funcionarem localmente;
- o Modo Liga/Desliga persistir estado;
- `resolve-ai começar` criar `.resolve-ai/` e `docs/resolve-ai/` com segurança;
- `resolve-ai status` mostrar estado compreensível;
- `resolve-ai desligar` reduzir interferência futura;
- houver testes mínimos;
- houver documentação de uso;
- houver ADRs da Phase 4;
- nenhum comando destrutivo for implementado.
