---
title: "Phase 19 — Publication Execution Retrospective"
status: "Complete"
version: "0.1.0-alpha.0"
phase: "Phase 19"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-08"
---

# Phase 19 — Publication Execution Gate — Retrospective

## O que funcionou bem

- **Os gates pararam a execução de verdade.** `npm whoami` (ENEEDAUTH) e depois `npm publish` (EOTP) bloquearam o fluxo duas vezes, e a publicação só saiu com ação direta do mantenedor. O desenho "parar em falha de gate" provou-se real, não decorativo.
- A preparação da Phase 18 pagou: o publish final foi uma operação de minutos porque release notes, auditoria, checklists e rollback plan já existiam. O tarball publicado saiu **byte a byte idêntico** ao auditado (mesmo shasum).
- A verificação de nome (`npm view` → E404) e a proibição explícita de renome automático (reforçada pelo mantenedor durante a execução) evitaram qualquer improviso de identidade.
- A cadeia npm → install test → tag → release garantiu que a tag e a release apontam para artefato realmente instalável.

## O que poderia ser melhor

- **2FA vs. execução assistida:** o protocolo assumia `npm publish` executável pelo agente, mas o 2FA do npm exige navegador. Resolvido com o mantenedor executando o comando final — modelo que, na prática, é até mais alinhado à governança (o humano aperta o botão literal). Documentar esse padrão para futuras publicações.
- **Dist-tag `latest` no primeiro publish:** o npm força `latest` a existir e não permite removê-lo. A ADR-0267 já antecipava a possibilidade, mas o protocolo pt283 dizia "latest não deve apontar para esta versão" sem reconhecer a mecânica. Registrado como ressalva; mitigação é documental até a próxima versão.
- Aviso cosmético do npm (`repository.url` normalizado) mostra que o `package.json` nunca passou por `npm pkg fix`; pendência trivial para a próxima versão.

## Riscos observados

- Com `latest` apontando para o alpha, `npm install resolve-ai` sem sufixo instala o alpha. Aceito e documentado; a alternativa (não publicar) foi descartada pelo mantenedor.
- Exposição pública sem validação humana ampla: mitigada por known limitations visíveis na release e no README.

## Lições

1. Gate bom é gate que já falhou uma vez na prática e segurou.
2. O comando final de publicação pertence ao humano; o agente prepara, verifica e registra.
3. Mecânicas do registro (latest obrigatório) devem entrar nos protocolos como fato, não como desejo.

## Próxima ação recomendada

Phase 20 — Public Alpha Feedback Loop: primeira sessão real de Non-Technical Builder usando `npx resolve-ai@alpha`, com triagem do feedback conforme `post-release-feedback-plan.md`.
