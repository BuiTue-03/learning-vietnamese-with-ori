/** Make a freshly loaded store consistent with the current app. */
import { store } from "../storage/store.js";
import { outfitById } from "./outfits.js";
import { COLORS } from "./colors.js";
import { levelOf } from "./levels.js";
import { xpTotal } from "./points.js";

/** Drop saved choices that no longer exist, and raise the remembered peak level to match the XP already earned. */
export function sanitizeStore() {
  if (!outfitById(store.outfit)) store.outfit = "tee";
  if (!COLORS[store.color]) store.color = 0;
  if (store.mode !== "vi2en" && store.mode !== "en2vi") store.mode = "vi2en";
  store.lvPeak = Math.max(store.lvPeak || 1, levelOf(xpTotal()));
}
