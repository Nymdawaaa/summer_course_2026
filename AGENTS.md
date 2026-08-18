# AGENTS.md

Teaching repo for a summer web course (HTML/CSS/JS + p5.js + Firebase).
Content is static lesson exercises — there is no build, test, or lint step;
open files directly in a browser. Don't restructure or "fix" layout/naming.

## Layout
- `week01`–`week07`: exercises grouped by day subfolder. Day-folder case is
  inconsistent (`Monday` vs `monday`) — preserve it.
- p5.js is vendored per-folder (`p5.min.js` copied into week05–07 dirs).
- `my-firebase-workspace/`: Firebase Hosting config. Run ALL `firebase`
  commands from here.
- `functions/`: untracked Firebase Cloud Functions scaffold, no real
  functions, not referenced in `firebase.json` (repo deploy ignores it).

## Firebase
- Default project: `summer-course-2026-nymka` (`.firebaserc`).
- `firebase.json` declares 3 hosting targets; only `project01`/`projects02`
  exist in `.firebaserc`. Deploying `project3` fails until you run
  `firebase target:apply hosting project3 <site>`.
- Public dirs: `projects/project01`, `projects/projects02`, `projects/project3`.

## Git
- No root `.gitignore`; `node_modules/`, `package*.json`, `functions/`,
  `week07/`, and `projects/` are untracked.
- Commits historically use generic messages like "updated summer project 2026
  course".