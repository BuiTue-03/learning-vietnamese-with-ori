/** The daily goal: how many words were practised today. */
import { store } from "../storage/store.js";
import { countKeys } from "../utils/collections.js";
import { today } from "../utils/date.js";
import { gain } from "./rewards.js";
import { queueCelebration } from "./celebrations.js";

export function doneToday() { return store.dayItems.d === today() ? countKeys(store.dayItems.ids) : 0; }
export function markToday(id) {
  const t = today();
  if (store.dayItems.d !== t) store.dayItems = { d: t, ids: {} };
  store.dayItems.ids[id] = true;
  if (countKeys(store.dayItems.ids) >= store.goal && !store.goalDays[t]) {
    gain("goal", t);
    queueCelebration({ kind: "goal", n: store.goal });
  }
}
