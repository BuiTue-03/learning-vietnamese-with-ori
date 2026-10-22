/** The list of words that match the search box. */
import { ALL, lessonById } from "../../lang/data/catalog.js";
import { fold } from "../../lang/text.js";
import { esc } from "../../utils/html.js";
import { playBtn } from "./play-button.js";

export function resultsHtml(q) {
  const fq = fold(q.trim()), lq = q.trim().toLowerCase();
  const hits = ALL.filter((it) => fold(it.vi).indexOf(fq) >= 0 || it.en.toLowerCase().indexOf(lq) >= 0 || (it.word && fold(it.word).indexOf(fq) >= 0));
  if (!hits.length) return '<div class="none">Nothing found for “' + esc(q.trim()) + '”.</div>';
  return hits.slice(0, 40).map((it) => {
    const l = lessonById(it.lesson);
    return '<div class="hit"><button class="link" data-act="goto" data-id="' + it.id + '"><b>' + esc(it.vi) + '</b> — ' + esc(it.en) + '<br><span class="tag">' + esc(l.title) + '</span></button>' + playBtn(it.id) + '</div>';
  }).join("") + (hits.length > 40 ? '<div class="none">Showing 40 of ' + hits.length + '. Type more letters to narrow it down.</div>' : "");
}
