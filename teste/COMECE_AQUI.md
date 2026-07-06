# Comece aqui — Teste do Resolve Aí

Este e um teste simples do Resolve Aí em um projeto real ou em uma pasta de teste.

## Passo a passo

1. Copie esta pasta `teste/` para dentro do projeto que voce quer analisar.
2. Abra o projeto no VS Code.
3. Abra o terminal.
4. Verifique se o Resolve Aí esta instalado.
5. Rode:

```bash
resolve-ai ajuda
```

6. Abra o arquivo `PROMPT_PARA_IA.md`.
7. Cole o prompt na IA que voce estiver usando no projeto.
8. A IA deve te ajudar a rodar os comandos.
9. Ao final, envie o arquivo `teste/feedback.md` de volta para o Lucas.

## Seguranca

Nao use projeto com senha, token, `.env` real, backup de banco, dados de cliente ou informacao privada.

Se o projeto tiver dados sensiveis, use uma copia limpa ou uma pasta de teste.

## Instalacao local no Windows

No repositorio do Resolve Aí, abra o terminal e rode:

```bash
cd packages/resolve-ai-cli
npm link
```

Depois, no projeto que sera testado, rode:

```bash
resolve-ai ajuda
```

## Alternativa se o comando global nao funcionar

Se `resolve-ai ajuda` nao funcionar como comando global, rode diretamente com Node apontando para o `dist/index.js` do Resolve Aí.

Exemplo:

```bash
node C:\caminho\para\Resolve-Ai\packages\resolve-ai-cli\dist\index.js ajuda
```

Troque `C:\caminho\para\Resolve-Ai` pelo caminho real do repositorio na sua maquina.
