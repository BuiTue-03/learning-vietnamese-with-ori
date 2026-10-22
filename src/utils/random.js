/** Random helpers. Every function takes an optional `rng` so tests can pass a seeded generator. */

/** Return a shuffled copy of `a` (Fisher-Yates). */
export function shuffle(a, rng) {
  rng = rng || Math.random;
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
