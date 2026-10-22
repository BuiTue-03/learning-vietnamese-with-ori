/**
 * The ten levels. Levels 1-4 use small fixed thresholds so the first rewards come fast.
 * Levels 5-10 are a share of the XP available from learning every word, so they stay meaningful as lessons are added.
 * A level, once reached, is never lost: store.lvPeak remembers the highest one.
 */
import { store } from "../storage/store.js";
import { xpTotal, learnableXp } from "./points.js";

const TITLES = [
  { vi: "Người mới", en: "Newcomer" },
  { vi: "Du khách", en: "Tourist" },
  { vi: "Thực khách", en: "Diner" },
  { vi: "Khách quen", en: "Regular" },
  { vi: "Thông thạo", en: "Proficient" },
  { vi: "Người quen", en: "Acquaintance" },
  { vi: "Bạn bè", en: "Friend" },
  { vi: "Người nhà", en: "One of the family" },
  { vi: "Người địa phương", en: "Local" },
  { vi: "Cao thủ", en: "Master" }
];
const FIXED_XP = [0, 40, 120, 300];
const LEVEL_SHARE = { 5: 0.04, 6: 0.08, 7: 0.15, 8: 0.27, 9: 0.45, 10: 0.70 };
const MIN_GAP = 150;

function buildLevels() {
  const total = learnableXp();
  const levels = [];
  TITLES.forEach((t, i) => {
    const n = i + 1;
    const xp = n <= FIXED_XP.length ? FIXED_XP[i] : Math.max(Math.round(total * LEVEL_SHARE[n] / 10) * 10, levels[i - 1].xp + MIN_GAP);
    levels.push({ xp, vi: t.vi, en: t.en });
  });
  return levels;
}

/** [{ xp, vi, en }] for levels 1..10. */
export const LEVELS = buildLevels();

/** The level that `xp` reaches (1..10), ignoring the saved peak. */
export function levelOf(xp) {
  let lv = 1;
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].xp) lv = i + 1;
  return lv;
}

/** The learner's current level: never lower than the highest level already reached. */
export function levelNow() {
  return Math.max(levelOf(xpTotal()), store.lvPeak || 1);
}
