import express from 'express'
import payload from 'payload'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

// Use .ts in local dev (ts-node-dev), .js in production (compiled)
const configExt = process.env.NODE_ENV === 'production' ? 'payload.config.js' : 'payload.config.ts'
process.env.PAYLOAD_CONFIG_PATH = path.resolve(__dirname, configExt)

const app = express()

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:4173',
    process.env.FRONTEND_URL,
  ].filter(Boolean) as string[],
  credentials: true,
}))

let initialized = false

const getApp = async () => {
  if (!initialized) {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET || 'fallback-secret-change-me',
      mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/meridian-cms',
      express: app,
      onInit: () => {
        payload.logger.info(`Admin: ${payload.getAdminURL()}`)
      },
    })
    initialized = true
  }
  return app
}

// Local dev: start server normally
if (process.env.NODE_ENV !== 'production') {
  const start = async () => {
    await getApp()
    const PORT = Number(process.env.PORT) || 3001
    app.listen(PORT, () => {
      console.log(`\n✅  CMS running at  http://localhost:${PORT}`)
      console.log(`🎛️   Admin panel:    http://localhost:${PORT}/admin\n`)
    })
  }
  start()
}

// Vercel serverless export
export default async (req: any, res: any) => {
  const handler = await getApp()
  return handler(req, res)
}
