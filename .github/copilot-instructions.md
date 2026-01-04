<!-- Copilot / AI agent instructions for Hemlock Bay project -->

# Hemlock Bay — Copilot instructions

This file contains concise, actionable guidance for AI coding agents working on the Hemlock Bay static site (Astro + Tailwind).

- Project type: Astro (static site) with Tailwind. See `package.json` scripts: `npm run dev`, `npm run build`, `npm run preview`.
- Key folders:
  - `src/pages/` — top-level pages and language subfolders (`en/`, `sv/`). Pages are Astro components.
  - `src/layouts/` — layout wrappers (notably `BaseLayout.astro`).
  - `src/components/` — reusable UI bits (`Masthead.astro`, `Marginalia.astro`, `OrnamentalRule.astro`).
  - `src/lib/` — helpers (e.g., `i18n.ts` exposes `getOrganizerLandingUrl` and alternate URLs).
  - `src/content/` — content markdown (e.g., `src/content/organizers/for-organizers.md`).
  - `styles/` — global CSS imported by `BaseLayout.astro`.
  - `docs/` — design and editorial docs; useful for tone and copy guidance.

Architecture & conventions (what matters):

- Pages are rendered with `BaseLayout.astro`; update layout props (`title`, `motto`, `subtitle`, `lang`) to affect meta and masthead.
- Localization is file-based: there are language subfolders under `src/pages` and route helpers in `src/lib/i18n.ts`. Prefer to use `getOrganizerLandingUrl(lang)` when generating links programmatically.
- Styling uses Tailwind with a small custom design token set in `tailwind.config.mjs` (colors `ink/gold/parchment`, fonts and letter-spacing keys like `hbWide`/`hbWider`). Use existing `hb-*` utility class naming conventions in components and pages.
- Fonts are provided via `@fontsource/*` dependencies in `package.json`; avoid adding external network font loads unless necessary.

Developer workflows & commands:

- Install: `npm install`
- Local dev (hot-reload): `npm run dev` — runs `astro dev`.
- Build for production: `npm run build` — runs `astro build`.
- Preview a build: `npm run preview` — runs `astro preview`.

Patterns and examples to follow:

- Add a new localized page: create `src/pages/<lang>/<slug>.astro` and reference it from `src/lib/i18n.ts` if it needs a canonical/alternate URL. Example: `src/pages/sv/for-arrangorer.astro` and `organizerLandingRoutes` in `src/lib/i18n.ts`.
- Reuse `BaseLayout.astro` for consistent head/meta and global CSS import. Example header usage in `src/pages/index.astro`.
- Component naming: files in `src/components/` are PascalCase and used as JSX-like tags in Astro pages.

Integration points and external deps:

- Astro (core): templates and server build/runtime. Config: `astro.config.mjs`.
- Tailwind: `tailwind.config.mjs` drives utility classes and custom theme tokens.
- No test runner is configured in `package.json`; changes should be validated locally with `npm run dev` and a production `npm run build`.

Editing guidance for AI:

- Make minimal, focused edits. Preserve `BaseLayout` API and CSS class names unless the change is a deliberate refactor across files.
- When adding routes or pages, update `src/lib/i18n.ts` only if a programmatic URL helper is required.
- Avoid changing fonts or theme tokens without updating `tailwind.config.mjs` and confirming visual output in dev preview.

When uncertain, validate by running `npm run dev` and visually inspecting the affected page(s).

If you update this file, ask a human reviewer to confirm content and localization fallbacks.
