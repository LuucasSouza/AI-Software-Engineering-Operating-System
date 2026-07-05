# pt236 — Private Alpha Security, Privacy and Consent

## 1. Objetivo

Definir controles mínimos para validação privada sem coleta indevida de dados.

O Resolve Aí deve ser seguro por padrão, especialmente porque será testado por pessoas reais em contextos variados.

## 2. Dados que não devem ser coletados

Não coletar:

- nome completo, salvo se o participante quiser e houver necessidade clara;
- CPF, RG, telefone, endereço;
- credenciais;
- tokens;
- `.env`;
- bancos de dados reais;
- backups reais;
- dados de clientes;
- dados de saúde, religião, política ou outros dados sensíveis;
- código proprietário sem autorização.

## 3. Dados permitidos

Pode registrar:

- perfil anonimizado;
- tipo geral de projeto;
- comandos executados;
- feedback textual sem identificação;
- problemas encontrados;
- score de usabilidade;
- decisão do moderador;
- data aproximada da sessão.

## 4. Identificadores recomendados

Usar IDs anônimos:

- `PA-NTB-01`
- `PA-VC-01`
- `PA-PE-01`

Onde:

- `PA` = Private Alpha;
- `NTB` = Non-Technical Builder;
- `VC` = Vibe Coder;
- `PE` = Professional Engineer.

## 5. Consentimento simples

Antes da sessão, registrar:

```text
Você está participando de um teste privado do Resolve Aí. Não vamos coletar dados sensíveis. Seu feedback será registrado de forma anonimizada para melhorar a ferramenta. Você pode parar a qualquer momento.
```

## 6. Projetos usados em validação

Preferir:

- projetos simulados;
- repositórios pessoais sem dados reais;
- cópias sanitizadas;
- diretórios temporários;
- exemplos criados para teste.

Evitar:

- projetos de cliente;
- produção;
- repositórios com segredos;
- dados comerciais reais;
- backup de banco;
- planilhas com dados pessoais.

## 7. Resposta a achado sensível

Se aparecer arquivo sensível:

1. não abrir conteúdo;
2. registrar apenas caminho/nome de forma segura, se necessário;
3. recomendar remoção/rotação fora da sessão;
4. classificar risco;
5. não copiar o arquivo para relatório;
6. não commitar nada.

## 8. Artefatos esperados

Criar/atualizar:

- `docs/alpha-validation/private-alpha/privacy-and-consent-guidelines.md`
- `docs/alpha-validation/private-alpha/safe-project-selection-guide.md`
- `docs/alpha-validation/private-alpha/sensitive-data-handling-note.md`
- `docs/release/v0.1.0-alpha-private-alpha-security-review.md`

## 9. Gate de segurança

Se qualquer validação revelar risco P1 de segurança, a decisão deve ser **NO-GO** para npm público até correção e nova validação.
