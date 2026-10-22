/** The "Who am I talking to?" picker in the pronoun lesson. */
import { PRONOUN_PAIRS } from "../../lang/data/pronouns.js";
import { esc } from "../../utils/html.js";
import { state } from "../state.js";

export function pronounBlock() {
  const p = PRONOUN_PAIRS[state.pron];
  return '<h2 class="sec">Who am I talking to?</h2><div class="pick" role="group" aria-label="Choose who you are talking to">' +
    PRONOUN_PAIRS.map((x, i) => '<button data-act="pron" data-i="' + i + '" aria-pressed="' + (state.pron === i) + '">' + esc(x.rel) + '</button>').join("") + '</div>' +
    '<div class="pron-out" role="status"><span>Call them <b>' + esc(p.you) + '</b></span><span>Call yourself <b>' + esc(p.me) + '</b></span></div>' +
    '<p class="tip">A rough guide. Real choices depend on region, closeness and context. If you are unsure, listen to what people call you and mirror it.</p>';
}
