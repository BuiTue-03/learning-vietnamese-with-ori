/** A round badge icon. */
import { ICONS } from "./icons.js";

export function medal(b, size) {
  return '<span class="medal"><svg viewBox="0 0 48 48" width="' + size + '" height="' + size + '" aria-hidden="true"><circle cx="24" cy="24" r="22" style="fill:' + b.col + '"/>' +
    '<g transform="translate(12 12)" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + ICONS[b.icon] + "</g></svg></span>";
}
