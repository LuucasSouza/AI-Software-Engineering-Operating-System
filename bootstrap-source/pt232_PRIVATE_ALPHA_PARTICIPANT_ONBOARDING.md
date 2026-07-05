# pt232 — Private Alpha Participant Onboarding

## 1. Objetivo

Criar um processo simples, brasileiro e seguro para convidar participantes reais para o alpha privado do Resolve Aí.

O participante não deve sentir que está entrando em um experimento complexo de engenharia. Ele deve entender:

> “Vou testar uma ferramenta que ajuda a organizar uma ideia ou projeto com IA, sem mexer automaticamente no meu código.”

## 2. Público-alvo mínimo

A Phase 15A deve tentar recrutar pelo menos:

| Perfil | Quantidade mínima | Tipo de projeto sugerido |
|---|---:|---|
| Non-Technical Builder | 1 | ideia, problema, negócio, processo manual |
| Vibe Coder | 1 | projeto pessoal ou app criado com IA |
| Professional Engineer | 1 | projeto técnico real ou repositório exemplo |

## 3. Critérios de seleção

### 3.1 Non-Technical Builder

Pode ser:

- pessoa com uma ideia de produto;
- pessoa que quer organizar um processo;
- empreendedor pequeno;
- pessoa que usa ChatGPT, mas não programa;
- alguém que quer transformar problema em plano.

Não precisa:

- saber Git;
- saber terminal;
- saber Node;
- conhecer npm.

### 3.2 Vibe Coder

Pode ser:

- pessoa que usa Cursor/Codex/Claude/ChatGPT para programar;
- pessoa que fez app com IA, mas sem arquitetura clara;
- pessoa que tem projeto funcionando parcialmente;
- pessoa que precisa organizar backlog e riscos.

### 3.3 Professional Engineer

Pode ser:

- desenvolvedor profissional;
- tech lead;
- arquiteto;
- pessoa com experiência em documentação técnica;
- pessoa capaz de avaliar rigor, riscos e decisões.

## 4. Critérios de exclusão

Evitar nesta fase:

- projetos com dados sensíveis reais;
- projetos com segredo comercial que não pode ser descrito;
- ambientes de produção críticos;
- repositórios com credenciais versionadas sem antes sanitizar;
- usuários que esperam automação completa de código.

## 5. Convite sugerido

Usar linguagem simples:

> Estou testando uma ferramenta open-source chamada Resolve Aí. A ideia é ajudar pessoas a transformar uma ideia, problema ou projeto em diagnóstico, plano e próximos passos com ajuda de IA. Ela não mexe automaticamente no código. Queria fazer um teste rápido contigo, observar onde fica confuso e melhorar antes de publicar para mais gente.

## 6. Consentimento mínimo

Registrar que o participante entende:

- a ferramenta está em alpha privado;
- pode haver bugs;
- nenhum dado sensível deve ser compartilhado;
- feedback será usado de forma anonimizada;
- a sessão pode ser interrompida a qualquer momento;
- a ferramenta não promete resultado perfeito;
- o objetivo é melhorar UX, segurança e clareza.

## 7. Preparação do ambiente

### 7.1 Para Non-Technical Builder

Preferir sessão guiada pelo mantenedor. O participante pode apenas narrar o problema enquanto o mantenedor opera o CLI em um projeto/diretório seguro.

### 7.2 Para Vibe Coder

Usar projeto local simples ou repositório sanitizado. O participante pode executar comandos com orientação.

### 7.3 Para Professional Engineer

Pode usar repositório exemplo ou projeto próprio sem dados sensíveis. Coletar crítica técnica explícita.

## 8. Fluxo de sessão sugerido

1. Explicar a promessa do Resolve Aí.
2. Mostrar que ele não executa código automaticamente.
3. Rodar `resolve-ai ajuda`.
4. Rodar o fluxo principal:
   - `resolve-ai começar`
   - `resolve-ai ligar`
   - `resolve-ai diagnosticar`
   - `resolve-ai planejar`
   - `resolve-ai preparar`
   - `resolve-ai resolver`
   - `resolve-ai validar`
   - `resolve-ai status`
5. Observar confusões.
6. Ler documentos gerados com o participante.
7. Coletar feedback.
8. Classificar problemas.

## 9. Artefatos a criar

A Phase 15A deve criar ou atualizar:

- `docs/alpha-validation/private-alpha/participant-recruitment-plan.md`
- `docs/alpha-validation/private-alpha/participant-screening-checklist.md`
- `docs/alpha-validation/private-alpha/participant-consent-note.md`
- `docs/alpha-validation/private-alpha/session-prep-checklist.md`
- `docs/alpha-validation/private-alpha/private-alpha-onboarding-guide.md`

## 10. Checklist de segurança

Antes de cada sessão:

- [ ] Confirmar que não serão usados dados sensíveis reais.
- [ ] Confirmar que não haverá publicação npm/tag/release.
- [ ] Confirmar que o projeto usado é seguro para teste.
- [ ] Confirmar que o participante entende que `resolver` não executa código automaticamente.
- [ ] Confirmar que feedback será anonimizado.
- [ ] Confirmar que comandos destrutivos não serão usados.
