/** Click actions on the on-screen keyboard of typing practice. */
import { applyTone } from "../../lang/tone.js";
import { setTyped, typedEl } from "../dom.js";

/** The cursor position / selection of the typing box (the end of the text when the browser reports none). */
function selection(el) {
  const start = el.selectionStart == null ? el.value.length : el.selectionStart;
  const end = el.selectionEnd == null ? start : el.selectionEnd;
  return { start, end };
}

export const keyboard = {
  /** Insert a letter such as "ă" at the cursor. */
  ins(el) {
    const box = typedEl();
    if (!box) return;
    const ch = el.getAttribute("data-ch");
    const { start, end } = selection(box);
    setTyped(box.value.slice(0, start) + ch + box.value.slice(end), start + ch.length);
  },
  /** Delete the selection, or the character before the cursor. */
  bksp() {
    const box = typedEl();
    if (!box) return;
    const { start: from, end } = selection(box);
    const start = from === end && from > 0 ? from - 1 : from;
    setTyped(box.value.slice(0, start) + box.value.slice(end), start);
  },
  /** Put a tone mark on the right vowel of the word the cursor is in. */
  tone(el) {
    const box = typedEl();
    if (!box) return;
    const v = box.value, pos = box.selectionStart == null ? v.length : box.selectionStart;
    const left = v.lastIndexOf(" ", pos - 1) + 1;
    let right = v.indexOf(" ", pos);
    if (right < 0) right = v.length;
    const word = applyTone(v.slice(left, right), el.getAttribute("data-t"));
    setTyped(v.slice(0, left) + word + v.slice(right), left + word.length);
  }
};
