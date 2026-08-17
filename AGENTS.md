<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 🧬 Ruslan Klassen Portfolio — AI Agent & Developer Guidelines

This repository contains the personal academic, bioinformatic, and computational portfolio of **Ruslan Klassen** (Institute of Biotechnology CAS / BIOCEV & UCT Prague). 

Any AI assistant or developer working on this codebase **must strictly adhere** to the following architecture and engineering guidelines.

---

## 1. 🪐 Theming Engine: 9-Stage Solar System
- **Planetary Stages**: The site implements a custom 9-stage theme system representing the celestial bodies: `sun`, `mercury`, `venus`, `earth`, `mars`, `jupiter`, `saturn`, `uranus`, and `neptune`.
- **Mechanism**: The active theme is controlled by the `data-theme` attribute on the root `<html>` element and managed via React state & `localStorage` in `src/components/ThemeSwitcher.js`.
- **CSS Variables**: All colors, backgrounds, borders, and glow effects must consume CSS custom properties defined in `src/app/globals.css` (e.g., `var(--bg-primary)`, `var(--accent-primary)`, `var(--text-primary)`, `var(--glow-accent)`).
- **Rule**: Never use generic light/dark utility classes. Always use the theme variables.

---

## 2. 🎨 Styling System: Pure Vanilla CSS Modules
- **No TailwindCSS**: Do **NOT** install or use TailwindCSS or utility-class frameworks.
- **Vanilla CSS Modules**: All component and page styles are written exclusively in scoped CSS Modules (`*.module.css`).
- **Aesthetic Principles**: Dark-mode glassmorphism, biopunk/cyberpunk accents, responsive typography, micro-interactions, and 60fps canvas animations.

---

## 3. 🚀 Next.js App Router & Static GitHub Pages Deployment
- **Static Export**: The repository is deployed to **GitHub Pages** using `output: 'export'` in `next.config.mjs`.
- **Static Constraints**:
  - **NO** dynamic server-side rendering (`getServerSideProps`, `cookies()`, `headers()`).
  - **NO** API routes (`src/app/api/*`).
  - **NO** Server Actions.
- **Dynamic Route Pre-rendering**:
  - Dynamic routes (e.g., `src/app/posts/[slug]/page.js`, `src/app/projects/[slug]/page.js`) **must** export `generateStaticParams()` to pre-render all static HTML pages at build time.
- **Next.js 15+ Async Params**:
  - Route `params` in Server Components is a `Promise`. You must `await params` before accessing `params.slug` in both the page component and `generateMetadata`.

---

## 4. 📝 Content Management (MDX)
- **Content Paths**:
  - Research Posts & Notes: `src/content/posts/*.md`
  - Software Projects: `src/content/projects/*.md`
- **Engine**: Frontmatter parsed via `gray-matter`; content rendered statically via `next-mdx-remote`.
- **Frontmatter Schema**:
  - Posts: `title`, `date`, `excerpt`, `tags`, `readTime`
  - Projects: `title`, `excerpt`, `logo`, `link`, `tags`, `order`
- **Modifications**: Updating frontmatter requires updating helper utilities in `src/lib/mdx.js` and their corresponding page views.

---

## 5. 🧬 Interactive Components & Visual Systems
- **`Sidebar.js`**: Sticky navigation dock with profile avatar, affiliations, social links (Google Scholar, ORCID, ResearchGate, LinkedIn, GitHub, Email), and numbered section routes.
- **`GeneticRain.js`**: HTML5 Canvas rendering matrix-style falling nucleotide streams (`A`, `U`, `G`, `C`, codons) synchronized with the current planetary theme accent.
- **`CodonLab.js`**: Real-time client-side codon translation laboratory converting DNA/RNA sequences into amino acid polypeptide chains with presets (SOD1, GFAP, GAPDH).
- **`ThemeSwitcher.js`**: Planetary selector carousel updating `data-theme`.

---

## 6. 🛠️ Development & Build Verification
- **Development Server**: `npm run dev`
- **Production Static Build**: `npm run build`
- **Validation**: Always run `npm run build` to verify that all routes generate without static export or hydration errors before committing.
