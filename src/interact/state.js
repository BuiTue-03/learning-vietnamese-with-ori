/** Screen state: what is showing right now. (Saved progress is in storage/store.js; this is forgotten on reload.) */

export const state = {
  view: "home", lesson: null, card: 0, flipped: false, quiz: null, typing: null, result: null,
  confirmReset: false, query: "", pron: 0, showEn: true, dlg: null, onlyMissing: false, closed: {}
};
