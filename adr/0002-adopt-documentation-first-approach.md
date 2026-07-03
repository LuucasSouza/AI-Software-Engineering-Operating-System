# ADR-0002 - Adopt Documentation First Approach

## Status

Accepted

## Contexto

O AI-SEOS é um framework em que documentação, decisões e handoffs são parte do sistema operacional.

## Problema

Projetos com IA tendem a avançar rapidamente sem preservar contexto, critérios e decisões, criando perda de rastreabilidade.

## Opções consideradas

- Documentar apenas após implementação.
- Documentar somente arquivos principais.
- Tornar documentação parte central do fluxo de trabalho.

## Decisão

Adotar Documentation First como princípio obrigatório para módulos, engines, protocolos, agentes e decisões estruturais.

## Consequências positivas

- Melhora continuidade entre sessões e agentes.
- Reduz contexto implícito.
- Facilita revisão e contribuição.

## Consequências negativas

- Aumenta o custo inicial de criação.
- Pode gerar excesso documental se não houver foco prático.

## Trade-offs

Ganha-se rastreabilidade e qualidade. Perde-se velocidade inicial em mudanças simples.

## Plano de reversão

Criar ADR futura permitindo exceções para mudanças pequenas e explicitamente não estruturais.

## Referências

- `ENGINEERING_PRINCIPLES.md`
- `DEVELOPMENT_PROTOCOL.md`
- `CONTRIBUTING.md`
