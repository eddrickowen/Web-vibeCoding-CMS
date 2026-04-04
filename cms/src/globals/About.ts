import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'About Section',
  access: { read: () => true },
  admin: {
    group: 'Page Sections',
    description: 'Edit the Mission / About section.',
  },
  fields: [
    {
      name: 'statementLine1',
      type: 'text',
      label: 'Statement — Line 1',
      defaultValue: "We don't discover artists.",
      required: true,
    },
    {
      name: 'statementLine2',
      type: 'text',
      label: 'Statement — Line 2',
      defaultValue: 'We build careers',
      required: true,
    },
    {
      name: 'statementLine3',
      type: 'text',
      label: 'Statement — Line 3 (green accent)',
      defaultValue: 'that outlast trends.',
      required: true,
    },
    {
      name: 'bodyParagraph1',
      type: 'textarea',
      label: 'Body Paragraph 1',
      defaultValue: "Founded in 2009, Meridian Music Group has spent fifteen years at the intersection of artistic vision and commercial intelligence. We work with artists at every stage — from the first demo to the global arena — providing the infrastructure that talent alone can't build.",
    },
    {
      name: 'bodyParagraph2',
      type: 'textarea',
      label: 'Body Paragraph 2',
      defaultValue: 'Our roster spans genres but shares a philosophy: music that earns its audience rather than gaming an algorithm. We believe in the long game — in artists whose work compounds over time, not just over a news cycle.',
    },
  ],
}
