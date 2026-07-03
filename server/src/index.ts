import express from 'express'
import cors from 'cors'
import { apiRouter } from './routes/index.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

const app = express()
const PORT = Number(process.env.PORT) || 4000
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'

app.use(cors({ origin: CLIENT_ORIGIN }))
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() })
})

app.use('/api', apiRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})
