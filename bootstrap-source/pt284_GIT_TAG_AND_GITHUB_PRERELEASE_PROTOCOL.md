# pt284 — Git Tag and GitHub Pre-release Protocol

## Objetivo

Criar tag e GitHub Release somente depois da publicação npm bem-sucedida.

## Regra

Não criar tag antes do `npm publish --tag alpha` passar.

A tag deve representar um artefato publicado.

## Tag

Na raiz do repo:

```bash
git status --short
git log -1 --oneline
git tag -a v0.1.0-alpha -m "v0.1.0-alpha"
git push origin v0.1.0-alpha
```

Se a tag já existir localmente ou remotamente:
- Parar.
- Verificar se aponta para o commit correto.
- Não sobrescrever tag pública sem decisão formal.

## GitHub Release

Criar GitHub Release como **pre-release**.

Opção via GitHub CLI:

```bash
gh release create v0.1.0-alpha \
  --title "Resolve Aí v0.1.0-alpha" \
  --notes-file docs/release/v0.1.0-alpha-rc/release-notes.md \
  --prerelease
```

Se GitHub CLI não estiver autenticado:
- Criar manualmente pelo GitHub web.
- Usar tag `v0.1.0-alpha`.
- Marcar “This is a pre-release”.
- Não marcar como latest release se houver opção.

## Verificação pós-release

```bash
gh release view v0.1.0-alpha
git ls-remote --tags origin v0.1.0-alpha
```

Também verificar no navegador:
- release aparece como pre-release;
- known limitations estão visíveis;
- link de instalação alpha está correto;
- não há promessa stable.

## Conteúdo mínimo da release

A release deve conter:

- O que é o Resolve Aí.
- Como instalar/usar alpha.
- Comandos principais.
- Known limitations.
- Safety promise.
- Aviso de não stable.
- Como enviar feedback manual.
- Link para rollback/known limitations no repo.
