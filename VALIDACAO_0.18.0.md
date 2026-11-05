# Validação da versão 0.18.0 no Foundry VTT 14

## Antes de instalar

1. Exporte uma cópia de segurança do mundo e preserve o ZIP da versão 0.17.7.
2. Feche o Foundry, substitua apenas a pasta `Data/systems/tagmar1e` e reinicie.
3. Confirme em Configuração de Jogo que o sistema exibe 0.18.0.
4. Não exclua nem recrie personagens, tokens, cenas ou compêndios.

## Testes do Mestre

- [ ] Abrir uma ficha de personagem e uma ficha de criatura.
- [ ] Abrir uma magia e confirmar descrição, dados e botões.
- [ ] Abrir Configurar Token e selecionar imagem do protótipo.
- [ ] Verificar que os tokens da cena não exibem barras de energia.
- [ ] Marcar um alvo, realizar ataque e conferir Defesa e mensagem do chat.
- [ ] Abrir Dano no alvo e verificar que nenhuma energia muda antes da confirmação.
- [ ] Aplicar dano em uma cópia de personagem e conferir EF/EH/absorção.
- [ ] Abrir Painel Tagmar pelo rastreador e conferir turno, rodada e valores.
- [ ] Adicionar uma condição e confirmar que aparece em Efeitos Ativos.
- [ ] Avançar rodadas e conferir contagem e indicação de expiração.
- [ ] Remover a condição e confirmar que apenas o efeito vinculado é removido.
- [ ] Recarregar o mundo e confirmar persistência dos dados.
- [ ] Entrar como jogador e conferir permissões de ficha, dano e painel.
- [ ] Executar `game.tagmar1e.diagnosticarSistema()` no console para registrar informações de diagnóstico.

## Limitações conhecidas

- Testes automatizados e verificações de sintaxe não comprovam funcionamento real no Foundry.
- Condições são informativas, sem modificadores de regras; expiração exige remoção manual.
- Falhas de permissão ou rede podem impedir reversão de alterações parciais.
- A fórmula de iniciativa `1d10` está identificada no código como provisória e requer conferência com o livro.

## Recuperação

Se houver erro, feche o Foundry, restaure a pasta `tagmar1e` da 0.17.7 e, se necessário, restaure a cópia do mundo. Anote a mensagem completa do console F12 e a versão/build do Foundry.
