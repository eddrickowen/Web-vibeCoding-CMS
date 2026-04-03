import { useState, useEffect } from 'react'
import { getGlobal, getCollection } from '../lib/api'

const FALLBACK = {
  siteSettings: {
    companyName: 'MERIDIAN',
    email: 'hello@meridianmusicgroup.com',
    socialLinks: { instagram: '#', spotify: '#', soundcloud: '#' },
  },
  hero: {
    label: '— Est. 2009 · Music Group',
    titleLine1: 'We shape',
    titleLine2: 'sound',
    titleLine3: 'into legacy.',
    subtitle: 'A&R, Production, Distribution & Artist Development\nfor artists who refuse to be forgettable.',
    cta1Text: 'Explore Roster',
    cta2Text: 'Our Story',
  },
  about: {
    statementLine1: "We don't discover artists.",
    statementLine2: 'We build careers',
    statementLine3: 'that outlast trends.',
    bodyParagraph1: "Founded in 2009, Meridian Music Group has spent fifteen years at the intersection of artistic vision and commercial intelligence. We work with artists at every stage — from the first demo to the global arena — providing the infrastructure that talent alone can't build.",
    bodyParagraph2: 'Our roster spans genres but shares a philosophy: music that earns its audience rather than gaming an algorithm. We believe in the long game — in artists whose work compounds over time, not just over a news cycle.',
  },
  services: [
    { id: '1', title: 'A&R', icon: 'music', description: "We hear what others miss. Our A&R team actively scouts across every platform and underground scene, recognizing potential before it's obvious.", order: 1 },
    { id: '2', title: 'Production', icon: 'production', description: 'World-class studio facilities and an in-house production team fluent in every contemporary genre. From beatmaking to mixing and mastering.', order: 2 },
    { id: '3', title: 'Distribution', icon: 'distribution', description: 'Your music on every platform, in every territory, on your terms. We handle licensing, royalty collection, and international release strategy.', order: 3 },
    { id: '4', title: 'Marketing', icon: 'marketing', description: "Campaign strategy, social presence, PR, and brand partnerships built around each artist's authentic identity — not a template.", order: 4 },
  ],
  artists: [
    { id: '1', name: 'Nadia Voss', genre: 'Alternative R&B', meta: '3 albums · 12M streams', image: { url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80' }, order: 1 },
    { id: '2', name: 'KAEL', genre: 'Electronic', meta: '5 EPs · 28M streams', image: { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80' }, order: 2 },
    { id: '3', name: 'Solène', genre: 'Indie Folk', meta: '2 albums · 8M streams', image: { url: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=600&q=80' }, order: 3 },
    { id: '4', name: 'VAUX', genre: 'Ambient / Post-Rock', meta: '4 LPs · 19M streams', image: { url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80' }, order: 4 },
    { id: '5', name: 'Desta Ray', genre: 'Neo Soul', meta: '1 album · 6M streams', image: { url: 'https://images.unsplash.com/photo-1571266752559-3f53e17b2286?w=600&q=80' }, order: 5 },
    { id: '6', name: 'MOOR', genre: 'Jazz · Electronic', meta: '6 releases · 33M streams', image: { url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80' }, order: 6 },
  ],
  stats: {
    stats: [
      { target: 15, suffix: '+', label: 'Years Active' },
      { target: 84, suffix: '', label: 'Artists Signed' },
      { target: 320, suffix: '+', label: 'Releases' },
      { target: 4.2, suffix: 'B', label: 'Total Streams' },
    ],
  },
  contact: {
    titleLine1: 'Ready to make',
    titleLine2: 'something lasting?',
    bodyText: "Whether you're an artist, a manager, or a brand looking to partner — we want to hear from you. Every significant career starts with a conversation.",
    buttonText: 'Start a Conversation',
  },
}

export function useSiteData() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        const [siteSettings, hero, about, stats, contact, services, artists] = await Promise.all([
          getGlobal('site-settings'),
          getGlobal('hero'),
          getGlobal('about'),
          getGlobal('stats'),
          getGlobal('contact'),
          getCollection('services', 'sort=order&limit=20'),
          getCollection('artists', 'sort=order&limit=20&depth=1'),
        ])
        setData({
          siteSettings: siteSettings || FALLBACK.siteSettings,
          hero: hero || FALLBACK.hero,
          about: about || FALLBACK.about,
          stats: stats || FALLBACK.stats,
          contact: contact || FALLBACK.contact,
          services: services?.length ? services : FALLBACK.services,
          artists: artists?.length ? artists : FALLBACK.artists,
        })
      } catch {
        // CMS unreachable — use fallback
        setData(FALLBACK)
      }
    }
    load()
  }, [])

  return { data }
}
