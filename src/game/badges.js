/**
 * Badges. Each badge has a declarative `rule`:
 *   { lesson: "b1" }        every item of that lesson is learned
 *   { words: 50 }           at least 50 words or phrases learned
 *   { perfectLessons: 3 }   a perfect quiz in at least 3 different lessons
 *   { streakDays: 7 }       learned on 7 days in a row
 *   { everything: true }    every word and phrase learned
 * One "topic" badge per remaining lesson and the final "all" badge are added below.
 */
import { store } from "../storage/store.js";
import { ALL, LESSONS } from "../lang/data/catalog.js";
import { countKeys } from "../utils/collections.js";
import { today } from "../utils/date.js";
import { learned, learnedCount, lessonLearned } from "./progress.js";
import { streak } from "./streak.js";
import { queueCelebration } from "./celebrations.js";

export const BADGES = [
  { id: "first",   vi: "Từ đầu tiên", en: "First word", how: "Learn your first word.", icon: "speech", col: "#2f80d8", rule: { words: 1 } },
  { id: "tones",   vi: "Đủ sáu thanh", en: "All six tones", how: "Learn every word in “Sáu thanh điệu”.", icon: "wave", col: "#8a5cd6", rule: { lesson: "b0" } },
  { id: "hello",   vi: "Xin chào!", en: "Greetings", how: "Learn every phrase in “Chào hỏi”.", icon: "sun", col: "#c98410", rule: { lesson: "b1" } },
  { id: "yum",     vi: "Ngon quá!", en: "Food and drink", how: "Learn every phrase in “Gọi món”.", icon: "bowl", col: "#e4572e", rule: { lesson: "b2" } },
  { id: "money",   vi: "Bao nhiêu tiền?", en: "Numbers and prices", how: "Learn every word in “Số và giá tiền”.", icon: "coin", col: "#2fa36b", rule: { lesson: "b3" } },
  { id: "way",     vi: "Ở đâu?", en: "Finding the way", how: "Learn every phrase in “Hỏi đường”.", icon: "pin", col: "#1f8f9c", rule: { lesson: "b4" } },
  { id: "perfect", vi: "Điểm mười", en: "Top marks", how: "Get every question right in one quiz.", icon: "star", col: "#b8860b", rule: { perfectLessons: 1 } },
  { id: "streak",  vi: "Ba ngày liền", en: "Three days in a row", how: "Learn on three days in a row.", icon: "flame", col: "#d6456b", rule: { streakDays: 3 } },
  { id: "streak7", vi: "Bảy ngày liền", en: "Seven days in a row", how: "Learn on seven days in a row.", icon: "flame", col: "#c2410c", rule: { streakDays: 7 } },
  { id: "w50",  vi: "Năm mươi từ", en: "50 words", how: "Learn 50 words or phrases.", icon: "book", col: "#2f80d8", rule: { words: 50 } },
  { id: "w100", vi: "Một trăm từ", en: "100 words", how: "Learn 100 words or phrases.", icon: "book", col: "#1f8f9c", rule: { words: 100 } },
  { id: "w200", vi: "Hai trăm từ", en: "200 words", how: "Learn 200 words or phrases.", icon: "book", col: "#2fa36b", rule: { words: 200 } },
  { id: "w350", vi: "Ba trăm năm mươi từ", en: "350 words", how: "Learn 350 words or phrases.", icon: "book", col: "#8a5cd6", rule: { words: 350 } },
  { id: "w500", vi: "Năm trăm từ", en: "500 words", how: "Learn 500 words or phrases.", icon: "book", col: "#c98410", rule: { words: 500 } },
  { id: "w700", vi: "Bảy trăm từ", en: "700 words", how: "Learn 700 words or phrases.", icon: "book", col: "#e4572e", rule: { words: 700 } },
  { id: "w900", vi: "Chín trăm từ", en: "900 words", how: "Learn 900 words or phrases.", icon: "book", col: "#d6456b", rule: { words: 900 } },
  { id: "perfect10", vi: "Mười bài điểm mười", en: "Ten perfect lessons", how: "Get every question right in quizzes for ten different lessons.", icon: "star", col: "#7c2d12", rule: { perfectLessons: 10 } },
  { id: "streak30", vi: "Ba mươi ngày liền", en: "Thirty days in a row", how: "Learn on thirty days in a row.", icon: "flame", col: "#7c2d12", rule: { streakDays: 30 } }
];

const TOPIC_COLOURS = ["#3d6fb6", "#a65f2a", "#5a7d2a", "#8a4f9e", "#1f7a6b", "#b04a5a"];
let topicCount = 0;
LESSONS.forEach((l) => {
  if (BADGES.some((b) => b.rule.lesson === l.id)) return;
  BADGES.push({ id: "topic-" + l.id, vi: l.title, en: l.sub, how: "Learn everything in “" + l.title + "”.", icon: l.icon,
    col: TOPIC_COLOURS[topicCount++ % TOPIC_COLOURS.length], rule: { lesson: l.id } });
});
BADGES.push({ id: "all", vi: "Trọn bộ", en: "The full set", how: "Learn every word and phrase.", icon: "crown", col: "#3d4f6b", rule: { everything: true } });

export const badgeById = (id) => BADGES.find((b) => b.id === id);

/** Has the learner met this badge's rule right now? */
export function isEarned(b) {
  const r = b.rule;
  if (r.lesson) return lessonLearned(r.lesson);
  if (r.words) return learnedCount() >= r.words;
  if (r.perfectLessons) return countKeys(store.perfect) >= r.perfectLessons;
  if (r.streakDays) return streak() >= r.streakDays;
  if (r.everything) return ALL.every(learned);
  return false;
}

/** Record every newly earned badge (with today's date) and queue a pop-up for each. */
export function checkBadges() {
  BADGES.forEach((b) => {
    if (!store.badges[b.id] && isEarned(b)) {
      store.badges[b.id] = today();
      queueCelebration({ kind: "badge", id: b.id });
    }
  });
}
