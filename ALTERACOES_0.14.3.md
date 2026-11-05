# Tagmar 0.14.3 — Proteção de dados dos compêndios

- `popularCompendios()` agora apenas cria registros faltantes; **não modifica** documentos existentes, inclusive textos que parecem gerados automaticamente.
- Nova opção explícita `{atualizarDescricoesVazias: true}` permite preencher apenas descrições inteiramente vazias, sem substituir qualquer descrição preenchida.
- Documentada a política e os comandos no README.
- Não foram alterados os textos das 100 magias ou das 27 habilidades revisadas.
- Permanecem 11 entradas de magia sem conferência descritiva: Abrigo, Aeroataque, Aeromanipulação, Alucinação, Armadilha, Ações Furtivas, Bênção, Canção de Medo, Conjuração Demoníaca, Controle e Dardos de Gelo. A classificação de Ações Furtivas no catálogo de magias requer investigação documental.
- Testes estáticos e teste de sincronização simulado com documentos preexistentes. Sem execução real no Foundry VTT 14.
