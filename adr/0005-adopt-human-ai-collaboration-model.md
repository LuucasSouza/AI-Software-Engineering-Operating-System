# ADR-0005 - Adopt Human AI Collaboration Model

## Status

Accepted

## Contexto

O AI-SEOS será usado por humanos e agentes de IA em atividades de discovery, arquitetura, decisão, execução e documentação.

## Problema

Sem um modelo explícito de colaboração, agentes podem assumir autoridade indevida ou humanos podem perder rastreabilidade sobre decisões.

## Opções consideradas

- IA como gerador passivo de texto.
- IA como executor autônomo sem governança.
- Colaboração humano + IA com papéis, limites e accountability.

## Decisão

Adotar colaboração humano + IA como modelo operacional, com agentes capazes de propor, estruturar e executar, mas mantendo responsabilidade humana final em decisões sensíveis.

## Consequências positivas

- Define limites claros para agentes.
- Preserva responsabilidade humana.
- Facilita handoff e revisão.

## Consequências negativas

- Exige documentação explícita de responsabilidades.
- Pode demandar revisão humana adicional em contextos críticos.

## Trade-offs

Ganha-se segurança operacional e governança. Perde-se autonomia irrestrita dos agentes.

## Plano de reversão

Criar ADR futura ajustando níveis de autonomia por tipo de decisão e risco.

## Referências

- `PROJECT_BOOTSTRAP.md`
- `GOVERNANCE.md`
- `ENGINEERING_PRINCIPLES.md`
