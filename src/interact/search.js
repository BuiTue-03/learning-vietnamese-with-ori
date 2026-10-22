/** Live search on the home screen. */
import { app } from "./dom.js";
import { state } from "./state.js";
import { resultsHtml } from "./components/search-results.js";

/** Show the matches (or the lesson list when the box is empty) without redrawing the whole page. */
export function updateSearch() {
  const r = app.querySelector("#results"), b = app.querySelector("#browse");
  if (!r || !b) return;
  const q = state.query.trim();
  b.hidden = !!q; r.hidden = !q;
  r.innerHTML = q ? resultsHtml(q) : "";
}
