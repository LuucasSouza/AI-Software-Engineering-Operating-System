# Quickstart Alpha

## 1. O que e o Resolve Ai?

Resolve Ai e uma CLI local para organizar uma ideia ou projeto antes de pedir codigo para uma IA.

## 2. O que ele faz agora?

Ele cria contexto em `docs/resolve-ai/`, diagnostica stack provavel, monta plano, prepara tarefa, cria pacote de execucao assistida e valida mudancas locais de forma segura.

## 3. O que ele ainda nao faz?

Ele nao publica, nao faz deploy, nao comita, nao chama APIs externas, nao coleta telemetria e nao executa tarefas automaticamente.

## 4. Instalacao local

```bash
npm run build --prefix packages/resolve-ai-cli
npm link --prefix packages/resolve-ai-cli
resolve-ai ajuda
```

## 5. Primeiro uso

Entre no projeto que voce quer organizar e rode:

```bash
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

## 6. Onde olhar os documentos

```text
docs/resolve-ai/
```

## 7. Como desligar

```bash
resolve-ai desligar
```

## 8. Problemas comuns

- Se a stack estiver errada, trate como "provavel" e registre feedback.
- Se aparecer arquivo sensivel, nao cole conteudo em issue.
- Se voce nao entender o proximo passo, abra uma issue de UX.
