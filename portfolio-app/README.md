
## Ntsika Ngilane — Portfolio

A compact, responsive portfolio site implemented with Vite, React, and Tailwind CSS. The UI is delivered as a single-page React component, `src/Portfolio.jsx`, and showcases skills, proficiency bars, projects, tools and a contact CTA.

This `portfolio-app` folder is self-contained and ready for local development, production builds and static hosting.

---

**Author:** Ntsika Ngilane

**Tech stack:** Vite, React 18, Tailwind CSS, PostCSS, Autoprefixer, Lucide icons

---

**Table of contents**
- Project overview
- Prerequisites
- Install & run (PowerShell)
- Build & preview
- Dependencies (exact)
- Project structure
- Troubleshooting
- Additional notes & next steps

---

**Prerequisites**

- Node.js (recommended LTS: 18.x or 20.x). Vite 5+ works with Node >=16, but using Node 18+ is recommended.
- npm (bundled with Node). Optionally, use Yarn or pnpm.

Verify your environment (PowerShell):

```powershell
node --version
npm --version
```

---

**Install & run (local development)**

Open PowerShell and run the following commands from the repo root or directly inside `portfolio-app`:

```powershell
# change directory to the app
cd "c:\Users\Arwe\Documents\NTSNGI620_FTO2505_Ntsika-Ngilane_SDF_Portfolio_Piece\portfolio-app"

# install dependencies
npm install

# start the dev server (Vite)
npm run dev
```

The dev server will be available at: `http://localhost:5173`

Tip: If you prefer a clean, reproducible install use `npm ci` (requires a lockfile).

---

**Build for production & preview**

```powershell
# build an optimized production bundle
npm run build

# preview the production build locally
npm run preview
```

The build output is written to `dist/` and can be deployed to any static host (Netlify, Vercel, GitHub Pages, Surge, etc.).

---

**Dependencies (exact versions used in this project)**

These versions are declared in `package.json` and were installed during setup:

- `react` — ^18.2.0
- `react-dom` — ^18.2.0
- `lucide-react` — ^0.276.0

Dev dependencies:

- `vite` — ^5.0.0
- `@vitejs/plugin-react` — ^4.0.0
- `tailwindcss` — ^3.4.7
- `postcss` — ^8.4.23
- `autoprefixer` — ^10.4.14

If you change versions, re-run `npm install` and verify the app starts.

---

**Project structure (key files)**

- `index.html` — Vite entry HTML file
- `src/main.jsx` — React bootstrap (imports global CSS)
- `src/Portfolio.jsx` — Main UI component (single-page layout)
- `src/index.css` — Tailwind entry (`@tailwind base/components/utilities`)
- `public/avatar.jpg` — Public avatar image served at `/avatar.jpg`
- `tailwind.config.cjs` — Tailwind configuration (content paths)
- `postcss.config.cjs` — PostCSS plugin config
- `package.json` — scripts & dependency manifest
- `CODE_EXPLANATION.txt` — human-readable explanation of the code and structure

---

**Troubleshooting**

- Blank page or runtime errors:
	- Open the browser DevTools Console and check for import or runtime errors.
	- Ensure `npm install` completed without errors and that `node_modules` exists.

- Tailwind styles not applied:
	- Confirm `src/index.css` is imported in `src/main.jsx`.
	- Restart the dev server after changing `tailwind.config.cjs`.

- Vite plugin error (e.g. missing `@vitejs/plugin-react`):
	- Run `npm install` and verify `@vitejs/plugin-react` is present under `devDependencies` in `package.json`.

- Vulnerabilities reported by `npm audit`:
	- Run `npm audit` to inspect issues and `npm audit fix` to attempt automatic fixes.
	- Some fixes may require manual review or `--force` and could introduce breaking changes.

---

**Customizations & next steps**

- Change the avatar: replace `public/avatar.jpg` (the app references `/avatar.jpg`).
- Convert to TypeScript: add TypeScript and rename files to `.tsx`.
- Add linting & formatting: ESLint + Prettier config and a `lint` script.
- Add CI: GitHub Actions workflow to run `npm ci` and `npm run build` on PRs.

If you want, I can implement any of the above (TypeScript conversion, ESLint, CI). Tell me which and I will create a branch and PR.

---


**Repository & Demo**

- Source repository: [NTSNGI620_FTO2505_Ntsika-Ngilane_SDF_Portfolio_Piece](https://github.com/Ntsika-Ngilane-dev/NTSNGI620_FTO2505_Ntsika-Ngilane_SDF_Portfolio_Piece.git)
- Demo / walkthrough video: [Loom — Portfolio walkthrough](https://www.loom.com/share/00c7475866e2468b82203817f596130b)

---

**Contact & credits**

- Author: **Ntsika Ngilane**
- Avatar image path: `public/avatar.jpg`
- Code explanation: `portfolio-app/CODE_EXPLANATION.txt`

---

Thank you — if you'd like, I can now:
- commit these docs and scaffold to a branch and push,
- add ESLint/Prettier and a CI workflow, or
- run `npm run build` and verify the production preview locally.


