import { abrirPainelCombate, instalarAtalhoPainelCombate } from "./module/painel-combate.mjs";
import { diagnosticarSistema } from "./module/diagnostico.mjs";
import { instalarBarrasCompactas } from "./module/token-bars.mjs";
import { criarCompendioCriaturas } from "./module/criaturas-compendio.mjs";
import { PersonagemData, CriaturaData, HabilidadeData, ArmaData, ArmaduraData, RacaData, ProfissaoData, MagiaData, EquipamentoData } from "./module/data.mjs";
import { TagmarFicha } from "./module/sheet.mjs";
import { CriaturaFicha } from "./module/criatura-sheet.mjs";
import { TagmarItemSheet } from "./module/item-sheet.mjs";
import { popularCompendios, diagnosticarCompendios } from "./module/compendios.mjs";
import { gerarTesouro } from "./module/rolagens.mjs";

Hooks.once("init", () => {
  instalarBarrasCompactas();
  instalarAtalhoPainelCombate();
  // Formula provisoria de iniciativa no tracker nativo, usada tambem por modulos de combate.
  // Conferir com o livro antes de tratar como regra definitiva.
  CONFIG.Combat.initiative.formula = "1d10";
  CONFIG.Actor.dataModels.personagem = PersonagemData;
  CONFIG.Actor.dataModels.npc = PersonagemData;
  CONFIG.Actor.dataModels.criatura = CriaturaData;
  CONFIG.Item.dataModels.habilidade = HabilidadeData;
  CONFIG.Item.dataModels.arma = ArmaData;
  CONFIG.Item.dataModels.armadura = ArmaduraData;
  CONFIG.Item.dataModels.raca = RacaData;
  CONFIG.Item.dataModels.profissao = ProfissaoData;
  CONFIG.Item.dataModels.magia = MagiaData;
  CONFIG.Item.dataModels.equipamento = EquipamentoData;

  const folhas = foundry.applications.apps.DocumentSheetConfig;
  folhas.registerSheet(Actor, "tagmar1e", TagmarFicha, {
    types: ["personagem", "npc"], makeDefault: true, label: "Ficha Tagmar 1ª ed."
  });
  folhas.registerSheet(Actor, "tagmar1e", CriaturaFicha, {
    types: ["criatura"], makeDefault: true, label: "Ficha de criatura Tagmar 1ª ed."
  });
  folhas.registerSheet(Item, "tagmar1e", TagmarItemSheet, {
    types: ["habilidade", "arma", "armadura", "raca", "profissao", "magia", "equipamento"], makeDefault: true, label: "Item Tagmar 1ª ed."
  });

  game.settings.register("tagmar1e", "compendiosCriados", {scope: "world", config: false, type: Boolean, default: false});
  game.settings.register("tagmar1e", "tema", {
    name: "Tema da ficha",
    hint: "Aparência das fichas do Tagmar neste computador.",
    scope: "client", config: true, type: String, default: "pergaminho",
    choices: {pergaminho: "Pergaminho clássico", escuro: "Fantasia medieval escura", moderno: "Clássico modernizado", simples: "Simples (legado)"},
    onChange: () => {
      for (const app of foundry.applications.instances.values()) {
        if (app.options.classes && app.options.classes.includes("tagmar1e")) app.render();
      }
    }
  });
  // para criar/atualizar os compendios depois, em um macro: await game.tagmar1e.popularCompendios()
  game.tagmar1e = {popularCompendios, diagnosticarCompendios, criarCompendioCriaturas, tesouro: gerarTesouro, diagnosticarSistema, painelCombate: abrirPainelCombate};
});

Hooks.once("ready", async () => {
  // pergunta uma vez; tambem quando o compendio de magias (versao 0.6.0) ainda nao existe no mundo
  if (!game.user.isGM) return;
  const pendencias = await diagnosticarCompendios();
  if (pendencias.every(p => p.faltantes.length === 0)) return;
  const sim = await foundry.applications.api.DialogV2.confirm({
    window: {title: "Tagmar 1ª ed."},
    content: "<p>Criar os compêndios do Tagmar neste mundo (habilidades, armas, armaduras, raças, profissões, magias e equipamentos com preços)? Itens que já existem não serão duplicados nem substituídos.</p>",
    rejectClose: false
  });
  if (!sim) return;
  try {
    const n = await popularCompendios();
    await game.settings.set("tagmar1e", "compendiosCriados", true);
    ui.notifications.info("Compêndios do Tagmar criados (" + n + " itens).");
  } catch (e) {
    console.error("tagmar1e | erro ao criar compêndios", e);
    ui.notifications.error("Não foi possível criar os compêndios; veja o console (F12).");
  }
});

// O compêndio de criaturas é criado sob demanda, sem modificar atores existentes.
Hooks.once("ready", () => {
  if (!game.user?.isGM) return;
  console.info("Tagmar | Para criar o bestiário, execute: await game.tagmar1e.criarCompendioCriaturas()");
});
