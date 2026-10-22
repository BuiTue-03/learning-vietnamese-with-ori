/** Playing one recording at a time. */
import { hasAudio, audioPath } from "./availability.js";

let player = null;

/**
 * Play the recording for `id`. `onProblem(message)` is called when there is nothing to play or the browser refuses,
 * so this module does not need to know how messages are shown.
 */
export function playRecording(id, onProblem) {
  if (!hasAudio(id)) { onProblem("No recording for this phrase yet."); return; }
  try {
    if (player) player.pause();
    player = new Audio(audioPath(id));
    player.play().catch(() => onProblem("The browser blocked playback. Tap again."));
  } catch (e) { onProblem("Could not play this recording."); }
}
