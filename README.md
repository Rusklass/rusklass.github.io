# Ruslan Klassen — Academic & Bioinformatic Portfolio

A high-performance personal portfolio and computational notebook built with **Next.js (App Router)**, **Vanilla CSS Modules**, and **MDX**, statically exported to **GitHub Pages**.

---

## Key Highlights & Features

- **9-Stage Solar System Theming:** A dynamic CSS variable-based theming engine supporting 9 planetary stages (`sun`, `mercury`, `venus`, `earth`, `mars`, `jupiter`, `saturn`, `uranus`, `neptune`). Real-time switching persists via `localStorage`.
- **Genetic Matrix Rain:** 60fps HTML5 Canvas rendering falling bioinformatic nucleotide sequences (`A`, `U`, `G`, `C`, and amino acid codons) synchronized with the active planetary accent color.
- **Interactive Codon Translation Lab (`CodonLab.js`):** Client-side molecular synthesizer translating DNA/RNA sequences to polypeptide chains with real-time codon mapping and gene presets (*SOD1*, *GFAP*, *GAPDH*).
- **Beyond Science Showcase (`/beyond`):** Dedicated interactive gallery highlighting explorations outside computational biology—fermentation science, field expeditions, and philosophy.
- **Statically Exported MDX Engine:** Research notes, essays, and software tools rendered statically via `gray-matter` and `next-mdx-remote` with full `generateStaticParams()` pre-rendering.
- **Dark-Mode Glassmorphism:** Pure Vanilla CSS Modules (`*.module.css`) without utility-class bloat or external CSS frameworks.
- **Automated CI/CD:** Zero-config GitHub Actions pipeline (`deploy.yml`) building and deploying static exports directly to GitHub Pages.

---

## Project Structure

```text
rusklass.github.io/
├── .github/workflows/         # GitHub Pages automated deployment workflow
├── public/                    # Static assets (images, fonts, badges, logos)
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout and theme wrapper
│   │   ├── globals.css        # Core design system & 9-stage planetary CSS tokens
│   │   ├── page.js            # Home overview & CodonLab showcase
│   │   ├── research/          # Omics pipelines & publications
│   │   ├── projects/          # Software tooling (PDT, Video Pipeline, etc.)
│   │   ├── beyond/            # Interdisciplinary & creative interests
│   │   └── posts/             # MDX blog posts & research notes
│   ├── components/
│   │   ├── Sidebar.js         # Sticky dock with social links & navigation
│   │   ├── GeneticRain.js     # Canvas-based falling nucleotide stream
│   │   ├── CodonLab.js        # DNA/RNA translation tool
│   │   └── ThemeSwitcher.js   # 9-stage planetary selector
│   ├── content/               # MDX content files (/posts and /projects)
│   └── lib/
│       └── mdx.js             # MDX frontmatter parsing & static params resolver
├── AGENTS.md                  # Comprehensive AI agent & architecture guidelines
├── CLAUDE.md                  # Quick CLI reference and pre-push checklist
└── next.config.mjs            # Static export configuration (output: 'export')
```

---

## Content Management (Adding Posts & Projects)

To publish new research posts or software projects, create a `.md` file inside `src/content/posts/` or `src/content/projects/`:

### Posts Frontmatter Schema (`src/content/posts/*.md`)
```markdown
---
title: "Multi-Omics Profiling of Glial Activation"
date: "2026-08-10"
excerpt: "Decoding single-cell spatial dynamics in acute spinal cord trauma."
tags: ["Bioinformatics", "scRNA-seq", "Astrocytes"]
readTime: "6 min read"
---
```

### Projects Frontmatter Schema (`src/content/projects/*.md`)
```markdown
---
title: "PDT - Primer Design Tool"
excerpt: "Automated degenerate primer design pipeline for high-throughput qPCR."
logo: "/logoPrimerDesignTool.png"
link: "https://github.com/Rusklass/primer-design-tool"
tags: ["Python", "Streamlit", "Bioinformatics"]
order: 1
---
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## Build & Static Export

```bash
# Build static HTML/CSS/JS export in /out
npm run build
```

The repository automatically triggers `.github/workflows/deploy.yml` on push to `master` to publish to GitHub Pages.

---

## Guidelines & Rules

For detailed architectural guidelines, static export constraints, and pair-programming instructions, see:
- [AGENTS.md](file:///c:/Users/UNITY/Documents/rusklass.github.io/AGENTS.md)
- [CLAUDE.md](file:///c:/Users/UNITY/Documents/rusklass.github.io/CLAUDE.md)
