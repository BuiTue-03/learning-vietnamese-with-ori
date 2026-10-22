/** The home screen: player card, daily practice, search and the list of lessons. */
import { store, playerName } from "../../storage/store.js";
import { ALL, LESSONS, DIALOGUES, lessonById } from "../../lang/data/catalog.js";
import { GROUPS } from "../../lang/data/groups.js";
import { greeting } from "../../lang/greeting.js";
import { BADGES } from "../../game/badges.js";
import { dailyItems, dueItems } from "../../game/srs.js";
import { doneToday } from "../../game/daily.js";
import { learned } from "../../game/progress.js";
import { streak } from "../../game/streak.js";
import { countKeys } from "../../utils/collections.js";
import { esc } from "../../utils/html.js";
import { state } from "../state.js";
import { ICONS } from "../components/icons.js";
import { mascot } from "../components/mascot/index.js";
import { modeToggle } from "../components/mode-toggle.js";
import { xpSummary } from "../components/xp-summary.js";
import { lessonCard } from "../components/lesson-card.js";
import { dialogueCard } from "../components/dialogue-card.js";
import { resultsHtml } from "../components/search-results.js";

/** The order lessons appear in inside their group. */
const HOME_ORDER = ["b0", "al", "fam", "b1", "soc", "in", "ct", "jb", "rp", "b2", "fd1", "fd2", "fd3", "fd4", "hl1", "hl2", "hl3", "hl4", "em", "b3", "nm", "sh", "b4", "tr", "ht", "sv", "pl", "hn", "tm", "dy", "wt", "co", "cs", "hm", "wk", "sc", "hb", "fs", "qw", "pt", "cl", "lc", "vb", "aj"];

const FLAME = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">' + ICONS.flame + "</svg>";

export function homeView() {
  const g = xpSummary(), gr = greeting(), st = streak();
  const learnedN = ALL.filter(learned).length;
  const badgeN = countKeys(store.badges);
  const due = dueItems().length, done = doneToday(), goal = store.goal, can = !!dailyItems();
  const gpct = Math.min(100, Math.round(done / goal * 100));
  const res = store.resume.lesson && lessonById(store.resume.lesson) ? store.resume : null;
  function groupHead(id, vi, en, n) {
    const open = !state.closed[id];
    return '<h2><button class="gh" data-act="grp" data-id="' + id + '" aria-expanded="' + open + '"><span class="chev" aria-hidden="true">' + (open ? "▾" : "▸") + '</span>' + esc(vi) + ' <span>' + esc(en) + '</span><span class="cnt">' + n + '</span></button></h2>';
  }
  const groups = GROUPS.map((gp) => {
    const list = LESSONS.filter((l) => l.group === gp.id).sort((a, b) => {
      const x = HOME_ORDER.indexOf(a.id), y = HOME_ORDER.indexOf(b.id);
      return (x < 0 ? 99 : x) - (y < 0 ? 99 : y);
    });
    return '<section class="group">' + groupHead(gp.id, gp.vi, gp.en, list.length) +
      (state.closed[gp.id] ? "" : '<div class="lessons">' + list.map(lessonCard).join("") + "</div>") + "</section>";
  }).join("") +
    '<section class="group">' + groupHead("dlg", "Hội thoại", "Dialogues", DIALOGUES.length) +
    (state.closed.dlg ? "" : '<div class="lessons">' + DIALOGUES.map(dialogueCard).join("") + "</div>") + "</section>";
  const q = state.query.trim();
  return '<header class="top"><h1 class="brand" tabindex="-1">Nói tiếng Việt<small>Everyday Vietnamese for visitors and newcomers · Hà Nội pronunciation</small></h1>' +
    '<p class="tally"><b>' + learnedN + '</b> of ' + ALL.length + ' learned</p></header>' +
    '<section class="player" aria-label="Your progress">' + mascot({ pose: "wave", size: 72 }) +
    '<div class="who"><div class="bubble"><b>' + (store.name ? esc(gr[0].replace("!", ", " + playerName() + "!")) : gr[0]) + '</b><small>' + (store.name ? esc(gr[1].replace("!", ", " + playerName() + "!")) : gr[1]) + '</small></div>' +
    '<div class="lvl"><b>Level ' + g.lv + '</b><span>' + esc(g.L.vi) + ' · ' + esc(g.L.en) + '</span></div>' +
    '<div class="bar" role="progressbar" aria-label="XP to next level" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + g.pct + '"><i style="width:' + g.pct + '%"></i></div>' +
    '<div class="chips"><span>' + g.text + '</span><span>' + FLAME + (st > 0 ? st + (st === 1 ? " day" : " days") : "Start a streak today") + '</span><span>' + badgeN + '/' + BADGES.length + ' badges</span></div></div>' +
    '<button class="btn small" data-act="me">Outfits, badges and settings</button></section>' +
    '<section class="panel" aria-label="Daily practice"><div class="toolbar"><h2>Daily practice</h2><span class="tally">' + done + ' / ' + goal + ' words today</span></div>' +
    '<div class="bar"><i style="width:' + gpct + '%"></i></div>' +
    '<p>' + (can ? (due > 0 ? due + ' word' + (due === 1 ? "" : "s") + ' due for review.' : 'Nothing is due. You can still practice what you have learned.') : 'Learn a few words first. They will show up here for review.') + '</p>' +
    '<div class="ctrl"><button class="btn primary" data-act="daily"' + (can ? "" : " disabled") + '>Start daily practice</button>' +
    (res ? '<button class="btn" data-act="open" data-id="' + res.lesson + '" data-card="' + res.card + '">Continue: ' + esc(lessonById(res.lesson).title) + '</button>' : "") + '</div></section>' +
    '<div class="toolbar">' + modeToggle() + '</div>' +
    '<input id="q" class="search" type="search" placeholder="Search a word (tones optional)" aria-label="Search words" value="' + esc(state.query) + '" autocomplete="off" spellcheck="false">' +
    '<div id="results" class="results"' + (q ? "" : " hidden") + '>' + (q ? resultsHtml(q) : "") + '</div>' +
    '<div id="browse" class="group" style="gap:1.25rem"' + (q ? " hidden" : "") + '>' + groups + '</div>' +
    '<div class="foot"><a class="link" href="about.html">About this app</a><button class="link" data-act="author">Audio checklist (for the author)</button></div>';
}
