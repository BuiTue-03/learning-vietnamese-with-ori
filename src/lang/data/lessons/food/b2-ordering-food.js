// Lesson b2 · Gọi món (Ordering food and drink).
// Items are positional (audio b2-01.mp3, b2-02.mp3, ...): only ever APPEND items, never insert, delete or reorder.
export default { id: "b2", group: "food", title: "Gọi món", sub: "Ordering food and drink", unit: "phrases", icon: "bowl",
  tip: "Many food and drink words differ between North and South. These are Hà Nội forms.",
  culture: [{ t: "Calling the waiter", x: "At many local places you can call the staff with em ơi, or with the pronoun that fits their age." }],
  items: [
    { vi: "Cho tôi…", en: "I would like… (literally “give me…”)", ex: ["Cho tôi một bát phở.", "I’d like a bowl of phở."] },
    { vi: "Phở", en: "Phở (noodle soup)" },
    { vi: "Bánh mì", en: "Vietnamese baguette; bread" },
    { vi: "Cà phê", en: "Coffee" },
    { vi: "Nước lọc", en: "Plain drinking water" },
    { vi: "Bia", en: "Beer" },
    { vi: "Không cay", en: "Not spicy", ex: ["Cho tôi phở, không cay.", "Phở for me, not spicy."] },
    { vi: "Ngon quá!", en: "So delicious!" },
    { vi: "Bao nhiêu tiền?", en: "How much is it?" },
    { vi: "Tính tiền", en: "The bill, please", ex: ["Tính tiền giúp tôi.", "Please bring the bill."] }
  ] };
