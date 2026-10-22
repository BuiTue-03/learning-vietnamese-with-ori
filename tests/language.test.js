import { test } from "node:test";
import assert from "node:assert/strict";
import { fold, normAns, shortEn } from "../src/lang/text.js";
import { applyTone, stripTone } from "../src/lang/tone.js";
import { typingMatches } from "../src/lang/typing.js";
import { ALL } from "../src/lang/data/catalog.js";

test("fold removes tone marks and turns đ into d", () => {
  assert.equal(fold("Đường"), "duong");
  assert.equal(fold("Xin chào"), "xin chao");
});

test("shortEn drops brackets and alternatives", () => {
  assert.equal(shortEn("hello (formal)"), "hello");
  assert.equal(shortEn("yes; correct"), "yes");
});

test("normAns ignores case and punctuation", () => {
  assert.equal(normAns("Xin chào!"), normAns("xin chào"));
});

test("normAns accepts both tone-mark styles (hòa / hoà)", () => {
  assert.equal(normAns("hòa"), normAns("hoà"));
});

test("stripTone removes the tone but keeps other marks", () => {
  assert.equal(stripTone("mà"), "ma");
  assert.equal(stripTone("mẹ"), "me");
  assert.equal(stripTone("ă"), "ă");
});

test("applyTone puts the tone on a vowel and replaces an earlier one", () => {
  assert.equal(applyTone("ma", "sắc"), "má");
  assert.equal(applyTone("má", "huyền"), "mà");
});

test("typingMatches accepts the item's own Vietnamese", () => {
  const it = ALL[0];
  assert.ok(typingMatches(it, it.vi));
  assert.ok(!typingMatches(it, "zzzz"));
});
