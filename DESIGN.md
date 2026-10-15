---
name: PokéBinder
description: A virtual Pokémon TCG binder in a quiet dark shell that lets the binder and card art lead.
colors:
  pokeball-yellow: "#facc15"
  pokeball-yellow-bright: "#fde047"
  ink-on-yellow: "#171b26"
  night-ground: "#0b0d12"
  slate-surface: "#13161d"
  slate-raised: "#1c2029"
  hairline: "rgb(255 255 255 / 0.08)"
  hairline-hover: "rgb(255 255 255 / 0.15)"
  fog-muted: "#9aa1b2"
  paper-foreground: "#ededed"
  white: "#ffffff"
  danger-red: "#dc2626"
  legal-green: "#6ee7b7"
  legacy-background: "#0a0a0a"
  legacy-secondary-background: "#2c303b"
  legacy-secondary-text: "#fff0ca"
  legacy-border: "#5a5e6a"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.33
  numeric:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    fontFeature: "tnum"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  2xl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.pokeball-yellow}"
    textColor: "{colors.ink-on-yellow}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 14px"
    height: "36px"
  button-primary-hover:
    backgroundColor: "{colors.pokeball-yellow-bright}"
  button-add:
    backgroundColor: "transparent"
    textColor: "{colors.pokeball-yellow}"
    rounded: "{rounded.md}"
    size: "36px"
  button-add-hover:
    backgroundColor: "{colors.pokeball-yellow}"
    textColor: "{colors.ink-on-yellow}"
  button-danger:
    backgroundColor: "{colors.danger-red}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    height: "36px"
  input-search:
    backgroundColor: "{colors.slate-surface}"
    textColor: "{colors.paper-foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "40px"
  panel:
    backgroundColor: "{colors.slate-surface}"
    rounded: "{rounded.xl}"
    padding: "16px"
  tile:
    backgroundColor: "{colors.slate-surface}"
    rounded: "{rounded.xl}"
    padding: "10px"
  tile-hover:
    backgroundColor: "{colors.slate-raised}"
  segment-track:
    backgroundColor: "{colors.night-ground}"
    rounded: "{rounded.md}"
    padding: "2px"
  segment-active:
    backgroundColor: "{colors.slate-raised}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  nav-link:
    textColor: "{colors.fog-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  nav-link-active:
    backgroundColor: "{colors.slate-surface}"
    textColor: "{colors.white}"
  chip-abbreviation:
    backgroundColor: "{colors.pokeball-yellow}"
    textColor: "{colors.ink-on-yellow}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  popover:
    backgroundColor: "{colors.slate-raised}"
    rounded: "{rounded.xl}"
    padding: "16px"
---

# Design System: PokéBinder

## Overview

**Creative North Star: "The Quiet Shelf"**

The app is the shelf, not the binder. A blue-black working shell steps back so the preserved binder object (cover, pages, pockets, glossy sleeves) and the Pokémon card art carry all the colour. Chrome is flat, tonal and hairlined: three dark steps, one muted text grey, one yellow accent.

Density is calm and tool-like: one toolbar per surface, tiles in an even grid, counts in tabular numerals. The only atmospheric gesture is borrowed from the content itself: the active binder's cover colour (`--binder`) lights the stage floor and underlines its tab. Dark theme only.

Preserved, not part of the redesign: the PokéBinder logo (Pokéball mark plus yellow wordmark), the binder object (BinderCover, BinderPage, BinderDesktop, BinderCarouselMobile), card images, and the `.sleeve` glossy pocket overlay.

**Key Characteristics:**
- Flat tonal layers (ground, surface, raised) separated by 1px hairlines.
- One brand accent, Pokéball yellow, reserved for action, focus and selection.
- The binder's own colour is the only ambient light.
- Tabular numerals wherever a count appears.

## Colors

A near-monochrome blue-black ladder with a single warm accent; content brings the colour.

### Primary
- **Pokéball Yellow** (pokeball-yellow): primary buttons, the active nav icon, add-to-binder buttons, focus outlines, selected slots, the set abbreviation chip, hover arrows. Text on it is always Ink on Yellow. Hover brightens to Pokéball Yellow Bright.

### Neutral
- **Night Ground** (night-ground): page background, nav bar, segmented and pager tracks, focused field fill.
- **Slate Surface** (slate-surface): panels, tiles, search field, active nav pill.
- **Slate Raised** (slate-raised): tile hover, active segment, popovers.
- **Hairline** (hairline): every border and divider; Hairline Hover on hovered tiles.
- **Fog Muted** (fog-muted): secondary text, counts, inactive tabs and icons.
- **Paper Foreground** (paper-foreground) and **White**: body text and headings/active labels.

### Status
- **Danger Red** (danger-red): the confirm-delete button only; the delete trigger tints red on hover.
- **Legal Green** (legal-green): legal-format chips on a 15% emerald wash; non-legal formats strike through in Fog Muted.

### Legacy
The `legacy-*` tokens (`--background`, `--secondary-background`, `--secondary-text`, `--border`) still exist because the preserved binder components and older code read them. New chrome uses the ground/surface/raised ladder instead. `--primary-text` is not legacy: it is Ink on Yellow.

### Named Rules
**The Yellow Means Act Rule.** Pokéball Yellow marks something you can do, something focused, or the thing you picked. It never fills a panel or tints a background.

**The Binder Lights The Room Rule.** The active binder's cover colour (`--binder`) is the only ambient colour in the chrome: a 2px tab underline mixed 25% toward white, and a radial floor light at 16% on the stage. No other gradients in the shell.

## Typography

**Body Font:** System UI sans stack (no web font is loaded; the stack lists Inter first, then -apple-system, Segoe UI, Roboto).

**Character:** One family, weight and size do the work. Headings are bold and slightly tightened; everything else is regular or semibold at small sizes.

### Hierarchy
- **Display** (700, 1.5rem mobile / 1.875rem desktop, -0.025em): page headings ("Binders", "Pokémon Sets", set name).
- **Headline** (600, 1.125rem mobile / 1.25rem desktop, -0.025em): the editable binder name in the toolbar.
- **Title** (600, 15px, 1.375): tile names on set and card tiles.
- **Body** (400-500, 0.875rem): controls, nav, counts, metadata.
- **Label** (600-700, 0.75rem): chips and badges.
- **Numeric** (600, 1.25rem mobile / 1.5rem desktop, tabular): set stats row.

### Named Rules
**The Tabular Count Rule.** Every count, page number and stat uses tabular numerals so figures do not jitter as they change.

## Layout

Content sits in a centred 1280px column with 16px side padding on mobile and 32px from md up; the nav bar shares the same column at 64px tall. Spacing runs on a 4px grid, mostly 12, 16, 20 and 24px. Each page opens with a heading block (heading plus a muted count or description), then one control row, then content.

Tile grids go 2 columns, 3 at sm, 4 at lg, 5 at xl, with 12px gaps (16px from md). The binder toolbar wraps on small screens: identity first, controls drop to a full-width row, and the segmented control and pager each stretch to full width below sm. Mobile is first-class; every flow works at 390px.

## Elevation & Depth

Flat by default. Depth comes from the tonal ladder (ground, surface, raised) and hairline borders, not shadows. Shadows appear only on things that float above the page.

### Shadow Vocabulary
- **Popover** (`0 12px 32px rgb(0 0 0 / 0.5)`): colour picker and delete-confirm dropdowns.
- **Dialog** (`0 24px 64px rgb(0 0 0 / 0.6)`): the add-card modal.
- **Swatch edge** (`inset 0 0 0 1px rgb(255 255 255 / 0.2)`): keeps any binder colour legible against the surface.

### Named Rules
**The Floating Only Rule.** Panels and tiles never cast shadows at rest. A drop shadow means the element sits above the page (popover, dialog).

## Shapes

Soft, consistent rounding by role: 16px for panels, tiles, popovers and dialogs; 24px for the binder stage and dashed empty states; 12px for image wells and the colour swatch; 8px for buttons, fields, segmented tracks and pagers; 6px for chips and segment items. Borders are always 1px Hairline; empty states use a dashed hairline. Image wells for set logos are 16:10 on a 3% white fill.

## Components

### Buttons
- **Primary:** Pokéball Yellow with Ink on Yellow, semibold 14px, 36px tall (40-44px in empty states and dialogs), 8px radius, optional 16px leading icon. Hover brightens to Pokéball Yellow Bright.
- **Add (square icon):** 36px, hairline border, yellow plus icon; hover fills yellow with ink icon.
- **Icon (pager, toolbar):** 36px, Fog Muted icon turning white on hover, 30% opacity when disabled.
- **Danger:** delete trigger is a hairline icon button that tints red on hover; the confirm button is solid Danger Red.
- **Focus:** a 2px Pokéball Yellow outline at 2px offset on every link, button and input.

### Chips
- **Abbreviation:** yellow fill, ink text, 6px radius.
- **Legal format:** emerald wash with Legal Green text when legal; Fog Muted strike-through on a 5% white wash when not.

### Cards / Containers
- **Panel:** Slate Surface, 1px hairline, 16px radius, 12-16px padding (24px on the set header at md).
- **Tile (set and card):** Slate Surface, hairline, 16px radius, 10px padding; image well on top, then a strip with title, muted count or #number, and a trailing affordance. Hover lifts to Slate Raised with Hairline Hover; set logos scale 1.05.

### Inputs / Fields
- **Search:** 40px, Slate Surface, hairline, 8px radius, leading muted search icon, 320px from sm up. Focus shifts the border to yellow at 60%.
- **Select (dialog):** 44px, Night Ground fill, same focus treatment.
- **Inline name edit:** transparent until hover (5% white) or focus (Night Ground fill, 1px white/20 ring).

### Segmented Control
Night Ground track with hairline border and 2px inset; options are muted text, the checked option fills Slate Raised with white text. Used for pocket size (4, 9, 12).

### Navigation
- **Top bar:** Night Ground with a bottom hairline; logo left, links right.
- **Links:** 14px medium, Fog Muted, 8px radius; hover 5% white wash; active is a Slate Surface pill with white text and a yellow icon. Icons hide below sm.
- **Binder tabs:** underline tabs on a bottom hairline; each shows a 10px colour dot, name and muted count; the active tab is white with the `--binder` underline.

### Binder Stage (signature)
A 24px-radius hairline frame whose background is a radial floor light in the active binder's colour; it holds the preserved binder object untouched.

## Do's and Don'ts

### Do:
- **Do** build chrome from the ground, surface, raised ladder with 1px hairline borders.
- **Do** reserve Pokéball Yellow for actions, focus and selection, with Ink on Yellow text on it.
- **Do** let the active binder's `--binder` colour drive its tab underline and stage light.
- **Do** use tabular numerals for every count, page number and stat.
- **Do** keep the logo, binder object, card images and `.sleeve` overlay as they are.

### Don't:
- **Don't** add glass panels, blur, or gradient glows to chrome; the binder floor light and the sleeve glare are the only gradients.
- **Don't** put drop shadows on panels or tiles at rest.
- **Don't** bring back chunky yellow-badged card tiles; yellow stays on small controls.
- **Don't** add a light theme.
- **Don't** use the legacy tokens for new chrome.
