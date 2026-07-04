# Alpha Feedback Triage

## Status

Draft

## Objetivo

Definir como classificar e encaminhar feedback alpha.

## Escopo

Aplica-se a feedback de CLI, documentacao, UX em portugues, seguranca, instalacao e valor percebido.

## Severidades

| Nivel | Nome | Criterio | Acao |
|---|---|---|---|
| P0 | Release blocker | Sobrescrita inesperada, vazamento sensivel, fluxo basico quebrado ou instalacao inviavel | Bloquear release |
| P1 | Must fix before public npm | Confusao comum, recomendacao ruim ou docs insuficientes | Corrigir antes de publicacao npm |
| P2 | Improve soon | Melhoria importante sem bloquear alpha | Planejar proxima fase |
| P3 | Later | Sugestao ou refinamento | Backlog |

## Principios

- P0 prevalece sobre score.
- Relatos com dados sensiveis devem ser redigidos antes de registro publico.
- Feedback de perfil deve manter o contexto do usuario.

## Responsabilidades

Maintainers devem revisar feedback novo, atribuir severidade, decidir owner e atualizar o backlog.

## Proximos passos

Usar esta triagem em todas as issues criadas pelos templates alpha.
