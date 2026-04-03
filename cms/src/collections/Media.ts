import { CollectionConfig } from 'payload/types'
import path from 'path'

const Media: CollectionConfig = {
  slug: 'media',
  access: { read: () => true },
  upload: {
    staticDir: path.resolve(__dirname, '../../uploads'),
    staticURL: '/uploads',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 400,
        position: 'centre',
      },
      {
        name: 'card',
        width: 600,
        height: 800,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp'],
  },
  admin: {
    group: 'Media',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      required: true,
      admin: {
        description: 'Describe the image for accessibility',
      },
    },
  ],
}

export default Media
