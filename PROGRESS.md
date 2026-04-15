# PROGRESS.md

Current phase: **Phase 1 — MVP** (in progress)

Read this file at the start of every session to orient quickly. Update it as work completes.

---

## phase 1 — MVP status

### pages

| Page | Status | Notes |
|------|--------|-------|
| Home (`/`) | Done | HeroSection, CoreExpertise, FeaturedProjects |
| About (`/about`) | Done | Bio, certifications, education |
| Experience (`/experience`) | Done | Companies > roles > projects hierarchy |
| Projects (`/projects`) | Done | All projects with tags |
| Contact (`/contact`) | Done | Email, LinkedIn, location links |

### components

| Component | Status |
|-----------|--------|
| Header | Done |
| Footer | Done |
| HeroSection | Done |
| CoreExpertise | Done |
| FeaturedProjects | Done |

### content files (`site/src/content/`)

| File | Status | Notes |
|------|--------|-------|
| `profile.ts` | Done | Name, title, location, contact, summary |
| `experience.ts` | Done | 3 companies, 7 projects |
| `projects.ts` | Done | 3 featured projects |
| `about.ts` | Done | Bio, 9 certifications, education |
| `navigation.ts` | Done | 4 nav items |

### remaining Phase 1 work

- [x] Build out Contact page
- [x] SEO: per-page metadata, Open Graph, canonical URLs, Twitter card
- [x] Favicon (icon.tsx — LV monogram, 32x32, dark bg)
- [x] OG image (opengraph-image.tsx — 1200x630, dark card, name/title/domain)
- [ ] Deploy to antval.dev and verify production build

---

## phase 2 — AI layer (not started)

Deferred until Phase 1 is complete and live.

- [ ] "Ask Luis" assistant — RAG over architecture docs
- [ ] Vector embeddings pipeline (`scripts/`, `data/`)
- [ ] pgvector / Supabase integration
- [ ] Vercel Edge Function API routes
- [ ] Terraform infra (`infra/`)
- [ ] Architecture case studies pages

---

## tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.2 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 + CSS variables |
| Runtime | React 19 |
| Deployment | Vercel (planned) |
| Domain | antval.dev |

---

## design tokens (globals.css)

```
--bg: #0c0c0c
--bg-surface: #141414
--border: #1f1f1f
--text-primary: #e8e8e8
--text-secondary: #888888
--text-muted: #555555
```
