# Tagmar 0.17.1 — Dano no alvo

- Novo botao **Dano no alvo** nas fichas de personagem e criatura.
- Requer exatamente um token marcado como alvo e permissao de proprietario para alterar o ator.
- Abre a janela existente de dano com valor e tipo (normal/critico), exigindo confirmacao antes de gravar.
- Reutiliza a logica da primeira edicao ja presente em `aplicarDano`: EH, EF, absorcao e criticos.
- Nenhuma aplicacao automatica apos ataque; o Mestre continua no controle.
- Nao altera fichas existentes, compendios, magias ou barras de token.
