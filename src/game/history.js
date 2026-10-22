/** The short "Recent practice" list on the Me page (the last 40 sessions). */
import { store } from "../storage/store.js";
import { today } from "../utils/date.js";

export function logSession(kind, lesson, s, t) {
  store.log = store.log.concat({ d: today(), k: kind, l: lesson, s, t }).slice(-40);
}
