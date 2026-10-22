/**
 * Click actions that move around: open a lesson, go home, open the Me page, expand a group...
 * Every action is `(element, id) => void`; `id` is the clicked element's data-id.
 */
import { itemById, lessonById } from "../../lang/data/catalog.js";
import { openLesson } from "../sessions.js";
import { go, render } from "../render.js";
import { state } from "../state.js";

export const navigation = {
  open(el, id) {
    const card = el.getAttribute("data-card");
    openLesson(id, card != null ? Number(card) : undefined);
  },
  goto(el, id) {
    const item = itemById(id), lesson = lessonById(item.lesson);
    openLesson(lesson.id, lesson.items.indexOf(item));
    state.flipped = true;
    render("h1");
  },
  grp(el, id) {
    state.closed[id] = !state.closed[id];
    render("[data-act=grp][data-id=" + id + "]");
  },
  home() {
    state.confirmReset = false;
    go("home");
  },
  author() { go("author"); },
  me() { go("me"); },
  dialogue(el, id) {
    state.dlg = id;
    go("dialogue");
  },
  toggleen() {
    state.showEn = !state.showEn;
    render("[data-act=toggleen]");
  }
};
