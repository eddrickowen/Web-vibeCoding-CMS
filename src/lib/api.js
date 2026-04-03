const CMS_URL = import.meta.env.VITE_CMS_URL || 'http://localhost:3001'

async function fetchAPI(path) {
  const res = await fetch(`${CMS_URL}/api${path}`)
  if (!res.ok) throw new Error(`CMS fetch failed: ${path}`)
  return res.json()
}

export async function getGlobal(slug) {
  return fetchAPI(`/globals/${slug}`)
}

export async function getCollection(slug, query = '') {
  const data = await fetchAPI(`/${slug}?${query}`)
  return data.docs
}

export function getMediaURL(image) {
  if (!image) return null
  if (typeof image === 'string') return image
  if (image.url) return image.url
  return null
}
