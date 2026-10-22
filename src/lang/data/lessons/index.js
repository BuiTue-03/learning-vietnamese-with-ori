/**
 * Every lesson, in the order the app has always used.
 *
 * The ORDER MATTERS: it decides the order of search results, of the "topic" badges and their colours,
 * and which words are picked first. To add a lesson: create a file in the right group folder,
 * import it here and append it to the END of LESSON_LIST.
 */
import sixTones from "./foundations/b0-six-tones.js";
import alphabet from "./foundations/al-alphabet.js";
import pronounsFamily from "./people/fam-pronouns-family.js";
import greetings from "./people/b1-greetings.js";
import smallTalk from "./people/soc-small-talk.js";
import orderingFood from "./food/b2-ordering-food.js";
import numbersPrices from "./situations/b3-numbers-prices.js";
import askingTheWay from "./situations/b4-asking-the-way.js";
import vietnameseDishes from "./food/fd1-vietnamese-dishes.js";
import ingredientsFlavours from "./food/fd2-ingredients-flavours.js";
import drinksFruit from "./food/fd3-drinks-fruit.js";
import atTheTable from "./food/fd4-at-the-table.js";
import body from "./health/hl1-body.js";
import illnessSymptoms from "./health/hl2-illness-symptoms.js";
import doctorPharmacy from "./health/hl3-doctor-pharmacy.js";
import askingForHelp from "./health/hl4-asking-for-help.js";
import feelings from "./health/em-feelings.js";
import colours from "./daily-life/co-colours.js";
import numbersMoney from "./situations/nm-numbers-money.js";
import shopping from "./situations/sh-shopping.js";
import timeClock from "./daily-life/tm-time-clock.js";
import daysMonths from "./daily-life/dy-days-months.js";
import gettingAround from "./situations/tr-getting-around.js";
import hotel from "./situations/ht-hotel.js";
import simWifiBank from "./situations/sv-sim-wifi-bank.js";
import weather from "./daily-life/wt-weather.js";
import questionWords from "./grammar/qw-question-words.js";
import sentencePatterns from "./grammar/pt-sentence-patterns.js";
import classifiers from "./grammar/cl-classifiers.js";
import verbs from "./common-words/vb-verbs.js";
import adjectives from "./common-words/aj-adjectives.js";
import introductions from "./people/in-introductions.js";
import countriesLanguages from "./people/ct-countries-languages.js";
import jobs from "./people/jb-jobs.js";
import notUnderstanding from "./people/rp-not-understanding.js";
import places from "./situations/pl-places.js";
import sightseeing from "./situations/hn-sightseeing.js";
import clothes from "./daily-life/cs-clothes.js";
import home from "./daily-life/hm-home.js";
import work from "./society/wk-work.js";
import school from "./society/sc-school.js";
import hobbies from "./society/hb-hobbies.js";
import festivals from "./society/fs-festivals.js";
import positions from "./grammar/lc-positions.js";

export const LESSON_LIST = [
  sixTones, alphabet, pronounsFamily, greetings, smallTalk,
  orderingFood, numbersPrices, askingTheWay, vietnameseDishes, ingredientsFlavours,
  drinksFruit, atTheTable, body, illnessSymptoms, doctorPharmacy,
  askingForHelp, feelings, colours, numbersMoney, shopping,
  timeClock, daysMonths, gettingAround, hotel, simWifiBank,
  weather, questionWords, sentencePatterns, classifiers, verbs,
  adjectives, introductions, countriesLanguages, jobs, notUnderstanding,
  places, sightseeing, clothes, home, work,
  school, hobbies, festivals, positions
];
