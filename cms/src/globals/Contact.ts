import type { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  label: 'Contact Section',
  access: { read: () => true },
  admin: {
    group: 'Page Sections',
    description: 'Edit the contact section at the bottom of the page.',
  },
  fields: [
    {
      name: 'titleLine1',
      type: 'text',
      label: 'Title — Line 1',
      defaultValue: 'Ready to make',
      required: true,
    },
    {
      name: 'titleLine2',
      type: 'text',
      label: 'Title — Line 2 (italic)',
      defaultValue: 'something lasting?',
      required: true,
    },
    {
      name: 'bodyText',
      type: 'textarea',
      label: 'Body Text',
      defaultValue: "Whether you're an artist, a manager, or a brand looking to partner — we want to hear from you. Every significant career starts with a conversation.",
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'CTA Button Text',
      defaultValue: 'Start a Conversation',
    },
  ],
}
