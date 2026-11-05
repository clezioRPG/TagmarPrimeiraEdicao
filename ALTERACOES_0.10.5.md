# Tagmar 0.10.5 — Temas e bestiário

- Temas Pergaminho, Medieval Escuro e Clássico Modernizado em Configurações do sistema > Tema da ficha (configuração por cliente).
- Compêndio de 128 criaturas integrado, com os dados do repositório de criaturas Tagmar 1ª Edição.
- Como Mestre, crie ou complete o compêndio executando no console: `await game.tagmar1e.criarCompendioCriaturas()` ou usando uma macro Script com `const n = await game.tagmar1e.criarCompendioCriaturas(); ui.notifications.info(`${n} criaturas adicionadas`);`.
- O compêndio é do mundo, não sobrescreve criaturas existentes com mesmo nome.
- Não altera regras de dano ou iniciativa. Testar no Foundry 14 antes de publicar.
