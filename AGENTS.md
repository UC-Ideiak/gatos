# Gatos Blog

Static site: 5 pages (index, about, adoption, care, gallery) + Tailwind CSS v4 + Vite.

## Commands

```bash
npm run dev      # Dev server at http://localhost:5173/
npm run build    # Production build
npm run preview  # Preview production build
```

## Tech Stack

- **Tailwind CSS v4** - CSS-first config (`@theme` in CSS, NOT `tailwind.config.js`)
- **Vite** - Build tool
- **Vanilla JS ES6+** - Module-based (`type="module"`, include `.js` in imports)

## Key Files

- `css/app.css` - Theme config in `@theme { }`, shared components (.btn, .card, .container-custom)
- `js/main.js` - Entry point for JavaScript
- `assets/` - Images and icons

## Tailwind v4

- Theme in `css/app.css` inside `@theme { }` block
- Dark mode: toggle `class="dark"` on `<html>`, NOT `darkMode: 'class'`
- Custom colors: `--color-terracotta-*` (50-950), use as `text-terracotta-500`
- Custom variants: `@custom-variant dark (&:where(.dark, .dark *))`
- Animations: `fadeIn`, `slideUp`

## JavaScript Conventions

- Wrap DOM code in `DOMContentLoaded` listener
- Always null-check before adding event listeners
- localStorage operations must use try/catch
- Theme toggle: `storage.set('theme', 'dark'|'light')`
- Mobile menu: close on Escape key

## HTML Conventions

- `lang="es"` on `<html>`
- Skip link for accessibility
- Images: `loading="lazy"` and `alt` required
- Footer: `© 2026 Gatos Blog`

## Vite (WSL)

- `usePolling: true` for file watching
- `host: true` for external access

## Skills

- `.agents/skills/frontend-design/` - UI design guidance
- `.agents/skills/tailwind-design-system/` - Tailwind v4 patterns
