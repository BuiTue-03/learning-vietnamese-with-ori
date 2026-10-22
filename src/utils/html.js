/** HTML helpers shared by every view. */

const ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };

/** Escape text so it is safe inside HTML content or a double-quoted attribute. */
export function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ENTITIES[c]);
}
