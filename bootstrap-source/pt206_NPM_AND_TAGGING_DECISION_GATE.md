# pt206 — NPM and Tagging Decision Gate

## 1. Objetivo

Definir o portão formal para publicação npm e criação de tag Git, sem executar essas ações na Phase 12.

## 2. Por que isso importa

Publicar no npm transforma o Resolve Aí de repositório em produto instalável. Isso exige mais rigor:

- nome do pacote;
- versão;
- suporte;
- docs;
- segurança;
- experiência de instalação;
- expectativa pública.

## 3. Ações proibidas na Phase 12

Não executar:

```bash
npm publish
git tag
git push --tags
```

Não criar release GitHub automaticamente.

## 4. Ações permitidas

Permitido:

```bash
npm pack --dry-run
npm run build --prefix packages/resolve-ai-cli
npm test --prefix packages/resolve-ai-cli
npm run smoke --prefix packages/resolve-ai-cli
```

Desde que não publique nada.

## 5. Checklist técnico para npm

| Item | Status |
|---|---|
| package name definido | pendente/verificar |
| bin `resolve-ai` funcionando | pendente/verificar |
| README do pacote claro | pendente/verificar |
| LICENSE incluída | pendente/verificar |
| dist regenerável | pendente/verificar |
| smoke test passando | pendente/verificar |
| package files revisado | pendente/verificar |
| npm pack dry-run revisado | pendente/verificar |
| versão alpha definida | pendente/verificar |
| known limitations públicas | pendente/verificar |
| security policy pública | pendente/verificar |

## 6. Política de versão

Sugestão:

```json
{
  "version": "0.1.0-alpha.0"
}
```

Mas a Phase 12 pode apenas preparar a decisão. Alterar versão deve ser feito somente se estiver documentado no release candidate.

## 7. Nome do pacote

Opções possíveis:

| Opção | Prós | Contras |
|---|---|---|
| `resolve-ai` | simples, alinhado ao comando | pode estar indisponível no npm |
| `@resolve-ai/cli` | profissional, scoped | exige escopo npm |
| `resolve-ai-cli` | explícito | menos bonito |
| `@luucassouza/resolve-ai` | disponível sob usuário | menos institucional |

A Phase 12 deve preparar a análise, não assumir publicação.

## 8. Tag Git

Tag sugerida futura:

```text
v0.1.0-alpha.0
```

Critérios antes de tag:

- build passa;
- testes passam;
- smoke passa;
- release notes prontas;
- known limitations prontas;
- Go aprovado;
- decisão do mantenedor registrada.

## 9. Go/No-Go

### GO

Pode seguir para Phase 13 release execution se:

- não houver P0/P1 bloqueante;
- stack detection corrigida;
- pelo menos validação real mínima registrada ou decisão explícita de alpha controlado;
- npm checklist sem blocker;
- README público claro.

### LIMITED GO

Pode fazer private alpha ampliada se:

- CLI funciona;
- docs estão claras;
- validação real ainda insuficiente;
- publicação npm ainda prematura.

### NO-GO

Bloquear release se:

- testes falham;
- stack detection básica falha;
- segurança está inconsistente;
- usuários reais não entendem o fluxo;
- docs prometem mais do que a ferramenta entrega.

## 10. Saída obrigatória

Criar:

```text
docs/release/v0.1.0-alpha-npm-and-tagging-decision-gate.md
```

Com decisão recomendada e evidências.
