# Tagmar 0.17.2 — Dano sugerido a partir da rolagem

- Ataques de personagens e criaturas com dano numérico guardam o último resultado **somente na sessão do cliente**.
- Com o mesmo token marcado como alvo, **Dano no alvo** preenche automaticamente o valor e o tipo (normal/crítico).
- O Mestre ou proprietário ainda precisa conferir e clicar **Aplicar**; não existe atualização automática após a rolagem.
- Falhas, erros, críticos sem dano numérico e ataques sem alvo descartam a sugestão anterior.
- O resultado é vinculado ao token e ao ator do alvo para impedir aplicação acidental em outro alvo.
- Efeitos especiais de críticos continuam exigindo adjudicação manual.
- Sem persistência entre reinícios e sem compartilhamento automático entre clientes; para outro usuário, permanece a entrada manual.
