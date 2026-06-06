# Gabriel Honorato — Portfolio

A professional portfolio website built with Next.js, TypeScript, and TailwindCSS, deployed to GitHub Pages.

## Tech Stack

- [Next.js](https://nextjs.org/) — Static export (output: "export")
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

The static export outputs to the `out/` directory. You can serve it locally with:

```bash
npx serve out
```

## Deploy

The site is automatically deployed to GitHub Pages via the [deploy workflow](.github/workflows/deploy.yml) on every push to `main`.

To trigger a manual deployment, go to the Actions tab and run the "Deploy to GitHub Pages" workflow.

## Sections

- **Hero** — Name, title, tagline, CTA buttons
- **About** — Bio, experience highlights, stats
- **Featured Projects** — 6 project cards with tech stacks and features
- **Skills** — Technologies organized by category
- **Experience Focus** — Domain expertise summary
- **Contact** — GitHub, LinkedIn, email links

## GitHub Pages Setup

This repository is configured as a GitHub Pages user site (`gabrielhonorato8357.github.io`). The deploy workflow requires the following setting:

1. Go to **Settings > Pages**
2. Under **Source**, select **GitHub Actions**