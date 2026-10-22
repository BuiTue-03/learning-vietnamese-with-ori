/** Drawing the current screen into the page. */
import { app } from "./dom.js";
import { state } from "./state.js";
import { VIEWS } from "./views/index.js";
import { modalHtml } from "./components/celebration-modal.js";

/** Redraw the current view and its pop-up, then focus `focusSel` (or the dialog's button when a pop-up is open). */
export function render(focusSel) {
  const view = VIEWS[state.view] || VIEWS.author;
  app.innerHTML = view() + modalHtml();
  const el = app.querySelector(".dialog [data-act=dismiss]") || (focusSel ? app.querySelector(focusSel) : null);
  if (el) el.focus();
}

/** Switch to another view, redraw, and scroll to the top. */
export function go(view, focusSel) {
  state.view = view;
  render(focusSel || "h1");
  window.scrollTo(0, 0);
}
