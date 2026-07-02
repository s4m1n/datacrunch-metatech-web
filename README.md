# datacrunch-metatech-web

A Data + AI Intelligence landing page — Figma-to-web assessment.
Monorepo with a **React + TypeScript** frontend and an **Express + TypeScript** REST API.

## Tech Stack

| Layer | Choice |
| --- | --- |
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS v4 (design tokens via `@theme`) |
| Server state | TanStack Query (React Query) |
| Routing | React Router |
| HTTP client | Axios |
| Backend | Node.js, Express, TypeScript |

> Architecture note: React Query owns **server state**; React Context is reserved for **UI/global state** (added as sections require it). This separation is intentional.

## Project Structure

```
datacrunch-metatech-web/
├── client/                 # React + TS + Vite
│   └── src/
│       ├── app/            # providers, router, layout shell
│       ├── components/     # reusable UI (Container, ...)
│       ├── sections/       # Hero, Features, Testimonials (built next)
│       ├── hooks/          # React Query data hooks
│       ├── lib/            # axios instance, query keys
│       ├── pages/          # route pages
│       └── types/          # shared API contracts
├── server/                 # Express + TS
│   └── src/
│       ├── data/           # static typed content
│       ├── routes/         # REST endpoints
│       ├── middleware/     # error + 404 handling
│       └── types/          # response contracts (mirror client)
└── package.json            # root helper scripts
```

## Getting Started

Prerequisites: Node.js 20+.

```bash
# Install both apps
npm run install:all

# Run the API (http://localhost:4000)
npm run dev:server

# In a second terminal, run the client (http://localhost:5173)
npm run dev:client
```

The Vite dev server proxies `/api` → `http://localhost:4000`, so no CORS setup is
needed in development.

### Environment variables

Copy the examples and adjust as needed:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

## API Endpoints

| Method | Route | Description |
| --- | --- | --- |
| GET | `/api/health` | Health check |
| GET | `/api/home` | Hero / home content |
| GET | `/api/features` | Feature list |
| GET | `/api/testimonials` | Testimonials |

Responses are static typed JSON (no database, per assessment scope).

## Scripts

| Command | Description |
| --- | --- |
| `npm run install:all` | Install client + server deps |
| `npm run dev:client` | Start the Vite dev server |
| `npm run dev:server` | Start the API in watch mode |
| `npm run build` | Type-check and build both apps |

