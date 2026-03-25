You are editing a Starlight documentation site for **Data Quality Sense** — a Salesforce-native managed package for data quality management.

## Before making any changes

1. Read `CLAUDE.md` for project architecture and conventions
2. Read `astro.config.mjs` for sidebar structure and i18n config
3. Read the specific page(s) the user mentions before editing

## Key rules

- All docs are MDX files in `src/content/docs/`
- English is root locale (no prefix), other languages: de, fr, es, ja, pt, pl, ar
- Screenshots go in `src/assets/screenshots/` — reference with relative paths (count the depth!)
- Videos go in `static/videos/` — reference as `/videos/filename.mp4`
- Internal links use absolute paths without base prefix: `/getting-started/installation/`
- Screenshot TODOs use: `{/* TODO: Screenshot — description */}`
- Images in numbered lists break numbering — put them after the list or inside a step (indented)
- Don't use `<Steps>` component — it's broken, use plain numbered lists
- After editing, run `npm run build` to verify
- Work on branch `feature/documentation-draft`, don't push unless asked
- Build output dir is `./public/`, static assets dir is `./static/`

## Screenshot plan

Check `screenshots-todo.md` in repo root for the full screenshot plan with priorities and status.

## Source code reference

The DQS source code (Apex, LWC, metadata) is at `git@bitbucket.org:tucario/data-quality-sense.git`. Always check the latest `release/*` branch for current implementation details when you need to verify features, limits, or behavior described in the docs.

## User request

$ARGUMENTS
