/** Text normalisation for searching and for checking typed answers. */

export function fold(s) { return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase(); }
export function shortEn(s) { return s.replace(/\s*\(.*\)\s*$/, "").replace(/;.*$/, ""); }
/* New-style tone marks (hoà, khoẻ, thuỷ) are rewritten to the traditional style (hòa, khỏe, thủy) so either is accepted. Only applied at the end of a word (hoạch, toán stay as they are); "qu" is left alone (quý). */
const TONE_OLD = { "à": "ò", "á": "ó", "ả": "ỏ", "ã": "õ", "ạ": "ọ", "è": "ò", "é": "ó", "ẻ": "ỏ", "ẽ": "õ", "ẹ": "ọ" };
export function unifyTone(s) {
  s = s.replace(/o([àáảãạ])(?!\p{L})/gu, (m, v) => TONE_OLD[v] + "a");
  s = s.replace(/o([èéẻẽẹ])(?!\p{L})/gu, (m, v) => TONE_OLD[v] + "e");
  s = s.replace(/(^|[^q])u([ýỳỷỹỵ])(?!\p{L})/gu, (m, pre, v) => pre + { "ý": "ú", "ỳ": "ù", "ỷ": "ủ", "ỹ": "ũ", "ỵ": "ụ" }[v] + "y");
  return s;
}
export function normAns(s) { return unifyTone(String(s).normalize("NFC").toLowerCase().replace(/[.,!?…;:"“”‘’']/g, "").replace(/\s+/g, " ").trim()); }
