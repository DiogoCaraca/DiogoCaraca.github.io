# diogocaraca.github.io

Personal landing page of Diogo Caraça, full-stack engineer in Zurich.
Live at **https://diogocaraca.github.io**.

## Stack and key decisions

- **Astro, static output.** No server, no backend. Deployed to GitHub Pages by GitHub Actions.
- **Zero required JavaScript.** Every effect is CSS; the mobile menu and project details use native `<details>`. The only script closes the mobile menu after a tap.
- **Content outside the code.** Projects live in `content/projects/*.md`, photos in `content/photos/`. All other copy lives in `src/i18n/en.ts`.
- **i18n-ready.** English at launch. German and Portuguese are added as `src/i18n/de.ts` and `pt.ts` plus a locale entry in `astro.config.mjs`; the language switcher appears automatically once a second locale exists.
- **Build-time GitHub feed.** The "On GitHub" section is fetched from the GitHub API at build time, filtered (no forks, no archived repos, description required), and hidden when fewer than two repos qualify. A cached copy in `src/data/github-cache.json` keeps builds working offline. A weekly scheduled build keeps it fresh.
- **Accessibility first.** WCAG AA contrast on every text pair, visible focus ring, skip link, `prefers-reduced-motion` turns off all motion, and no animation ever hides content.

## Commands

| Command | What it does |
| :- | :- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Serve the build locally |
| `npm run og` | Regenerate `public/og.png` and the touch icon |

## Project docs

Planning and research live in `docs/`: requirements, the landing brief, and the research reports behind the design.
