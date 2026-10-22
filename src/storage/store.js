/**
 * The learner's saved progress. Everything lives in one plain object that is kept in this browser's localStorage.
 * `store` is a single shared object: other modules import it and read or change its fields. It is never replaced
 * (an imported binding cannot be reassigned), so use resetStore() to start over.
 */

export const STORE_KEY = "noi-tieng-viet:v1";

export function freshStore() {
  return {
    known: {}, best: {}, xpKnown: {}, xpQuiz: {}, xpTyping: {}, xpReview: {}, perfect: {}, goalDays: {},
    badges: {}, days: [], name: "", outfit: "tee", color: 0, mode: "vi2en", goal: 10, gate: true, gateSkip: "",
    srs: {}, dayItems: { d: "", ids: {} }, log: [], resume: { lesson: "", card: 0 }, lvPeak: 1
  };
}

export const store = freshStore();

/**
 * Read saved progress from localStorage into `store`. A saved field is used only if it has the same type as the
 * default, so an old or hand-edited save cannot break the app.
 */
export function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        Object.keys(store).forEach((k) => {
          if (parsed[k] !== undefined && typeof parsed[k] === typeof store[k] && Array.isArray(parsed[k]) === Array.isArray(store[k])) store[k] = parsed[k];
        });
      }
    }
  } catch (e) { /* unreadable save: start fresh */ }
}

/** Write `store` to localStorage. Failures (private mode, quota) are ignored on purpose. */
export function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
}

/** Erase all progress, in place. */
export function resetStore() {
  Object.keys(store).forEach((k) => { delete store[k]; });
  Object.assign(store, freshStore());
}

/** The name shown under the stick figure: what the learner typed (max 20 characters), or "Que". */
export function playerName() {
  const n = String(store.name || "").replace(/\s+/g, " ").trim().slice(0, 20);
  return n || "Que";
}
