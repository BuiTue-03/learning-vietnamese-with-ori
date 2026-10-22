/** Days-in-a-row. */
import { store } from "../storage/store.js";
import { today, dayAdd } from "../utils/date.js";

export function streak() {
  const d = store.days;
  if (!d.length) return 0;
  const t = today();
  let cur = d.indexOf(t) >= 0 ? t : (d.indexOf(dayAdd(t, -1)) >= 0 ? dayAdd(t, -1) : null);
  let n = 0;
  while (cur && d.indexOf(cur) >= 0) { n++; cur = dayAdd(cur, -1); }
  return n;
}
export function touchDay() {
  const t = today();
  if (store.days.indexOf(t) < 0) store.days = store.days.concat(t).slice(-120);
}
