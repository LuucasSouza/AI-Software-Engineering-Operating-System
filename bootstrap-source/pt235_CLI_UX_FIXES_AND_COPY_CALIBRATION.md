# pt235 — CLI UX Fixes and Copy Calibration

## 1. Objetivo

Garantir que a linguagem pública da CLI continue brasileira, leve, clara e segura.

A Phase 15A deve prestar atenção especial nos comandos que podem gerar expectativa errada:

- `resolver`
- `executar`
- `preparar`
- `validar`
- `ligar` / `desligar`

## 2. Tom oficial

O Resolve Aí deve soar como:

- brasileiro;
- útil;
- direto;
- simpático;
- cuidadoso;
- confiável;
- sem jargão desnecessário.

Não deve soar como:

- ferramenta gringa traduzida;
- brincadeira sem rigor;
- automação perigosa;
- “agente mágico”;
- promessa de que faz tudo sozinho.

## 3. Mensagens-chave obrigatórias

### 3.1 Resolver

Sempre deixar claro:

```text
O Resolve Aí não altera seu código sozinho. Ele prepara um pacote de execução assistida para você ou outro agente usar com aprovação humana.
```

### 3.2 Preparar

Sempre deixar claro:

```text
Vou separar uma tarefa segura e montar o material para execução. Ainda não vou mexer no produto.
```

### 3.3 Validar

Sempre deixar claro:

```text
Vou revisar o que mudou e apontar riscos antes de commit, deploy ou próximo passo.
```

### 3.4 Ligar

```text
Resolve Aí ligado. Vou considerar o contexto deste projeto e ajudar a organizar os próximos passos.
```

### 3.5 Desligar

```text
Resolve Aí desligado. Vou parar de usar contexto operacional para economizar tokens e evitar interferência.
```

## 4. Checklist de copy

Toda mensagem deve responder:

- o que aconteceu?
- o que não aconteceu?
- qual é o próximo passo?
- houve alteração em código?
- houve criação de documentos?
- o usuário precisa revisar algo?

## 5. Correções permitidas

A Phase 15A pode ajustar:

- `packages/resolve-ai-cli/src/commands/ajuda.ts`
- `packages/resolve-ai-cli/src/commands/status.ts`
- `packages/resolve-ai-cli/src/commands/resolver.ts`
- textos em docs gerados;
- README do CLI;
- quickstart alpha.

Mas deve atualizar `dist/` via build e testes.

## 6. Testes recomendados

Adicionar ou atualizar testes para garantir que:

- `ajuda` liste os comandos corretamente;
- `resolver` indique que não altera código sozinho;
- `executar` não pareça execução automática;
- `status` mostre fase atual com clareza;
- `desligar` explique economia/interferência.

## 7. Exemplo de copy ruim

```text
Vamos resolver sua tarefa agora.
```

Problema: pode parecer que vai executar código.

## 8. Exemplo de copy melhor

```text
Vou montar o pacote para resolver com segurança. Nada será alterado automaticamente no código.
```

## 9. Regra de ouro

Leve e divertido não significa impreciso. A brincadeira pode existir na superfície, mas a segurança precisa estar explícita.
