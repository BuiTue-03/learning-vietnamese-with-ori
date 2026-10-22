/** The small message that appears at the bottom of the screen. */

let toastTimer = null;

export function say(msg) {
  const t = document.getElementById("toast");
  t.firstElementChild.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
}
