# Gatos Blog - AGENTS.md

## Project

Static site: 5 HTML pages with Tailwind CSS v4 + Vite for cat enthusiasts.

## Commands

```bash
npm run dev      # Dev server at http://localhost:5173/
npm run build    # Production build
npm run preview  # Preview production build
```

No tests, no linting configured.

## Tech Stack

- **Tailwind CSS v4** - CSS-first config (`@theme` in CSS, NOT `tailwind.config.js`)
- **Vite** - Build tool
- **Vanilla JS ES6+** - Module-based (`type="module"`, include `.js` in imports)

## Tailwind v4 Key Points

- Theme config lives in `css/app.css` inside `@theme { }` block
- Dark mode: add/remove `class="dark"` on `<html>`, NOT `darkMode: 'class'`
- Use `@custom-variant dark (&:where(.dark, .dark *))` for dark mode selectors
- Custom colors: `--color-terracotta-*` (50-950), use as `text-terracotta-500`
- Animations defined in `@theme`: `fadeIn`, `slideUp`

## Theme (Terracotta Palette)

```css
--color-terracotta-500: #c9a88e;  /* Primary */
--color-terracotta-600: #a8896e;  /* Hover */
```

## Shared Components (CSS)

```css
.container-custom  /* Max-width container */
.btn              /* Primary button styles */
.card             /* Card with hover border effect */
.img-hover-scale  /* Image zoom on hover */
.animate-fade-in  /* Fade in animation */
```

## JavaScript Conventions

- Wrap DOM code in `DOMContentLoaded` listener
- Always null-check before adding event listeners
- localStorage operations must use try/catch
- Theme toggle persists via `storage.set('theme', 'dark'|'light')`
- Mobile menu close on Escape key required

## HTML Patterns

- `lang="es"` on `<html>`
- Skip link for accessibility
- SVG icons inline (sun/moon for theme toggle)
- Images: `loading="lazy"` and `alt` text required
- Footer with `© 2026 Gatos Blog`

## Vite Config (`vite.config.js`)

- `usePolling: true` - Required for WSL file watching
- `host: true` - Allows external access

## Adding a New Page

1. Copy existing HTML file as template
2. Link CSS: `<link rel="stylesheet" href="css/app.css">`
3. Include Google Fonts (Inter + Outfit)
4. Include `<script type="module" src="js/main.js"></script>`
5. Update navigation in ALL pages (5 total)

## Skills Available

- `.agents/skills/frontend-design/` - Design guidance for UI work
- `.agents/skills/tailwind-design-system/` - Tailwind v4 patterns
