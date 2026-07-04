# pt201 — Phase 12 — Public Alpha Release Prep Rationale

## 1. Contexto

A Phase 11 validou o Resolve Aí em cenários simulados e fechou o primeiro ciclo completo da CLI:

```text
ajuda → começar → ligar → diagnosticar → planejar → preparar → resolver → validar → status
```

O resultado foi positivo para uma base alpha local, mas ainda insuficiente para release público:

- P0: nenhum observado.
- P1: validação com usuários reais ainda pendente.
- P1: detecção/exibição de stack não mostrou Node nem Vite/React nos cenários simulados.
- P2: mensagem de `resolver` ainda fala como se `validar` fosse futuro.
- P2: hardening crítico parece agressivo em cenários simples.
- Readiness: 72/100.
- Recomendação: Private alpha only.

A Phase 12 existe para transformar esse resultado em decisão formal de alpha público.

## 2. Objetivo da Phase 12

Preparar o Resolve Aí para uma decisão responsável de release alpha público, corrigindo os achados da Phase 11, executando validação real com usuários dos três perfis e criando os artefatos finais de release sem publicar automaticamente.

A Phase 12 deve responder:

1. O CLI está tecnicamente usável por uma pessoa fora do projeto?
2. A experiência em português está clara para brasileiros?
3. O fluxo gera valor para os três perfis?
4. A detecção de stack funciona em cenários básicos?
5. O risco crítico está calibrado ou assusta sem necessidade?
6. A documentação pública orienta instalação e uso sem depender do mantenedor?
7. A publicação npm pode ser aprovada, adiada ou bloqueada?

## 3. Não objetivo

A Phase 12 não deve:

- publicar no npm;
- criar tag Git;
- declarar versão estável;
- implementar MCP;
- implementar hooks;
- adicionar telemetria;
- coletar dados sensíveis reais;
- executar alterações automáticas em projetos de usuários;
- transformar validação documental em aprovação fictícia.

## 4. Critério central de qualidade

A Phase 12 só pode recomendar public alpha se os seguintes critérios mínimos forem verdadeiros:

| Critério | Mínimo esperado |
|---|---|
| Build | passa localmente |
| Testes | passam localmente |
| Smoke | passa localmente |
| Stack detection | Node e Vite/React detectados em fixtures básicas |
| Fluxo CLI | roda do começo ao fim em cenário limpo |
| Usuário real | pelo menos 1 validação registrada ou explicitamente pendente |
| Segurança | sem captura de conteúdo sensível |
| Docs | instalação local e uso alpha claros |
| Known limitations | limitações públicas atualizadas |
| Decisão | release decision document criado |

## 5. Princípio de honestidade

A Phase 12 deve manter a honestidade do score.

Não é aceitável aumentar o readiness por otimismo. O score só sobe se houver evidência concreta:

- teste passando;
- cenário validado;
- usuário real registrado;
- bug corrigido;
- documentação revisada;
- decisão formal tomada.

## 6. Resultado esperado

Ao final da Phase 12, o repositório deve conter:

- correções de P1/P2 da Phase 11;
- documentação de validação real;
- release candidate decision record;
- scorecard recalculado;
- release notes draft;
- npm publication checklist;
- ADRs 0176 a 0185;
- recomendação honesta: publicar, adiar ou manter private alpha.

## 7. Decisão de fase seguinte

Se a Phase 12 aprovar public alpha, a próxima fase será:

```text
Phase 13 — Public Alpha Release Execution
```

Se a Phase 12 não aprovar, a próxima fase será:

```text
Phase 13 — Alpha Blocker Resolution
```
