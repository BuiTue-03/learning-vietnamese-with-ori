/** The score page after a quiz, a typing round or daily practice. */
import { store } from "../../storage/store.js";
import { lessonById } from "../../lang/data/catalog.js";
import { doneToday } from "../../game/daily.js";
import { esc } from "../../utils/html.js";
import { state } from "../state.js";
import { mascot } from "../components/mascot/index.js";
import { xpSummary } from "../components/xp-summary.js";

export function resultView() {
  const r = state.result, g = xpSummary(), total = r.total;
  const perfect = r.score === total;
  const msg = perfect ? ["Điểm mười!", "Top marks!"] : r.score / total >= 0.7 ? ["Giỏi lắm!", "Well done!"] : ["Cố lên, bạn làm được!", "Keep going, you can do it!"];
  const missed = r.missed.map((it) => "<li><b>" + esc(it.vi) + "</b> — " + esc(it.en) + "</li>").join("");
  const title = r.kind === "daily" ? "Daily practice" : lessonById(r.lesson).title;
  const label = r.kind === "daily" ? "Practice result" : r.kind === "typing" ? "Typing result" : "Quiz result";
  const back = r.kind === "daily" ? '<button class="back" data-act="home">← All lessons</button>' : '<button class="back" data-act="open" data-id="' + r.lesson + '">← Back to lesson</button>';
  return back +
    '<div class="plate"><div class="plate-in"><span class="kick">' + label + '</span><h1 class="plate-title" tabindex="-1">' + esc(title) + '</h1></div></div>' +
    '<div class="res">' + mascot({ pose: perfect || r.score / total >= 0.7 ? "cheer" : "oops", size: 80, hop: perfect }) +
    '<div class="bubble"><b>' + msg[0] + '</b><small>' + msg[1] + '</small></div></div>' +
    '<p class="score">' + r.score + ' / ' + total + '</p>' +
    '<p class="tip">' + (r.xp > 0 ? '<b>+' + r.xp + ' XP</b> earned. ' : 'No new XP this time. Words you already earned points for do not pay again. ') +
    'Level ' + g.lv + ' · ' + g.text + '. Today: ' + doneToday() + ' / ' + store.goal + ' words.</p>' +
    '<div class="bar"><i style="width:' + g.pct + '%"></i></div>' +
    (missed ? '<h2 class="sec">Review these</h2><ul class="missed">' + missed + '</ul>' : '<p class="tip">No mistakes.</p>') +
    '<div class="ctrl"><button class="btn primary" data-act="again">Try again</button><button class="btn" data-act="home">All lessons</button></div>';
}
