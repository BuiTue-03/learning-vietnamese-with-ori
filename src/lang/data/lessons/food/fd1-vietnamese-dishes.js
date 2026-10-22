// Lesson fd1 · Món Việt (Vietnamese dishes).
// Items are positional (audio fd1-01.mp3, fd1-02.mp3, ...): only ever APPEND items, never insert, delete or reorder.
export default { id: "fd1", group: "food", title: "Món Việt", sub: "Vietnamese dishes", unit: "dishes", icon: "bowl",
  tip: "Hà Nội names are used here. Some dishes have a different name in the South, shown in the notes.",
  culture: [
    { t: "Northern and Southern names", x: "The same dish can have two names. Fried spring rolls are nem rán in the North and chả giò in the South. Fried rice is cơm rang in the North and cơm chiên in the South." },
    { t: "Hà Nội favourites", x: "Phở, bún chả, bún thang, bánh cuốn and chả cá are closely linked with Hà Nội cooking." }
  ],
  items: [
    { vi: "phở bò", en: "beef noodle soup", ex: ["Cho tôi một bát phở bò.", "A bowl of beef phở, please."] },
    { vi: "phở gà", en: "chicken noodle soup" },
    { vi: "bún chả", en: "grilled pork with rice vermicelli", note: "A Hà Nội lunchtime classic." },
    { vi: "bún riêu", en: "rice vermicelli in crab and tomato soup" },
    { vi: "bún thang", en: "Hà Nội vermicelli soup with chicken, egg and ham" },
    { vi: "bún đậu mắm tôm", en: "fried tofu with vermicelli and shrimp paste", note: "The shrimp paste (mắm tôm) has a very strong smell." },
    { vi: "bánh cuốn", en: "steamed rice rolls" },
    { vi: "chả cá", en: "grilled fish with turmeric and dill" },
    { vi: "xôi", en: "sticky rice", note: "Often eaten for breakfast." },
    { vi: "cơm", en: "cooked rice; a meal", note: "Ăn cơm literally means “eat rice” and also means “have a meal”.", ex: ["Mời bạn ăn cơm.", "Please join me for a meal."] },
    { vi: "cơm rang", en: "fried rice", note: "In the South: cơm chiên." },
    { vi: "mì xào", en: "stir-fried noodles" },
    { vi: "miến", en: "glass noodles" },
    { vi: "cháo", en: "rice porridge" },
    { vi: "canh", en: "soup eaten with rice" },
    { vi: "nem rán", en: "fried spring rolls", note: "In the South: chả giò." },
    { vi: "nem cuốn", en: "fresh spring rolls", note: "In the South: gỏi cuốn." },
    { vi: "bánh xèo", en: "crispy savoury pancake" },
    { vi: "bánh chưng", en: "square sticky rice cake", note: "A traditional food for Tết." },
    { vi: "thịt kho", en: "braised pork" },
    { vi: "cá kho", en: "braised fish" },
    { vi: "rau muống xào", en: "stir-fried water spinach" },
    { vi: "đậu phụ sốt cà chua", en: "tofu in tomato sauce" },
    { vi: "trứng rán", en: "fried egg", note: "In the South: trứng chiên." },
    { vi: "chè", en: "sweet dessert soup", note: "In the North, chè can also mean tea." },
    { vi: "kem", en: "ice cream" }
  ] };
