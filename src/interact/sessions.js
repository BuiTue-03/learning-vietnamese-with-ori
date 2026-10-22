/** Starting and finishing a lesson, a quiz, a typing round or daily practice. */
import { store, save } from "../storage/store.js";
import { lessonById } from "../lang/data/catalog.js";
import { makeQuestions } from "../lang/questions.js";
import { typingMatches } from "../lang/typing.js";
import { fold, normAns } from "../lang/text.js";
import { audioOK } from "../audio/availability.js";
import { checkBadges } from "../game/badges.js";
import { dailyItems, srsUpdate } from "../game/srs.js";
import { markToday } from "../game/daily.js";
import { logSession } from "../game/history.js";
import { gain } from "../game/rewards.js";
import { touchDay } from "../game/streak.js";
import { shuffle } from "../utils/random.js";
import { typedEl } from "./dom.js";
import { render, go } from "./render.js";
import { state } from "./state.js";
import { say } from "./toast.js";

export function openLesson(id, card) {
  const l = lessonById(id);
  state.lesson = id;
  state.card = card != null ? Math.max(0, Math.min(l.items.length - 1, card)) : (store.resume.lesson === id ? Math.min(store.resume.card, l.items.length - 1) : 0);
  state.flipped = false;
  store.resume = { lesson: id, card: state.card };
  save();
  go("lesson");
}
export function startQuiz(lessonId) {
  const l = lessonById(lessonId);
  const items = shuffle(l.items).slice(0, 8);
  state.quiz = { kind: "quiz", lesson: lessonId, qs: makeQuestions(items, { mode: store.mode, ok: audioOK }), i: 0, picked: null, score: 0, missed: [], xp: 0, gained: 0 };
  go("quiz");
}
export function startDaily() {
  const items = dailyItems();
  if (!items) { say("Learn a few words first."); return; }
  state.quiz = { kind: "daily", lesson: "", qs: makeQuestions(items, { mode: store.mode, ok: audioOK }), i: 0, picked: null, score: 0, missed: [], xp: 0, gained: 0 };
  go("quiz");
}
export function startTyping(lessonId) {
  const l = lessonById(lessonId);
  const items = shuffle(l.items).slice(0, 8);
  state.typing = { lesson: lessonId, items, i: 0, val: "", status: null, tries: 0, score: 0, missed: [], xp: 0, gained: 0 };
  go("typing", "#typed");
}
export function finishSession(kind, lessonId, score, total, missed, xp) {
  if (kind === "quiz" && (!store.best[lessonId] || score / total > store.best[lessonId].s / store.best[lessonId].t)) store.best[lessonId] = { s: score, t: total };
  if (kind === "quiz" && score === total && total >= 5) xp += gain("perfect", lessonId);
  touchDay(); logSession(kind, lessonId, score, total);
  checkBadges(); save();
  state.result = { kind, lesson: lessonId, score, total, missed, xp };
  go("result");
}

export function checkTyped() {
  const t = state.typing, it = t.items[t.i];
  const el = typedEl();
  if (el) t.val = el.value;
  if (!normAns(t.val)) { say("Type your answer first."); return; }
  if (typingMatches(it, t.val)) {
    t.status = "right"; t.score++;
    t.gained = gain("typing", it.id); t.xp += t.gained;
    srsUpdate(it, true); markToday(it.id);
  } else {
    t.tries++;
    if (t.tries >= 2) {
      t.status = "revealed"; t.missed.push(it); srsUpdate(it, false); markToday(it.id);
    } else t.status = fold(normAns(t.val)) === fold(normAns(it.vi)) ? "close" : "wrong";
  }
  save();
  render(t.status === "right" || t.status === "revealed" ? "[data-act=nextt]" : "#typed");
}
