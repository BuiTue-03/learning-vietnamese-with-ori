#!/usr/bin/env python3
"""Compare the audio/ folder with tools/audio-manifest.csv.

Run from anywhere:  python tools/check_audio.py
Standard library only (Python 3.8+).
"""
import csv
import difflib
import sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
audio = root / "audio"
manifest = Path(__file__).resolve().parent / "audio-manifest.csv"

with open(manifest, encoding="utf-8-sig", newline="") as f:
    rows = list(csv.DictReader(f))
expected = {r["id"] + ".mp3": r for r in rows}

present = sorted(p.name for p in audio.iterdir() if p.is_file() and p.name != "README.md") if audio.exists() else []
present_set = set(present)

have = sorted(n for n in present if n in expected)
missing = [n for n in expected if n not in present_set]
unknown = [n for n in present if n not in expected]

print(f"Expected {len(expected)} files, found {len(have)} correct ({len(have) * 100 // max(1, len(expected))}%).")

# Progress per lesson / dialogue
groups = {}
for n, r in expected.items():
    g = groups.setdefault(r["group"], [r["group_title"], 0, 0])
    g[1] += 1
    if n in present_set:
        g[2] += 1
print("\nPer group (recorded/total):")
for gid, (title, total, got) in groups.items():
    mark = "done" if got == total else ("empty" if got == 0 else "partial")
    print(f"  {gid:<6} {got:>3}/{total:<3} {mark:<8} {title}")

if unknown:
    print(f"\n{len(unknown)} file(s) whose name is not in the manifest:")
    for n in unknown:
        close = difflib.get_close_matches(n, list(expected), n=1, cutoff=0.7)
        hint = f"  (did you mean {close[0]}?)" if close else ""
        note = "  [wrong case or extension]" if n.lower() in expected or n.rsplit(".", 1)[0] + ".mp3" in expected else ""
        print(f"  {n}{hint}{note}")

if missing and len(missing) <= 60:
    print(f"\nMissing ({len(missing)}): " + ", ".join(m[:-4] for m in missing))
elif missing:
    print(f"\n{len(missing)} files still to record (run with --list to print them all).")
    if "--list" in sys.argv:
        for m in missing:
            r = expected[m]
            print(f"  {m[:-4]:<8} {r['vietnamese']}")

sys.exit(1 if unknown else 0)
