# ADR 0171 — Adopt No Sensitive Content Capture Rule

## Status

Accepted

## Contexto

Validacoes podem ocorrer em projetos reais com arquivos privados ou sensiveis.

## Decisão

Permitir registro de nomes e caminhos suspeitos, mas proibir copia de conteudo sensivel em relatorios.

## Alternativas consideradas

- Capturar trechos para diagnostico detalhado.
- Proibir validacao em projetos reais.
- Depender apenas de orientacao verbal.

## Consequências

Relatorios ficam menos detalhados, mas mais seguros e publicaveis.

## Plano de reversão

Uma politica futura pode adicionar redacao automatica auditavel antes de qualquer captura.
