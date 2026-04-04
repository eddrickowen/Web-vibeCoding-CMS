import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Artists } from './collections/Artists'
import { Services } from './collections/Services'
import { SiteSettings } from './globals/SiteSettings'
import { Hero } from './globals/Hero'
import { About } from './globals/About'
import { Stats } from './globals/Stats'
import { Contact } from './globals/Contact'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.SERVER_URL || 'http://localhost:3001',

  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— Meridian CMS',
    },
  },

  collections: [Users, Media, Artists, Services],

  globals: [SiteSettings, Hero, About, Stats, Contact],

  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // Allow the frontend to read content without logging in
  cors: [
    'http://localhost:5173',
    'http://localhost:4173',
    process.env.FRONTEND_URL,
    process.env.SERVER_URL,
  ].filter(Boolean) as string[],

  csrf: [
    'http://localhost:5173',
    'http://localhost:4173',
    process.env.FRONTEND_URL,
    process.env.SERVER_URL,
  ].filter(Boolean) as string[],

  upload: {
    limits: {
      fileSize: 10_000_000, // 10MB
    },
  },

  plugins: [
    // Vercel Blob storage for media uploads — only active when token is present.
    // On Vercel: add the Blob integration in your project settings to get this token.
    // Locally: leave BLOB_READ_WRITE_TOKEN unset and files are stored in public/media.
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
      collections: {
        media: true,
      },
    }),
  ],

  sharp,
})
