// Lesson b1 · Chào hỏi (Greetings and politeness).
// Items are positional (audio b1-01.mp3, b1-02.mp3, ...): only ever APPEND items, never insert, delete or reorder.
export default { id: "b1", group: "people", title: "Chào hỏi", sub: "Greetings and politeness", unit: "phrases", icon: "speech",
  tip: "Bạn means “you” (to a peer). Vietnamese has many words for “you” depending on age and relationship; bạn is a common neutral choice.",
  culture: [{ t: "Names and pronouns", x: "Friends often skip xin chào and greet with chào plus a pronoun and a name, such as chào anh Nam." }],
  items: [
    { vi: "Xin chào", en: "Hello", note: "Polite, works at any time of day." },
    { vi: "Cảm ơn", en: "Thank you", ex: ["Cảm ơn bạn.", "Thank you."] },
    { vi: "Xin lỗi", en: "Sorry; excuse me", ex: ["Xin lỗi, nhà vệ sinh ở đâu?", "Excuse me, where is the toilet?"] },
    { vi: "Vâng", en: "Yes (polite)", note: "Common in the North. In the South you will hear dạ more." },
    { vi: "Không", en: "No; not", ex: ["Không, cảm ơn.", "No, thank you."] },
    { vi: "Làm ơn", en: "Please (before a request)", ex: ["Làm ơn cho tôi nước lọc.", "Please give me some plain water."] },
    { vi: "Tạm biệt", en: "Goodbye" },
    { vi: "Tôi tên là…", en: "My name is…", ex: ["Tôi tên là Anna.", "My name is Anna."] },
    { vi: "Rất vui được gặp bạn", en: "Nice to meet you" },
    { vi: "Tôi không hiểu", en: "I don’t understand" },
    { vi: "Bạn có nói tiếng Anh không?", en: "Do you speak English?" }
  ] };
