/** The app's root element and the typing input. */
import { state } from "./state.js";

export const app = document.getElementById("app");

export const typedEl = () => app.querySelector("#typed");

/** Put `v` in the typing box, remember it, and place the cursor at `pos`. */
export function setTyped(v, pos) {
  const el = typedEl();
  if (!el) return;
  el.value = v; state.typing.val = v;
  el.focus();
  try { el.setSelectionRange(pos, pos); } catch (e) {}
}
