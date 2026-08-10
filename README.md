# Ruslan Klassen - Research Portfolio

A high-performance, futuristic portfolio built with **Next.js (App Router)**, featuring a custom MDX content engine and a unique 9-stage Solar System theme switcher.

## 🚀 Features

- **Custom MDX Engine:** Write research posts and project showcases in pure Markdown with YAML frontmatter. Automatically parsed and rendered via `next-mdx-remote`.
- **Solar System Theming:** A highly customized CSS variable-based theme engine supporting 9 distinct color palettes ranging from the Sun to Neptune.
- **Dynamic Satellite Links:** A CSS-animated, continuously orbiting 360-degree social link arch surrounding the profile avatar.
- **Static Export:** Fully optimized for static hosting (`output: 'export'`).
- **Automated Deployment:** CI/CD configured via GitHub Actions to automatically deploy to GitHub Pages on every push to `main`.

## 📂 Project Structure

- `src/app/` - Next.js App Router pages (About, Research, Projects, Posts).
- `src/components/` - Reusable UI components (`Sidebar.js`, `ThemeSwitcher.js`).
- `src/content/` - The MDX data source. Add new `.md` files to `/posts` or `/projects` to publish new content.
- `src/lib/mdx.js` - The backend utility that parses Markdown frontmatter and resolves slugs.
- `.github/workflows/deploy.yml` - GitHub Actions pipeline for Pages deployment.

## 🛠️ Content Management (Adding Projects & Posts)

To add a new project or post, simply create a new `.md` file in `src/content/projects` or `src/content/posts`. 

**Supported Frontmatter Variables:**
- `title`: The title of the post/project.
- `date`: Publishing date (YYYY-MM-DD).
- `excerpt`: A short summary for the preview cards.
- `logo`: (Projects only) Absolute path to a logo in the `public` folder (e.g., `/logo.png`).
- `tags`: Array of technical tags.
- `link`: External URL to the project.

## 💻 Local Development

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment

Deployment is fully automated. Simply commit your changes and push to the `main` branch. GitHub Actions will build the static output and push it to the `gh-pages` branch.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
