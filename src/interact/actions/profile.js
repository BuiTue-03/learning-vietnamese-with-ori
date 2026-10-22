/** Click actions on the Me page and in pop-ups: outfit, colour, settings, reset, dismissing a celebration. */
import { store, save, resetStore } from "../../storage/store.js";
import { clearCelebrations, dismissCelebration } from "../../game/celebrations.js";
import { go, render } from "../render.js";
import { state } from "../state.js";

export const profile = {
  wear(el, id) {
    store.outfit = id;
    save();
    render("[data-id=" + id + "]");
  },
  /** "Wear it" in the new-outfit pop-up: wear it and close the pop-up. */
  wearnew(el, id) {
    store.outfit = id;
    save();
    dismissCelebration();
    render("h1");
  },
  color(el) {
    store.color = Number(el.getAttribute("data-i"));
    save();
    render("[data-act=color][data-i='" + store.color + "']");
  },
  goal(el) {
    store.goal = Number(el.getAttribute("data-n"));
    save();
    render("[data-act=goal][data-n='" + store.goal + "']");
  },
  gate(el) {
    store.gate = el.getAttribute("data-v") === "1";
    save();
    render("[data-act=gate][data-v='" + (store.gate ? 1 : 0) + "']");
  },
  missing() {
    state.onlyMissing = !state.onlyMissing;
    render("[data-act=missing]");
  },
  dismiss() {
    dismissCelebration();
    save();
    render("h1");
  },
  reset1() {
    state.confirmReset = true;
    render("[data-act=reset2]");
  },
  reset0() {
    state.confirmReset = false;
    render("[data-act=reset1]");
  },
  reset2() {
    resetStore();
    clearCelebrations();
    state.confirmReset = false;
    save();
    go("home");
  }
};
