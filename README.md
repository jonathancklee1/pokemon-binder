# PokéBinder

A virtual Pokémon TCG card binder. Create binders, browse every English set, and place cards into exact binder pockets, then flip through them page by page like a real binder.

## Features

- **Binders**: name, colour, pocket size (4, 9 or 12 per page) and 40 pages each.
- **Set List**: browse all series and sets, filter and search cards, and add a card to a chosen page and pocket.
- **Mobile and desktop**: phones get a dedicated binder carousel.
- **Local storage**: binders are saved in the browser. No account or backend.

Card and set data come from the [TCGdex API](https://tcgdex.dev).

## Tech Stack

Next.js 16 (App Router, Cache Components, React Compiler), React 19, TypeScript, Tailwind CSS 4 with daisyUI, Zustand, and Vitest with Testing Library.

## Getting Started

Requires Node 24 and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command      | Description                |
| ------------ | -------------------------- |
| `pnpm dev`   | Start the dev server       |
| `pnpm build` | Build for production       |
| `pnpm start` | Serve the production build |
| `pnpm lint`  | Run ESLint                 |
| `pnpm test`  | Run the Vitest suite       |

CI runs lint, tests and build on every pull request and push to `master`.

## Project Structure

```
app/          Routes: binders (/) and set list (/set-list, /set-list/[id])
components/   UI components, grouped by binder and set-list
lib/          API calls, Zustand store, contexts, hooks, types and utils
```

## Disclaimer

Not affiliated with Nintendo, The Pokémon Company or Game Freak. Pokémon names, card images and set logos belong to their rights holders.
