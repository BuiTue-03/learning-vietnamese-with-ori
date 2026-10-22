/** One typing-practice prompt, the keyboard, and the feedback. */
import { PRAISE, COMFORT } from "../../lang/data/encouragement.js";
import { shortEn } from "../../lang/text.js";
import { hasAudio } from "../../audio/availability.js";
import { esc } from "../../utils/html.js";
import { state } from "../state.js";
import { keyboardHtml } from "../components/keyboard.js";
import { mascot } from "../components/mascot/index.js";
import { playBtn } from "../components/play-button.js";

export function typingView() {
  const t = state.typing, it = t.items[t.i], fin = t.status === "right" || t.status === "revealed";
  let fb = "";
  if (t.status === "right") fb = '<div class="fb">' + mascot({ pose: "cheer", size: 56, hop: true }) + '<div class="bubble ok" role="status"><div><div class="big">' + PRAISE[t.i % PRAISE.length][0] + '</div><small>' + PRAISE[t.i % PRAISE.length][1] + '</small></div>' +
    '<div><span class="vi">' + esc(it.vi) + '</span></div>' + (t.gained ? '<div class="xp">+' + t.gained + ' XP</div>' : "") + '<button class="btn primary" data-act="nextt">' + (t.i + 1 === t.items.length ? "See results" : "Next") + '</button></div></div>';
  else if (t.status === "revealed") fb = '<div class="fb">' + mascot({ pose: "oops", size: 56 }) + '<div class="bubble bad" role="status"><div><div class="big">' + COMFORT[t.i % COMFORT.length][0] + '</div><small>' + COMFORT[t.i % COMFORT.length][1] + '</small></div>' +
    '<div>The answer is <span class="vi">' + esc(it.vi) + '</span>.</div><button class="btn primary" data-act="nextt">' + (t.i + 1 === t.items.length ? "See results" : "Next") + '</button></div></div>';
  else if (t.status === "close") fb = '<div class="fb">' + mascot({ pose: "wave", size: 56 }) + '<div class="bubble" role="status"><b>Almost.</b> The letters are right. Check the tone marks and try again.</div></div>';
  else if (t.status === "wrong") fb = '<div class="fb">' + mascot({ pose: "oops", size: 56 }) + '<div class="bubble" role="status"><b>Not quite.</b> Try once more.</div></div>';
  return '<div class="qhead"><button class="back" data-act="open" data-id="' + t.lesson + '">← Back to lesson</button><span class="count">Typing · ' + (t.i + 1) + ' of ' + t.items.length + '</span></div>' +
    '<div class="bar"><i style="width:' + Math.round((t.i + (fin ? 1 : 0)) / t.items.length * 100) + '%"></i></div>' +
    '<h1 class="prompt" tabindex="-1">Type this in Vietnamese: “' + esc(shortEn(it.en)) + '”</h1>' +
    (hasAudio(it.id) ? '<div class="ctrl">' + playBtn(it.id) + '</div>' : "") +
    '<input id="typed" class="typed" type="text" lang="vi" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Your answer in Vietnamese" value="' + esc(t.val) + '"' + (fin ? " disabled" : "") + '>' +
    (fin ? "" : keyboardHtml() + '<div class="ctrl"><button class="btn primary" data-act="check">Check</button></div>') + fb;
}
