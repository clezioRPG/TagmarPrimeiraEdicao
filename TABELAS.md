# Tabelas do Tagmar 1ª edição neste sistema

Todas as tabelas abaixo foram digitalizadas do livro (1991) e conferidas com as imagens. O código fica em `module/` (os módulos `tabelas.mjs`, `dados.mjs`, `magias.mjs`, `equipamentos.mjs` e `tesouros.mjs` guardam os números); a pasta `dados/` tem as tabelas de resolução e de críticos em JSON.

| Capítulo | Tabela | Conteúdo | Onde está |
|---|---|---|---|
| II | II-3.6 / II-4.7 | Ajustes raciais e profissões possíveis | compêndios Raças e Profissões |
| II | II-5.8 | Ajuste de cada característica | ficha (automático) |
| II | II-8 | Altura e peso por raça (2d10) | botão *Sortear altura e peso* |
| II | II-9.9 | Classe social por raça (2d10) | botão *Sortear classe social* |
| III | III-3.2a / 3.2b | Pontos por grupo e custo, característica de cada habilidade | compêndio Habilidades, ficha |
| IV | IV-3.1.1 | Energia Física (Força + Físico x peso) | ficha, botão *Aplicar* |
| IV | IV-3.2.1a / 3.2.1b | Energia Heróica por profissão | botão *Rolar EH* |
| IV | IV-6 | Movimento por faixa de carga | ficha (Movimento por rodada) |
| IV | IV-7.1 | Defesa por armadura e Agilidade | ficha (automático) |
| IV | IV-8.1a / 8.1b | Pontos de combate; grupos, custos, Força mínima e uso por altura | ficha (armas) |
| IV | IV-8.2 | Ataque x Defesa de cada arma | ficha (armas) |
| IV | IV-8.4 | Alcance das armas | ficha (armas) |
| IV | IV-10.3a / 10.3b | Dano máximo e dano por porcentagem | ficha (armas) |
| IV | IV-10.4.1 | Absorção de armaduras, escudos e elmos | ficha, botão *Aplicar dano* |
| IV | IV-12.1 | Combate desarmado | arma *Combate desarmado* |
| IV | Resolução, Críticos, Falha | Tabela colorida de resolução e tabelas de crítico e falha | todas as rolagens; `dados/` |
| IV | Resistência | Força do ataque x Força da defesa | botão *Testar resistência* |
| V | V-5.2 | Karma por estágio pela Aura | ficha (automático) |
| V | V-9.3.1 / V-9.4.1 | Chance de entrar em Ordens e Colégios | botão *Pedir ingresso* |
| V | V-9.5a a 9.5j | Pontos de magia e custo das magias por lista | compêndio Magias, ficha |
| VI | VI-3 | Dinheiro inicial por classe social | botão *Dinheiro inicial* |
| VI | VI-5.1a a VI-5.7 | Preços de armas, armaduras, escudos, animais, transportes, residências, material e miscelâneos; pacotes | compêndio Equipamentos, botão *Comprar* |
| VI | VI-6 | Peso carregado (pontos x Força) | ficha (Dinheiro e peso carregado) |
| VII | VII-3 | Experiência por Estágio | ficha, botão *Subir de estágio* |
| XI | Queda | Atenuação de quedas e críticos por queda | botão *Queda* |
| XIII | XIII (criaturas) | Estágio, Defesa, Energias, Resistências, Moral, ataques e dano de 128 criaturas | módulo Tagmar 1ª - Criaturas |
| XIII | XIII-7 | Dificuldade da reação pelo Carisma | botão *Reação de criatura* |
| XIII | Moral | Situações e modificadores | botão *Teste de Moral* |
| XIV | XIV-2 | Tesouro monetário (tipos 1 a 5) | `game.tagmar1e.tesouro()` |
| XIV | XIV-3a, 3b, 3.1 | Quantidade, tipo e bônus dos objetos mágicos | `game.tagmar1e.tesouro()` |
| XIV | XIV-3.2 a 3.6 | Anéis, armas, armaduras, elmos, escudos, cetros e cajados, óleos, poções e elixires | `game.tagmar1e.tesouro()` |

Erros de impressão e lacunas das tabelas estão listados no [README](README.md) (itens de tesouro) e no README do módulo de criaturas.
