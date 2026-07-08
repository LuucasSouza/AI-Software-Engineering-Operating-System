# pt285 — Post-publication Docs and Announcement

## Objetivo

Após publicação npm/tag/release, atualizar a documentação para refletir o estado real.

## Arquivos a atualizar

- README.md
- CHANGELOG.md
- ROADMAP.md
- docs/release/README.md
- docs/release/v0.1.0-alpha-rc/README.md
- docs/release/v0.1.0-alpha-rc/npm-publication-decision.md
- docs/release/v0.1.0-alpha-rc/distribution-checklist.md
- docs/release/v0.1.0-alpha-rc/maintainer-approval-gate.md
- docs/community/README.md
- docs/getting-started/quickstart-alpha.md
- docs/getting-started/install-local-cli.md

## Instalação pública recomendada

Se npm publicar corretamente:

```bash
npm install -g resolve-ai@alpha
resolve-ai ajuda
```

ou:

```bash
npx resolve-ai@alpha ajuda
```

## Texto público recomendado

```markdown
# Resolve Aí v0.1.0-alpha

Resolve Aí está disponível como public alpha.

Ainda não é stable.

Instalação:

```bash
npm install -g resolve-ai@alpha
resolve-ai ajuda
```

Uso rápido:

```bash
resolve-ai começar
resolve-ai ligar
resolve-ai entrevistar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

Promessa de segurança:
- não altera código automaticamente;
- não faz commit;
- não publica nada;
- não coleta dados;
- gera documentos e prompts para execução assistida.

Limitações conhecidas:
- validação humana real ainda limitada;
- foco inicial em Windows/CLI local;
- sem UI;
- sem telemetria;
- sem integração automática com GitHub Issues ou npm workflows.
```

## Não dizer

Evitar:

```text
stable
production-ready
enterprise-ready
fully validated
```

## Feedback manual

Manter feedback manual:

```text
teste/feedback.md
```

Sem telemetria automática.
