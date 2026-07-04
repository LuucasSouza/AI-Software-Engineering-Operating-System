# pt205 — Alpha Release Package and Docs

## 1. Objetivo

Preparar todos os documentos necessários para uma decisão de public alpha, sem publicar automaticamente.

## 2. Artefatos esperados

Criar ou atualizar:

```text
docs/release/v0.1.0-alpha-release-candidate.md
docs/release/v0.1.0-alpha-release-notes-draft.md
docs/release/v0.1.0-alpha-npm-publication-checklist.md
docs/release/v0.1.0-alpha-go-no-go-decision.md
docs/release/v0.1.0-alpha-known-limitations.md
docs/release/v0.1.0-alpha-risk-review.md
docs/getting-started/quickstart-alpha.md
docs/getting-started/first-project-with-resolve-ai.md
```

## 3. Release Candidate document

Deve conter:

- versão candidata;
- commit testado;
- comandos disponíveis;
- limitações conhecidas;
- status de testes;
- status de validação humana;
- blockers;
- recomendação.

## 4. Release notes draft

Tom público:

- brasileiro;
- leve;
- direto;
- honesto sobre alpha;
- sem parecer ferramenta enterprise fria;
- sem prometer automação mágica.

Mensagem sugerida:

```text
O Resolve Aí chegou em alpha para ajudar você a transformar uma ideia ou projeto bagunçado em diagnóstico, plano, tarefa preparada, execução assistida e validação.

Ainda é alpha: ele não mexe sozinho no seu código, não publica nada, não coleta telemetria e não substitui seu julgamento.
```

## 5. NPM publication checklist

Deve conter:

- nome do pacote definido;
- bin definido;
- package metadata;
- README do pacote;
- LICENSE;
- versão;
- arquivos incluídos/excluídos;
- smoke test;
- `npm pack --dry-run`, se for seguro e local;
- decisão de dist versionado;
- política de publicação;
- autenticação npm fora do escopo.

## 6. Quickstart alpha

Deve ser escrito para pessoa brasileira.

Estrutura recomendada:

```md
# Comece aqui

## 1. O que é o Resolve Aí?

## 2. O que ele faz agora?

## 3. O que ele ainda não faz?

## 4. Instalação local

## 5. Primeiro uso

## 6. Fluxo recomendado

## 7. Onde olhar os documentos gerados

## 8. Como desligar

## 9. Problemas comuns
```

## 7. Known limitations

Atualizar com clareza:

- heurísticas locais, não IA profunda;
- não executa código automaticamente;
- não substitui revisão humana;
- validação semântica ainda limitada;
- stack detection ainda pode errar;
- uso npm ainda não publicado;
- MCP/hooks ainda não existem;
- telemetria inexistente por design.

## 8. Go/No-Go Decision

Criar documento com uma das decisões:

```text
GO — Public alpha release approved
LIMITED GO — Private/controlled alpha only
NO-GO — Release blocked
```

O documento deve explicar evidências, não apenas opinião.

## 9. Definition of Done

- Release candidate document criado.
- Release notes draft criado.
- NPM checklist criado.
- Quickstart alpha criado.
- Known limitations atualizado.
- Go/No-Go document criado.
- Scorecard recalculado.
- Nenhuma tag criada.
- Nenhuma publicação npm feita.
