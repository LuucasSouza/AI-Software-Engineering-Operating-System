# pt267 — Feedback Template and Test Kit Update

## 1. Problema

O arquivo `teste/feedback.md` usado em validações anteriores não incluía explicitamente o comando `entrevistar` na sequência original. Isso gera inconsistência entre o fluxo atual e o formulário de feedback.

Além disso, o teste mostrou que usuários podem rodar comandos dentro da pasta `teste/`, quando essa pasta deveria ser apenas o kit de instrução.

## 2. Objetivo

Atualizar a pasta `teste/` para refletir o fluxo pós-Phase17B e reduzir erro de setup.

## 3. Arquivos a revisar

Atualizar, se existirem:

```text
teste/README.md
teste/COMECE_AQUI.md
teste/PROMPT_PARA_IA.md
teste/feedback.md
teste/COMANDOS.md
teste/SEGURANCA.md
teste/EXEMPLO_FEEDBACK_PREENCHIDO.md
teste/RESUMO_PARA_ENVIAR_AO_AMIGO.md
```

Não criar telemetria, automação de envio ou GitHub Actions.

## 4. Regra de pasta certa

Todos os documentos do kit devem deixar claro:

```text
A pasta teste/ é só o kit de instruções.
Não rode os comandos dentro de teste/.
Rode os comandos na pasta do projeto que você quer testar.
```

Exemplo:

```text
CERTO:
teste-zero-resolve-ai/
  teste/
  .resolve-ai/
  docs/resolve-ai/

ERRADO:
teste-zero-resolve-ai/
  teste/
    .resolve-ai/
    docs/resolve-ai/
```

## 5. Comando base com caminho absoluto

Incluir instrução para Windows:

```powershell
$ra = "C:\Users\SEU_USUARIO\OneDrive\PROGRAMAÇÃO\Resolve-Ai\packages\resolve-ai-cli\dist\index.js"
node $ra ajuda
```

Explicar que `$ra` é só um atalho para não digitar o caminho completo.

## 6. Fluxo atualizado

O fluxo oficial do teste deve ser:

```powershell
node $ra ajuda
node $ra começar
node $ra ligar
node $ra entrevistar
node $ra diagnosticar
node $ra planejar
node $ra preparar
node $ra resolver
node $ra validar
node $ra status
```

## 7. Feedback template atualizado

Adicionar seção para:

```md
### resolve-ai entrevistar

Executou?
- [ ] Sim
- [ ] Não

Funcionou?
- [ ] Sim
- [ ] Não
- [ ] Parcial

A entrevista ajudou a transformar a ideia em projeto?

Observações:
```

## 8. Perguntas específicas para Non-Technical Builder

Adicionar perguntas finais:

```md
## Para usuário iniciante

1. Você entendeu o que fazer depois da entrevista?
2. O plano falou da sua ideia ou ficou genérico?
3. A tarefa preparada era concreta?
4. O status mostrou um próximo passo claro?
5. Algum termo pareceu técnico demais?
```

## 9. Exemplo preenchido pós-Phase17B

Atualizar o exemplo com o cenário:

```text
Controle Simples de Gastos
Projeto novo
Non-Technical Builder
HTML/CSS/JS simples
```

O exemplo deve mostrar tanto pontos positivos quanto ajustes, sem fingir perfeição.

## 10. Prompt para Claude/Codex/Cursor

Atualizar `PROMPT_PARA_IA.md` para instruir:

- agir como usuário iniciante;
- rodar comandos no diretório pai, não dentro de `teste/`;
- preencher feedback após cada comando;
- checar se `entrevistar` apareceu na ajuda;
- registrar se plano/preparar usaram a ideia.

## 11. Testes obrigatórios

1. `teste/feedback.md` contém seção `resolve-ai entrevistar`.
2. `teste/COMANDOS.md` mostra fluxo com `entrevistar`.
3. `teste/COMECE_AQUI.md` avisa para não rodar dentro de `teste/`.
4. `teste/PROMPT_PARA_IA.md` avalia se plano e tarefa usam a ideia.
5. Nenhum arquivo de teste pede envio automático de feedback.
6. Nenhum arquivo pede dados sensíveis.

## 12. Critério de aceite

Um usuário ou agente deve conseguir abrir `teste/COMECE_AQUI.md` e entender:

- onde rodar comandos;
- como usar `$ra`;
- que `teste/` é apenas kit;
- que `entrevistar` faz parte do fluxo;
- que o feedback deve ser devolvido manualmente.
