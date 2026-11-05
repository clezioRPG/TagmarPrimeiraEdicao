# 0.15.6 — Correção da abertura das magias

- Corrige a parte `corpo` de `templates/item.hbs`: um único elemento raiz, exigido por `HandlebarsApplicationMixin` no Foundry VTT 14.
- Preserva a seção de descrição oficial e os dados existentes.
- Não altera compêndios nem personagens.
- Correção baseada no erro de console `Template part "corpo" must render a single HTML element`.
- A abertura no aplicativo Foundry VTT 14 ainda requer teste em ambiente real.
