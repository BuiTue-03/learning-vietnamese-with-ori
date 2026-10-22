/** Redraw after the audio probe finds files, without losing what the learner is doing. */
import { app } from "./dom.js";
import { state } from "./state.js";
import { render } from "./render.js";

export function refreshAfterProbe() {
  if (state.view === "typing") return;
  const active = document.activeElement;
  const keep = active && active.getAttribute && active.getAttribute("data-act");
  const typing = active && active.id === "q";
  if (typing) { const c = active.selectionStart; render(); const q2 = app.querySelector("#q"); if (q2) { q2.focus(); try { q2.setSelectionRange(c, c); } catch (e) {} } return; }
  render(keep ? "[data-act=" + keep + "]" : null);
}
