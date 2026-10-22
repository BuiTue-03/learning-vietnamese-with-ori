/** The pop-up for a level up, a new badge or a reached daily goal. Empty while a quiz or typing round is running. */
import { LEVELS } from "../../game/levels.js";
import { badgeById } from "../../game/badges.js";
import { outfitFor } from "../../game/outfits.js";
import { currentCelebration } from "../../game/celebrations.js";
import { esc } from "../../utils/html.js";
import { state } from "../state.js";
import { mascot } from "./mascot/index.js";
import { medal } from "./medal.js";

export function modalHtml() {
  const c = currentCelebration();
  if (!c || state.view === "quiz" || state.view === "typing") return "";
  const o = outfitFor(c);
  let body, kick, title, sub;
  if (c.kind === "level") {
    const L = LEVELS[c.level - 1];
    kick = "Level up"; title = "Level " + c.level + " · " + esc(L.vi); sub = esc(L.en);
    body = mascot({ pose: "cheer", size: 110, hop: true, outfit: o ? o.id : undefined });
  } else if (c.kind === "goal") {
    kick = "Daily goal"; title = "Đạt mục tiêu rồi!"; sub = "You reached today’s goal of " + c.n + " words. +20 XP.";
    body = mascot({ pose: "cheer", size: 110, hop: true });
  } else {
    const b = badgeById(c.id);
    kick = "New badge"; title = esc(b.vi); sub = esc(b.en) + ". " + esc(b.how);
    body = medal(b, 72) + (o ? mascot({ pose: "cheer", size: 90, hop: true, outfit: o.id }) : "");
  }
  return '<div class="scrim"><div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dlg-t">' + body +
    '<span class="kick2">' + kick + '</span><h2 id="dlg-t">' + title + '</h2><p>' + sub + '</p>' +
    (o ? '<p><b>New outfit unlocked:</b> ' + esc(o.vi) + ' (' + esc(o.en) + ')</p>' : "") +
    '<div class="ctrl">' + (o ? '<button class="btn" data-act="wearnew" data-id="' + o.id + '">Wear it</button>' : "") +
    '<button class="btn primary" data-act="dismiss">Tuyệt! Keep going</button></div></div></div>';
}
