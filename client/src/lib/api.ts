import axios from 'axios'

/**
 * Central Axios instance.
 * Base URL comes from VITE_API_BASE_URL; in dev it defaults to the Vite proxy
 * (`/api` -> http://localhost:4000).
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
  timeout: 10_000,
})
