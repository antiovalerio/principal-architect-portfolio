# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Principal architect portfolio for Luis Antio Valerio Gayosso. Live at antval.dev.

See `PROGRESS.md` for current phase status and pending work.

Built with Next.js and TypeScript. The project is phase-gated — MVP (Phase 1) is the current focus. AI features (RAG, vector search, Ask Luis assistant) are Phase 2+. Do not add AI infrastructure or backend complexity unless explicitly working on Phase 2+.

## Repository layout

The Next.js application lives in `site/`. Other top-level directories (`docs/`, `data/`, `scripts/`, `infra/`) are for the AI layer and are not part of the MVP build.

`docs/` contains architecture knowledge base content (ProfileSummary.md, case studies, principles) — this is source material for future AI embeddings, not documentation about the codebase.

## Commands

All Next.js commands run from inside `site/`:

```bash
cd site && npm run dev      # Start development server
cd site && npm run build    # Production build
cd site && npm run start    # Start production server
cd site && npm run lint     # Run ESLint
```

## Design conventions

- No emoji anywhere — in code, markdown, or comments
- Lowercase headers in markdown files (except the top-level `#` title)
- Architecture-studio aesthetic: minimal, dark/neutral, strong typography, calm spacing
- No unnecessary visual noise

## Content files

Static content lives in `site/src/content/` as TypeScript files:

- `profile.ts`
- `experience.ts`
- `projects.ts`
- `navigation.ts`
