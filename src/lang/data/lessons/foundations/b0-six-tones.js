// Lesson b0 · Sáu thanh điệu (The six tones).
// Items are positional (audio b0-01.mp3, b0-02.mp3, ...): only ever APPEND items, never insert, delete or reorder.
export default { id: "b0", group: "found", title: "Sáu thanh điệu", sub: "The six tones", unit: "words", icon: "wave",
  tip: "Same letters, six tones, six different words. Listen first, then copy the pitch.",
  culture: [{ t: "The tone is part of the word", x: "Changing the tone changes the word. ma, má, mà, mả, mã and mạ are six different words." }],
  items: [
    { vi: "ma", en: "ghost", tone: "ngang", note: "No mark on the vowel." },
    { vi: "má", en: "cheek", tone: "sắc", note: "In the South, má also means “mum”." },
    { vi: "mà", en: "but; that (joins two clauses)", tone: "huyền" },
    { vi: "mả", en: "grave, tomb", tone: "hỏi" },
    { vi: "mã", en: "code; horse (in Sino-Vietnamese words)", tone: "ngã", note: "The everyday word for horse is ngựa." },
    { vi: "mạ", en: "rice seedling", tone: "nặng" }
  ] };
