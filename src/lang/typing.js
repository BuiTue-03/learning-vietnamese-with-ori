/** Checking a typed answer. */
import { lessonById } from "./data/catalog.js";
import { normAns, shortEn } from "./text.js";

/**
 * True when `val` is the item's Vietnamese, or the Vietnamese of another item in the same lesson that has the same
 * English (so "older brother" accepts both anh and anh trai). Either tone-mark style is accepted (see unifyTone).
 */
export function typingMatches(it, val) {
  const v = normAns(val);
  if (v === normAns(it.vi)) return true;
  const l = lessonById(it.lesson), key = normAns(shortEn(it.en));
  return !!l && l.items.some((o) => o !== it && normAns(shortEn(o.en)) === key && normAns(o.vi) === v);
}
