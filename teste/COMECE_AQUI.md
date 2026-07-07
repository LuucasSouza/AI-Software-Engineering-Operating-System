# Comece aqui — Teste do Resolve Aí

Este e um teste simples do Resolve Aí em um projeto real ou em uma pasta de teste.

## Importante: a pasta teste/ e so o kit de instruções

A pasta `teste/` e apenas o kit de instruções do teste.
Não rode os comandos dentro de teste/.
Rode os comandos na pasta do projeto que voce quer testar.

CERTO:

```text
meu-projeto/
  teste/            <- kit de instruções
  .resolve-ai/      <- criado pelos comandos, na raiz do projeto
  docs/resolve-ai/  <- criado pelos comandos, na raiz do projeto
```

ERRADO:

```text
meu-projeto/
  teste/
    .resolve-ai/      <- errado: comandos rodados dentro de teste/
    docs/resolve-ai/
```

## Passo a passo

1. Copie esta pasta `teste/` para dentro do projeto que voce quer analisar.
2. Abra o projeto no VS Code.
3. Abra o terminal na RAIZ do projeto (não dentro de `teste/`).
4. Verifique se o Resolve Aí esta instalado.
5. Rode:

```bash
resolve-ai ajuda
```

6. Abra o arquivo `PROMPT_PARA_IA.md`.
7. Cole o prompt na IA que voce estiver usando no projeto.
8. A IA deve te ajudar a rodar os comandos.
9. Se for uma ideia nova ou pasta vazia, comece com `resolve-ai entrevistar` depois de ligar.
10. Ao final, envie o arquivo `teste/feedback.md` de volta para o Lucas.

## Atalho no Windows (caminho absoluto)

Se preferir, crie um atalho `$ra` no PowerShell para não digitar o caminho completo toda vez:

```powershell
$ra = "C:\Users\SEU_USUARIO\OneDrive\PROGRAMAÇÃO\Resolve-Ai\packages\resolve-ai-cli\dist\index.js"
node $ra ajuda
```

`$ra` e so um atalho para o caminho do arquivo `dist/index.js`.

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
