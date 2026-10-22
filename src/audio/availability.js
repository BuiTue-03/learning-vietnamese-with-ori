/** Which recordings actually exist. The app asks the browser once at start-up and fills `audioOK`. */

/** audioOK[id] is true when audio/<id>.mp3 loaded, false when it did not. Missing ids mean "not checked yet". */
export const audioOK = {};

export const hasAudio = (id) => audioOK[id] === true;

/** Path of the recording for an item or dialogue-line id. */
export const audioPath = (id) => "audio/" + id + ".mp3";

/* Checks which recordings exist. Browsers cap how many media elements can be alive at once
   (about a thousand in some, far fewer in others), so probe a few at a time and release each one. */
const PROBE_PARALLEL = 10;
export function probeAudio(items, onProgress) {
  return new Promise((resolve) => {
    const n = items.length;
    let next = 0, running = 0, finished = 0;
    if (!n) { resolve(); return; }
    function pump() { while (running < PROBE_PARALLEL && next < n) probeOne(items[next++]); }
    function probeOne(it) {
      let done = false, a = null, timer = null;
      running++;
      function fin(v) {
        if (done) return;
        done = true; clearTimeout(timer);
        audioOK[it.id] = v;
        if (a) { try { a.removeAttribute("src"); a.load(); } catch (e) {} a = null; }
        running--; finished++;
        if (onProgress && (finished === 100 || finished === 400) && finished < n) onProgress();
        if (finished === n) resolve(); else pump();
      }
      try {
        a = new Audio();
        a.preload = "metadata";
        a.addEventListener("loadedmetadata", () => { fin(true); });
        a.addEventListener("error", () => { fin(false); });
        timer = setTimeout(() => { fin(false); }, 5000);
        a.src = audioPath(it.id);
      } catch (e) { fin(false); }
    }
    pump();
  });
}
