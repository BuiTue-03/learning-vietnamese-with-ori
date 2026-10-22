// Lesson b3 · Số và giá tiền (Numbers and prices).
// Items are positional (audio b3-01.mp3, b3-02.mp3, ...): only ever APPEND items, never insert, delete or reorder.
export default { id: "b3", group: "situ", title: "Số và giá tiền", sub: "Numbers and prices", unit: "words", icon: "coin",
  tip: "Prices are said in thousands. 50,000 đồng is năm mươi nghìn đồng.",
  culture: [{ t: "Prices in thousands", x: "In daily talk the word nghìn is often dropped, so “năm mươi” can mean fifty thousand đồng when the price is clearly in thousands." }],
  items: [
    { vi: "một", en: "one (1)" },
    { vi: "hai", en: "two (2)" },
    { vi: "ba", en: "three (3)" },
    { vi: "bốn", en: "four (4)" },
    { vi: "năm", en: "five (5)", note: "Năm also means “year”." },
    { vi: "sáu", en: "six (6)" },
    { vi: "bảy", en: "seven (7)" },
    { vi: "tám", en: "eight (8)" },
    { vi: "chín", en: "nine (9)" },
    { vi: "mười", en: "ten (10)" },
    { vi: "trăm", en: "hundred", ex: ["Hai trăm nghìn đồng.", "200,000 đồng."] },
    { vi: "nghìn", en: "thousand", note: "Northern form. Southern speakers say ngàn.", ex: ["Năm mươi nghìn.", "Fifty thousand."] },
    { vi: "đồng", en: "dong (Vietnamese currency)", ex: ["Hai mươi nghìn đồng.", "20,000 đồng."] }
  ] };
