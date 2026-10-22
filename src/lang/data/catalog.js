/**
 * The content catalog: lessons, dialogues and the flat lists built from them.
 *
 * Importing this module "finishes" the raw data once:
 *  - every lesson gets `typing` (true unless the lesson says false);
 *  - every item gets `id` ("b1-03"), `lesson` and an NFC-normalised `vi`;
 *  - every dialogue line becomes an object with an `id` ("d1-02").
 * These ids are also the audio file names, so they follow the positions in the data files.
 */
import { LESSON_LIST } from "./lessons/index.js";
import { DIALOGUES } from "./dialogues.js";

export const LESSONS = LESSON_LIST;
export { DIALOGUES };

/** Every word or phrase of every lesson, in lesson order. */
export const ALL = [];
/** Every dialogue line, in dialogue order. */
export const LINES = [];

LESSONS.forEach((l) => {
  l.typing = l.typing !== false;
  l.items.forEach((it, i) => {
    it.vi = it.vi.normalize("NFC");
    if (l.kind === "letters") it.en = "read “" + it.name + "”, as in " + it.word + " (" + it.wordEn + ")";
    it.id = l.id + "-" + String(i + 1).padStart(2, "0");
    it.lesson = l.id;
    ALL.push(it);
  });
});

DIALOGUES.forEach((d) => {
  d.lines = d.lines.map((r, i) => {
    const o = { id: d.id + "-" + String(i + 1).padStart(2, "0"), who: r[0], vi: r[1].normalize("NFC"), en: r[2], dlg: d.id };
    LINES.push(o);
    return o;
  });
});

/** Everything that has (or will have) a recording. */
export const AUDIO_ALL = ALL.concat(LINES);

const lessonIndex = new Map(LESSONS.map((l) => [l.id, l]));
const itemIndex = new Map(ALL.map((i) => [i.id, i]));
const dialogueIndex = new Map(DIALOGUES.map((d) => [d.id, d]));

export const lessonById = (id) => lessonIndex.get(id);
export const itemById = (id) => itemIndex.get(id);
export const dialogueById = (id) => dialogueIndex.get(id);
