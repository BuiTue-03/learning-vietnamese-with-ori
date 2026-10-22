/** Small helpers for plain objects. */

/** Number of keys. The app stores "sets" (known words, earned badges...) as {id: true} objects. */
export function countKeys(o) {
  return Object.keys(o).length;
}
