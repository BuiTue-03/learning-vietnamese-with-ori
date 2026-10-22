/** The gentle "words to review" reminder above a lesson. */
import { store } from "../../storage/store.js";
import { dueItems } from "../../game/srs.js";
import { today } from "../../utils/date.js";

export function reviewBanner() {
  const due = dueItems().length;
  if (!store.gate || due === 0 || store.gateSkip === today()) return "";
  return '<div class="banner" role="region" aria-label="Review reminder"><span>' + due + ' word' + (due === 1 ? "" : "s") + ' to review. A quick practice first helps them stick.</span>' +
    '<span class="ctrl"><button class="btn small primary" data-act="daily">Practice now</button><button class="btn small" data-act="skipgate">Not now</button></span></div>';
}
