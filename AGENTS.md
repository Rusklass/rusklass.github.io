<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 🌌 Ruslan Klassen Portfolio - AI Agent Guidelines

If you are an AI assistant (like Claude, Cursor, or ChatGPT) working on this repository, you **must** adhere to the following architectural guidelines:

## 1. Theme System (Solar System)
- The site uses a **9-stage CSS variable theme system** mapped to the planets (plus the Sun).
- Themes are controlled by modifying the `data-theme` attribute on the `<html>` root element.
- The `ThemeSwitcher.js` component controls this via React state and LocalStorage. 
- **DO NOT** use generic class-based theming (e.g., `dark`/`light`). Always use CSS custom properties defined in `src/app/globals.css`.
- **DO NOT** use TailwindCSS. This project uses purely Vanilla CSS modules (`*.module.css`).

## 2. Orbital UI Elements
- The social links in the `Sidebar.js` are positioned using a continuous 360-degree CSS animation (`animation: orbit`).
- To prevent the icons from flipping upside down during the orbit, they are wrapped in a `.counterRotate` div that reverses the animation.
- If you need to modify the spacing or add new links, ensure you recalculate the `angleDeg` mathematically in `Sidebar.js`.

## 3. Content Management (MDX)
- Research posts and projects are written in Markdown (`.md`) and stored in `src/content/posts` and `src/content/projects`.
- We parse frontmatter using `gray-matter` and render components using `next-mdx-remote`.
- **Frontmatter schema:** `title`, `date`, `excerpt`, `logo` (for projects), `link`, and `tags`.
- When adding new fields, you must update `src/lib/mdx.js` and the corresponding `page.js` view components.

## 4. Next.js App Router & Static Export
- This site is statically exported (`output: 'export'` in `next.config.mjs`) to be hosted on GitHub Pages.
- **DO NOT** introduce Server Actions, API routes (`app/api/*`), or any dynamic SSR rendering (e.g., `getServerSideProps`).
- All dynamic routes (`[slug]`) MUST use `generateStaticParams()` to pre-render the pages.
- `params` in Next.js 15+ Server Components is a Promise. You must `await params` before accessing `params.slug` in both components and `generateMetadata`.
