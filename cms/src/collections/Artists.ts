import type { CollectionConfig } from 'payload'

export const Artists: CollectionConfig = {
  slug: 'artists',
  access: { read: () => true },
  admin: {
    useAsTitle: 'name',
    group: 'Content',
    defaultColumns: ['name', 'genre', 'meta', 'order'],
    description: 'Add, remove, or reorder artists shown on the Roster section.',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Artist Name',
      required: true,
    },
    {
      name: 'genre',
      type: 'text',
      label: 'Genre',
      required: true,
      admin: {
        description: 'e.g. "Alternative R&B", "Electronic", "Indie Folk"',
      },
    },
    {
      name: 'meta',
      type: 'text',
      label: 'Stats',
      admin: {
        description: 'e.g. "3 albums · 12M streams"',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Artist Photo',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
      admin: {
        description: 'Lower numbers appear first. Use 1, 2, 3...',
      },
    },
  ],
}
