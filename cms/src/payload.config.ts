import { buildConfig } from 'payload/config'
import path from 'path'

import Users from './collections/Users'
import Media from './collections/Media'
import Artists from './collections/Artists'
import Services from './collections/Services'

import SiteSettings from './globals/SiteSettings'
import Hero from './globals/Hero'
import About from './globals/About'
import Stats from './globals/Stats'
import Contact from './globals/Contact'

export default buildConfig({
  serverURL: process.env.SERVER_URL || 'http://localhost:3001',

  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Meridian CMS',
    },
  },

  collections: [
    Users,
    Media,
    Artists,
    Services,
  ],

  globals: [
    SiteSettings,
    Hero,
    About,
    Stats,
    Contact,
  ],

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

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  graphQL: {
    disable: true,
  },
})
