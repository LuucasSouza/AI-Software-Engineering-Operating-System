# pt286 — Publication Rollback and Incident Response

## Objetivo

Definir o que fazer se algo der errado depois da publicação.

## Cenários

### Cenário A — npm publish falhou antes de publicar

Ação:
- não criar tag;
- não criar GitHub Release;
- registrar blocker;
- abrir Phase 19B.

### Cenário B — npm publish passou, mas teste de instalação falhou

Ação:
- não criar GitHub Release ainda;
- investigar pacote;
- se necessário, publicar `0.1.0-alpha.1` com correção;
- documentar problema.

### Cenário C — Git tag falhou

Ação:
- não criar GitHub Release;
- resolver tag;
- não republicar npm sem necessidade.

### Cenário D — GitHub Release falhou

Ação:
- npm fica publicado;
- tag pode já existir;
- criar release manualmente ou abrir Phase 19B.

### Cenário E — dado sensível publicado

Ação imediata:
- parar divulgação;
- revisar pacote;
- seguir política de npm para incidentes;
- considerar deprecate/unpublish conforme janela e impacto;
- rotacionar segredo se algum segredo real foi exposto;
- publicar correção se necessário;
- documentar incidente.

### Cenário F — published with wrong dist-tag

Se publicado como `latest` por engano:
- corrigir dist-tag imediatamente se aplicável;
- usar `npm dist-tag` para ajustar tags;
- documentar incidente;
- considerar publicar nova versão se necessário.

## Preferência de rollback

Para alpha público, preferir:

1. corrigir documentação;
2. ajustar dist-tag;
3. publicar patch alpha;
4. deprecate versão problemática;
5. unpublish apenas se estritamente necessário e permitido.

## Mensagem de depreciação sugerida

```bash
npm deprecate resolve-ai@0.1.0-alpha.0 "Alpha release superseded. Please install resolve-ai@alpha for the latest alpha."
```

## Registro obrigatório

Criar ou atualizar:

```text
docs/release/v0.1.0-alpha-rc/publication-execution-report.md
```

com:

- data;
- comando executado;
- resultado;
- erro;
- ação corretiva;
- decisão final.
