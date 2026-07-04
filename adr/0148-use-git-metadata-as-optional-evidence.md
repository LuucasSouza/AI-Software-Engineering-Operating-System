# ADR 0148 — Use Git Metadata as Optional Evidence

## Status

Accepted

## Contexto

Muitos projetos usam Git, mas o Resolve Aí não deve depender dele para iniciar validação.

## Problema

É preciso detectar mudanças locais com segurança sem exigir integração externa.

## Opções consideradas

- Exigir Git.
- Ignorar Git.
- Usar Git metadata quando disponível.

## Decisão

Usar comandos Git read-only como evidência opcional.

## Consequências positivas

- Detecta arquivos alterados com baixo risco.
- Funciona melhor em repositórios reais.
- Mantém compatibilidade com diretórios sem Git.

## Consequências negativas

- Sem Git, a confiança é menor.

## Critérios de reversão

Revisar se um adapter de VCS mais robusto for adotado.

## Relação com outras ADRs

Relaciona-se à ADR 0155.
