/** A dialogue tile on the home screen. */
import { esc } from "../../utils/html.js";

export function dialogueCard(d) {
  return '<button class="lesson" data-act="dialogue" data-id="' + d.id + '">' +
    '<div class="plate"><div class="plate-in"><span class="kick">Dialogue · ' + d.lines.length + ' lines</span>' +
    '<h3 class="plate-title">' + esc(d.title) + '</h3></div></div>' +
    '<div class="meta"><span>' + esc(d.sub) + '</span></div></button>';
}
