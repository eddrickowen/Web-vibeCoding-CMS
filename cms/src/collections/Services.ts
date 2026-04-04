import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  access: { read: () => true },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'order'],
    description: 'Edit the services shown in the "What We Do" section.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Service Name',
      required: true,
      admin: {
        description: 'e.g. "A&R", "Production", "Distribution"',
      },
    },
    {
      name: 'icon',
      type: 'select',
      label: 'Icon',
      defaultValue: 'music',
      required: true,
      options: [
        { label: 'Music / A&R (vinyl record)',   value: 'music' },
        { label: 'Production (equalizer bars)',   value: 'production' },
        { label: 'Distribution (globe)',          value: 'distribution' },
        { label: 'Marketing (cube / hexagon)',    value: 'marketing' },
        { label: 'Microphone',                    value: 'microphone' },
        { label: 'Headphones',                    value: 'headphones' },
        { label: 'Star / Award',                  value: 'star' },
        { label: 'Chart / Analytics',             value: 'chart' },
        { label: 'Handshake / Partnership',       value: 'handshake' },
        { label: 'Video / Film',                  value: 'video' },
        { label: 'Broadcast / Radio',             value: 'broadcast' },
        { label: 'Dollar / Royalties',            value: 'dollar' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
      admin: {
        description: 'Lower numbers appear first (1, 2, 3...)',
      },
    },
  ],
}
