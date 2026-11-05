# Tagmar 0.17.6 — Efeitos Ativos informativos

- Novas condições no Painel Tagmar também criam um ActiveEffect nativo no ator, sem modificadores de regras (`changes: []`).
- A remoção de uma condição pelo painel exclui somente o ActiveEffect correspondente, identificado por `flags.tagmar1e.marcadorPainelId`.
- Condições anteriores à 0.17.6 continuam como anotações do painel, sem migração automática.
- A duração continua controlada por rodadas no painel, com expiração apenas informativa.
- Efeitos nativos criados diretamente na ficha não são alterados pelo painel.
- Um mesmo ator usado por vários combatentes compartilha seus ActiveEffects; use atores independentes para condições diferentes.
- É necessário testar a criação e a remoção no Foundry VTT 14.
