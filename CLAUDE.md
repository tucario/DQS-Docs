# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Documentation site for **Data Quality Sense** (dataqualitysense.com) — a Salesforce-native managed package for data quality management. Built with [Astro Starlight](https://starlight.astro.build/) and deployed via GitLab Pages.

## Commands

```bash
npm run dev          # Start dev server (http://localhost:4321/)
npm run build        # Production build → ./public/
npm run preview      # Preview production build locally
```

Build output goes to `./public/` (required by GitLab Pages). Static assets (favicon, videos) live in `./static/` (Astro's publicDir).

## Architecture

### Starlight Configuration

`astro.config.mjs` is the central config — sidebar structure, i18n locales, and component overrides are all defined there.

### Component Overrides

Two Starlight components are overridden via `components` in astro config:

- **`src/components/ThemeSelect.astro`** — Docusaurus-style sun/moon toggle replacing Starlight's default dropdown
- **`src/components/Head.astro`** — Extends default Head to add click-to-enlarge lightbox JS for all content images

### Interactive Components

- **`src/components/RegexTester.astro`** — Client-side Java regex tester with match highlighting, used on the Regex Tester reference page

### Styling

`src/styles/custom.css` — Overrides Starlight CSS variables for indigo accent colors. Light mode uses `[data-theme='light']` selector, dark mode uses `:root`. Also contains lightbox modal styles.

### Content Structure

All docs are MDX files in `src/content/docs/`. English is the root locale (no prefix), other languages use path prefixes (`/de/`, `/fr/`, etc.).

- **Root content** (`src/content/docs/`) — English pages, 30 pages across 6 sections
- **Language dirs** (`src/content/docs/{de,fr,es,ja,pt,pl,ar}/`) — Translated pages. Only `index.mdx` is translated per language; other pages fallback to English automatically

### Images and Media

- **Screenshots** go in `src/assets/screenshots/` — processed by Astro's image pipeline
- **Videos** go in `static/videos/` — served as-is, not processed
- Image paths from docs use relative imports (e.g., `../../../assets/screenshots/file.png` from a 3-level-deep page)
- All content images get automatic click-to-enlarge behavior via Head.astro

### i18n

8 locales configured with English as `root` (served at `/`). Sidebar section labels have `translations` objects in astro config. Starlight handles fallback content and "not yet translated" notices automatically.

### Deployment

GitLab CI (`.gitlab-ci.yml`) runs `npm ci && npm run build` on pushes to `main`. Output artifact is `public/`. Site URL: `https://dqs-documentation-f8780a.gitlab.io/`

## Key Conventions

- Screenshot TODO placeholders use MDX comments: `{/* TODO: Screenshot — description */}`
- Videos are embedded with `<video>` tags directly in MDX (not markdown image syntax)
- Internal links use absolute paths without base prefix (e.g., `/getting-started/installation/`)
- `screenshots-todo.md` in repo root tracks all planned screenshots with priorities
