# Auditoria e estabilização 0.10.1

Base: `tagmar1e-repositorio-4.zip`, versão 0.10.0. Sem alterações nos cálculos de combate ou nos valores das tabelas do livro.

## Corrigido
- Sincronização dos sete compêndios: verifica itens faltantes a cada inicialização do Mestre, não apenas um indicador antigo ou a presença de dois pacotes.
- Mantém todos os itens já existentes (inclusive alterações feitas pelo Mestre); adiciona somente nomes ausentes.
- Disponibiliza `await game.tagmar1e.diagnosticarCompendios()` no console do Foundry para verificar faltantes por coleção.
- Empacotamento de GitHub Releases agora inclui `macros/`, `dados/` e `TABELAS.md`, e verifica a versão da tag e a sintaxe JS.

## Limites importantes
- O gerador de tesouros já existia na 0.10.0 e foi preservado. Não foi validado linha a linha contra o PDF digitalizado; portanto, valores e tabelas não devem ser tratados como auditados.
- Os compêndios continuam sendo `world.*`, não compêndios pré-empacotados com o sistema. Esta revisão corrige a sincronização, não muda o formato de distribuição dos packs.
- Correspondência por nome ainda não detecta itens renomeados nem atualiza dados de itens existentes; foi mantida deliberadamente para não sobrescrever personalizações.
- Não foi realizado teste dentro de uma instância real do Foundry VTT 14.

## Teste no Foundry
1. Faça backup do mundo e do sistema 0.10.0.
2. Instale esta versão em `Data/systems/tagmar1e` (não instale duas versões com o mesmo ID).
3. Abra um mundo com usuário Mestre e aceite sincronizar compêndios, caso solicitado.
4. Execute `await game.tagmar1e.diagnosticarCompendios()` no console (F12) e confirme que `faltantes` está vazio em todos.
5. Abra personagem, criatura, itens, magias e a função de tesouros; registre erros do console.
6. Somente depois publique a tag `v0.10.1` no GitHub, se o teste local passar.
