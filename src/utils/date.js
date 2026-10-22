/** Local-calendar day helpers. Days are strings like "2026-10-22". */

export function pad2(n) { return String(n).padStart(2, "0"); }
export function fmtDay(d) { return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
export function today() { return fmtDay(new Date()); }
export function dayAdd(s, n) { const p = s.split("-"); return fmtDay(new Date(+p[0], +p[1] - 1, +p[2] + n)); }
