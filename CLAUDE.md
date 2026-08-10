# 🌌 Ruslan Klassen Portfolio Guidelines

This project uses Next.js (App Router), Vanilla CSS Modules, and MDX. 
For detailed architectural instructions regarding the Solar System theme, the CSS orbital animations, and the MDX setup, please refer strictly to the rules outlined in `AGENTS.md`.

## Development Commands
- **Install:** `npm install`
- **Run local server:** `npm run dev`
- **Build static export:** `npm run build`
- **Format code:** Use standard JavaScript formatting; no ESLint is strictly enforced right now but keep it clean.

## Critical Reminders
- **Styling:** Do NOT use Tailwind. Do NOT use standard Light/Dark classes. Rely exclusively on the 9-stage planetary CSS variable system in `globals.css`.
- **Hosting:** It is deployed to GitHub Pages via `.github/workflows/deploy.yml`. Never add server-side logic (`getServerSideProps`, Server Actions, or API routes). Keep it statically exportable.
- **Routing:** All dynamic pages (`src/app/posts/[slug]/page.js`) must use `generateStaticParams()`.
- **Dynamic Params:** In Next.js 15, `params` are Promises. You must `await params` before accessing slug values.
