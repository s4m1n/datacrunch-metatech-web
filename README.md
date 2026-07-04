# MetaTech — Data + AI Intelligence

A responsive marketing landing page built from Figma designs, delivered as a TypeScript monorepo with a React frontend and Express REST API.

**Live demo:** [datacrunch-metatech-web.vercel.app](https://datacrunch-metatech-web.vercel.app)  
**Repository:** [github.com/s4m1n/datacrunch-metatech-web](https://github.com/s4m1n/datacrunch-metatech-web)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/s4m1n/datacrunch-metatech-web)

---

## Overview

This project implements the MetaTech homepage across desktop and mobile breakpoints. Every section — navigation, hero, video, partner logos, solutions tabs, showcase, tech stacks, and footer — is driven by a single API call. The frontend focuses on component composition, design fidelity, and a clear separation between server state and UI state.

Built as part of the **DataCrunch Senior Frontend Engineer** technical assessment.

---

## Features

- **Figma-accurate UI** — Tailwind v4 design tokens, custom typography, and responsive layouts for desktop and mobile
- **Dynamic content** — All copy, navigation, and section data served from `GET /api/home`
- **Video section** — Figma frame with play button and modal (YouTube embed or direct MP4)
- **Solutions mega menu** — Desktop hover menu and mobile accordion, wired from API data
- **Tech stack marquee** — Animated logo rows with `prefers-reduced-motion` support
- **Graceful states** — Loading spinner, API error with retry, and React ErrorBoundary
- **Accessible interactions** — Semantic HTML, ARIA labels, modal focus management, keyboard Escape to close
- **Deployed on Vercel** — Client and API on one domain; no separate backend host required

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, TypeScript, Vite 8 |
| Styling | Tailwind CSS v4 (`@theme` design tokens) |
| Server state | TanStack Query v5 |
| Client state | React Context |
| Routing | React Router v7 |
| HTTP | Axios |
| Backend | Node.js, Express 5, TypeScript |
| Testing | Vitest, React Testing Library, jsdom |
| Linting | oxlint |
| Deployment | Vercel (static client + serverless API) |

---

## Architecture

### Data flow

```
server/src/data/home.json
        │
        ▼
  GET /api/home  ──►  useHome() [React Query]
        │                    │
        │                    ▼
        │              HomePage.tsx
        │                    │
        └──────────►  Section components (props)
```

During local development, Vite proxies `/api` to `http://localhost:4000`. In production on Vercel, the same `/api` path hits a serverless Express function — the client never needs a separate API URL.

### State management

Server state and client state are handled separately by design.

| Concern | Solution | Responsibility |
| --- | --- | --- |
| Server state | TanStack Query | Fetching, caching, loading, and retry for API data |
| Client state | React Context | Mobile nav, solutions mega menu, active solutions tab |

Page content is loaded once via `GET /api/home` and passed to sections as props. Ephemeral UI interactions stay in Context.

### Error handling

| Layer | Approach |
| --- | --- |
| Network / API | React Query with `PageError` and a retry button |
| Render failures | React `ErrorBoundary` with recovery UI |
| Server | Centralised error middleware and 404 handler |

---

## Project Structure

```
datacrunch-metatech-web/
├── api/
│   └── index.ts              # Vercel serverless entry (imports server/dist)
├── client/
│   ├── public/               # Static assets (images, logos)
│   └── src/
│       ├── app/              # Providers, router, layout, UIContext
│       ├── components/       # Shared UI, layout, video, tech-stacks
│       ├── sections/         # Page sections (Hero, Video, Solutions, …)
│       ├── hooks/            # useHome and other data hooks
│       ├── lib/              # API client, query keys, video helpers
│       ├── pages/            # Route pages
│       ├── types/            # API type definitions
│       └── test/             # Vitest setup
├── server/
│   └── src/
│       ├── app.ts            # createApp() — shared by dev server and Vercel
│       ├── data/             # Static JSON content
│       ├── routes/           # REST route modules
│       ├── middleware/       # Async handler, error and 404 handling
│       └── types/            # API response contracts
├── vercel.json
└── package.json
```

### Page sections (top to bottom)

| Section | Component | Data key |
| --- | --- | --- |
| Navbar | `Navbar` + `SolutionsMegaMenu` | `navigation` |
| Hero | `HeroSection` | `hero` |
| Video | `VideoSection` + `VideoModal` | `video` |
| Trusted By | `TrustedBySection` | `trustedBy` |
| We Are | `WeAreSection` | `weAre` |
| Solutions | `SolutionsSection` | `solutions` |
| Showcase | `ShowcaseSection` | `showcase` |
| Tech Stacks | `TechStacksSection` | `techStacks` |
| Footer | `Footer` | `footer` |

---

## Getting Started

**Prerequisites:** Node.js 20 or later

```bash
# Clone and install
git clone https://github.com/s4m1n/datacrunch-metatech-web.git
cd datacrunch-metatech-web
npm run install:all

# Terminal 1 — API (http://localhost:4000)
npm run dev:server

# Terminal 2 — Client (http://localhost:5173)
npm run dev:client
```

Open [http://localhost:5173](http://localhost:5173). The Vite dev server proxies `/api` to Express, so no extra CORS setup is needed locally.

### Environment variables

Copy the example files if you need to override defaults:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

| Variable | App | Default | Description |
| --- | --- | --- | --- |
| `VITE_API_BASE_URL` | Client | `/api` | Base URL for API requests |
| `PORT` | Server | `4000` | Port the API listens on |
| `CLIENT_ORIGIN` | Server | `http://localhost:5173` | Additional allowed CORS origin |

---

## API Reference

| Method | Endpoint | Description | Used by UI |
| --- | --- | --- | --- |
| `GET` | `/api/health` | Service health check | No |
| `GET` | `/api/home` | Full homepage content | **Yes** |
| `GET` | `/api/features` | Sample feature data | No |
| `GET` | `/api/testimonials` | Sample testimonial data | No |

The homepage consumes `/api/home` exclusively. Additional endpoints are reference implementations — the Figma design has no dedicated Features or Testimonials sections.

Content lives in static JSON under `server/src/data/`. There is no database or authentication layer. To update copy, edit `home.json` and restart the API (or redeploy).

### Example

```bash
curl http://localhost:4000/api/home | jq '.hero.headline'
```

---

## Testing

Tests run with Vitest and React Testing Library from the client package.

```bash
npm run test              # run once (from repo root)
```

| Test file | Coverage |
| --- | --- |
| `lib/video.test.ts` | YouTube URL → embed conversion, direct MP4 fallback |
| `components/ui/PageError.test.tsx` | Error message renders, retry button fires callback |
| `sections/VideoSection.test.tsx` | Overlay text renders, play button opens modal |

---

## Deployment

The client and API deploy together on Vercel: the React app is served as static files from `client/dist`, and the Express API runs as a serverless function at `/api/*`.

### One-click deploy

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new) or click **Deploy with Vercel** above.
3. Use the defaults from `vercel.json` — no extra env vars required for a basic deploy.

### CLI deploy

```bash
npx vercel          # preview
npx vercel --prod   # production
```

### How it works

| Piece | Role |
| --- | --- |
| `vercel.json` | Build commands, SPA rewrites, API routing |
| `api/index.ts` | Serverless entry — exports `createApp()` from compiled server |
| `server/src/app.ts` | Shared Express factory for local dev and Vercel |

Optional production env vars:

| Variable | Description |
| --- | --- |
| `CLIENT_ORIGIN` | Extra allowed CORS origin |
| `VITE_API_BASE_URL` | Client API base URL at build time (defaults to `/api`) |

---

## Design System

Design tokens are defined in `client/src/index.css` via Tailwind v4 `@theme`:

| Token | Value | Usage |
| --- | --- | --- |
| `--color-bg` | `#051612` | Page background |
| `--color-accent` | `#33F987` | CTAs, highlights, play button |
| `--color-showcase` | `#17A955` | Showcase section accent |
| `--font-heading` | Bricolage Grotesque | Headlines |
| `--font-body` | Manrope | Body copy |
| `--tracking-figma` | `-0.05em` | Figma letter-spacing |

Fonts are loaded from Google Fonts in `client/index.html`.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run install:all` | Install client and server dependencies |
| `npm run dev:client` | Start Vite dev server (port 5173) |
| `npm run dev:server` | Start Express API in watch mode (port 4000) |
| `npm run build` | Type-check and build server, then client |
| `npm run test` | Run Vitest suite |

---

## Assumptions

- Single-page app with one route, aligned to the supplied Figma desktop and mobile frames.
- All homepage content is consolidated under `/api/home` rather than split across multiple requests.
- Static assets (images, logos) live in `client/public/`; the API returns path references only.
- In-page navigation uses anchor links (`#solutions`, `#showcase`, `#contact`).
- Content updates require editing JSON files and restarting/redeploying the API.
- Client and server types are maintained manually in parallel (`client/src/types/api.ts` and `server/src/types/index.ts`).

---

## Future Improvements

- Section-level skeleton loaders instead of a full-page spinner
- Open Graph and structured metadata for SEO
- Code-splitting for below-the-fold sections
- Shared type generation between client and server
- CMS or database-backed content management
- Visual regression testing against Figma specs
- CI pipeline (GitHub Actions) for build, lint, and test on every push

---

## License

Submitted as part of the DataCrunch Senior Frontend Engineer technical assessment.
