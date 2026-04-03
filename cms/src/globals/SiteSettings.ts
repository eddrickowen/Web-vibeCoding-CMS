import { GlobalConfig } from 'payload/types'

const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: { read: () => true },
  admin: {
    group: 'Settings',
    description: 'Global site info — company name, email, social links.',
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      label: 'Company Name',
      defaultValue: 'MERIDIAN',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Contact Email',
      defaultValue: 'hello@meridianmusicgroup.com',
      required: true,
    },
    {
      name: 'socialLinks',
      type: 'group',
      label: 'Social Media Links',
      fields: [
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
        },
        {
          name: 'spotify',
          type: 'text',
          label: 'Spotify URL',
        },
        {
          name: 'soundcloud',
          type: 'text',
          label: 'SoundCloud URL',
        },
      ],
    },
  ],
}

export default SiteSettings
