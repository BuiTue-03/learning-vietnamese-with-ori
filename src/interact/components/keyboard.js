/** The on-screen keyboard for Vietnamese letters and tone marks (typing practice). */
import { TONE_MARK } from "../../lang/tone.js";

export function keyboardHtml() {
  const letters = ["ă", "â", "đ", "ê", "ô", "ơ", "ư"];
  const tones = [...Object.entries(TONE_MARK), ["ngang", ""]];
  return '<div class="kbd" role="group" aria-label="Vietnamese keyboard">' +
    '<div class="krow">' + letters.map((c) => '<button class="key" data-act="ins" data-ch="' + c + '" aria-label="Insert ' + c + '">' + c + '</button>').join("") +
    '<button class="key" data-act="bksp" aria-label="Backspace">⌫</button></div>' +
    '<div class="krow">' + tones.map((t) => '<button class="key tone" data-act="tone" data-t="' + t[0] + '" aria-label="Tone mark ' + t[0] + ' on the current word">' + (t[1] ? "◌" + t[1] : "–") + '<small>' + t[0] + '</small></button>').join("") + '</div>' +
    '<p class="tip">Tap a letter, then a tone. The tone goes on the right vowel of the word you are typing.</p></div>';
}
