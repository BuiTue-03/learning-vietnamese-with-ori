/**
 * The six Vietnamese tones, with the English labels and the pronunciation hint shown on the cards.
 * Keys are the tone names used in lesson items (item.tone).
 */
export const TONES = {
  "ngang": { mark: "no mark", label: "Level", how: "Flat at mid pitch. Hold it steady." },
  "huyền": { mark: "grave ( ` )", label: "Falling", how: "Low and gently falling, a little breathy." },
  "sắc":   { mark: "acute ( ´ )", label: "Rising", how: "Starts mid and rises sharply." },
  "hỏi":   { mark: "hook above", label: "Dipping", how: "Dips down, then rises smoothly." },
  "ngã":   { mark: "tilde ( ~ )", label: "Broken rising", how: "Rises with a catch in the middle, like a tiny pause in the throat." },
  "nặng":  { mark: "dot below", label: "Heavy", how: "Low and short, cut off abruptly." }
};
export const TONE_ORDER = ["ngang", "huyền", "sắc", "hỏi", "ngã", "nặng"];
