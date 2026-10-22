/** How many XP each kind of success is worth, and the total the learner has earned. */
import { store } from "../storage/store.js";
import { LESSONS } from "../lang/data/catalog.js";
import { countKeys } from "../utils/collections.js";

/** Each id earns once per kind, so repeating a quiz cannot farm points. */
export const PTS = { known: 3, quiz: 10, typing: 10, review: 5, perfect: 20, goal: 20 };

export function xpTotal() {
  return PTS.known * countKeys(store.xpKnown) + PTS.quiz * countKeys(store.xpQuiz) + PTS.typing * countKeys(store.xpTyping) +
    PTS.review * countKeys(store.xpReview) + PTS.perfect * countKeys(store.perfect) + PTS.goal * countKeys(store.goalDays);
}

/** The XP available from learning every word (known + quiz, plus typing where a lesson has it) and one perfect quiz per lesson. */
export function learnableXp() {
  let t = 0;
  LESSONS.forEach((l) => { t += l.items.length * (PTS.known + PTS.quiz + (l.typing ? PTS.typing : 0)) + PTS.perfect; });
  return t;
}
