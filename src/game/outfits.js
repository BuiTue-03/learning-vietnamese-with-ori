/**
 * Outfits for the stick figure. `need` says how one is unlocked: a level, a badge, or { free: true }.
 * `grp: "sg"` marks the Singapore set shown in its own section.
 */
import { store } from "../storage/store.js";
import { levelNow } from "./levels.js";

export const OUTFITS = [
  { id: "tee",     vi: "Áo thun", en: "T-shirt", need: { level: 1 } },
  { id: "travel",  vi: "Du lịch", en: "Traveller", need: { level: 2 } },
  { id: "nonla",   vi: "Nón lá", en: "Conical hat", need: { level: 3 } },
  { id: "aodai",   vi: "Áo dài", en: "Áo dài", need: { level: 4 } },
  { id: "coat",    vi: "Áo ấm", en: "Warm coat", need: { level: 5 } },
  { id: "helmet",  vi: "Mũ bảo hiểm", en: "Helmet", need: { level: 6 } },
  { id: "baba",    vi: "Áo bà ba", en: "Bà ba blouse", need: { level: 7 } },
  { id: "rain",    vi: "Áo mưa", en: "Raincoat", need: { level: 8 } },
  { id: "khan",    vi: "Áo dài khăn đóng", en: "Áo dài and turban", need: { level: 9 } },
  { id: "kungfu",  vi: "Võ phục", en: "Martial arts uniform", need: { level: 10 } },
  { id: "scholar", vi: "Mũ cử nhân", en: "Graduate cap", need: { badge: "perfect" } },
  { id: "beanie",  vi: "Mũ len và khăn", en: "Beanie and scarf", need: { badge: "streak7" } },
  { id: "cape",    vi: "Áo choàng", en: "Hero cape", need: { badge: "streak30" } },
  { id: "nday",    vi: "Áo đỏ trắng Quốc khánh", en: "National Day tee", need: { badge: "w50" }, grp: "sg" },
  { id: "kurung",  vi: "Baju kurung", en: "Baju kurung (Malay)", need: { badge: "w100" }, grp: "sg" },
  { id: "melayu",  vi: "Baju Melayu và songkok", en: "Baju Melayu and songkok (Malay)", need: { badge: "w200" }, grp: "sg" },
  { id: "cheong",  vi: "Sườn xám", en: "Cheongsam (Chinese)", need: { badge: "w350" }, grp: "sg" },
  { id: "samfu",   vi: "Áo samfu", en: "Samfu (Chinese)", need: { badge: "w500" }, grp: "sg" },
  { id: "sari",    vi: "Sari", en: "Sari (Indian)", need: { badge: "w700" }, grp: "sg" },
  { id: "kebaya",  vi: "Sarong kebaya", en: "Sarong kebaya (Peranakan)", need: { badge: "w900" }, grp: "sg" },
  { id: "kurta",   vi: "Kurta", en: "Kurta (Indian)", need: { badge: "perfect10" }, grp: "sg" },
  { id: "crown",   vi: "Vương miện", en: "Crown", need: { badge: "all" } },
  { id: "hood",    vi: "Áo hoodie", en: "Hoodie", need: { free: true } },
  { id: "office",  vi: "Đồ công sở", en: "Office wear", need: { free: true } },
  { id: "sport",   vi: "Đồ thể thao", en: "Sportswear", need: { free: true } },
  { id: "chef",    vi: "Đầu bếp", en: "Chef", need: { free: true } },
  { id: "beach",   vi: "Đi biển", en: "Beach day", need: { free: true } },
  { id: "pj",      vi: "Đồ ngủ", en: "Pyjamas", need: { free: true } }
];

export const outfitById = (id) => OUTFITS.find((o) => o.id === id);

export function outfitUnlocked(o) {
  if (o.need.free) return true;
  if (o.need.level) return levelNow() >= o.need.level;
  return !!store.badges[o.need.badge];
}

/** The outfit that a celebration ({ kind: "level", level } or { kind: "badge", id }) unlocks, if any. */
export function outfitFor(c) {
  if (c.kind === "level") return OUTFITS.find((o) => o.need.level === c.level);
  if (c.kind === "badge") return OUTFITS.find((o) => o.need.badge === c.id);
  return undefined;
}
