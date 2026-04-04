import { getPayload } from 'payload'
import config from '@payload-config'
import PageClient from '@/components/PageClient'

export default async function Page() {
  const payload = await getPayload({ config })

  const [hero, about, statsData, contact, siteSettings, servicesResult, artistsResult] =
    await Promise.all([
      payload.findGlobal({ slug: 'hero' }),
      payload.findGlobal({ slug: 'about' }),
      payload.findGlobal({ slug: 'stats' }),
      payload.findGlobal({ slug: 'contact' }),
      payload.findGlobal({ slug: 'site-settings' }),
      payload.find({ collection: 'services', sort: 'order', limit: 100 }),
      payload.find({ collection: 'artists', sort: 'order', limit: 100, depth: 1 }),
    ])

  return (
    <PageClient
      data={{
        hero,
        about,
        stats: statsData,
        contact,
        siteSettings,
        services: servicesResult.docs,
        artists: artistsResult.docs,
      }}
    />
  )
}
