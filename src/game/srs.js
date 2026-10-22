/**
 * Spaced repetition (a Leitner box). Each word sits in box 1..5; the gap before it is due again is 1, 2, 4, 8, 16 days.
 * A right answer on a due word moves it up a box; a wrong answer sends it back to box 0, due today.
 */
import { store } from "../storage/store.js";
import { ALL } from "../lang/data/catalog.js";
import { today, dayAdd } from "../utils/date.js";
import { shuffle } from "../utils/random.js";
import { learned } from "./progress.js";

const STEPS = [0, 1, 2, 4, 8, 16];
export function srsUpdate(it, correct) {
  const e = store.srs[it.id], t = today();
  if (!correct) { store.srs[it.id] = { b: 0, d: t }; return; }
  if (!e) { store.srs[it.id] = { b: 1, d: dayAdd(t, STEPS[1]) }; return; }
  if (e.d > t) return;
  const b = Math.min(e.b + 1, 5);
  store.srs[it.id] = { b, d: dayAdd(t, STEPS[b]) };
}
export function dueItems() {
  const t = today();
  return ALL.filter((it) => store.srs[it.id] && store.srs[it.id].d <= t)
    .sort((a, b) => { const x = store.srs[a.id], y = store.srs[b.id]; return x.b - y.b || (x.d < y.d ? -1 : x.d > y.d ? 1 : 0); });
}
export function dailyItems(rng) {
  const due = dueItems(), goal = store.goal;
  if (due.length >= goal) return due.slice(0, goal);
  const rest = shuffle(ALL.filter((it) => learned(it) && due.indexOf(it) < 0), rng);
  const out = due.concat(rest.slice(0, goal - due.length));
  return out.length ? out : null;
}
