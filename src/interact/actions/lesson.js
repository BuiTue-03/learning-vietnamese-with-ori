/** Click actions on a lesson page: flip and step through cards, mark a word as known, listen, change direction. */
import { store, save } from "../../storage/store.js";
import { lessonById } from "../../lang/data/catalog.js";
import { playRecording } from "../../audio/player.js";
import { checkBadges } from "../../game/badges.js";
import { markToday } from "../../game/daily.js";
import { gain } from "../../game/rewards.js";
import { today, dayAdd } from "../../utils/date.js";
import { render } from "../render.js";
import { state } from "../state.js";
import { say } from "../toast.js";

/** Move to the next (+1) or previous (-1) card, wrapping round, and remember the place. */
export function stepCard(delta) {
  const n = lessonById(state.lesson).items.length;
  state.card = (state.card + delta + n) % n;
  state.flipped = false;
  store.resume = { lesson: state.lesson, card: state.card };
  save();
}

export const lesson = {
  mode(el) {
    store.mode = el.getAttribute("data-m");
    save();
    state.flipped = false;
    render("[data-m=" + store.mode + "]");
  },
  flip() {
    state.flipped = !state.flipped;
    render("[data-act=flip]");
  },
  prev() {
    stepCard(-1);
    render("[data-act=prev]");
  },
  next() {
    stepCard(1);
    render("[data-act=next]");
  },
  known() {
    const it = lessonById(state.lesson).items[state.card];
    if (store.known[it.id]) delete store.known[it.id];
    else {
      store.known[it.id] = true;
      const earned = gain("known", it.id);
      if (!store.srs[it.id]) store.srs[it.id] = { b: 1, d: dayAdd(today(), 1) };
      markToday(it.id);
      if (earned) say("+" + earned + " XP");
    }
    checkBadges();
    save();
    render("[data-act=known]");
  },
  pron(el) {
    state.pron = Number(el.getAttribute("data-i"));
    render("[data-act=pron][data-i='" + state.pron + "']");
  },
  play(el, id) { playRecording(id, say); }
};
