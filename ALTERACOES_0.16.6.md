# Tagmar 0.16.6 — Remoção real das barras

A versão 0.16.5 tentava interceptar `_drawBar`, mas o Foundry VTT 14 desenha as barras a partir da propriedade `displayBars` dos documentos Token. Por isso elas continuavam visíveis.

Agora, ao iniciar o mundo com uma conta GM, o sistema define `displayBars = 0` em todos os tokens Tagmar existentes nas cenas e nos respectivos protótipos, e remove as associações `bar1` e `bar2`. Tokens novos recebem essas opções automaticamente. Energia Física e Heróica dos atores permanecem intactas. Outros sistemas não são afetados.

Faça backup do mundo antes da primeira inicialização: esta versão atualiza configurações de token salvas.
