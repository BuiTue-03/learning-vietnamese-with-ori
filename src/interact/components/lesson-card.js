/** A lesson tile on the home screen. */
import { store } from "../../storage/store.js";
import { GROUPS } from "../../lang/data/groups.js";
import { learned } from "../../game/progress.js";
import { esc } from "../../utils/html.js";

export function lessonCard(l) {
  const k = l.items.filter(learned).length, t = l.items.length;
  const b = store.best[l.id], g = GROUPS.filter((x) => x.id === l.group)[0];
  return '<button class="lesson" data-act="open" data-id="' + l.id + '">' +
    '<div class="plate"><div class="plate-in"><span class="kick">' + esc(g.en) + ' · ' + t + ' ' + l.unit + '</span>' +
    '<h3 class="plate-title">' + esc(l.title) + '</h3></div></div>' +
    '<div class="meta"><span>' + esc(l.sub) + '</span><span>' + k + '/' + t + ' learned' + (b ? ' · best quiz ' + b.s + '/' + b.t : '') + '</span></div>' +
    '<div class="bar"><i style="width:' + Math.round(k / t * 100) + '%"></i></div></button>';
}
