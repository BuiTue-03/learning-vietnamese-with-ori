/** The head of the stick figure: face, hood and the hats and accessories of each outfit. */
import { BLACK, INK, LIGHT, ln, shape } from "./shapes.js";

/** The hood of the hoodie sits behind the head. */
const BEHIND_HEAD = {
  hood: (c) => shape("M42 40Q40 12 60 12Q80 12 78 40Q70 54 60 54Q50 54 42 40Z", c.col)
};

/** Hats, collars, ties and other things drawn over the head. */
export const HEADWEAR = {
  travel: () => shape("M45 30Q46 14 60 14Q74 14 75 30Z", LIGHT) + ln([60, 29], [84, 30], 4, INK),
  nonla: () => '<path d="M40 33Q42 54 60 54Q78 54 80 33" fill="none" stroke="' + INK + '" stroke-width="1.5"/>' + shape("M60 2L94 26Q60 31 26 26Z", "#e2bf72"),
  scholar: () => shape("M47 19L47 28Q60 32 73 28L73 19Z", BLACK) + shape("M36 16L60 6L84 16L60 26Z", BLACK) +
      '<path d="M84 16L88 32" stroke="#d4a017" stroke-width="2" fill="none"/><circle cx="88" cy="34" r="2.5" style="fill:#d4a017"/>',
  coat: () => shape("M50 52Q60 58 70 52L70 58Q60 64 50 58Z", LIGHT, 2) + shape("M64 59L69 77L61 74Z", LIGHT, 2),
  helmet: () => '<path d="M45 32Q46 50 60 52Q74 50 75 32" fill="none" stroke="' + INK + '" stroke-width="1.5"/>' + shape("M44 28Q44 8 60 8Q76 8 76 28Z", LIGHT) + ln([46, 27], [74, 27], 3, INK),
  rain: (c) => shape("M42 30Q42 11 60 11Q78 11 78 30Q60 25 42 30Z", c.col),
  khan: () => shape("M44 26Q42 8 60 8Q78 8 76 26Q60 20 44 26Z", BLACK) + ln([49, 20], [71, 20], 1.5, "#8b93a1"),
  melayu: () => shape("M46 24L47 10L73 10L74 24Z", BLACK, 3),
  kebaya: () => '<circle cx="60" cy="13" r="6.5" style="fill:' + BLACK + '" stroke="' + INK + '" stroke-width="2.5"/>',
  office: () => shape("M53 52L60 58L67 52L67 56L60 62L53 56Z", LIGHT, 2) + shape("M60 60L57 64L60 84L63 64Z", "#c0392b", 2),
  chef: () => shape("M46 24Q36 14 47 9Q50 0 60 4Q70 0 73 9Q84 14 74 24Z", LIGHT) + ln([46, 25], [74, 25], 3, INK),
  sport: () => shape("M45 20L75 20L75 25L45 25Z", "#e4572e", 2.5),
  beach: (c) => shape("M46 25Q46 10 60 10Q74 10 74 25Z", "#e2bf72") + shape("M30 27Q60 34 90 27Q84 33 60 34Q36 33 30 27Z", "#e2bf72") + ln([46, 24], [74, 24], 3, c.col) +
      '<rect x="49" y="29" width="9" height="7" rx="2.5" fill="' + BLACK + '" stroke="' + INK + '" stroke-width="1.5"/><rect x="62" y="29" width="9" height="7" rx="2.5" fill="' + BLACK + '" stroke="' + INK + '" stroke-width="1.5"/>' + ln([58, 31], [62, 31], 1.5, INK),
  pj: (c) => shape("M45 24Q46 6 66 8Q82 10 86 32Q76 26 45 24Z", c.col) + '<circle cx="86" cy="33" r="4.5" style="fill:' + LIGHT + '" stroke="' + INK + '" stroke-width="2"/>' + ln([45, 25], [75, 27], 4, LIGHT),
  beanie: (c) => shape("M45 25Q44 8 60 8Q76 8 75 25Z", c.col) + shape("M44 22L76 22L76 29L44 29Z", LIGHT, 2.5) + '<circle cx="60" cy="6" r="4" style="fill:' + LIGHT + '" stroke="' + INK + '" stroke-width="2"/>' +
      shape("M49 53Q60 60 71 53L72 61Q60 67 48 61Z", "#c0392b", 2.5) + shape("M63 63L70 82L61 80Z", "#c0392b", 2.5),
  kungfu: () => shape("M44 24Q60 18 76 24L76 29Q60 24 44 29Z", BLACK, 2.5),
  cape: () => '<circle cx="60" cy="56" r="3" style="fill:#d4a017" stroke="' + INK + '" stroke-width="1.5"/>',
  crown: () => shape("M46 22L48 6L55 14L60 4L65 14L72 6L74 22Z", "#d4a017")
};

/** Round head, eyes and a mouth that depends on the pose. */
function face(pose) {
  let s = "";
  s += '<circle cx="60" cy="34" r="15" style="fill:var(--surface)" stroke="' + INK + '" stroke-width="4"/>';
  s += '<circle cx="54" cy="33" r="1.9" fill="' + INK + '"/><circle cx="66" cy="33" r="1.9" fill="' + INK + '"/>';
  const mouth = pose === "cheer" ? "M52 38Q60 48 68 38" : pose === "oops" ? "M55 41L65 41" : "M53 39Q60 45 67 39";
  s += '<path d="' + mouth + '" fill="none" stroke="' + INK + '" stroke-width="2" stroke-linecap="round"/>';
  return s;
}

export function head(c) {
  return (BEHIND_HEAD[c.out] ? BEHIND_HEAD[c.out](c) : "") + face(c.pose) + (HEADWEAR[c.out] ? HEADWEAR[c.out](c) : "");
}
