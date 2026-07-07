# Comandos do Resolve Aí

Importante: rode todos os comandos na RAIZ do projeto testado, nunca dentro da pasta `teste/`. A pasta `teste/` e apenas o kit de instruções.

Fluxo recomendado do teste:

```powershell
$ra = "C:\Users\SEU_USUARIO\OneDrive\PROGRAMAÇÃO\Resolve-Ai\packages\resolve-ai-cli\dist\index.js"
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

Para projeto que ja existe, voce pode pular `entrevistar` e ir direto para `diagnosticar`.

## resolve-ai ajuda

O que faz:
- Mostra os comandos disponiveis.

O que nao faz:
- Nao altera codigo.
- Nao cria arquivos do projeto.

## resolve-ai começar

O que faz:
- Prepara o Resolve Aí dentro do projeto.

O que cria:
- `.resolve-ai/`
- `docs/resolve-ai/`

O que nao altera:
- Nao altera codigo do produto.
- Nao faz commit.

## resolve-ai ligar

O que faz:
- Liga o acompanhamento do Resolve Aí neste projeto.

## resolve-ai entrevistar

O que faz:
- Faz uma entrevista guiada para transformar uma ideia em escopo inicial.
- Ideal para projeto do zero ou pasta vazia.
- Aliases: `entrevista` e `ideia`.

Quais docs pode gerar ou atualizar:
- `docs/resolve-ai/00-project-intake.md`
- `docs/resolve-ai/02-discovery.md`
- `docs/resolve-ai/03-product-definition.md`

O que nao faz:
- Nao altera codigo.
- Nao pede senha, token, `.env` ou dado sensivel.

Depois da entrevista, o proximo passo e `resolve-ai planejar`. O diagnostico e o status reconhecem a entrevista feita e nao pedem para repetir.

## resolve-ai diagnosticar

O que faz:
- Analisa o projeto de forma local e segura.
- Tenta identificar tipo de projeto, stack provavel, riscos e proximos passos.

Quais docs pode gerar:
- `docs/resolve-ai/00-project-intake.md`
- `docs/resolve-ai/01-project-diagnosis.md`
- `docs/resolve-ai/02-discovery.md`
- `docs/resolve-ai/03-product-definition.md`
- `docs/resolve-ai/04-architecture-notes.md`
- `docs/resolve-ai/05-risk-register.md`
- `docs/resolve-ai/06-execution-plan.md`
- `docs/resolve-ai/07-validation-checklist.md`
- `docs/resolve-ai/08-ai-agent-notes.md`
- `docs/resolve-ai/09-handoff.md`

## resolve-ai planejar

O que faz:
- Cria um plano de continuacao a partir do diagnostico.

Quais docs pode gerar:
- `docs/resolve-ai/10-plano-de-continuacao.md`
- `docs/resolve-ai/11-backlog-priorizado.md`
- `docs/resolve-ai/12-proximas-sprints.md`
- `docs/resolve-ai/13-prompts-de-execucao.md`
- `docs/resolve-ai/14-checklist-de-validacao.md`

## resolve-ai preparar

O que faz:
- Prepara uma tarefa pequena e segura para uma execucao futura.

Quais docs pode gerar:
- `docs/resolve-ai/15-tarefa-preparada.md`
- `docs/resolve-ai/16-prompt-de-implementacao.md`
- `docs/resolve-ai/17-plano-de-validacao-da-tarefa.md`
- `docs/resolve-ai/18-riscos-da-execucao.md`
- `docs/resolve-ai/19-handoff-de-execucao.md`

## resolve-ai resolver

O que faz:
- Prepara um pacote de execucao assistida com aprovacao humana.
- Gera um prompt final para usar com uma IA.

O que nao faz:
- NAO executa codigo automaticamente.
- NAO altera arquivos do produto sozinho.
- NAO faz commit.
- NAO faz push.

Quais docs pode gerar:
- `docs/resolve-ai/20-execucao-assistida.md`
- `docs/resolve-ai/21-aprovacao-humana.md`
- `docs/resolve-ai/22-prompt-final-para-agente.md`
- `docs/resolve-ai/23-checklist-pos-execucao.md`
- `docs/resolve-ai/24-registro-de-execucao.md`

## resolve-ai validar

O que faz:
- Revisa o estado local depois de uma execucao assistida.
- Gera uma validacao guiada.

Importante:
- Pode depender de Git para detectar mudancas melhor.
- Se o projeto nao tiver Git, a comparacao de mudancas sera limitada.

## resolve-ai status

O que faz:
- Mostra o estado atual do Resolve Aí no projeto.
- Mostra diagnostico, plano, tarefa preparada, execucao assistida e validacao quando existirem.
