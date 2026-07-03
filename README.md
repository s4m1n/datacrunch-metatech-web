# MetaTech — Data + AI Intelligence

A responsive marketing landing page built from Figma designs, delivered as a TypeScript monorepo with a React frontend and Express REST API.

## Overview

This project implements the MetaTech homepage across desktop and mobile breakpoints. All visible copy, navigation, and section content is served dynamically from a backend API. The frontend focuses on component composition, design fidelity, and clear separation between server state and UI state.

**Repository:** [github.com/s4m1n/datacrunch-metatech-web](https://github.com/s4m1n/datacrunch-metatech-web)

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS v4 (`@theme` design tokens) |
| Server state | TanStack Query |
| Client state | React Context |
| Routing | React Router |
| HTTP | Axios |
| Backend | Node.js, Express, TypeScript |

## Architecture

### State management

Server state and client state are handled separately by design.

| Concern | Solution | Responsibility |
| --- | --- | --- |
| Server state | TanStack Query | Fetching, caching, loading, and retry for API data |
| Client state | React Context | Mobile navigation, solutions mega menu, active tab selection |

Page content is loaded once via `GET /api/home` and distributed to section components as props. UI interactions that do not require persistence remain in Context.

### Error handling

| Layer | Approach |
| --- | --- |
| Network / API | React Query with a dedicated error view and retry action |
| Render failures | React `ErrorBoundary` with recovery UI |
| Server | Centralised error middleware and 404 handler |

## Project Structure

```
datacrunch-metatech-web/
├── client/
│   └── src/
│       ├── app/           # Providers, router, layout, UIContext
│       ├── components/    # Shared UI and layout components
│       ├── sections/      # Page sections
│       ├── hooks/         # Data-fetching hooks
│       ├── lib/           # API client and query keys
│       ├── pages/         # Route pages
│       └── types/         # API type definitions
├── server/
│   └── src/
│       ├── data/          # Static JSON content
│       ├── routes/        # REST route modules
│       ├── middleware/    # Async handler, error and 404 handling
│       └── types/         # API response contracts
└── package.json
```

### Implemented sections

Navbar, Hero, Video, Trusted By, We Are, Solutions, Showcase, Tech Stacks, Footer

## Getting Started

**Prerequisites:** Node.js 20 or later

```bash
# Install dependencies
npm run install:all

# Terminal 1 — API (http://localhost:4000)
npm run dev:server

# Terminal 2 — Client (http://localhost:5173)
npm run dev:client
```

During development, the Vite dev server proxies `/api` requests to the Express server, so no additional CORS configuration is required locally.

### Environment variables

Copy the example files and adjust values as needed:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

| Variable | Application | Default | Description |
| --- | --- | --- | --- |
| `VITE_API_BASE_URL` | Client | `/api` | Base URL for API requests |
| `PORT` | Server | `4000` | Port the API listens on |
| `CLIENT_ORIGIN` | Server | `http://localhost:5173` | Allowed CORS origin |

## API Reference

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Service health check |
| `GET` | `/api/home` | Full homepage content |
| `GET` | `/api/features` | Sample feature data |
| `GET` | `/api/testimonials` | Sample testimonial data |

The homepage consumes `/api/home` exclusively. Additional endpoints are provided as reference implementations and are not bound to the current UI.

Content is served from static JSON files in `server/src/data/`. No database or authentication layer is included.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run install:all` | Install client and server dependencies |
| `npm run dev:client` | Start the Vite development server |
| `npm run dev:server` | Start the API in watch mode |
| `npm run build` | Type-check and build both applications |

## Assumptions

- The application is a single-page experience with one route, aligned to the supplied Figma frames for desktop and mobile.
- All section content is consolidated under `/api/home` rather than split across multiple frontend requests.
- The Figma design does not include dedicated Features or Testimonials sections; corresponding API routes exist but are not consumed by the UI.
- Static assets (images, logos) are stored in `client/public/`; the API returns path references only.
- In-page navigation uses anchor links for section scrolling.
- Content updates require editing `server/src/data/home.json` and restarting the API.
- Typography matches Figma via Bricolage Grotesque (headings) and Manrope (body), loaded from Google Fonts.

## Future Improvements

- Unit and integration tests with Vitest and React Testing Library
- Section-level skeleton loaders for improved perceived performance
- Open Graph and structured metadata for SEO
- Code-splitting for below-the-fold sections
- Shared type generation between client and server
- CMS or database-backed content management
- Visual regression testing against design specifications

## License

Submitted as part of the DataCrunch Senior Frontend Engineer technical assessment.
