# Audio files

One MP3 per item. The app looks for each file by name, so the name must match exactly.

## Naming

- Words and phrases: `<lesson id>-NN.mp3`, for example `b0-01.mp3`, `b0-02.mp3`
- Dialogue lines: `d<number>-NN.mp3`, for example `d1-01.mp3`
- All lowercase, a hyphen, two-digit number, `.mp3`. GitHub Pages is case-sensitive: `B0-01.mp3` or `b0-1.mp3` will not be found.
- The full list of 1,188 names, with the text to say, is in [`../tools/audio-manifest.csv`](../tools/audio-manifest.csv).

## The number is the item's position

`b0-02` is the second item of lesson `b0`, in the order the lesson lists it. Because of this:

- New items must only be **added at the end** of a lesson. Never insert or reorder items, or every recording after that point would play the wrong word.
- Do not rename a recording to "fix" a number without checking the manifest first.

## Format

- MP3 (an `.m4a` file renamed to `.mp3` is not converted and may not play on every device).
- Mono, speech only, a short silence at the start and end, similar volume across files.

## Check your work

```
python tools/check_audio.py
```
