---
title: Release Readiness and Versioning
project: Resolve Aí
phase: 10
status: Draft
version: 0.1.0-alpha-prep
---

# Release Readiness and Versioning

## 1. Objetivo

Preparar o Resolve Aí para um release alpha local ou público com responsabilidade.

A Phase 10 não precisa publicar o pacote, mas deve preparar o caminho para isso.

## 2. Versão sugerida

Versão candidata:

```text
v0.1.0-alpha
```

Pacote CLI:

```json
{
  "name": "resolve-ai",
  "version": "0.1.0-alpha.0"
}
```

A escolha final deve verificar disponibilidade do nome no npm antes de publicação.

## 3. Critérios de release alpha

Antes de release:

- [ ] Build funciona.
- [ ] Testes passam.
- [ ] Smoke tests passam.
- [ ] README explica uso local.
- [ ] CLI tem comandos principais.
- [ ] Sem telemetria.
- [ ] Sem hooks automáticos.
- [ ] Sem chamadas externas.
- [ ] Sem autoexecução destrutiva.
- [ ] Modo Liga/Desliga funciona.
- [ ] Diagnóstico, planejamento, preparo, resolução assistida e validação estão documentados.

## 4. Release notes draft

Criar ou atualizar:

```text
docs/release/v0.1.0-alpha-cli-readiness.md
```

Conteúdo:

- o que existe;
- o que não existe;
- comandos suportados;
- limitações;
- instruções de instalação local;
- riscos conhecidos;
- próximos passos.

## 5. Known limitations

Documentar claramente:

- diagnóstico é heurístico;
- não existe análise semântica profunda com IA dentro da CLI;
- não executa tarefas automaticamente;
- não publica deploy;
- não faz commit;
- não instala dependências no projeto analisado;
- não possui MCP/hooks ainda;
- estado local pode mudar até versão estável.

## 6. Tagging protocol

Não criar tag automaticamente nesta fase sem confirmação explícita do mantenedor.

Documentar comandos:

```bash
git tag v0.1.0-alpha
git push origin v0.1.0-alpha
```

Mas não executar automaticamente.

## 7. Próxima fase possível

Após Phase 10, há dois caminhos:

1. Phase 11 — External Alpha Validation.
2. Phase 11 — npm Publication Preparation.

Recomendação: validar em projetos reais antes de publicar npm.
