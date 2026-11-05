# Tagmar 0.17.7 — Revisão de estabilidade

- Restringe explicitamente as ações do Painel de Combate ao Mestre, mesmo em janelas já abertas.
- Ao adicionar uma condição, salva primeiro o marcador no combatente e cria depois o Efeito Ativo informativo.
- Se a criação do efeito falhar, tenta reverter o marcador recém-criado e registra eventual falha de reversão no console.
- Recusa a criação ou remoção de efeitos sem ator válido, evitando falhas silenciosas.
- Preserva as regras de 1991, as magias, os compêndios e a ficha.
- Acrescenta uma auditoria estática específica para os mecanismos acima.

**Limites:** não foi executado teste interativo no Foundry VTT 14. A reversão é de melhor esforço; problemas de permissão ou de rede também podem impedir a reversão. Não há migração de dados.
