/** The body of the stick figure: what is behind it, legs, long skirts, torso and arms. Each outfit has an entry in the tables. */
import { BLACK, DENIM, GOLD, INK, LIGHT, RED, ln, lerp, shape, thick } from "./shapes.js";

const SHOULDERS = [[52, 58], [68, 58]];

/** Drawn first, behind everything (a cape, a backpack). */
export const BACKDROP = {
  cape: () => shape("M50 56L26 124Q60 134 94 124L70 56Z", "#c0392b"),
  travel: () => '<rect x="66" y="56" width="18" height="34" rx="5" style="fill:#5f7285" stroke="' + INK + '" stroke-width="3"/>'
};

/** Trousers or shorts. */
export function legs({ out, col, longDress, shorts }) {
  const pants = longDress || out === "kungfu" ? LIGHT : out === "baba" || out === "office" || out === "samfu" ? BLACK : out === "pj" || out === "melayu" ? col : out === "kurta" ? LIGHT : DENIM;
  const top = longDress ? 120 : 94;
  if (shorts) {
    const sc = out === "sport" ? BLACK : "#e4572e";
    return ln([55, 112], [46, 146], 4, INK) + ln([65, 112], [74, 146], 4, INK) + thick([55, 94], [52, 112], 9, sc) + thick([65, 94], [68, 112], 9, sc);
  }
  return thick([55, top], [46, 146], 8, pants) + thick([65, top], [74, 146], 8, pants);
}

/** Long skirts sit behind the top. */
export const SKIRTS = {
  kurung: () => shape("M45 106L75 106L80 142L40 142Z", "#b9893a") + ln([42, 134], [78, 134], 2.5, GOLD),
  sari: (c) => shape("M47 84L73 84L80 142L40 142Z", c.col) + ln([41, 138], [79, 138], 3, GOLD),
  kebaya: () => shape("M46 86L74 86L79 142L41 142Z", "#3d4f6b") + '<circle cx="52" cy="104" r="1.8" fill="' + GOLD + '"/><circle cx="68" cy="104" r="1.8" fill="' + GOLD + '"/><circle cx="60" cy="116" r="1.8" fill="' + GOLD + '"/><circle cx="52" cy="128" r="1.8" fill="' + GOLD + '"/><circle cx="68" cy="128" r="1.8" fill="' + GOLD + '"/>'
};

/** Both arms. With `sleeves` the sleeve is drawn over the arm. */
export function arms({ hands, fullSleeves, tcol }, sleeves) {
  let r = "";
  hands.forEach((h, i) => {
    r += ln(SHOULDERS[i], h, 4, INK);
    if (sleeves) r += thick(SHOULDERS[i], fullSleeves ? h : lerp(SHOULDERS[i], h, 0.42), fullSleeves ? 8 : 9, tcol);
  });
  return r;
}

const longDressTorso = (c) => shape("M49 54Q60 51 71 54L69 82L76 128L44 128L51 82Z", c.col) + '<path d="M60 86L60 128M55 54L60 60L65 54" stroke="' + INK + '" stroke-width="2" fill="none" stroke-linejoin="round"/>';

/** The top. Outfits not listed here wear a plain top in the chosen colour. */
export const TORSO = {
  aodai: longDressTorso,
  khan: longDressTorso,
  coat: (c) => shape("M48 54Q60 50 72 54L76 108L44 108Z", c.col) + '<path d="M60 58L60 108" stroke="' + INK + '" stroke-width="2" fill="none"/>',
  baba: (c) => shape("M49 54Q60 51 71 54L72 100L48 100Z", c.col) + '<path d="M55 54L60 60L65 54M60 62L60 100" stroke="' + INK + '" stroke-width="2" fill="none" stroke-linejoin="round"/>' +
      '<circle cx="60" cy="70" r="1.6" fill="' + INK + '"/><circle cx="60" cy="82" r="1.6" fill="' + INK + '"/><circle cx="60" cy="94" r="1.6" fill="' + INK + '"/>',
  nday: () => shape("M49 54Q60 51 71 54L74 96L46 96Z", LIGHT) + shape("M49 54Q60 51 71 54L72 76L48 76Z", RED) + '<circle cx="56" cy="64" r="4.2" fill="' + LIGHT + '"/><circle cx="57.6" cy="64" r="3.5" fill="' + RED + '"/><circle cx="62" cy="61" r="1" fill="' + LIGHT + '"/><circle cx="64" cy="64" r="1" fill="' + LIGHT + '"/><circle cx="63" cy="68" r="1" fill="' + LIGHT + '"/><circle cx="60" cy="69" r="1" fill="' + LIGHT + '"/><circle cx="60" cy="62" r="1" fill="' + LIGHT + '"/>',
  kurung: (c) => shape("M48 54Q60 50 72 54L76 112L44 112Z", c.col) + '<path d="M55 54Q60 62 65 54" fill="none" stroke="' + INK + '" stroke-width="2"/>' + ln([44, 110], [76, 110], 3, GOLD),
  melayu: (c) => shape("M48 54Q60 50 72 54L75 104L45 104Z", c.col) + '<path d="M55 54Q60 62 65 54" fill="none" stroke="' + INK + '" stroke-width="2"/>' + shape("M46 84L74 84L75 102L45 102Z", GOLD, 2.5),
  cheong: (c) => shape("M49 54Q60 51 71 54L73 84L71 126L49 126L47 84Z", c.col) + shape("M54 51L66 51L66 57L54 57Z", GOLD, 2) + '<path d="M63 57Q69 62 72 74" fill="none" stroke="' + INK + '" stroke-width="2" stroke-linecap="round"/><circle cx="66" cy="60" r="1.6" fill="' + GOLD + '"/><circle cx="69.5" cy="65" r="1.6" fill="' + GOLD + '"/><circle cx="71.5" cy="71" r="1.6" fill="' + GOLD + '"/>' + ln([49, 123], [71, 123], 3, GOLD),
  samfu: (c) => shape("M48 54Q60 50 72 54L74 100L46 100Z", c.col) + shape("M54 51L66 51L66 57L54 57Z", LIGHT, 2) + '<circle cx="60" cy="66" r="2" fill="' + INK + '"/><circle cx="60" cy="76" r="2" fill="' + INK + '"/><circle cx="60" cy="86" r="2" fill="' + INK + '"/>',
  kurta: (c) => shape("M48 54Q60 50 72 54L75 112L45 112Z", c.col) + shape("M54 52L66 52L66 57L54 57Z", LIGHT, 2) + '<path d="M60 57L60 86" stroke="' + INK + '" stroke-width="2" fill="none"/><circle cx="60" cy="66" r="1.8" fill="' + INK + '"/><circle cx="60" cy="76" r="1.8" fill="' + INK + '"/>' + ln([45, 108], [75, 108], 3, GOLD),
  sari: (c) => shape("M49 54Q60 51 71 54L72 78L48 78Z", GOLD) + shape("M49 56L58 56L78 112L66 112Z", c.col) + ln([54, 60], [72, 100], 2, LIGHT),
  kebaya: (c) => shape("M48 54Q60 50 72 54L75 90Q72 95 68 90Q64 96 60 90Q56 96 52 90Q48 95 45 90Z", c.col) + '<circle cx="60" cy="62" r="2.4" fill="' + GOLD + '" stroke="' + INK + '" stroke-width="1"/><circle cx="53" cy="74" r="1.3" fill="' + LIGHT + '"/><circle cx="67" cy="74" r="1.3" fill="' + LIGHT + '"/><circle cx="60" cy="82" r="1.3" fill="' + LIGHT + '"/>',
  hood: (c) => shape("M48 54Q60 50 72 54L75 100L45 100Z", c.col) + '<path d="M52 82L68 82L70 96L50 96Z" fill="none" stroke="' + INK + '" stroke-width="2" stroke-linejoin="round"/><path d="M55 56L55 68M65 56L65 68" stroke="' + INK + '" stroke-width="2" fill="none" stroke-linecap="round"/>',
  chef: () => shape("M49 54Q60 51 71 54L74 100L46 100Z", LIGHT) + '<path d="M60 56L60 100" stroke="' + INK + '" stroke-width="2" fill="none"/><circle cx="55" cy="68" r="1.6" fill="' + INK + '"/><circle cx="55" cy="80" r="1.6" fill="' + INK + '"/><circle cx="65" cy="68" r="1.6" fill="' + INK + '"/><circle cx="65" cy="80" r="1.6" fill="' + INK + '"/>',
  kungfu: () => shape("M49 54Q60 51 71 54L74 100L46 100Z", LIGHT) + '<path d="M53 54L65 84M67 54L55 84" stroke="' + INK + '" stroke-width="2" fill="none" stroke-linecap="round"/>' + ln([47, 90], [73, 90], 5, BLACK),
  pj: (c) => shape("M49 54Q60 51 71 54L74 100L46 100Z", c.col) + '<circle cx="55" cy="68" r="2" fill="' + LIGHT + '"/><circle cx="66" cy="76" r="2" fill="' + LIGHT + '"/><circle cx="56" cy="90" r="2" fill="' + LIGHT + '"/>',
  sport: (c) => shape("M49 54Q60 51 71 54L74 96L46 96Z", c.col) + ln([60, 56], [60, 96], 4, LIGHT)
};
export const plainTorso = (c) => shape("M49 54Q60 51 71 54L74 96L46 96Z", c.col);

/** The raincoat replaces the top and is drawn over bare arms. */
export const raincoat = (c) => shape("M38 56Q60 44 82 56L90 112L30 112Z", c.col);

/** Everything below the head. */
export function body(c) {
  const behind = BACKDROP[c.out] ? BACKDROP[c.out](c) : "";
  const skirt = SKIRTS[c.out] ? SKIRTS[c.out](c) : "";
  const top = c.out === "rain" ? arms(c, false) + raincoat(c) : (TORSO[c.out] || plainTorso)(c) + arms(c, true);
  return behind + legs(c) + skirt + top;
}
