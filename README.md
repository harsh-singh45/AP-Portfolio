# Aparna Tiwari — Portfolio

A premium, dark-themed personal portfolio built with Next.js 15, React,
TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Editing content

Almost everything on the site (name, bio, skills, projects, timeline,
contact details) lives in a single file:

```
lib/data.ts
```

Update that file and the whole site updates — no need to touch component
code for content changes.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css         Global styles, glass utility, scrollbar
  robots.ts / sitemap.ts   SEO routes
components/
  Navbar.tsx           Responsive glass navbar
  Footer.tsx
  Loader.tsx           Initial loading animation
  AosProvider.tsx      Initializes AOS scroll animations
  AnimatedBlobs.tsx    Ambient gradient blobs
  ParticlesBackground.tsx  Canvas particle field
  ScrollToTop.tsx
  ui/                  Small shadcn-style Button & Card primitives
  sections/
    Hero.tsx           Typing effect + floating phone mockup
    About.tsx
    Skills.tsx
    Projects.tsx
    Timeline.tsx
    Contact.tsx
lib/
  data.ts              All portfolio content
  utils.ts             cn() class-merge helper
```

## Notes

- Respects `prefers-reduced-motion` for accessibility.
- Fully responsive from mobile to large desktop.
- Update `metadataBase` in `app/layout.tsx` and the sitemap/robots URLs
  once you have a real domain.
