/** Drawing primitives for the stick figure (SVG strings, 120 x 156 box). */

export const INK = "currentColor";
export const LIGHT = "#f4f4f0";
export const DENIM = "#3d4f6b";
export const BLACK = "#2a2f3a";
export const GOLD = "#d4a017";
export const RED = "#ed2939";

/** A rounded line from point a to point b. */
export function ln(a, b, w, c) {
  return '<line x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '" stroke="' + c + '" stroke-width="' + w + '" stroke-linecap="round"/>';
}
/** A line with a dark outline (limbs, trousers). */
export function thick(a, b, w, c) { return ln(a, b, w + 3, INK) + ln(a, b, w, c); }
export function lerp(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]; }
/** A filled, outlined path. */
export function shape(d, fill, w) {
  return '<path d="' + d + '" style="fill:' + fill + '" stroke="' + INK + '" stroke-width="' + (w || 3) + '" stroke-linejoin="round" stroke-linecap="round"/>';
}
