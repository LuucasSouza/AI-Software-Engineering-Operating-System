# pt281 — Phase 19: Publication Execution Rationale

## Nome da fase

**Phase 19 — Publication Execution Gate**

## Decisão

O mantenedor decidiu apertar o botão de publicação alpha.

Esta fase transforma **RELEASE CANDIDATE READY — 90/100** em uma publicação pública alpha real, mantendo transparência, rastreabilidade e reversibilidade.

## Estado anterior obrigatório

- Phase 18 concluída.
- Phase 18.1 concluída.
- `main` atualizado no GitHub.
- `npm publish` ainda não executado.
- tag Git ainda não criada.
- GitHub Release ainda não criada.
- known limitations documentadas.
- rollback plan documentado.
- package audit documentado.
- `.gitignore` protegendo artefatos locais.
- mantenedor explicitamente decidiu publicar alpha.

## Não é stable

Classificação pública correta:

```text
v0.1.0-alpha
public alpha
experimental
not stable
not production-ready
maintainer-approved
```

## Objetivos

1. Executar validação final pré-publicação.
2. Confirmar login/permissão npm.
3. Confirmar disponibilidade/permissão do nome do pacote.
4. Publicar no npm com dist-tag `alpha`, nunca `latest`.
5. Verificar instalação via npm/npx.
6. Criar tag Git somente depois de publicação npm bem-sucedida.
7. Criar GitHub Release como **pre-release**.
8. Atualizar documentação pós-publicação.
9. Criar relatório final de publicação.
10. Registrar rollback plan e next steps.

## Regra de ouro

Se qualquer etapa crítica falhar, parar.

Não improvisar renome, não publicar com outro nome, não trocar versão, não forçar tag, não criar release falsa.

## Resultado esperado

```text
npm package: published with alpha dist-tag
git tag: v0.1.0-alpha
GitHub release: pre-release
docs: updated
score: 91–92/100 alpha published, still not stable
```

## Resultado alternativo

Se o npm package name estiver indisponível, permissão falhar ou 2FA bloquear:

```text
Publication blocked
No tag
No GitHub Release
Phase 19B required
```
