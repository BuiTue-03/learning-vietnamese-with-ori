/** Where a tone mark goes on a Vietnamese syllable (used by the on-screen keyboard). */

const VOWELS = "aăâeêioôơuưy";
const MODS = "ăâêôơư";
export const TONE_MARK = { "huyền": "\u0300", "sắc": "\u0301", "hỏi": "\u0309", "ngã": "\u0303", "nặng": "\u0323" };
export function stripTone(s) { return s.normalize("NFD").replace(/[\u0300\u0301\u0309\u0303\u0323]/g, "").normalize("NFC"); }
export function applyTone(word, tone) {
  const w = stripTone(word);
  if (!TONE_MARK[tone]) return w;
  const ch = Array.from(w);
  const lo = ch.map((c) => c.toLowerCase());
  const v = lo.map((c) => VOWELS.indexOf(c) >= 0);
  if (lo[0] === "q" && lo[1] === "u") v[1] = false;
  if (lo[0] === "g" && lo[1] === "i" && v.slice(2).some(Boolean)) v[1] = false;
  const s = v.indexOf(true);
  if (s < 0) return w;
  let e = s;
  while (e + 1 < v.length && v[e + 1]) e++;
  const run = [];
  for (let i = s; i <= e; i++) run.push(i);
  const modded = run.filter((i) => MODS.indexOf(lo[i]) >= 0);
  let pick;
  if (modded.length) pick = modded[modded.length - 1];
  else if (run.length === 1) pick = run[0];
  else if (run.length === 2) {
    const pair = lo[run[0]] + lo[run[1]];
    const finalC = e < ch.length - 1;
    pick = (pair === "oa" || pair === "oe" || pair === "uy") && finalC ? run[1] : run[0];
  } else pick = run[1];
  ch[pick] = (ch[pick] + TONE_MARK[tone]).normalize("NFC");
  return ch.join("");
}
