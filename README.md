# NextBites

A fresh, feel-good recipe homepage built with Next.js, React, and TypeScript.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the recipe grid.

## Project structure

- `app/data/recipes.ts` contains the `Recipe` type and homepage recipe data.
- `app/components/RecipeCard.tsx` renders a recipe as a reusable typed card.
- `app/components/NavBar.tsx` provides the shared site navigation.
- `app/page.tsx` maps the recipes into a responsive home-page grid.
- `app/globals.css` contains the responsive site styles.

Run `npm run lint` and `npm run build` to check the project.
