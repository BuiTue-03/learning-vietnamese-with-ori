/** Click actions during practice: start a quiz, typing round or daily practice, answer, go to the next question. */
import { store, save } from "../../storage/store.js";
import { srsUpdate } from "../../game/srs.js";
import { markToday } from "../../game/daily.js";
import { gain } from "../../game/rewards.js";
import { today } from "../../utils/date.js";
import { checkTyped, finishSession, startDaily, startQuiz, startTyping } from "../sessions.js";
import { go, render } from "../render.js";
import { state } from "../state.js";

export const practice = {
  quiz() { startQuiz(state.lesson); },
  typing() { startTyping(state.lesson); },
  daily() { startDaily(); },
  skipgate() {
    store.gateSkip = today();
    save();
    render("h1");
  },
  again() {
    const r = state.result;
    if (r.kind === "daily") startDaily();
    else if (r.kind === "typing") startTyping(r.lesson);
    else startQuiz(r.lesson);
  },
  answer(el) {
    const q = state.quiz;
    if (q.picked !== null) return;
    q.picked = Number(el.getAttribute("data-i"));
    const cur = q.qs[q.i], item = cur.item;
    q.gained = 0;
    if (cur.options[q.picked].correct) {
      q.score++;
      const first = gain("quiz", item.id);
      const review = q.kind === "daily" ? (first ? 0 : gain("review", item.id + "@" + today())) : 0;
      q.gained = first || review;
      q.xp += q.gained;
      srsUpdate(item, true);
    } else {
      q.missed.push(item);
      srsUpdate(item, false);
    }
    markToday(item.id);
    save();
    render("[data-act=nextq]");
  },
  nextq() {
    const q = state.quiz;
    if (q.i + 1 < q.qs.length) {
      q.i++;
      q.picked = null;
      q.gained = 0;
      go("quiz");
    } else finishSession(q.kind, q.lesson, q.score, q.qs.length, q.missed, q.xp);
  },
  check() { checkTyped(); },
  nextt() {
    const t = state.typing;
    if (t.i + 1 < t.items.length) {
      t.i++;
      t.val = "";
      t.status = null;
      t.tries = 0;
      t.gained = 0;
      go("typing", "#typed");
    } else finishSession("typing", t.lesson, t.score, t.items.length, t.missed, t.xp);
  }
};
