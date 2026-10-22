/** Awarding XP. */
import { store } from "../storage/store.js";
import { PTS, xpTotal } from "./points.js";
import { levelNow, levelOf } from "./levels.js";
import { touchDay } from "./streak.js";
import { queueCelebration } from "./celebrations.js";

/**
 * Give the XP for `kind` ("known", "quiz", "typing", "review", "perfect", "goal") and `id`, once.
 * Returns the XP earned (0 if this id already earned it). Counts the day for the streak and queues a level-up pop-up.
 */
export function gain(kind, id) {
  const map = { known: store.xpKnown, quiz: store.xpQuiz, typing: store.xpTyping, review: store.xpReview, perfect: store.perfect, goal: store.goalDays };
  if (map[kind][id]) return 0;
  const before = levelNow();
  map[kind][id] = true;
  touchDay();
  const after = levelOf(xpTotal());
  if (after > before) { queueCelebration({ kind: "level", level: after }); store.lvPeak = after; }
  return PTS[kind];
}
