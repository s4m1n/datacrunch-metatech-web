import express from 'express'
import cors from 'cors'
import { apiRouter } from './routes/index.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

function getAllowedOrigins(): string[] {
  const origins = new Set<string>(['http://localhost:5173'])

  if (process.env.CLIENT_ORIGIN) {
    origins.add(process.env.CLIENT_ORIGIN)
  }

  if (process.env.VERCEL_URL) {
    origins.add(`https://${process.env.VERCEL_URL}`)
  }

  if (process.env.VERCEL_BRANCH_URL) {
    origins.add(`https://${process.env.VERCEL_BRANCH_URL}`)
  }

  return [...origins]
}

export function createApp() {
  const app = express()
  const allowedOrigins = getAllowedOrigins()

  app.use(
    cors({
      origin(origin, callback) {
        if (!origin) {
          callback(null, true)
          return
        }

        if (allowedOrigins.includes(origin)) {
          callback(null, true)
          return
        }

        try {
          const { hostname } = new URL(origin)
          if (hostname.endsWith('.vercel.app')) {
            callback(null, true)
            return
          }
        } catch {
          // Ignore malformed origins.
        }

        callback(null, false)
      },
    }),
  )
  app.use(express.json())

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() })
  })

  app.use('/api', apiRouter)
  app.use(notFound)
  app.use(errorHandler)

  return app
}
