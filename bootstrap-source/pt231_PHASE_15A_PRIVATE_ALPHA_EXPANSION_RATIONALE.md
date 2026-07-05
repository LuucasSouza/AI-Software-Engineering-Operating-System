# pt231 — Phase 15A: Private Alpha Expansion and Fixes Rationale

## 1. Contexto

A Phase 14 concluiu que o Resolve Aí está em **LIMITED GO**. A CLI está tecnicamente estável para uso local controlado, os fluxos principais passam nos testes, o pacote npm está enxuto no `npm pack --dry-run`, e não há P0 ou P1 de segurança conhecidos. Ainda assim, falta o principal insumo para um alpha público responsável: validação real com pessoas dos três perfis oficiais.

A Phase 15A existe para transformar o estado atual de validação simulada em validação humana controlada, com sessões pequenas, evidência anonimizada, feedback rastreável, correções mínimas e decisão objetiva sobre o próximo gate.

Esta fase não é release. Esta fase é aprendizado controlado.

## 2. Por que não ir direto para npm público

O Resolve Aí promete ajudar pessoas brasileiras a transformar uma ideia ou problema em caminho de execução. Essa promessa envolve UX, linguagem, expectativas e segurança. Testes automatizados confirmam comportamento técnico, mas não respondem perguntas como:

- uma pessoa não técnica entende o que `começar`, `diagnosticar`, `planejar`, `preparar`, `resolver` e `validar` fazem?
- o comando `resolver` parece perigoso ou parece que vai mexer sozinho no código?
- a linguagem está brasileira, leve e confiável sem parecer amadora?
- o fluxo ajuda de verdade um Vibe Coder a sair da bagunça?
- um Professional Engineer considera os artefatos úteis ou superficiais?
- os documentos gerados ajudam ou viram ruído?
- o usuário entende a diferença entre `.resolve-ai/` e `docs/resolve-ai/`?
- o usuário sabe quando commitar ou não commitar os documentos gerados?

Sem esse aprendizado, publicar no npm pode gerar adoção prematura, feedback confuso e risco reputacional.

## 3. Objetivo da Phase 15A

Executar um alpha privado controlado com pelo menos um participante por perfil oficial:

1. Non-Technical Builder.
2. Vibe Coder.
3. Professional Engineer.

A fase deve:

- preparar kit de onboarding privado;
- conduzir sessões reais ou registrar sua ausência honestamente;
- coletar feedback anonimizado;
- classificar blockers P0/P1/P2/P3;
- corrigir apenas problemas pequenos e seguros detectados durante a validação;
- recalcular readiness score;
- decidir entre continuar private alpha, resolver blockers ou avançar para public alpha release execution.

## 4. Escopo permitido

É permitido:

- criar documentação de onboarding privado;
- criar instruções para participantes;
- criar scripts/roteiros de sessão;
- atualizar cópia da CLI se houver confusão comprovada;
- ajustar README e quickstart para reduzir atrito;
- adicionar testes para proteger correções pequenas;
- atualizar scorecards, blockers e release decision docs;
- melhorar templates de feedback;
- preservar bootstrap sources.

## 5. Escopo proibido

Não é permitido:

- publicar no npm;
- criar tag Git;
- criar GitHub release;
- declarar stable;
- inventar validação real;
- coletar dados pessoais desnecessários;
- pedir projetos privados com dados sensíveis;
- implementar MCP;
- implementar hooks;
- adicionar telemetria;
- fazer execução automática de tarefas;
- alterar comportamento destrutivo;
- reescrever histórico Git.

## 6. Estratégia de validação

A validação deve ser pequena e profunda. O objetivo não é volume estatístico, é reduzir incerteza crítica.

### 6.1 Sessão Non-Technical Builder

Foco:

- entendimento da promessa;
- clareza do onboarding;
- medo ou confiança ao usar comandos;
- utilidade dos documentos gerados;
- linguagem brasileira;
- sensação de “isso resolve meu problema?”.

### 6.2 Sessão Vibe Coder

Foco:

- clareza do fluxo para organizar projeto bagunçado;
- valor do diagnóstico;
- valor do plano;
- utilidade do preparo/resolver/validar;
- redução de impulso de sair codando sem plano;
- integração com uso de IA no terminal.

### 6.3 Sessão Professional Engineer

Foco:

- rigor dos artefatos;
- utilidade arquitetural;
- safety gates;
- qualidade dos riscos/backlog;
- compatibilidade com processos profissionais;
- limites para adoção em equipe.

## 7. Critérios de avanço

### GO para Phase 16 — Public Alpha Release Execution

Permitido apenas se:

- houver pelo menos um participante real por perfil;
- não houver P0 aberto;
- não houver P1 de segurança aberto;
- não houver confusão relevante sobre `resolver` executar código automaticamente;
- o package dry-run continuar limpo;
- build/test/smoke passarem;
- readiness score for >= 85;
- documentação pública estiver suficiente para instalação local/npm alpha.

### LIMITED GO

Usar se:

- alguns participantes reais foram validados, mas não todos;
- há P2s de UX/docs sem risco crítico;
- o produto é útil, mas ainda exige alpha privado expandido;
- readiness estiver entre 75 e 84.

### NO-GO

Usar se:

- houver P0;
- houver P1 de segurança;
- usuários entenderem errado que o Resolve Aí executa sozinho;
- onboarding for confuso a ponto de impedir uso;
- package ou testes falharem;
- readiness cair abaixo de 75.

## 8. Resultado esperado

Ao final, o repositório deve conter evidências suficientes para responder:

- quem testou, de forma anonimizada;
- qual perfil cada participante representa;
- qual cenário foi usado;
- o que funcionou;
- o que confundiu;
- quais mudanças foram feitas;
- quais blockers restam;
- se o projeto pode avançar para public alpha ou precisa de mais private alpha.

## 9. Princípio central

O Resolve Aí deve crescer com confiança. A pressa para publicar não pode ser maior que o cuidado com a experiência, segurança e clareza da promessa.
