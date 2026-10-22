/** The "Vietnamese → English / English → Vietnamese" switch. */
import { store } from "../../storage/store.js";

export function modeToggle() {
  return '<div class="seg" role="group" aria-label="Study direction">' +
    '<button data-act="mode" data-m="vi2en" aria-pressed="' + (store.mode === "vi2en") + '">Vietnamese → English</button>' +
    '<button data-act="mode" data-m="en2vi" aria-pressed="' + (store.mode === "en2vi") + '">English → Vietnamese</button></div>';
}
