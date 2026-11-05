# Tagmar 0.15.0 — Validação de saldos e limites

- Impede compra quando os gastos registrados ultrapassam os créditos de compra, em vez de tratá-los como saldo normal.
- Rejeita créditos negativos e valores não inteiros em validações de compra.
- Evocação passa a rejeitar Karma negativo e estágio inválido.
- Históricos de habilidades com lista de grupos vazia ou inválida deixam de ser considerados válidos.
- Acrescentada suíte de testes de limites e combinações de créditos, gastos e custos.

## Limites
- Não houve teste de execução no Foundry VTT 14.
- Progressão de magia acima do estágio 10 ainda carece de verificação no livro original.
- Esta versão não revalida os valores impressos das tabelas nem altera as fórmulas de Karma.
