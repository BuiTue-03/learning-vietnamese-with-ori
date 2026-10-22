/** One quiz question, and the feedback after the answer. */
import { lessonById } from "../../lang/data/catalog.js";
import { PRAISE, COMFORT } from "../../lang/data/encouragement.js";
import { hasAudio } from "../../audio/availability.js";
import { esc } from "../../utils/html.js";
import { state } from "../state.js";
import { mascot } from "../components/mascot/index.js";
import { playBtn } from "../components/play-button.js";

const LETTERS = ["A", "B", "C", "D"];

export function quizView() {
  const q = state.quiz, cur = q.qs[q.i], answered = q.picked !== null;
  const opts = cur.options.map((o, i) => {
    let cls = "opt", sym = LETTERS[i];
    if (answered) {
      if (o.correct) { cls += " ok"; sym = "✓"; }
      else if (i === q.picked) { cls += " bad"; sym = "✗"; }
    }
    return '<button class="' + cls + '" data-act="answer" data-i="' + i + '"' + (answered ? " disabled" : "") + '><span class="ltr">' + sym + '</span><span>' + esc(o.label) + '</span></button>';
  }).join("");
  let fb = "";
  if (answered) {
    const good = cur.options[q.picked].correct;
    const msg = good ? PRAISE[q.i % PRAISE.length] : COMFORT[q.i % COMFORT.length];
    const it = cur.item;
    const meaning = lessonById(it.lesson).kind === "letters" ? '<span class="vi">' + esc(it.vi) + '</span> is read “' + esc(it.name) + '”, as in ' + esc(it.word) + ' (' + esc(it.wordEn) + ').' : '<span class="vi">' + esc(it.vi) + '</span> means ' + esc(it.en) + '.';
    fb = '<div class="fb">' + mascot({ pose: good ? "cheer" : "oops", size: 56, hop: good }) +
      '<div class="bubble ' + (good ? "ok" : "bad") + '" role="status"><div><div class="big">' + msg[0] + '</div><small>' + msg[1] + '</small></div>' +
      '<div>' + meaning + '</div>' +
      (q.gained && good ? '<div class="xp">+' + q.gained + ' XP</div>' : '') +
      (hasAudio(it.id) ? playBtn(it.id) : "") +
      '<button class="btn primary" data-act="nextq">' + (q.i + 1 === q.qs.length ? "See results" : "Next question") + '</button></div></div>';
  }
  const back = q.kind === "daily" ? '<button class="back" data-act="home">← Leave practice</button>' : '<button class="back" data-act="open" data-id="' + q.lesson + '">← Back to lesson</button>';
  return '<div class="qhead">' + back + '<span class="count">' + (q.kind === "daily" ? "Daily practice · " : "") + 'Question ' + (q.i + 1) + ' of ' + q.qs.length + '</span></div>' +
    '<div class="bar"><i style="width:' + Math.round((q.i + (answered ? 1 : 0)) / q.qs.length * 100) + '%"></i></div>' +
    '<h1 class="prompt" tabindex="-1">' + esc(cur.prompt) + '</h1>' +
    (cur.audioId ? '<div class="ctrl">' + playBtn(cur.audioId, "primary") + '</div>' : "") +
    '<div class="opts">' + opts + '</div>' + fb;
}
