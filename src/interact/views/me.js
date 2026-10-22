/** The Me page: outfits, colour, badges, settings and the reset button. */
import { store, playerName } from "../../storage/store.js";
import { lessonById } from "../../lang/data/catalog.js";
import { COLORS } from "../../game/colors.js";
import { BADGES, badgeById } from "../../game/badges.js";
import { OUTFITS, outfitById, outfitUnlocked } from "../../game/outfits.js";
import { countKeys } from "../../utils/collections.js";
import { esc } from "../../utils/html.js";
import { state } from "../state.js";
import { mascot } from "../components/mascot/index.js";
import { medal } from "../components/medal.js";
import { modeToggle } from "../components/mode-toggle.js";
import { xpSummary } from "../components/xp-summary.js";

function reqText(o) {
  return o.need.level ? "Level " + o.need.level : o.need.badge ? "badge “" + badgeById(o.need.badge).vi + "”" : "free";
}
export function meView() {
  const g = xpSummary(), cur = outfitById(store.outfit);
  function outBtn(o) {
    const un = outfitUnlocked(o), sel = store.outfit === o.id;
    return '<button class="outfit ' + (sel ? "on" : "") + '" data-act="wear" data-id="' + o.id + '" aria-pressed="' + sel + '"' + (un ? "" : " disabled") + '>' +
      mascot({ outfit: o.id, size: 56 }) + '<span class="on-name">' + esc(o.vi) + '</span>' +
      '<span class="on-en">' + (un ? esc(o.en) : "Unlock: " + esc(reqText(o))) + '</span></button>';
  }
  const outs = OUTFITS.filter((o) => !o.need.free && o.grp !== "sg").map(outBtn).join("");
  const outsSg = OUTFITS.filter((o) => o.grp === "sg").map(outBtn).join("");
  const nSg = OUTFITS.filter((o) => o.grp === "sg" && outfitUnlocked(o)).length, nSgAll = OUTFITS.filter((o) => o.grp === "sg").length;
  const outsFree = OUTFITS.filter((o) => o.need.free).map(outBtn).join("");
  const nEarned = OUTFITS.filter((o) => !o.need.free && o.grp !== "sg" && outfitUnlocked(o)).length, nEarnable = OUTFITS.filter((o) => !o.need.free && o.grp !== "sg").length;
  const sw = COLORS.map((c, i) => '<button class="swb" data-act="color" data-i="' + i + '" aria-label="' + c.vi + ' (' + c.n + ')" title="' + c.n + '" aria-pressed="' + (store.color === i) + '">' +
      '<span class="sw" style="background:' + c.c + '"></span><span class="swl">' + c.vi + '</span></button>').join("");
  const bd = BADGES.map((b) => {
    const got = store.badges[b.id];
    return '<div class="badge ' + (got ? "" : "locked") + '">' + medal(b, 52) + '<div class="bn">' + (got ? esc(b.vi) : "Locked") + '</div>' +
      '<div class="bh">' + (got ? esc(b.en) : esc(b.how)) + '</div>' + (got ? '<div class="bs">Earned</div>' : "") + "</div>";
  }).join("");
  const goals = [5, 10, 20].map((n) => '<button data-act="goal" data-n="' + n + '" aria-pressed="' + (store.goal === n) + '">' + n + ' words</button>').join("");
  const hist = store.log.slice().reverse().slice(0, 12).map((h) => {
    const what = h.k === "daily" ? "Daily practice" : (h.k === "typing" ? "Typing · " : "Quiz · ") + (lessonById(h.l) ? lessonById(h.l).title : "");
    return "<li><span>" + esc(h.d) + " · " + esc(what) + "</span><span>" + h.s + "/" + h.t + "</span></li>";
  }).join("");
  return '<button class="back" data-act="home">← All lessons</button>' +
    '<div class="stage">' + mascot({ pose: "wave", size: 120 }) + '<div class="name" id="pname">' + esc(playerName()) + '</div>' +
    '<div>Level ' + g.lv + ' · ' + esc(g.L.vi) + ' <span class="tip">(' + esc(g.L.en) + ')</span></div>' +
    '<div class="bar" style="width:100%;max-width:18rem"><i style="width:' + g.pct + '%"></i></div><div class="tip">' + g.text + '</div>' +
    '<div class="tip">Wearing: ' + esc(cur.vi) + ' (' + esc(cur.en) + ')</div></div>' +
    '<div class="panel" style="margin-top:.8rem"><div class="toolbar"><label for="uname"><b>Your name</b> <span class="tip">(shown under your stick figure and in the greeting)</span></label></div>' +
    '<input class="typed" id="uname" type="text" maxlength="20" autocomplete="off" spellcheck="false" placeholder="Que" value="' + esc(store.name || "") + '"></div>' +
    '<h1 class="sec" tabindex="-1">Outfits to earn · ' + nEarned + '/' + nEarnable + '</h1><div class="outfits">' + outs + '</div>' +
    '<h2 class="sec">From Singapore · ' + nSg + '/' + nSgAll + '</h2><p class="tip">Traditional and national dress from Singapore’s communities. You earn them by learning more words.</p><div class="outfits">' + outsSg + '</div>' +
    '<h2 class="sec">Free choice</h2><p class="tip">These are yours from the start. Wear whatever you like.</p><div class="outfits">' + outsFree + '</div>' +
    '<h2 class="sec">Colour</h2><div class="swatches">' + sw + '</div>' +
    '<h2 class="sec">Badges · ' + countKeys(store.badges) + '/' + BADGES.length + '</h2><div class="badges">' + bd + '</div>' +
    '<h2 class="sec">Settings</h2>' +
    '<div class="panel"><div class="toolbar"><span>Daily goal</span><div class="seg" role="group" aria-label="Daily goal">' + goals + '</div></div>' +
    '<div class="toolbar"><span>Remind me to review before a new lesson</span><div class="seg" role="group" aria-label="Review reminder"><button data-act="gate" data-v="1" aria-pressed="' + store.gate + '">On</button><button data-act="gate" data-v="0" aria-pressed="' + !store.gate + '">Off</button></div></div>' +
    '<div class="toolbar"><span>Study direction</span>' + modeToggle() + '</div></div>' +
    '<h2 class="sec">Recent practice</h2>' + (hist ? '<ul class="hist">' + hist + '</ul>' : '<p class="tip">Nothing yet. Finish a quiz or a typing round and it shows up here.</p>') +
    '<h2 class="sec">How XP works</h2><p class="tip">Marking a word as known gives 3 XP. Answering it right in a quiz gives 10 XP, and typing it right gives 10 XP. Getting it right in daily practice gives 5 XP once a day. A perfect quiz gives 20 XP, and reaching your daily goal gives 20 XP. Each word, lesson and day pays once per kind, so repeating is for practice, not points. The first four levels come quickly. Levels 5 to 10 grow with the amount of content in the app, and your level never goes down when new lessons are added.</p>' +
    '<div class="ctrl">' + (state.confirmReset
      ? '<button class="btn warn" data-act="reset2">Yes, erase my progress</button><button class="btn" data-act="reset0">Keep it</button>'
      : '<button class="btn small" data-act="reset1">Reset progress</button>') + '</div>';
}
