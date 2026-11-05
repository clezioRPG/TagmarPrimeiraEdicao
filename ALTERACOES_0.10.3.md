# Tagmar 0.10.3 — integração inicial de inventário e iniciativa

- Equipamentos arrastados dos compêndios agora são criados como **itens incorporados** do ator e listados em Pertences & Afins.
- Campo de texto antigo mantido para preservar anotações de personagens existentes.
- Remoção de equipamento pela lista.
- Botão da ficha usa `game.combat.rollInitiative` em vez de uma rolagem isolada; define a fórmula provisória `1d10` para o Combat Tracker nativo.
- O Carousel Combat Tracker não foi executado neste ambiente; é necessário testar a compatibilidade na instalação real.
- A fórmula `1d10` é provisória e **não está validada como regra oficial de Tagmar 1ª Edição**.
- Não altera o código de aplicação de dano, ainda pendente.

## Teste
1. Faça backup do sistema 0.10.2 e feche o Foundry.
2. Substitua os arquivos do sistema pelos deste ZIP.
3. Arraste um item do compêndio Equipamentos à ficha; verifique Pertences & Afins.
4. Adicione um token a um encontro e use o botão de iniciativa da ficha e/ou do Carousel.
