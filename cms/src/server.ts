import express from 'express'
import payload from 'payload'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const app = express()

// Allow the Vite frontend to call this API
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:4173',
    // Add your production domain here
  ],
  credentials: true,
}))

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'fallback-secret-change-me',
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/meridian-cms',
    express: app,
    onInit: () => {
      payload.logger.info(`Admin: ${payload.getAdminURL()}`)
    },
  })

  const PORT = Number(process.env.PORT) || 3001
  app.listen(PORT, () => {
    console.log(`\n✅  CMS running at  http://localhost:${PORT}`)
    console.log(`🎛️   Admin panel:    http://localhost:${PORT}/admin\n`)
  })
}

start()
