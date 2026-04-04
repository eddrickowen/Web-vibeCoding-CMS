import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero Section',
  access: { read: () => true },
  admin: {
    group: 'Page Sections',
    description: 'Edit the big intro section at the top of the page.',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Top Label',
      defaultValue: '— Est. 2009 · Music Group',
      admin: {
        description: 'Small label shown above the title',
      },
    },
    {
      name: 'titleLine1',
      type: 'text',
      label: 'Title — Line 1',
      defaultValue: 'We shape',
      required: true,
    },
    {
      name: 'titleLine2',
      type: 'text',
      label: 'Title — Line 2 (italic accent)',
      defaultValue: 'sound',
      required: true,
    },
    {
      name: 'titleLine3',
      type: 'text',
      label: 'Title — Line 3',
      defaultValue: 'into legacy.',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      defaultValue: 'A&R, Production, Distribution & Artist Development for artists who refuse to be forgettable.',
    },
    {
      name: 'cta1Text',
      type: 'text',
      label: 'Primary Button Text',
      defaultValue: 'Explore Roster',
    },
    {
      name: 'cta2Text',
      type: 'text',
      label: 'Secondary Button Text',
      defaultValue: 'Our Story',
    },
  ],
}
