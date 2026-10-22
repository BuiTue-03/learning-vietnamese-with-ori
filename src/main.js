/**
 * Entry point. Loads the learner's saved progress, draws the first screen, wires the events,
 * then checks in the background which audio recordings exist and redraws once they are known.
 *
 * Folder map:
 *   lang/      Vietnamese content (lessons, dialogues) and rules about the language (tones, answer checking, questions)
 *   game/      XP, levels, badges, outfits, streaks and spaced repetition
 *   storage/   saving and loading progress in the browser
 *   audio/     finding and playing the recordings
 *   interact/  everything the learner sees and touches: components, views, click actions
 *   utils/     tiny helpers
 */
import { AUDIO_ALL } from "./lang/data/catalog.js";
import { loadStore } from "./storage/store.js";
import { sanitizeStore } from "./game/sanitize.js";
import { probeAudio } from "./audio/availability.js";
import { bindEvents } from "./interact/events.js";
import { render } from "./interact/render.js";
import { refreshAfterProbe } from "./interact/refresh.js";

loadStore();
sanitizeStore();
bindEvents();
render();
probeAudio(AUDIO_ALL, refreshAfterProbe).then(refreshAfterProbe);
