# Nói tiếng Việt

Everyday Vietnamese for visitors and newcomers, with Hà Nội (Northern) pronunciation.
A small, free web app: flashcards by situation, quizzes, typing practice, short dialogues, XP, levels, badges and a stick-figure guide you can dress up.

**Live app:** [Open Nói tiếng Việt](https://buitue-03.github.io/learning-vietnamese-with-ori/)

## What is inside

- More than 1,000 words and phrases in 40+ topics, plus 13 short dialogues
- Flashcards (Vietnamese → English and English → Vietnamese), multiple-choice quizzes, typing practice, daily practice
- Recordings by a native speaker (being added, see [audio/README.md](audio/README.md))
- Progress, XP, levels, badges and outfits, all saved in the learner's own browser (nothing is sent anywhere)
- A static site: no back end, no build step, no tracking (fonts load from Google Fonts, so an internet connection is needed for the intended look)

## Repository layout

| Path | What it is |
| --- | --- |
| `index.html` | The page shell: head, one empty `<main id="app">` and the script tag. No app code in it |
| `src/main.js` | Entry point: loads progress, draws the first screen, wires the events |
| `src/lang/` | Vietnamese content and language rules. `data/lessons/` has one small file per lesson, grouped by topic; `data/catalog.js` joins them. `text.js`, `tone.js`, `typing.js`, `questions.js` hold the rules (tone marks, answer checking, quiz questions) |
| `src/interact/` | Everything the learner sees and touches: `components/` (reusable pieces such as the mascot, lesson card, keyboard), `views/` (one file per screen), `actions/` (what each button does), `events.js` |
| `src/storage/` | Saving and loading progress in the browser (`localStorage`) |
| `src/audio/` | Finding which recordings exist, and playing them |
| `src/game/` | XP, levels, badges, outfits, streaks and spaced repetition |
| `src/utils/` | Tiny helpers (HTML escaping, dates, shuffling) |
| `src/styles/main.css` | All the styling |
| `tests/` | Small automatic tests for the language rules and for the lesson data |
| `about.html` | About page, linked from the app footer |
| `404.html` | Page shown for unknown addresses on GitHub Pages |
| `favicon.svg` | Site icon |
| `audio/` | One MP3 per word, phrase or dialogue line. Naming rules in [audio/README.md](audio/README.md) |
| `tools/audio-manifest.csv` | The full list of 1,188 audio file names with the Vietnamese and English text to record |
| `tools/check_audio.py` | Compares `audio/` with the manifest and reports missing, extra and misnamed files |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

Dependencies point one way only: `utils` → `lang` → `storage` → `game` → `audio` → `interact`. A lower folder never imports from a higher one.

## Run it on your computer

The app is split into ES modules, and browsers do not load modules from a `file://` address, so double-clicking `index.html` shows an empty page. Start a small local server instead:

```
python -m http.server 8000
```

then open `http://localhost:8000`. (`npm start` does the same if Node.js is installed.)

## Run the tests

Needs Node.js 20 or newer. There is nothing to install:

```
node --test
```

## Publish with GitHub Pages

1. Keep the whole folder structure as it is: `index.html`, `src/`, `audio/` and the other files all at the top level of the repository.
2. In the repository, open **Settings → Pages**, choose the `main` branch and the root folder, then save.
3. Wait up to about 10 minutes, then open the address shown on that page.

On a free GitHub account the repository must be public, so everyone with the address can see the files in it.

## Adding content

- **A new lesson:** add a file in `src/lang/data/lessons/<topic>/`, then list it in `src/lang/data/lessons/index.js`. Only ever append items to an existing lesson: audio file names are numbered by position (`audio/<lesson>-NN.mp3`), so reordering items would point recordings at the wrong words.
- **A new badge or outfit:** `src/game/badges.js` or `src/game/outfits.js` (outfit drawings are in `src/interact/components/mascot/`).

## Add or check recordings

```
python tools/check_audio.py
```

The script lists which of the 1,188 files are present, which are missing, and any file whose name does not match the manifest.
Inside the app, the footer link "Audio checklist" shows the same information per item.

## Content notes

- The lesson text was drafted with the help of an AI assistant and is being reviewed by a native Vietnamese speaker. Some mistakes may remain.
- Pronunciation follows the Hà Nội accent. Southern differences are noted where they matter.
- The app is for learning, not for official guidance on emergencies, travel rules, health or legal matters.

## Reporting a mistake

Open an issue (choose "Content or audio problem") and give the word or phrase, what is wrong, and what it should be.

## Credits

Typefaces Be Vietnam Pro and Bricolage Grotesque are loaded from Google Fonts under the SIL Open Font License.

## Licence

- **Code** (the app's HTML, CSS and JavaScript): MIT, see [LICENSE](LICENSE).
- **Lesson text and audio recordings:** © 2026 BUI GIA TUE - ORIANA BUI. All rights reserved unless stated otherwise. Please ask before reusing them.
