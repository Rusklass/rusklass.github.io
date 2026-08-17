# 🌌 Ruslan Klassen Portfolio — Developer & Claude Guide

Personal academic, bioinformatic, and computational portfolio of **Ruslan Klassen** built with Next.js (App Router), Vanilla CSS Modules, and MDX.

---

## ⚡ Quick Commands
- **Install dependencies:** `npm install`
- **Start local dev server:** `npm run dev` (runs at `http://localhost:3000`)
- **Build static export:** `npm run build` (outputs static HTML/CSS/JS to `/out` directory)
- **Lint code:** `npm run lint`

---

## 🧭 Architecture & Code Conventions

### 1. Theming (Solar System Engine)
- The site uses a **9-stage CSS variable theme system** mapped to planetary bodies (`sun`, `mercury`, `venus`, `earth`, `mars`, `jupiter`, `saturn`, `uranus`, `neptune`).
- Controlled via `data-theme` attribute on `<html>` and switched in `src/components/ThemeSwitcher.js`.
- Always use CSS variables from `src/app/globals.css` (`var(--bg-primary)`, `var(--accent-primary)`, etc.).
- **Do NOT use TailwindCSS or utility-class frameworks.** Rely exclusively on Vanilla CSS Modules (`*.module.css`).

### 2. GitHub Pages & Static Export Rules
- Configured for full static export (`output: 'export'` in `next.config.mjs`).
- **Never add server-side endpoints** (`app/api/*`, `getServerSideProps`, Server Actions).
- **Dynamic route params are Promises** in Next.js 15+: `const { slug } = await params;`
- **Dynamic routes must pre-render:** Always include `export async function generateStaticParams()` in `[slug]/page.js`.

### 3. Content Management (MDX)
- Research posts: `src/content/posts/*.md`
- Software projects: `src/content/projects/*.md`
- Uses `gray-matter` for frontmatter metadata and `next-mdx-remote` for rendering.

### 4. Interactive Components
- `src/components/GeneticRain.js`: Canvas matrix nucleotide stream.
- `src/components/CodonLab.js`: DNA/RNA interactive codon synthesizer.
- `src/components/Sidebar.js`: Navigation and academic/social profiles.

---

## 🔍 Pre-Push Verification Checklist
1. Run `npm run build` — ensure 100% successful static export without SSR or param errors.
2. Check `git status` — ensure sensitive drafts and agent logs remain ignored by `.gitignore`.
