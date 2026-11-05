# Tagmar 0.14.9 — Auditoria de operações da ficha

- Corrigida a revalidação da compra de grupo de armas após o diálogo: usa `niveisGrupos` (nível efetivo, incluindo armas legadas) em vez de `gruposArmas` isoladamente.
- Adicionada validação pura de compra confirmada, com testes para alterações concorrentes de nível e saldo.
- A evocação não arredonda silenciosamente valores fracionários de Karma/dificuldade; valida os números informados.
- Antes de descontar Karma, revalida a magia, o estágio e o saldo atuais, evitando usar o saldo obsoleto capturado antes do diálogo.
- Adicionada classificação de históricos ausentes, incompletos, inválidos e válidos, com cenários de troca de profissão e evolução em testes automatizados.

## Limites
- Não há teste executado dentro do Foundry VTT 14.
- Revalidação imediatamente antes de `actor.update` reduz, mas não elimina totalmente, conflitos simultâneos de clientes sem uma operação transacional.
- Progressão de pontos de magia acima do estágio 10 ainda exige confirmação no livro de 1991.
- Os valores das tabelas do livro não foram re-auditados nesta versão.
