# FilterEasy Engagement — Technical Lead Profile Summary

> Luis Valerio | Orium/Gluo | 2023 – 2026

---

## Overview

Served as **Technical Lead for the full FilterEasy e-commerce ecosystem**, covering four interconnected projects: a composable storefront, a BigCommerce native theme, a serverless B2B partner API, and an internal admin portal. The role was consistently focused on **architectural decision-making, code review gatekeeping, cross-team coordination, and leading complex integrations** — not writing all the code, but ensuring quality, direction, and delivery across a team of ~8 engineers.

---

## Project 1: filter-easy-partner-api

**Role**: Technical Lead | **Period**: Jun 2024 – Mar 2026
**Repo**: `gluo-dev/filter-easy-partner-api`

### What the project is
A serverless REST API built on **AWS Lambda + Serverless Framework** that powers a B2B partner ecosystem for FilterEasy — a home air filter subscription service. The API manages partners, customers, orders, webhooks, and filter products, integrating with BigCommerce (e-commerce), NetSuite (ERP), and a legacy MySQL database.

### Tech Stack
- **Runtime**: Node.js 22.x (upgraded from 18.x), TypeScript
- **Framework**: Serverless Framework v4, AWS API Gateway
- **Databases**: Aurora Serverless PostgreSQL (RDS Data API), DynamoDB, legacy MySQL (VPC-connected)
- **Infrastructure**: AWS Lambda, SQS, S3, Step Functions, CloudWatch, SSM Parameter Store, Terraform
- **External APIs**: BigCommerce REST, NetSuite SuiteTalk REST + SuiteQL + RESTlet (OAuth 1.0a)
- **Validation**: Zod + JSON Schema (API Gateway)
- **Testing**: Jest + ts-jest, Postman/Newman (automated CI)
- **CI/CD**: GitHub Actions (branch-based deploys: dev → staging → prod)

### Architecture & Patterns
Clean layered architecture: **Handler → Service → Client**. All Lambda functions follow a strict entry-point pattern with centralized auth, standardized error handling, and structured logging. Async batch operations return immediately and POST results to partner callback URLs via SQS queues.

Key architectural decisions led:
- **CQRS pattern** for customer and order management — dual-path routing (NetSuite direct vs. BigCommerce fallback), per-partner feature flags, auto-migration on read
- **DynamoDB price list cache** — reduced BigCommerce API latency from ~300ms to ~5ms
- **NetSuite concurrency manager** — DynamoDB-backed global state limiting 36 concurrent requests across all Lambda instances, with per-partner dynamic quotas and TTL-based cleanup
- **Customer migration pipeline** — S3-triggered batch processing via SQS + Step Functions orchestration from a legacy MySQL database

### Key Contributions
- **NetSuite direct integration** (50-ticket project, 14–16 week roadmap): Architected and led full ERP integration using SuiteTalk REST + SuiteQL. Built OAuth 1.0a client, generic CRUD methods, SQL injection-safe query builder, exponential backoff with jitter, priority queue (HIGH/NORMAL/LOW), and CloudWatch observability.
- **Rate limiting & retry system**: 5-attempt exponential backoff with ±15% jitter, per-partner concurrency quotas, Retry-After header support, error classification (retry vs. fail-fast).
- **Zod validation rollout** (5-phase): Replaced ad-hoc validation across all endpoints — customers, orders, partners, subpartners, webhooks.
- **CI/CD pipeline**: Built full GitHub Actions pipeline — branch-based Serverless deploys, automated Postman API tests via Newman, MkDocs + Swagger docs deployments.
- **AWS SDK v3 migration**: Migrated from monolithic `aws-sdk` to modular `@aws-sdk/client-*` packages.
- **AI tooling system**: Designed and implemented a custom Claude Code skills architecture (9 skills, 3 GitHub prompts, 3 context packs, 2 specialized subagents) to standardize team development workflows.
- **Security**: Removed exposed access keys from version control; enforced parameterized queries and dangerous-operation blocking in SuiteQL layer.

### Scale & Output
- **2,459 total commits** across the team (Jul 2024 – Mar 2026)
- **427 of 482 PRs merged** as primary code gatekeeper (88.6%)
- **~840 commits** authored directly (~34% of repo total)
- **48 Jira tickets** in the NetSuite integration project alone (NA-series)
- Team of ~8 engineers across Orium and Gluo

### Key Learnings
- Designing ERP integrations at scale requires concurrency management and backpressure from day one — NetSuite's governance limits are a hard constraint, not an afterthought.
- CQRS simplifies read/write concerns significantly in multi-source data environments (BigCommerce + NetSuite + RDS), but requires careful feature-flag strategy for gradual rollout.
- DynamoDB as a coordination layer for serverless concurrency control is highly effective — TTL-based cleanup removes the need for explicit teardown logic.
- Investing in AI-assisted development workflows early (skills, context packs, custom prompts) meaningfully reduced onboarding time and increased team consistency.

---

## Project 2: filtereasy-partners-portal

**Role**: Technical Lead | **Period**: Nov 2025 – Mar 2026
**Repo**: `FilterEasy-com/filtereasy-partners-portal`

### What the project is
A **Next.js admin portal** built for FilterEasy's internal team and B2B partners to manage customers, orders, and partner accounts. Acts as the frontend layer on top of the partner API, providing data tables, filters, and CRUD operations with authentication via AWS Cognito.

### Tech Stack
- **Framework**: Next.js 14 (App Router), React, TypeScript
- **UI**: Chakra UI, Emotion, next-themes
- **Data fetching**: TanStack Query (React Query) + TanStack Table
- **Auth**: AWS Amplify + AWS Cognito
- **Testing**: Jest + React Testing Library
- **Code quality**: ESLint, Prettier, TypeScript strict mode

### Architecture & Patterns
Next.js App Router with feature-based folder structure: `app/`, `components/`, `hooks/`, `lib/`, `utils/`, `types/`, `theme/`. Data fetching centralized via React Query hooks. Authentication handled entirely through AWS Cognito/Amplify — no custom auth logic.

### Key Contributions
- **Technical lead and primary code reviewer**: 162 of 207 total commits (~78%), primary merger of 118 PRs
- Led integration of new partner API endpoints into the portal UI (customer lists, order views)
- Implemented **security fixes**: upgraded React and Next.js to resolve CVE vulnerabilities
- Set up **AI tooling**: PR reviewer agent, commit slash command for Jira workflow
- Maintained AWS Cognito documentation for user management flows
- Coordinated branding updates and feature flags in sync with backend API changes

### Key Learnings
- AWS Amplify + Cognito provides a solid auth foundation for internal tools but requires careful version pinning — library compatibility issues surfaced and required coordinated React/Next.js upgrades.
- TanStack Query + Table is well-suited for data-heavy admin portals with server-side pagination and filtering.

---

## Project 3: filtereasy-contentstack

**Role**: Technical Lead | **Period**: 2023 – 2026 (longest-running)
**Repo**: `FilterEasy-com/filtereasy-contentstack`

### What the project is
The **main FilterEasy e-commerce platform** — a composable storefront built on Next.js with Contentstack as the headless CMS, Algolia for search, and BigCommerce as the commerce engine. Also serves as the backend integration hub connecting subscriptions, ERP data, and partner systems.

### Tech Stack
- **Monorepo**: Turborepo + pnpm workspaces
- **Apps**: `next-app` (storefront), `storybook` (component library), `composable-docs`
- **Packages**: `bigcommerce`, `contentstack`, `chakra`, `ui`, `templates`, `algolia`, `subscriptionsdb`, `tsconfig`, `eslint-config`
- **Frontend**: Next.js, React, Chakra UI, TypeScript
- **CMS**: Contentstack (headless, JSON RTE serializer)
- **Search**: Algolia
- **Commerce**: BigCommerce API
- **Monitoring**: Datadog (browser logs)
- **Code quality**: Husky, lint-staged, Prettier, Changesets for versioning

### Architecture & Patterns
Clean **composable architecture** — each concern is isolated into its own package (`bigcommerce`, `contentstack`, `algolia`), consumed by the `next-app`. Turborepo orchestrates builds and caching across the monorepo. Package versioning managed via Changesets. Storybook documents the UI component library independently.

### Key Contributions
- **Primary technical lead and largest individual contributor**: 1,659 of 4,423 commits (~37%)
- Led **partner API search integration**: exposed NetSuite ID in product search response payload
- Led implementation of **prepaid subscription termination** — cron processes and event triggers on subscription conversion
- Coordinated **subscription architecture decisions** across packages (subscriptionsdb, bigcommerce, next-app)
- Swagger documentation migration to Postman collections
- Managed Datadog browser logging integration across the storefront
- Cross-team coordination: backend API changes reflected in contentstack API clients and storefront UI

### Key Learnings
- Turborepo monorepo pays dividends quickly when you have multiple interconnected packages — shared configs and parallelized builds reduced developer friction significantly.
- Contentstack as a headless CMS gives content editors flexibility but requires disciplined type contracts between CMS fields and frontend components.
- Composable commerce increases overall system resilience but demands robust integration testing across package boundaries.

---

## Project 4: filtereasy-stencil-theme

**Role**: Technical Lead | **Period**: 2023 – 2026
**Repo**: `gluo-dev/filtereasy-stencil-theme`

### What the project is
The **BigCommerce storefront theme** for FilterEasy's direct-to-consumer e-commerce experience. Built on BigCommerce's Cornerstone theme framework (v6.10.0), it handles the subscription purchasing flow, product display, A/B testing campaigns, and all customer-facing UI running natively in BigCommerce's Stencil engine.

### Tech Stack
- **Theme engine**: BigCommerce Stencil / Cornerstone 6.10.0
- **Templates**: Handlebars.js
- **Frontend**: Vanilla JavaScript + custom subscription modules
- **Bundler**: Webpack (dev + prod configs) + Grunt
- **A/B Testing**: VWO (Visual Website Optimizer) campaign integration

### Architecture & Patterns
Cornerstone-based theme with custom extensions layered on top: subscription service modules in `assets/js/services/subscriptions/`, order confirmation overrides in `templates/pages/`, and VWO campaign scripts injected conditionally. Feature work is isolated to custom JS modules that extend (not replace) base Cornerstone behavior, minimizing upgrade friction.

### Key Contributions
- **Technical lead and primary reviewer**: 384 of 663 commits (~58%)
- Led **committed/prepaid subscription flow**: multi-PR feature spanning subscription commitment plan UI, order confirmation page changes, and price display logic
- Led **VWO A/B testing campaign** for prepaid plan pricing — implemented, iterated, and cleaned up the campaign after conclusion
- **Logo and favicon refresh**: coordinated with composable storefront for brand consistency across platforms
- Managed version bumps and bundle naming discipline across releases

### Key Learnings
- Stencil/Cornerstone theme development requires discipline to keep custom logic modular — tightly coupling features to Cornerstone internals creates upgrade debt quickly.
- A/B testing lifecycle (implement → monitor → clean up) needs to be treated as a first-class feature — the VWO campaign required dedicated cleanup PRs after conclusion.
- Coordinating UI changes across two separate frontend systems (Stencil theme + Next.js composable storefront) for brand consistency requires explicit cross-repo coordination and shared design specs.

---

## Summary Table

| Project | Role | Period | Team Size | Commits Led | PRs Merged |
|---|---|---|---|---|---|
| filter-easy-partner-api | Tech Lead | Jun 2024 – Mar 2026 | ~8 | ~840 / 2,459 (34%) | 427 / 482 (89%) |
| filtereasy-partners-portal | Tech Lead | Nov 2025 – Mar 2026 | ~3 | 162 / 207 (78%) | Primary gatekeeper |
| filtereasy-contentstack | Tech Lead | 2023 – 2026 | ~8 | 1,659 / 4,423 (37%) | Primary gatekeeper |
| filtereasy-stencil-theme | Tech Lead | 2023 – 2026 | ~5 | 384 / 663 (58%) | Primary gatekeeper |

**Core strengths demonstrated across this engagement:**
- Full-stack technical leadership across serverless APIs, composable storefronts, and native e-commerce themes
- ERP integration architecture (NetSuite) at production scale with concurrency management and observability
- Monorepo governance and composable commerce patterns
- AI-assisted development workflow design
- Cross-team coordination across Orium and Gluo engineering teams
