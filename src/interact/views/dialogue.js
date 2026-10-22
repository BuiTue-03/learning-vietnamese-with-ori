/** A dialogue: the lines with their speakers, English can be hidden. */
import { dialogueById } from "../../lang/data/catalog.js";
import { esc } from "../../utils/html.js";
import { state } from "../state.js";
import { playBtn } from "../components/play-button.js";

export function dialogueView() {
  const d = dialogueById(state.dlg);
  const lines = d.lines.map((r) => '<div class="line ' + r.who.toLowerCase() + '"><span class="sp" aria-label="' + esc(d.roles[r.who]) + '">' + r.who + '</span>' +
      '<div><div class="pv">' + esc(r.vi) + '</div>' + (state.showEn ? '<div class="pe">' + esc(r.en) + '</div>' : "") + '<div class="role">' + esc(d.roles[r.who]) + '</div></div>' + playBtn(r.id) + '</div>').join("");
  return '<button class="back" data-act="home">← All lessons</button>' +
    '<div class="plate big"><div class="plate-in"><span class="kick">Dialogue</span><h1 class="plate-title" tabindex="-1">' + esc(d.title) + '</h1></div></div>' +
    '<p class="sub">' + esc(d.sub) + '</p>' +
    '<div class="ctrl"><button class="btn small" data-act="toggleen" aria-pressed="' + state.showEn + '">' + (state.showEn ? "Hide English" : "Show English") + '</button></div>' +
    '<div class="lines">' + lines + '</div>' +
    '<p class="sub">Names, prices and times in these dialogues are examples only.</p>';
}
