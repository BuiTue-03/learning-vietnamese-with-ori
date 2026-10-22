/** What the learner has learned so far. A word counts as learned once it is marked known or answered right in a quiz. */
import { store } from "../storage/store.js";
import { ALL, lessonById } from "../lang/data/catalog.js";

export function learned(it) { return !!store.known[it.id] || !!store.xpQuiz[it.id]; }
export function learnedCount() { return ALL.filter(learned).length; }
export function lessonLearned(id) { return lessonById(id).items.every(learned); }
