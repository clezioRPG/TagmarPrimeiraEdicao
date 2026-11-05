# Tagmar 0.10.4 — correções de regressão e ficha

- Corrigida referência a `nivelArma` antes da declaração em `atacar()`; isso interrompia o clique em Atacar antes de abrir o diálogo.
- Armas e armaduras arrastadas passam a ser mantidas também como itens incorporados ao ator, preservando o comportamento de combate/equipamento já existente.
- Pertences & Afins lista armas, armaduras e equipamentos incorporados, com categoria, quantidade e descrição disponível.
- Ficha ampliada e reestilizada: hierarquia visual, espaçamento, tabelas e inventário.

## Limitações
- Itens de armas e armaduras adicionados antes desta atualização só entram no inventário se forem arrastados novamente. Evite duplicar entradas de combate: se já estiverem cadastrados, remova a entrada antiga antes de arrastar.
- Não foi realizado teste de execução no Foundry 14; validar em ambiente local.
- Aplicação de dano pelo chat permanece pendente.
