# Tagmar 0.14.6 — Auditoria de evolução

- A função de pontos de magia não repete mais silenciosamente a linha do estágio 10 para estágios 11–20: devolve valor indeterminado, pendente de confirmação no livro.
- Histórico por estágio de pontos de magia adicionado à ficha; ao subir de estágio até 10, o ganho é registrado usando o Intelecto daquele momento.
- Para fichas antigas, os estágios anteriores são reconstruídos com o Intelecto atual na primeira evolução, com aviso explícito da limitação.
- Exibição na ficha identifica histórico versus estimativa.
- **Limitações:** alterações manuais de estágio e importações antigas não recuperam histórico real; a regra para pontos de magia após estágio 10 continua pendente de verificação; não houve teste em execução no Foundry VTT 14.
