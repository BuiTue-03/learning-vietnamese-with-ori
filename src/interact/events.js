/**
 * Wires the page's events. One click listener finds the nearest element with a data-act attribute and runs the
 * action of that name (see interact/actions/). The views only produce HTML; they never attach handlers.
 */
import { store, save, playerName } from "../storage/store.js";
import { hasCelebration, dismissCelebration } from "../game/celebrations.js";
import { app } from "./dom.js";
import { render } from "./render.js";
import { updateSearch } from "./search.js";
import { checkTyped } from "./sessions.js";
import { state } from "./state.js";
import { keyboard } from "./actions/keyboard.js";
import { lesson, stepCard } from "./actions/lesson.js";
import { navigation } from "./actions/navigation.js";
import { practice } from "./actions/practice.js";
import { profile } from "./actions/profile.js";

const ACTIONS = { ...navigation, ...lesson, ...practice, ...keyboard, ...profile };

function onInput(e) {
  if (e.target.id === "uname") {
    store.name = String(e.target.value).slice(0, 20);
    save();
    const label = document.getElementById("pname");
    if (label) label.textContent = playerName();
  }
  if (e.target.id === "typed" && state.typing) state.typing.val = e.target.value;
  if (e.target.id === "q") {
    state.query = e.target.value;
    updateSearch();
  }
}

/** Keep the typing box focused when an on-screen key is pressed, so the keyboard does not pop up and close. */
function keepFocus(e) {
  if (e.target.closest && e.target.closest(".key")) e.preventDefault();
}

function onClick(e) {
  const el = e.target.closest("[data-act]");
  if (!el) return;
  const act = el.getAttribute("data-act");
  if (Object.hasOwn(ACTIONS, act)) ACTIONS[act](el, el.getAttribute("data-id"));
}

function onKeydown(e) {
  const inRound = state.view === "quiz" || state.view === "typing";
  if (e.key === "Escape" && hasCelebration() && !inRound) {
    dismissCelebration();
    render("h1");
    return;
  }
  if (e.key === "Enter" && e.target && e.target.id === "typed" && state.typing && state.view === "typing") {
    e.preventDefault();
    checkTyped();
    return;
  }
  if (state.view !== "lesson" || hasCelebration()) return;
  if (e.target && (e.target.id === "q" || e.target.tagName === "INPUT")) return;
  if (e.key === "ArrowRight") { stepCard(1); render(); }
  if (e.key === "ArrowLeft") { stepCard(-1); render(); }
}

export function bindEvents() {
  app.addEventListener("input", onInput);
  app.addEventListener("mousedown", keepFocus);
  app.addEventListener("pointerdown", keepFocus);
  app.addEventListener("click", onClick);
  document.addEventListener("keydown", onKeydown);
}
