# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pokémon TCG collectors who both plan and track their collection. They use PokéBinder to lay out which card goes in which pocket of a binder (before or while sleeving physical cards) and to browse what they have collected, page by page. The project is also a personal/portfolio piece, so the owner and anyone reviewing the work are a secondary audience.

## Product Purpose

PokéBinder is a virtual card binder. Collectors create binders, browse every English Pokémon TCG set, and place cards into exact binder slots. Success means a collector can plan a binder precisely and enjoy flipping through it like a real one.

## Positioning

Two things count equally, and a set checklist or spreadsheet offers neither:

- **It feels like a real binder.** Binders have covers, colours, pages, pocket grids and plastic sleeves, and you flip through them page by page.
- **Placement is exact.** A card goes into a chosen pocket on a chosen page, so the virtual layout matches the physical binder.

## Operating Context

- Two main areas: **Binders** (`/`), which shows a binder's cover, pages, pocket grid and page flipping, and **Set List** (`/set-list`, `/set-list/[id]`), where users browse sets, filter and search cards, open a card in a modal, and add it to a binder slot through a binder picker and slot picker.
- Collectors often have their physical cards and binder in front of them while they use the app.

## Capabilities and Constraints

- Binders have a name, a colour (random by default, adjustable with a colour picker), a pocket size of 4, 9 or 12 per page, and 40 pages.
- Card and set data come only from the TCGdex API (`api.tcgdex.net/v2/en`) in English. This is fixed.
- Mobile is first-class: phones must work as well as desktop. Binders already use a dedicated mobile carousel.
- The app is dark-theme only. This is fixed.
- Binders currently live only in browser localStorage (zustand persist), with no accounts or backend. This reflects the current build, not a fixed constraint; sync or accounts are undecided.
- Not built yet: removing cards from a binder and persisting the current page (both are TODOs in the store).
- Terminology: "binder" (the UI also says "collection" when creating one), "pocket"/"slot", "page", "set", "series".

## Brand Commitments

- Name: **PokéBinder**, written with the accented é.
- Pokéball mark (`assets/PokeBall.tsx`) is used as the logo.
- Pokémon names, card images and set logos belong to their rights holders and are served through TCGdex. Do not imply an official affiliation.

## Evidence on Hand

- Live card and set imagery from TCGdex (logos, symbols, card scans).
- `assets/pokemon-card.jpg`, a placeholder card image.
- No users, testimonials, metrics or press exist. Do not invent any.

## Product Principles

1. **The binder metaphor is load-bearing.** Pages, pockets, sleeves and covers should behave the way a collector expects a physical binder to behave.
2. **Precision over approximation.** Users choose the exact page and pocket for each card, and the app keeps it there.
3. **Card art is the hero.** The interface supports the cards and should not compete with them.
4. **Equal on phone and desktop.** Every flow has to work fully on a phone.
