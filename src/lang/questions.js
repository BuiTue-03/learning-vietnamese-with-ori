/** Builds multiple-choice questions from lesson items. Pure: all randomness and audio availability are passed in. */
import { ALL, lessonById } from "./data/catalog.js";
import { TONES, TONE_ORDER } from "./data/tones.js";
import { shuffle } from "../utils/random.js";

export function pickOthers(correct, pool, k, key, rng) {
  const seen = {}; seen[correct[key]] = true;
  const out = [];
  const sh = shuffle(pool, rng);
  for (let i = 0; i < sh.length && out.length < k; i++) {
    if (!seen[sh[i][key]]) { seen[sh[i][key]] = true; out.push(sh[i]); }
  }
  return out;
}
/* items: the words to ask about. ctx: { mode, ok (audio map), rng }. Each question is built from its own lesson. */
export function makeQuestions(items, ctx) {
  const rng = ctx.rng || Math.random, mode = ctx.mode || "vi2en", ok = ctx.ok || {};
  return items.map((it) => {
    const L = lessonById(it.lesson), pool = L.items;
    const base = mode === "en2vi" ? "en2vi" : "vi2en";
    let kinds;
    if (L.kind === "letters") { kinds = ["lword", "lname"]; if (ok[it.id] === true) kinds.push("listen", "listen"); }
    else { kinds = [base, base]; if (L.id === "b0") kinds.push("tone"); if (ok[it.id] === true) kinds.push("listen"); }
    const kind = kinds[Math.floor(rng() * kinds.length)];
    function others(key) {
      let d = pickOthers(it, pool, 3, key, rng);
      if (d.length < 3) {
        const taken = d.map((x) => x[key]);
        const rest = ALL.filter((x) => x !== it && taken.indexOf(x[key]) < 0 && x[key] !== undefined);
        d = d.concat(pickOthers(it, rest, 3 - d.length, key, rng));
      }
      return d;
    }
    const q = { kind, item: it };
    let opts;
    if (kind === "vi2en") {
      q.prompt = "What does “" + it.vi + "” mean?";
      opts = others("en").map((o) => ({ label: o.en, correct: false }));
      opts.push({ label: it.en, correct: true });
    } else if (kind === "en2vi") {
      q.prompt = "How do you say “" + it.en + "”?";
      opts = others("vi").map((o) => ({ label: o.vi, correct: false }));
      opts.push({ label: it.vi, correct: true });
    } else if (kind === "tone") {
      q.prompt = "Which tone does “" + it.vi + "” carry?";
      const wrong = shuffle(TONE_ORDER.filter((t) => t !== it.tone), rng).slice(0, 3);
      opts = wrong.map((t) => ({ label: t + " (" + TONES[t].label.toLowerCase() + ")", correct: false }));
      opts.push({ label: it.tone + " (" + TONES[it.tone].label.toLowerCase() + ")", correct: true });
    } else if (kind === "lword") {
      q.prompt = "Which word starts with “" + it.vi + "”?";
      opts = others("word").map((o) => ({ label: o.word, correct: false }));
      opts.push({ label: it.word, correct: true });
    } else if (kind === "lname") {
      q.prompt = "How is the letter “" + it.vi + "” read?";
      opts = others("name").map((o) => ({ label: o.name, correct: false }));
      opts.push({ label: it.name, correct: true });
    } else {
      q.prompt = "Listen, then choose what you hear.";
      q.audioId = it.id;
      /* letters that are read the same (I and Y) must not appear together, or two answers would be right */
      const heard = L.kind === "letters" ? pickOthers(it, pool.filter((x) => x.name !== it.name), 3, "vi", rng) : others("vi");
      opts = heard.map((o) => ({ label: o.vi, correct: false }));
      opts.push({ label: it.vi, correct: true });
    }
    q.options = shuffle(opts, rng);
    return q;
  });
}
