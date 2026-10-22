// Lesson fd3 · Đồ uống và hoa quả (Drinks and fruit).
// Items are positional (audio fd3-01.mp3, fd3-02.mp3, ...): only ever APPEND items, never insert, delete or reorder.
export default { id: "fd3", group: "food", title: "Đồ uống và hoa quả", sub: "Drinks and fruit", unit: "words", icon: "cup",
  tip: "Add đá for ice or không đá for no ice. In the North, fruit is hoa quả; in the South it is trái cây.",
  culture: [
    { t: "Coffee in Hà Nội", x: "Cà phê trứng (egg coffee) is a Hà Nội speciality. Iced coffee with condensed milk is often ordered as cà phê nâu đá in Hà Nội." },
    { t: "Tea and chè", x: "In the North, trà đá (iced tea) is a common street-side drink. The word chè can mean tea or a sweet dessert soup, depending on the context." }
  ],
  items: [
    { vi: "trà đá", en: "iced tea" },
    { vi: "cà phê đen", en: "black coffee" },
    { vi: "cà phê sữa đá", en: "iced coffee with condensed milk", note: "In Hà Nội you will often hear cà phê nâu đá." },
    { vi: "cà phê trứng", en: "egg coffee" },
    { vi: "nước mía", en: "sugarcane juice" },
    { vi: "sinh tố", en: "fruit smoothie" },
    { vi: "nước cam", en: "orange juice" },
    { vi: "nước dừa", en: "coconut water" },
    { vi: "nước chanh", en: "lime juice; lemonade" },
    { vi: "sữa", en: "milk" },
    { vi: "nước ngọt", en: "soft drink" },
    { vi: "bia hơi", en: "fresh draft beer", note: "A cheap, light beer sold at street-side bars in Hà Nội." },
    { vi: "rượu", en: "alcohol; rice wine" },
    { vi: "đá", en: "ice", ex: ["Cho tôi ít đá.", "A little ice, please."] },
    { vi: "hoa quả", en: "fruit", note: "In the South: trái cây." },
    { vi: "xoài", en: "mango" },
    { vi: "chuối", en: "banana" },
    { vi: "cam", en: "orange" },
    { vi: "bưởi", en: "pomelo" },
    { vi: "dứa", en: "pineapple", note: "In the South: thơm or khóm." },
    { vi: "dưa hấu", en: "watermelon" },
    { vi: "thanh long", en: "dragon fruit" },
    { vi: "vải", en: "lychee" },
    { vi: "sầu riêng", en: "durian" },
    { vi: "đu đủ", en: "papaya" },
    { vi: "dừa", en: "coconut" },
    { vi: "bơ", en: "avocado", note: "Bơ also means butter." },
    { vi: "táo", en: "apple" },
    { vi: "ổi", en: "guava" }
  ] };
