# pt242 — Real Private Alpha Execution Protocol

## 1. Objetivo

Este protocolo define como executar sessões reais de alpha privado para o Resolve Aí com usuários dos três perfis oficiais, sem coletar dados sensíveis e sem criar pressão para uma decisão artificial de GO.

## 2. Pré-condições

Antes de executar uma sessão real, confirmar:

- o participante entende que está testando uma versão alpha;
- o participante aceita que feedback será registrado de forma anonimizada;
- nenhum dado sensível real será coletado;
- projetos usados no teste não devem conter segredos, credenciais, dados pessoais ou informações comerciais sensíveis;
- o moderador entende que não deve ajudar além do roteiro, salvo bloqueio operacional;
- a sessão possui objetivo claro;
- a versão testada da CLI está identificada.

## 3. Identificação anonimizada

Usar identificadores:

- `P15B-NTB-01`
- `P15B-VC-01`
- `P15B-PE-01`

Não registrar nome completo, e-mail, telefone, empresa, repositório privado ou qualquer dado pessoal desnecessário.

## 4. Duração sugerida

Cada sessão deve ter entre 30 e 60 minutos.

### Blocos

1. Introdução e consentimento — 5 min
2. Contexto do participante — 5 min
3. Execução orientada do fluxo — 15 a 30 min
4. Perguntas de entendimento — 10 min
5. Feedback final — 5 a 10 min

## 5. Fluxo obrigatório

Sempre que possível, executar:

```bash
resolve-ai ajuda
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

Para Non-Technical Builder, o moderador pode operar o terminal, mas deve observar se o participante entende a jornada e o valor dos artefatos gerados.

## 6. Perguntas obrigatórias

### 6.1 Entendimento

- O que você acha que o Resolve Aí faz?
- O que você acha que ele não faz?
- Em algum momento pareceu que ele alteraria o projeto sozinho?
- O comando `resolver` ficou claro?
- O alias `executar` parece perigoso ou confuso?
- Você confiaria em rodar isso em um projeto seu?

### 6.2 Valor percebido

- Qual parte pareceu mais útil?
- Qual parte pareceu desnecessária?
- O fluxo ajudou a organizar melhor o problema/projeto?
- Você usaria novamente?
- Você recomendaria para alguém parecido com você?

### 6.3 Linguagem brasileira

- A linguagem parece natural?
- Parece simples demais?
- Parece técnica demais?
- Alguma frase soou artificial?
- O tom “Resolve Aí” passa confiança ou parece brincadeira demais?

### 6.4 Segurança

- Ficou claro que a ferramenta não publica, não faz deploy e não executa alterações automáticas?
- Ficou claro quando ela está ligada/desligada?
- Ficou claro o que vai para `.resolve-ai/` e o que vai para `docs/resolve-ai/`?

## 7. Observações do moderador

Registrar:

- onde o usuário travou;
- onde leu e entendeu sem ajuda;
- onde perguntou “isso faz o quê?”;
- onde demonstrou confiança;
- onde demonstrou medo;
- onde achou divertido;
- onde achou confuso;
- se `resolver` ou `executar` geraram ambiguidade;
- se a documentação gerada foi lida ou ignorada.

## 8. Critérios por perfil

### Non-Technical Builder

Sucesso mínimo:

- entende a promessa;
- entende que a ferramenta organiza o projeto;
- entende que não precisa ser dev para se beneficiar;
- não acha que a ferramenta “programa sozinha”.

### Vibe Coder

Sucesso mínimo:

- entende a sequência diagnosticar → planejar → preparar → resolver → validar;
- percebe valor nos documentos;
- entende que `resolver` não altera código automaticamente;
- entende que o fluxo evita bagunça.

### Professional Engineer

Sucesso mínimo:

- confia no comportamento read-only;
- entende o local state;
- considera os docs úteis;
- não rejeita o tom brasileiro como pouco profissional;
- identifica potencial de uso em projetos reais.

## 9. Bloqueadores

Classificar achados:

### P0

- ferramenta altera ou remove algo inesperadamente;
- exposição de dado sensível;
- instrução perigosa de segurança;
- publicação/deploy/tag acidental.

### P1

- usuário entende que `resolver` executa código automaticamente;
- usuário acha que `executar` é comando destrutivo;
- docs gerados induzem decisão arriscada;
- fluxo principal quebra;
- instalação local falha em cenário comum.

### P2

- copy confusa;
- documentação longa demais;
- status pouco claro;
- fluxo precisa de melhor orientação.

### P3

- melhorias de tom;
- exemplos adicionais;
- pequenos ajustes de wording;
- preferências de layout.

## 10. Saídas obrigatórias da sessão

Cada sessão deve gerar:

- relatório por participante;
- checklist preenchido;
- resumo de feedback;
- severidade dos achados;
- recomendação por perfil;
- decisão parcial.

## 11. Regra de honestidade

Se a sessão não aconteceu, registrar:

> Sessão não executada. Participante real não disponível nesta rodada. Nenhum feedback foi inventado.

## 12. Decisão pós-sessão

Depois de cada sessão:

- atualizar backlog de feedback;
- classificar achados;
- decidir se exige fix antes de nova sessão;
- não aumentar readiness só por ter criado documentação.
