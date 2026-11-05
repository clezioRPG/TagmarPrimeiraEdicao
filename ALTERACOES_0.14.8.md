# Tagmar 0.14.8 — Testes simulados e validações

- Validação explícita de dificuldade de magia contra os efeitos cadastrados; rejeita níveis intermediários inexistentes, valores fracionários, gasto superior ao estágio ou Karma disponível.
- Compra de nível de grupo de armas validada por estágio e saldo, com segunda conferência após confirmação.
- Totais de histórico incompleto ou inválido deixam de ser tratados silenciosamente como créditos zero; voltam à estimativa disponível.
- Adicionada suíte de testes executável com Node.js (`node tests/auditoria-evolucao.mjs`), cobrindo cenários positivos e negativos, pontos de magia, Karma e profissões.
- Limitações: testes simulados não substituem a execução no Foundry VTT 14; não foi verificada novamente a fidelidade de todas as tabelas ao PDF de 1991. Evolução de magia acima do estágio 10 continua pendente de regra confirmada.
