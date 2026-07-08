# ADR 0269 — Mark GitHub Release as Pre-release

## Status

Accepted

## Context

O GitHub Release é a face pública da versão no repositório. Sem a marcação de pre-release, visitantes tratariam o v0.1.0-alpha como versão normal/estável.

## Decision

Criar o GitHub Release `v0.1.0-alpha` sempre com a flag `--prerelease` (ou o checkbox "This is a pre-release" na web), usando as release notes de `docs/release/v0.1.0-alpha-rc/release-notes.md`. Não marcar como latest release quando houver a opção.

## Consequences

### Positive

- A classificação alpha fica visível no ponto de maior tráfego do repositório.

### Negative

- Nenhuma relevante.

### Neutral

- Se o `gh` CLI não estiver disponível, a criação manual segue as mesmas regras e fica registrada como pendente até concluída.

## Alternatives Considered

- Release normal com aviso no texto: rejeitado; o metadado de pre-release é o sinal que ferramentas e usuários respeitam.

## Follow-up

Verificar no navegador que a release aparece como pre-release e sem promessa de stable.
