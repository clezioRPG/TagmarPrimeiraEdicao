# Tagmar 0.14.2 — Auditoria de consistência dos compêndios

- Corrigida a ligação entre a descrição conferida de **Ilusões Materiais** e o nome efetivo do catálogo (antes o singular não encontrava o registro).
- Reconciliadas **31 listas de níveis de efeito** no catálogo de magias com as descrições por nível já revisadas. Isto corrige a exibição de níveis que existiam no texto revisado, mas faltavam na lista estruturada, e remove níveis espúrios da lista estruturada quando não aparecem na revisão. **Não representa nova conferência das páginas originais**.
- Cobertura agora: **100 magias com descrição revisada vinculada ao catálogo**, **11 sem descrição revisada**, e **27 de 27 habilidades com descrição revisada**.
- A entrada `Ações Furtivas` consta também no catálogo de magias, embora seja habilidade: **marcada para revisão documental**, sem exclusão automática para evitar perda de dados.
- A atualização dos compêndios existentes pode substituir descrições personalizadas que mantenham o cabeçalho automático do sistema: **requer teste e revisão antes de uso em mundos de produção**.
- Nenhum teste de execução no Foundry VTT 14 foi realizado; somente testes estáticos e de integridade.

## Magias ainda sem descrição por nível conferida

Abrigo; Aeroataque; Aeromanipulação; Alucinação; Armadilha; Ações Furtivas; Bênção; Canção de Medo; Conjuração Demoníaca; Controle; Dardos de Gelo.

## Níveis reconciliados

- Domínio: [3, 5, 7, 9] → [1, 3, 5, 7, 9]
- Elemental do Fogo: [3, 5, 7, 9] → [1, 3, 5, 7, 9]
- Desintegração: [2, 4, 6, 8, 10] → [1, 2, 4, 6, 8, 10]
- Despistamento: [2, 3, 5, 6, 7, 8, 10] → [1, 2, 3, 5, 6, 7, 8, 10]
- Convocação: [2, 4, 6, 8, 10] → [1, 2, 4, 6, 8, 10]
- Amizade: [2, 4, 6, 8, 10] → [1, 2, 4, 6, 8, 10]
- Apelo: [3, 5, 6, 7, 9] → [1, 3, 5, 6, 7, 9]
- Esconjuração: [2, 3, 5, 7, 9] → [1, 2, 3, 5, 7, 9]
- Escuridão: [3, 4, 5, 6, 7, 8, 9, 10] → [1, 3, 4, 5, 6, 7, 8, 9, 10]
- Fanatismo: [3, 5, 7] → [1, 3, 5, 7]
- Ira Divina: [3, 5, 7, 9] → [1, 3, 5, 7, 9]
- Manipulação de Luz: [1, 2, 3, 10] → [1, 2, 3, 4, 6, 8, 10]
- Memorização: [1, 2, 3] → [1, 2, 3, 5]
- Necroconhecimento: [3, 5, 7, 10] → [1, 3, 5, 7, 10]
- Ordens: [1, 2, 4, 7, 10] → [1, 2, 4, 6, 7, 10]
- Pergunta: [1, 3, 7, 9] → [1, 3, 5, 7, 9]
- Pesadelo: [1, 3, 8] → [1, 3, 5, 8]
- Piroproteção: [] → [1, 2, 4, 6, 8, 10]
- Possessão: [1, 3, 5, 6, 9, 10] → [1, 3, 5, 6, 8, 9, 10]
- Prisão: [] → [1, 3, 5, 7, 9]
- Proteção: [1, 2, 7, 9, 10] → [1, 2, 3, 5, 7, 9, 10]
- Pseudoconsciência: [3, 5] → [1, 3, 5]
- Quebra de Encantos: [3, 4, 6, 7, 9] → [1, 3, 4, 6, 7, 9]
- Resistência à Fadiga: [] → [1, 3, 5, 7]
- Ressurreição: [2, 4, 6, 10] → [1, 2, 4, 6, 8, 10]
- Retorno: [3, 5, 7, 9] → [1, 3, 5, 7, 9]
- Relâmpagos: [2, 4, 6, 8, 10] → [1, 2, 4, 6, 8, 10]
- Sono: [1, 2, 3, 7, 10] → [1, 2, 3, 5, 7, 10]
- Telecinese: [2, 3, 5, 7, 9] → [1, 2, 3, 5, 7, 9]
- Transformação: [2, 4, 6, 8, 10] → [1, 2, 4, 6, 8, 10]
- Ilusões Materiais: [] → [1, 2, 3, 5, 7, 9, 10]
