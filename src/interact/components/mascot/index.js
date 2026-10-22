/** Que, the stick-figure guide: returns an inline SVG for an outfit, colour and pose. */
import { store, playerName } from "../../../storage/store.js";
import { COLORS } from "../../../game/colors.js";
import { outfitById } from "../../../game/outfits.js";
import { esc } from "../../../utils/html.js";
import { GOLD, LIGHT, RED } from "./shapes.js";
import { body } from "./body.js";
import { head } from "./head.js";

const HANDS = {
  idle: [[38, 86], [82, 86]], cheer: [[22, 24], [98, 24]], wave: [[38, 86], [90, 44]], oops: [[30, 76], [90, 76]]
};

/** Everything the drawing functions need to know about this outfit, colour and pose. */
function context(o) {
  const pose = o.pose || "idle";
  const out = o.outfit || store.outfit;
  const col = COLORS[o.color != null ? o.color : store.color].c;
  const longDress = out === "aodai" || out === "khan";
  const fullSleeves = longDress || out === "coat" || out === "baba" || out === "hood" || out === "kungfu" || out === "chef" || out === "pj" ||
    out === "kurung" || out === "melayu" || out === "samfu" || out === "kurta" || out === "kebaya";
  return {
    pose, out, col, longDress, fullSleeves,
    hands: HANDS[pose] || HANDS.idle,
    tcol: (out === "chef" || out === "kungfu") ? LIGHT : out === "nday" ? RED : out === "sari" ? GOLD : col,
    shorts: out === "sport" || out === "beach"
  };
}

/**
 * @param {{ pose?: "idle"|"cheer"|"wave"|"oops", outfit?: string, color?: number, size?: number, hop?: boolean }} [o]
 * Defaults to the learner's saved outfit and colour.
 */
export function mascot(o) {
  o = o || {};
  const size = o.size || 96;
  const c = context(o);
  const oname = outfitById(c.out).en.toLowerCase();
  return '<span class="mascot' + (o.hop ? " hop" : "") + '"><svg viewBox="0 0 120 156" width="' + size + '" height="' + Math.round(size * 1.3) + '" role="img" aria-label="' + esc(playerName()) + ', the stick-figure guide, wearing the ' + esc(oname) + ' outfit">' + body(c) + head(c) + "</svg></span>";
}
