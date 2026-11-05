# Revisão experimental 0.10.2 — Foundry VTT 14

## Implementado
- Botão **Rolar iniciativa** na ficha. A fórmula é informada pelo usuário (padrão provisório `1d10`), pois a regra oficial de iniciativa ainda não foi validada no PDF. Envia ao chat e, para o Mestre, registra no encontro ativo quando o ator já participa do combate.
- Compra de níveis por grupo de armas, usando custos da tabela IV-8.1b já codificados. Impede compras além do estágio ou dos pontos disponíveis. Sincroniza o nível com as armas existentes do grupo.
- Nível efetivo de armas derivado do grupo, inclusive para novas armas adicionadas à ficha; preserva níveis antigos dos personagens.
- Ficha reorganizada com resumo de EH, EF, Defesa, Absorção e Karma; cartões e painel de treinamento.

## Limitações / pendências
- **Aplicar dano:** a ficha do alvo já possui o botão 'Aplicar dano', mas o chat de ataque ainda não oferece botão para aplicar diretamente no alvo. Não foi alterado nesta revisão.
- **Iniciativa:** fórmula provisória configurável, não certificada como regra do livro. Não altera a configuração global de iniciativa do Foundry.
- Não executado no Foundry VTT real; apenas validação estática de JavaScript e integridade do ZIP.
- Não publicado no GitHub. Faça backup do sistema e do mundo antes de testar.
