# pt234 — Feedback to Fix Loop

## 1. Objetivo

Definir como transformar feedback real em correções pequenas, seguras e rastreáveis durante a Phase 15A.

A fase permite correções, mas não permite expansão de escopo.

## 2. Tipos de correção permitidos

### 2.1 Copy e UX textual

Permitido corrigir:

- mensagens de ajuda;
- mensagens de status;
- copy de `resolver`;
- avisos sobre segurança;
- explicações de Modo Liga/Desliga;
- README e quickstarts.

### 2.2 Documentação

Permitido corrigir:

- guias de instalação local;
- quickstart alpha;
- exemplos de uso;
- known limitations;
- FAQ;
- templates de feedback;
- docs gerados pelo CLI, se houver confusão real.

### 2.3 Pequenos bugs não destrutivos

Permitido corrigir:

- erro de detecção de stack simples;
- problema de encoding;
- erro de path em Windows;
- mensagem errada sobre comando futuro;
- status incompleto;
- dry-run package config.

## 3. Tipos de mudança proibidos

Não implementar nesta fase:

- comandos novos grandes;
- MCP;
- hooks;
- telemetria;
- execução automática;
- publicação npm;
- tag/release;
- reestruturação profunda;
- alteração de safety gates para ficarem mais permissivos.

## 4. Ciclo de feedback

Cada feedback deve seguir:

1. Capturar.
2. Anonimizar.
3. Classificar P0/P1/P2/P3.
4. Mapear para área:
   - CLI UX;
   - docs;
   - onboarding;
   - segurança;
   - diagnóstico;
   - planejamento;
   - validação.
5. Decidir ação:
   - corrigir agora;
   - colocar no backlog;
   - rejeitar com justificativa;
   - precisa de mais evidência.
6. Criar teste se alterar CLI.
7. Atualizar changelog.
8. Atualizar release decision.

## 5. Critérios para corrigir agora

Corrigir na Phase 15A apenas se:

- a correção for pequena;
- reduzir confusão real;
- não exigir nova arquitetura;
- não piorar segurança;
- puder ser coberta por teste ou validação manual clara;
- não adiar validação real.

## 6. Critérios para adiar

Adiar se:

- exige novo comando;
- muda fluxo principal;
- exige integração externa;
- depende de publicação npm;
- exige design maior;
- vem de preferência isolada sem padrão claro.

## 7. Artefatos esperados

Criar/atualizar:

- `docs/community/private-alpha-feedback-triage.md`
- `docs/community/private-alpha-fix-backlog.md`
- `docs/community/private-alpha-fixes-applied.md`
- `docs/release/v0.1.0-alpha-private-alpha-blockers.md`
- `docs/release/v0.1.0-alpha-private-alpha-decision.md`

## 8. Exemplo de registro

```markdown
## Feedback PA-NTB-001

Perfil: Non-Technical Builder  
Severidade: P2  
Área: CLI UX  
Resumo: participante achou que `resolver` executaria código automaticamente.  
Evidência: perguntou se precisava fazer backup antes de rodar.  
Ação: alterar copy do comando para reforçar que ele cria um pacote de execução assistida, sem modificar código.  
Status: corrigir agora.  
Teste: atualizar teste de help/resolver para conter aviso explícito.  
```

## 9. Política de score após correções

Correção sem validação real não aumenta score de validação humana. Ela pode reduzir blockers técnicos, mas o score só deve subir de forma relevante se houver evidência de participante real.
