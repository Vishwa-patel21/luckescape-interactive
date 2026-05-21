# LuckEscape — Word File Applied Interactive Website

This version was rebuilt around the uploaded Word brief, not as a generic luxury template.

## Included from the Word file

- Light / white luxury hospitality aesthetic
- Black text with muted champagne/gold accent
- Mont Fort / Aman-style editorial spacing and quiet premium feel
- No Vegas neon or slot-machine visual style
- One cinematic image layer moving across the entire website with scroll + cursor movement
- Transparent brand mark on the top-left
- Animated expanding top-right navigation menu
- Hero section using: “Luxury Casino Travel, Reimagined.”
- Short brand explanation section: “What is LuckEscape?”
- Scroll-expansion media section
- Three luxury experience cards
- Circular animated showcase component
- Founding Members section
- Interactive 3D-style membership / access card
- Payment-card-style access preview section with smooth navigation
- Countdown CTA banner
- Guest-list capture form with First Name + Email Address
- Minimal footer with logo, Instagram placeholder, partnership email
- shadcn-style structure with `src/components/ui`
- Tailwind CSS + TypeScript + Vite

## Install

```bash
cd luckescape-word-applied
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## Main files

- `src/App.tsx` — full page structure and content
- `src/components/ui/global-moving-image.tsx` — site-wide moving image background
- `src/components/ui/gradient-menu.tsx` — animated top-right navigation
- `src/components/ui/horizon-hero-section.tsx` — cinematic hero
- `src/components/ui/scroll-expansion-hero.tsx` — scroll-expanding media component
- `src/components/ui/circular-testimonials.tsx` — animated circular showcase
- `src/components/ui/card-22.tsx` — destination/access cards
- `src/components/ui/membership-card.tsx` — interactive card section
- `src/components/ui/guest-list-form.tsx` — email capture
- `src/components/ui/countdown-banner.tsx` — launch countdown CTA

## NPM registry

This ZIP includes `.npmrc` forcing public npm:

```bash
registry=https://registry.npmjs.org/
```

If npm ever uses another registry, run:

```powershell
npm config set registry https://registry.npmjs.org/
npm cache clean --force
npm install
```
