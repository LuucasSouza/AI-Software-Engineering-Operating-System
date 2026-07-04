# pt131 — Phase 5: Guided Diagnostics MVP Rationale

```yaml
title: Phase 5 — Resolve Aí Guided Diagnostics MVP Rationale
phase: 5
status: Draft for execution
owner: Resolve Aí Maintainers
runtime_scope: CLI MVP
command_focus: diagnosticar
```

## 1. Por que esta fase existe

A Phase 4 criou o primeiro CLI funcional do Resolve Aí com comandos básicos:

- `resolve-ai ajuda`
- `resolve-ai começar`
- `resolve-ai comecar`
- `resolve-ai ligar`
- `resolve-ai desligar`
- `resolve-ai status`

Isso validou que o Resolve Aí pode existir como ferramenta local, criando `.resolve-ai/` e `docs/resolve-ai/` de forma segura e idempotente.

A Phase 5 é o primeiro passo para tornar o CLI realmente útil dentro de projetos reais.

O comando central desta fase é:

```bash
resolve-ai diagnosticar
```

Ele deve permitir que uma pessoa abra qualquer projeto no terminal e peça:

> Resolve Aí, entende esse projeto e organiza o diagnóstico inicial para mim.

## 2. Mudança de maturidade

Até agora, o Resolve Aí tinha duas camadas:

1. Framework documental.
2. CLI inicial de ativação.

Com a Phase 5, nasce a terceira camada:

3. Diagnóstico guiado e geração automática de documentação inicial.

O objetivo não é substituir uma análise profunda feita por um agente de IA. O objetivo do MVP é criar uma base local estruturada, segura e reutilizável para que Codex, Claude, Gemini, Cursor ou um humano consigam continuar com muito menos ambiguidade.

## 3. O que o comando deve fazer

Ao rodar:

```bash
resolve-ai diagnosticar
```

O CLI deve:

1. Detectar se está dentro de um projeto.
2. Ler apenas arquivos seguros e relevantes.
3. Identificar stack provável.
4. Detectar sinais de projeto novo, projeto em andamento ou projeto legado.
5. Detectar modo recomendado: Non-Technical Builder, Vibe Coder, Professional Engineer ou Projeto em Andamento — Diagnóstico e Continuação.
6. Criar `docs/resolve-ai/` se não existir.
7. Gerar documentos `00` a `09`.
8. Não alterar código do produto.
9. Não instalar dependências.
10. Não fazer commits.
11. Mostrar relatório final claro no terminal.

## 4. Por que não implementar tudo ainda

A Phase 5 não deve implementar:

- MCP server.
- Hooks automáticos.
- Integração com APIs externas.
- IA embutida.
- Análise semântica profunda de código.
- Refatoração.
- Testes automáticos do projeto analisado.
- Correção de problemas.

O MVP precisa ser simples, previsível e seguro.

Se o Resolve Aí já conseguir entrar em um projeto existente, criar uma pasta de documentação padronizada e entregar um relatório honesto, ele já resolve uma dor real: tirar projetos de IA/vibe coding do estado de bagunça e colocá-los em um trilho de engenharia.

## 5. Relação com “Projeto em Andamento — Diagnóstico e Continuação”

A Phase 5 operacionaliza o fluxo oficial:

```text
Projeto em Andamento — Diagnóstico e Continuação
```

Esse fluxo existe para projetos reais que já têm código, histórico, decisões implícitas, dívidas técnicas e pendências.

O comando `diagnosticar` deve ser o ponto de entrada padrão para esse cenário.

## 6. Resultado esperado

Após a Phase 5, um usuário deverá conseguir:

```bash
cd meu-projeto
resolve-ai começar
resolve-ai diagnosticar
```

E receber:

```text
docs/resolve-ai/00-project-intake.md
docs/resolve-ai/01-current-state-assessment.md
docs/resolve-ai/02-discovery.md
docs/resolve-ai/03-product-definition.md
docs/resolve-ai/04-architecture-review.md
docs/resolve-ai/05-risk-register.md
docs/resolve-ai/06-decision-log.md
docs/resolve-ai/07-execution-plan.md
docs/resolve-ai/08-backlog.md
docs/resolve-ai/09-handoff.md
```

Além de um resumo no terminal com:

- Stack detectada.
- Tipo de projeto.
- Modo recomendado.
- Principais riscos detectáveis por heurística.
- Próximas ações.

## 7. Princípio da Phase 5

> Primeiro entender. Depois organizar. Só depois alterar.

A Phase 5 deve reforçar essa filosofia no CLI.
