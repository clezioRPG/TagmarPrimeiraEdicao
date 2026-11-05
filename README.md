# Tagmar 1ª Edição para Foundry VTT (não oficial)

Sistema de jogo para o [Foundry VTT](https://foundryvtt.com) (v13 e v14) com a ficha, as rolagens e os compêndios do RPG **Tagmar, 1ª edição (1991)**.

> Versão 0.18.0 — encerramento do ciclo de desenvolvimento 0.17.x. As auditorias automatizadas não substituem testes interativos no Foundry VTT 14. Faça backup do mundo antes de atualizar.

## Índice

- [Instalação e primeiro mundo](#instalação-e-primeiro-mundo)
- [Primeiros passos com a ficha](#primeiros-passos-com-a-ficha)
- [Compêndios incluídos](#compêndios-incluídos)
- [Rolagens e botões](#rolagens-e-botões)
- [Ferramentas do livro](#ferramentas-do-livro)
- [Evolução e passagem de Estágio](#evolução-e-passagem-de-estágio)
- [Magias](#magias)
- [Criaturas](#criaturas)
- [Aparência e tema](#aparência-e-tema)
- [Macros opcionais](#macros-opcionais)
- [Atualização e solução de problemas](#atualização-e-solução-de-problemas)
- [Autoria e histórico](#autoria-e-histórico)
- [Licenciamento e conteúdo](#licenciamento-e-conteúdo)

## Instalação e primeiro mundo

1. No Foundry, abra **Game Systems → Install System**.
2. No campo **Manifest URL**, cole:

   `https://github.com/claezius/tagmar1e-foundry/releases/latest/download/system.json`

3. Clique em **Install**. Depois crie um mundo escolhendo o sistema **Tagmar 1ª Edição (não oficial)**.
4. Ao abrir o mundo como Mestre, o sistema pergunta se deve criar os compêndios. Responda **Sim**.

Instalação manual: baixe `system.zip` da página de *Releases*, descompacte em `Data/systems/tagmar1e/` (o arquivo `system.json` fica direto nessa pasta) e reinicie o Foundry.

## Primeiros passos com a ficha

1. Crie um ator do tipo **personagem**.
2. Preencha nome, raça, profissão, estágio, **altura** (`175` ou `1,75`) e **peso** (kg).
3. Digite as características iniciais (soma dos 2 maiores de 3d10, conforme o livro) e o modificador racial. A ficha mostra o total e o ajuste.
4. Escolha armadura, escudo e elmo.
5. Use **Rolar EH** para a Energia Heróica e **Aplicar** ao lado da Energia Física.

A ficha calcula sozinha: ajustes das características, Energia Física (tabela IV-3.1.1), Velocidade Base, Defesa (e sem consciência), Resistência Física, Resistência à Magia, Karma máximo, total e pontos das habilidades, e a tabela *Ataque x Defesa* e o *Dano* de cada arma.

## Compêndios incluídos

Criados no mundo (69 itens): **Habilidades** (27), **Armas** (21), **Armaduras, escudos e elmos** (9), **Raças** (6) e **Profissões** (6).

Arraste itens para a ficha: habilidade vira uma linha no nível 1, arma vira uma linha de arma, armadura/escudo/elmo equipa o item, raça preenche o modificador racial e profissão preenche a profissão (com aviso se a combinação não existir, tabela II-4.7).

Para criar ou completar os compêndios depois, rode em um macro de script: `await game.tagmar1e.popularCompendios()`.

## Rolagens e botões

- **⚔ (arma):** pergunta a Defesa do alvo, monta a coluna (nível + ajuste de Agilidade + valor da arma contra a Defesa), rola o d20 na Tabela de Resolução e mostra cor, dano, crítico e falha.
- **🎲 (habilidade):** dificuldade por cor (Rotineiro a Absurdo), tentativas (+2 níveis a cada nova) e sucesso pelo menor número da cor na coluna.
- **Aplicar dano:** dano normal na EH, EF com absorção da armadura, crítico direto na EF.

## Ferramentas do livro

Além da ficha e das rolagens de combate, o sistema traz as tabelas do livro como botões e compêndios. A lista completa de tabelas e onde cada uma está fica em [TABELAS.md](TABELAS.md).

- **Criação:** *Sortear altura e peso* (tabela II-8, 2d10, pela raça) e *Sortear classe social* (II-9.9, 2d10), que gravam na ficha. *Dinheiro inicial* (VI-3) pela classe social.
- **Pertences:** compêndio **Equipamentos e preços** (108 itens do capítulo VI, com preço em moedas e pacotes de compra rápida) e o botão **Comprar**, que aplica a variação do mercado (Normal x1, Difícil x2, Absurda x5), converte as moedas (1 m.o. = 10 m.p. = 100 m.c.) e anota o item em Pertences. Armas, armaduras, escudos e elmos têm o preço no próprio item.
- **Peso carregado:** escolha a categoria das armas e do equipamento; a ficha soma os pontos das vestes pela armadura e pelo escudo, cruza com a Força (tabela VI-6) e destaca a faixa de carga na tabela de **Movimento por rodada** (IV-6).
- **Combate:** alcance das armas de arremesso e de tiro (IV-8.4), **combate desarmado** (IV-12.1, dano máximo 4, sem Agilidade) e a opção de atacar **sem nível na arma** (coluna -7, item 12.2).
- **Ordens e Colégios:** *Pedir ingresso* (V-9.3.1 e V-9.4.1): chance em 1d10 por Estágio (no Estágio 5 ou mais é automático).
- **Queda:** 1 ponto de dano na Energia Física a cada 2 m, atenuada pelo teste de Acrobacias (cor do resultado), com o crítico de queda pela altura.
- **Reação de criatura** (XIII-7, pelo Carisma) e **Teste de Moral** da criatura (XIII, item 6), este na ficha de criatura.
- **Tesouros para o Mestre** (capítulo XIV): rode em um macro de script `await game.tagmar1e.tesouro()`. O gerador sorteia o tesouro monetário do tipo 1 a 5 e os objetos mágicos (quantidade, tipo, bônus do tipo de tesouro e a tabela de poderes de anéis, armas, armaduras, elmos, escudos, cetros, cajados, óleos, poções e elixires) e manda o resultado em sussurro para o Mestre. Os poderes e magias de cada item estão nos itens 3.7 e 3.8 do livro.

**Erros de impressão encontrados nas tabelas**

- Tesouro monetário do tipo 5, 1d10 = 7: ouro 250 (o padrão da tabela sugere 350). Mantido como impresso.
- Tabela dos cetros e cajados (XIV-3.5b): o total 69 não aparece; o gerador usa a linha de 67 a 68 (67 a 69).

## Evolução e passagem de Estágio

Na ficha, o campo **Pontos de Experiência** mostra o **Estágio que os PE dão** (tabela VII-3 do livro, Estágios 1 a 20) e quantos PE o próximo Estágio exige. O botão **Subir de estágio** confere os PE (se não chegarem, pergunta se você quer subir mesmo assim), sobe o Estágio e posta no chat o passo a passo do livro com os números do novo Estágio:

- **Pontos de habilidade** do novo Estágio por grupo (tabela III-3.2a), pontos de **combate** (tabela IV-8.1a) e pontos de **magia** (tabela V-9.5a, com o Intelecto atual);
- **Resistência Física**, **Resistência à Magia** e **Karma máximo** novos;
- o lembrete de que o nível de habilidades e de grupos de armas não passa do Estágio;
- a **Energia Heróica** do novo Estágio: a janela de **Rolar EH** abre em seguida (1d10 na tabela da profissão, somando ao que você já tem).

Os pontos que sobram ficam acumulados porque a ficha compara o que você gastou com o total recebido em todos os Estágios. Isso vale para habilidades (por grupo), grupos de armas e magias. A ficha avisa com ⚠ quando o nível de uma habilidade ou de um grupo passa do Estágio, e mostra a **Força mínima** e o uso **1m/2m/X** de cada arma pela altura do personagem. Na ação conjunta, o teste de habilidade aceita ajudantes (+1 cada), como no item 6.2 do capítulo III.

Fica por sua conta, como no livro: comprar as habilidades, os grupos de armas e as magias com os pontos, e a chance de ser aceito numa Ordem ou Colégio (capítulo V, itens 9.3.1 e 9.4.1, ainda não digitalizados).

## Magias

O compêndio **Habilidades** traz, em cada uma, um **resumo escrito com palavras próprias** das regras do capítulo III (item 5), com o número do item para consultar o livro; passe o mouse no nome da habilidade na ficha para ler. Os exemplos de dificuldade e os casos especiais ficam no livro.

Os compêndios agora incluem as **111 magias** do capítulo V, com custo por lista (Rastreador, Bardo, Sacerdote, Mago e as ordens e colégios), evocação, alcance, duração e as dificuldades dos efeitos.

Na ficha, escolha a **Ordem ou Colégio** do personagem. A seção **Magias** mostra o custo de cada magia (o menor entre a lista da profissão e a da ordem ou colégio), os pontos de magia gastos contra os da tabela V-9.5a e os dados de cada magia. Os pontos disponíveis supõem o Intelecto atual em todos os estágios; confira com o livro se o Intelecto mudou.

- **✨ (evocar):** pergunta a dificuldade do efeito e o Karma a gastar (no mínimo a dificuldade, no máximo o Estágio e o que você tem). Desconta o Karma e mostra a **Força do Ataque** (igual ao Karma gasto). Nas magias de ataque físico (**Bola de Fogo, Dardos de Gelo, Meteoros, Raio Elétrico e Relâmpagos**) rola o ataque na coluna igual ao nível na magia, com o dano máximo do efeito e os críticos e falhas de magia.
- **Testar resistência:** rola 1d20 contra o número da Tabela de Resistência (Força do Ataque x Força da Defesa), para Resistência à Magia ou Física.
- Arraste uma magia do compêndio para a ficha para adicioná-la no nível 1.

As **dificuldades dos efeitos** foram lidas por reconhecimento automático do livro e podem ter omissões; a evocação aceita qualquer dificuldade até o nível da magia. Seis magias estão sem a lista de dificuldades (Canções de Sono, Ilusões Materiais, Piroproteção, Prisão e Resistência à Fadiga); veja no livro.

## Criaturas

O sistema tem o tipo de ator **criatura**, com ficha própria: Estágio, Defesa, Energia Física e Heróica, absorção da armadura, resistências, moral e uma tabela de ataques (**Ataque x Defesa** de 1 a 21 e **Dano** 100/75/50/25). O botão **⚔** faz o ataque da criatura e **Aplicar dano** tira da Energia Heróica, depois da armadura e da Energia Física, como na ficha de personagem.

As 128 criaturas do capítulo XIII do livro estão no módulo opcional [Tagmar 1ª - Criaturas](https://github.com/claezius/tagmar1e-criaturas): cole `https://github.com/claezius/tagmar1e-criaturas/releases/latest/download/module.json` em **Add-on Modules → Install Module**.

## Aparência e tema

A ficha vem com o tema **Pergaminho medieval** (papel, tinta e detalhes dourados). Para trocar, vá em **Configurações → Configurar opções → Sistema → Tema da ficha** e escolha **Pergaminho medieval** ou **Simples**. A escolha vale só no seu computador.

Há também o módulo opcional [Tagmar 1ª - Tema Pergaminho](https://github.com/claezius/tagmar1e-pergaminho), que acrescenta cartões de pergaminho nas mensagens de rolagem do chat, janelas de pergunta no mesmo estilo e enfeites na ficha. Instalação: cole `https://github.com/claezius/tagmar1e-pergaminho/releases/latest/download/module.json` em **Add-on Modules → Install Module** e ative o módulo no mundo.

## Macros opcionais

A pasta `macros/` tem macros de script independentes da ficha (ataque, habilidade, dano e um teste simples por coluna). A pasta `dados/` tem as tabelas digitalizadas em JSON.

## Atualização e solução de problemas

- Para atualizar, use **Update** no Foundry; ele segue a última *Release*.
- Se os compêndios não aparecerem, rode `await game.tagmar1e.popularCompendios()` em um macro de script como Mestre.
- Ao relatar um erro, informe a versão do Foundry e a mensagem do console (F12).
- Fichas criadas na versão 0.2.x: o campo "total" das habilidades passa a ser o **nível**.

Funcionalidades adicionais, como arquétipos prontos e recuperação automática do Karma, permanecem fora do escopo desta versão. Consulte `VALIDACAO_0.18.0.md` antes de adotar em uma campanha em andamento.

## Autoria e histórico

- **Tagmar** é um RPG brasileiro lançado em 1991 pela Editora GSA. Criadores: Marcelo Rodrigues, Ygor Moraes Esteves da Silva, Julio Augusto Cezar Junior e Leonardo Nahoum Pache de Faria.
- Este sistema é um projeto de fãs, sem vínculo com os autores. A estrutura segue o exemplo do sistema [Tagmar 3ER Oficial](https://github.com/piratabarba-blip/tagmar3er-oficial), feito para a 3ª edição.

## Licenciamento e conteúdo

- O repositório **não contém texto do livro**: só nomes e números das tabelas e regras de cálculo, para uso em mesa. É preciso ter o livro para jogar.
- Uso **não comercial**.
- Licença do código: *a definir pelo mantenedor do repositório*. Antes de divulgar, confirme com os autores de Tagmar a permissão para distribuir os dados da 1ª edição.


### Proteção dos compêndios (0.14.3)

`await game.tagmar1e.popularCompendios()` **somente cria itens ausentes**. Nunca sobrescreve itens existentes. Para preencher descrições **estritamente vazias** de magias e habilidades, o Mestre pode optar explicitamente por `await game.tagmar1e.popularCompendios({atualizarDescricoesVazias: true})`. Descrições não vazias, mesmo com cabeçalho gerado pelo sistema, são preservadas. Para atualizar manualmente uma descrição antiga, faça cópia de segurança antes de editá-la.


## Combate integrado (0.18.0)

- Marque um token como alvo usando a ferramenta nativa de alvos do Foundry antes de atacar.
- A rolagem pode sugerir dano para o alvo; a aplicação ainda exige confirmação explícita.
- O Mestre pode abrir o **Painel Tagmar** pelo rastreador de combate ou pela macro `game.tagmar1e.painelCombate()`.
- O painel exibe EF, EH, Defesa e Absorção e permite registrar condições com duração em rodadas.
- Condições são **informativas** e espelhadas em Efeitos Ativos sem modificadores mecânicos. A expiração não remove automaticamente o marcador.
- A criação e a remoção de condições exigem permissão de Mestre. A aplicação de dano também respeita as permissões do documento.
- **Atenção:** não foi realizado teste interativo de ponta a ponta nesta distribuição; valide em cópia do mundo antes de uso em campanha.
