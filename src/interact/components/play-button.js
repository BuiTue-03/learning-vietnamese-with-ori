/** The "Listen" button. It is greyed out until the recording exists. */
import { hasAudio } from "../../audio/availability.js";

export function playBtn(id, cls) {
  const on = hasAudio(id);
  return '<button class="btn small ' + (on ? "" : "off") + ' ' + (cls || "") + '" data-act="play" data-id="' + id + '"' +
    (on ? ' aria-label="Listen"' : ' aria-disabled="true" aria-label="No audio yet"') + ">" +
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>' +
    '<span class="lb">' + (on ? "Listen" : "No audio yet") + "</span></button>";
}
