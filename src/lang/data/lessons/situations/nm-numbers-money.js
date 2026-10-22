// Lesson nm · Số đếm và tiền (Bigger numbers and money).
// Items are positional (audio nm-01.mp3, nm-02.mp3, ...): only ever APPEND items, never insert, delete or reorder.
export default { id: "nm", group: "situ", title: "Số đếm và tiền", sub: "Bigger numbers and money", unit: "words", icon: "coin",
  tip: "After you know 1 to 10, the pattern is easy: 20 is hai mươi, 30 is ba mươi, and so on. Prices are usually said in thousands.",
  culture: [
    { t: "Three small changes", x: "After mươi (tens), one becomes mốt, four becomes tư and five becomes lăm. So 21 is hai mươi mốt, 24 is hai mươi tư and 25 is hai mươi lăm. 15 is mười lăm." },
    { t: "Reading prices", x: "Banknotes go up to hundreds of thousands, so prices are said with nghìn. Hai mươi nghìn is 20,000 đồng. In casual speech the word nghìn is often left out." }
  ],
  items: [
    { vi: "không", en: "zero (0)", note: "Không also means no or not." },
    { vi: "mười một", en: "eleven (11)" },
    { vi: "mười hai", en: "twelve (12)" },
    { vi: "mười lăm", en: "fifteen (15)", note: "Five becomes lăm after mười and mươi." },
    { vi: "hai mươi", en: "twenty (20)" },
    { vi: "hai mươi mốt", en: "twenty-one (21)", note: "One becomes mốt after mươi." },
    { vi: "hai mươi tư", en: "twenty-four (24)", note: "Four becomes tư after mươi." },
    { vi: "hai mươi lăm", en: "twenty-five (25)" },
    { vi: "ba mươi", en: "thirty (30)" },
    { vi: "bốn mươi", en: "forty (40)" },
    { vi: "năm mươi", en: "fifty (50)" },
    { vi: "sáu mươi", en: "sixty (60)" },
    { vi: "bảy mươi", en: "seventy (70)" },
    { vi: "tám mươi", en: "eighty (80)" },
    { vi: "chín mươi", en: "ninety (90)" },
    { vi: "một trăm", en: "one hundred (100)" },
    { vi: "hai trăm", en: "two hundred (200)" },
    { vi: "lẻ", en: "and (odd; a zero in the tens place)", note: "In the South you may hear linh instead of lẻ.", ex: ["Một trăm lẻ năm.", "One hundred and five (105)."] },
    { vi: "một nghìn", en: "one thousand (1,000)", note: "In the South: một ngàn." },
    { vi: "mười nghìn", en: "ten thousand (10,000)" },
    { vi: "hai mươi nghìn", en: "twenty thousand (20,000)" },
    { vi: "năm mươi nghìn", en: "fifty thousand (50,000)" },
    { vi: "một trăm nghìn", en: "one hundred thousand (100,000)" },
    { vi: "hai trăm nghìn", en: "two hundred thousand (200,000)" },
    { vi: "năm trăm nghìn", en: "five hundred thousand (500,000)" },
    { vi: "một triệu", en: "one million (1,000,000)" },
    { vi: "rưỡi", en: "and a half", ex: ["Hai triệu rưỡi.", "Two and a half million."] },
    { vi: "khoảng", en: "about; approximately", ex: ["Khoảng năm mươi nghìn.", "About fifty thousand."] },
    { vi: "tất cả", en: "all; in total", ex: ["Tất cả là bao nhiêu?", "How much is it all together?"] }
  ] };
