# Principal Architect Portfolio

This portfolio is built as a working architecture system, not a static resume page. It documents real system design thinking, demonstrates cloud-native engineering practices, and — in later phases — integrates an AI-powered knowledge layer grounded in actual architecture decisions.

---

## purpose

This project targets commerce agencies, Series A/B startups, and teams scaling complex platforms.

**What I bring:**

- scalable systems
- backend and distributed architecture
- commerce platforms
- cloud-native delivery
- modern web development (Next.js)
- technical leadership

**How I demonstrate it:**

- Design scalable distributed systems
- Apply pragmatic AI in production environments
- Balance trade-offs between performance, cost, and complexity
- Translate product requirements into resilient architecture

Based in Mexico City, working with global teams.

---

## design philosophy

The site follows an architecture-studio aesthetic: minimal, dark and neutral, with strong typography and calm spacing. Visual decisions serve clarity, not decoration.

---

## features

### MVP (Phase 1)

- Home — Hero, Intro, Core Expertise, Featured Projects
- About
- Experience
- Projects
- Contact

### AI layer (Phase 2–4)

**AI Architecture Advisor ("Ask Luis")** — an embedded assistant powered by Retrieval-Augmented Generation (RAG) over this repository's architecture documentation. Answers system design questions, scalability strategies, architecture trade-offs, and infrastructure decisions. Grounded in real decisions, not general LLM knowledge.

> "Always explain architectural decisions with trade-offs and operational implications."

**Architecture Case Studies** — detailed walkthrough of a large commerce platform, covering system evolution (monolith to distributed), scalability strategies, performance optimization, trade-offs, and real-world constraints.

**Architecture Principles** — a codified decision framework: scalability by design, operational simplicity, observability-first systems, cost-aware architecture, AI as augmentation.

**AI-Augmented Knowledge System** — document embeddings, vector search, and context-aware prompting to ensure grounded responses, no hallucinated architecture, and consistent technical reasoning.

---

## AI system architecture

The AI layer runs against embedded repository content rather than general LLM knowledge. Each query retrieves the most relevant architecture documents before generating a response. Applies to Phase 2 and later.

```
User query
   ↓
Next.js Frontend
   ↓
Edge Function (API Route)
   ↓
Embedding Generation
   ↓
Vector Database Search
   ↓
Context Injection
   ↓
LLM Response
```

---

## tech stack

### MVP

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Static content (no CMS, no DB)

### AI layer (Phase 2+)

- Vercel Edge Functions
- OpenAI API
- Vector DB (pgvector / Supabase)
- Terraform

---

## repository structure

```
docs/       architecture knowledge base (principles, decisions, case studies)
data/       system prompts, AI behavior config, embedding-ready content
scripts/    document chunking, embedding generation, vector DB seeding
infra/      Terraform — environment config, service provisioning
site/       Next.js application
  src/
    app/        App Router pages
    components/ UI components
    content/    profile.ts, experience.ts, projects.ts, navigation.ts
    lib/        shared utilities
```

`docs/` is the source of truth for architecture principles and case studies; these documents are later transformed into AI embeddings. `data/` stores system prompts and AI behavior configuration. `scripts/` handles the ingestion pipeline from raw documents to vector database entries. `infra/` manages environment provisioning via Terraform for reproducible deployments. `site/` contains the production Next.js application including all pages and static content.

---

## running locally

The Next.js application lives in the `site/` directory.

```bash
cd site
npm install
npm run dev
```

Open `http://localhost:3000`. The `/ask-luis` route requires environment variables — see the next section.

---

## environment variables

Create `site/.env.local` and add:

```
OPENAI_API_KEY=your_api_key
```

Required only for AI features (Phase 2+). The MVP site runs without any environment variables.

---

## deployment

The project is designed for Git-based deployment with edge execution and minimal backend footprint. Vercel is the recommended platform.

---

## roadmap

### Phase 1 — Narrative and IA

- Build layout (header, footer, nav)
- Home, About, Experience, Projects, Contact pages
- Content structure (profile.ts, experience.ts, projects.ts, navigation.ts)
- Case study structure defined

### Phase 2 — AI Architecture

- RAG implementation
- Vector search strategy
- Prompt engineering

### Phase 3 — Implementation

- Edge functions
- Observability
- Production hardening

### Phase 4 — Differentiation

- Decision Explorer
- AI-generated summaries
- Technical content synthesis

---

## strategic positioning

This project is designed to demonstrate, not describe, principal-level architecture judgment.

- Principal-level system thinking
- Cloud architecture maturity
- AI-native product design
- Documentation-driven engineering
- Real-world trade-off analysis

---

## when to engage

If your team is working through any of the following, this work is relevant to you:

- scaling challenges in commerce platforms
- increasing infrastructure costs
- system reliability issues
- AI integration decisions
- platform modernization efforts

---

## license

MIT
