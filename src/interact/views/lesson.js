/** A lesson: flashcards, the list of all items, cultural notes. */
import { store } from "../../storage/store.js";
import { lessonById } from "../../lang/data/catalog.js";
import { GROUPS } from "../../lang/data/groups.js";
import { TONES } from "../../lang/data/tones.js";
import { learned } from "../../game/progress.js";
import { esc } from "../../utils/html.js";
import { state } from "../state.js";
import { modeToggle } from "../components/mode-toggle.js";
import { playBtn } from "../components/play-button.js";
import { pronounBlock } from "../components/pronoun-block.js";
import { reviewBanner } from "../components/review-banner.js";

export function lessonView() {
  const l = lessonById(state.lesson);
  const it = l.items[state.card];
  const g = GROUPS.filter((x) => x.id === l.group)[0];
  const letters = l.kind === "letters";
  let face;
  if (letters) {
    face = !state.flipped
      ? '<div class="face"><div class="word">' + esc(it.vi) + '</div><div class="hint">Tap the card to see how it is read</div></div>'
      : '<div class="face"><div class="gloss">Read: ' + esc(it.name) + '</div><div class="ex"><div class="vi">' + esc(it.word) + '</div><div class="en">' + esc(it.wordEn) + '</div></div></div>';
  } else if ((store.mode === "vi2en") === !state.flipped) {
    face = '<div class="face"><div class="word">' + esc(it.vi) + '</div><div class="hint">Tap the card to see the ' + (store.mode === "vi2en" ? "meaning" : "answer") + '</div></div>';
  } else {
    const tone = it.tone ? TONES[it.tone] : null;
    const head = store.mode === "vi2en" ? '<div class="gloss">' + esc(it.en) + '</div>' : '<div class="word">' + esc(it.vi) + '</div>';
    face = '<div class="face">' + head +
      (tone ? '<span class="chip">' + esc(it.tone) + ' · ' + esc(tone.label) + ' · ' + esc(tone.mark) + '</span><div class="how">' + esc(tone.how) + '</div>' : '') +
      (it.note ? '<div class="note">' + esc(it.note) + '</div>' : '') +
      (it.ex ? '<div class="ex"><div class="vi">' + esc(it.ex[0]) + '</div><div class="en">' + esc(it.ex[1]) + '</div></div>' : '') + '</div>';
  }
  if (!letters && store.mode === "en2vi" && !state.flipped) {
    face = '<div class="face"><div class="gloss">' + esc(it.en) + '</div><div class="hint">Tap the card to see the Vietnamese</div></div>';
  }
  const isKnown = !!store.known[it.id];
  const rows = l.items.map((x) => {
    const k = learned(x);
    return '<li><span class="dot ' + (k ? "k" : "") + '" role="img" aria-label="' + (k ? "learned" : "not yet learned") + '">' + (k ? "✓" : "") + '</span>' +
      '<div><div class="pv">' + esc(x.vi) + '</div><div class="pe">' + esc(x.en) + '</div></div>' + playBtn(x.id) + '</li>';
  }).join("");
  const cult = (l.culture || []).map((c) => '<aside class="cult"><span class="k2">Cultural note</span><b>' + esc(c.t) + '</b><p>' + esc(c.x) + '</p></aside>').join("");
  return '<button class="back" data-act="home">← All lessons</button>' + reviewBanner() +
    '<div class="plate big"><div class="plate-in"><span class="kick">' + esc(g.en) + '</span><h1 class="plate-title" tabindex="-1">' + esc(l.title) + '</h1></div></div>' +
    '<p class="sub">' + esc(l.sub) + '</p><p class="tip">' + esc(l.tip) + '</p>' +
    (letters ? "" : '<div class="toolbar">' + modeToggle() + '</div>') +
    '<button class="flash" data-act="flip" aria-label="Flashcard ' + (state.card + 1) + ' of ' + l.items.length + '. Tap to flip.">' + face + '</button>' +
    '<div class="ctrl"><button class="btn" data-act="prev" aria-label="Previous card">←</button>' +
    '<span class="count">' + (state.card + 1) + ' / ' + l.items.length + '</span>' +
    '<button class="btn" data-act="next" aria-label="Next card">→</button></div>' +
    '<div class="ctrl">' + playBtn(it.id) +
    '<button class="btn ' + (isKnown ? "on" : "") + '" data-act="known" aria-pressed="' + isKnown + '">' + (isKnown ? "✓ Known" : "Mark as known") + '</button></div>' +
    '<div class="ctrl"><button class="btn primary" data-act="quiz">Take the quiz</button>' +
    (l.typing ? '<button class="btn" data-act="typing">Typing practice</button>' : "") + '</div>' +
    (l.pronoun ? pronounBlock() : "") + cult +
    '<h2 class="sec">All ' + l.unit + '</h2><ul class="phrases">' + rows + '</ul>';
}
