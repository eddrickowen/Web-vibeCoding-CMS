import type { GlobalConfig } from 'payload'

export const Stats: GlobalConfig = {
  slug: 'stats',
  label: 'Stats Section',
  access: { read: () => true },
  admin: {
    group: 'Page Sections',
    description: 'Edit the animated numbers strip.',
  },
  fields: [
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      maxRows: 6,
      admin: {
        description: 'Add up to 6 stats. They display in a row.',
      },
      fields: [
        {
          name: 'target',
          type: 'number',
          label: 'Number',
          required: true,
          admin: {
            description: 'e.g. 15, 84, 320, 4.2',
          },
        },
        {
          name: 'suffix',
          type: 'text',
          label: 'Suffix',
          admin: {
            description: 'e.g. "+", "B", "" (leave blank for none)',
          },
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
          admin: {
            description: 'e.g. "Years Active", "Artists Signed"',
          },
        },
      ],
    },
  ],
}
