/** XP, level and progress-bar numbers for the player card, result page and Me page. */
import { LEVELS, levelNow } from "../../game/levels.js";
import { xpTotal } from "../../game/points.js";

export function xpSummary() {
  const xp = xpTotal(), lv = levelNow(), L = LEVELS[lv - 1], nx = LEVELS[lv];
  const pct = nx ? Math.max(0, Math.min(100, Math.round((xp - L.xp) / (nx.xp - L.xp) * 100))) : 100;
  return { xp, lv, L, nx, pct,
    text: xp + " XP · " + (nx ? Math.max(0, nx.xp - xp) + " to level " + (lv + 1) : "top level") };
}
