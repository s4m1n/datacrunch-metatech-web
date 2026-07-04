import { createApp } from './app.js'

const app = createApp()
const PORT = Number(process.env.PORT) || 4000

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})
