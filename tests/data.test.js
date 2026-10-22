// Guards the content: audio files are named by position, so ids must stay unique and stable.
import { test } from "node:test";
import assert from "node:assert/strict";
import { ALL, LESSONS, DIALOGUES, AUDIO_ALL } from "../src/lang/data/catalog.js";
import { BADGES } from "../src/game/badges.js";
import { OUTFITS } from "../src/game/outfits.js";
import { LEVELS } from "../src/game/levels.js";

test("every lesson has a unique id and some items", () => {
  const ids = LESSONS.map((l) => l.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const l of LESSONS) assert.ok(l.items.length > 0, l.id);
});

test("every item has Vietnamese, English and a unique id", () => {
  const ids = ALL.map((it) => it.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const it of ALL) assert.ok(it.vi && it.en, it.id);
});

test("every audio id is unique", () => {
  assert.equal(new Set(AUDIO_ALL).size, AUDIO_ALL.length);
});

test("dialogues have lines", () => {
  for (const d of DIALOGUES) assert.ok(d.lines.length > 0, d.id);
});

test("badge and outfit ids are unique", () => {
  assert.equal(new Set(BADGES.map((b) => b.id)).size, BADGES.length);
  assert.equal(new Set(OUTFITS.map((o) => o.id)).size, OUTFITS.length);
});

test("levels need more and more XP", () => {
  for (let i = 1; i < LEVELS.length; i++) assert.ok(LEVELS[i].xp > LEVELS[i - 1].xp, "level " + i);
});
