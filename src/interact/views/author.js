/** The "Audio checklist" page for the author: which recordings exist, and what to review. */
import { AUDIO_ALL, DIALOGUES, lessonById } from "../../lang/data/catalog.js";
import { hasAudio } from "../../audio/availability.js";
import { esc } from "../../utils/html.js";
import { state } from "../state.js";
import { CHECKLIST } from "./author-checklist.js";

export function authorView() {
  const have = AUDIO_ALL.filter((i) => hasAudio(i.id)).length;
  let rows = "";
  function block(title, list) {
    const got = list.filter((i) => hasAudio(i.id)).length;
    const body = list.filter((i) => !state.onlyMissing || !hasAudio(i.id)).map((i) => {
      const y = hasAudio(i.id);
      return "<tr><td><code>audio/" + i.id + ".mp3</code></td><td>" + esc(i.vi) + "</td><td>" + esc(i.en) + '</td><td class="st ' + (y ? "y" : "n") + '">' + (y ? "Recorded" : "Missing") + "</td></tr>";
    }).join("");
    if (body) rows += '<tr class="grp"><td colspan="4">' + esc(title) + " · " + got + "/" + list.length + "</td></tr>" + body;
  }
  const order = ["b0", "al", "fam", "b1", "soc", "in", "rp", "b2", "fd1", "fd2", "fd3", "fd4", "hl1", "hl2", "hl3", "hl4", "em", "co", "b3", "nm", "b4", "tr", "ht", "sv", "sh", "tm", "dy", "wt", "qw", "pt", "cl", "lc", "vb", "aj", "ct", "jb", "pl", "hn", "cs", "hm", "wk", "sc", "hb", "fs"];
  order.forEach((id) => { const l = lessonById(id); block(l.title + " (" + l.sub + ")", l.items); });
  DIALOGUES.forEach((d) => { block("Dialogue: " + d.title, d.lines); });
  return '<button class="back" data-act="home">← All lessons</button>' +
    '<h1 class="brand" tabindex="-1">Audio checklist<small>For the author. Learners do not need this page.</small></h1>' +
    '<p class="tally"><b>' + have + '</b> of ' + AUDIO_ALL.length + ' recorded</p>' +
    '<p class="tip">Record one phrase per file, as MP3, at normal speed, named exactly as shown, with the silence at both ends trimmed. For letters, record the letter name. The page checks for the files each time it opens, and the Listen buttons switch on by themselves once a file exists. Suggested order is the order of the groups below.</p>' +
    '<div class="ctrl"><button class="btn small" data-act="missing" aria-pressed="' + state.onlyMissing + '">' + (state.onlyMissing ? "Show everything" : "Show only missing") + '</button></div>' +
    '<h2 class="sec">Check with a native speaker before release</h2>' +
    '<ul class="checks">' + CHECKLIST.map((c) => "<li>" + c + "</li>").join("") + '</ul>' +
    '<div class="scroll"><table><thead><tr><th>File</th><th>Vietnamese</th><th>English</th><th>Status</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
}
