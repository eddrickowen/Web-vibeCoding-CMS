import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import React from 'react'
import '../globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MERIDIAN — Music Group',
  description: 'A&R, Production, Distribution and Artist Development for artists who refuse to be forgettable.',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      {children}
    </div>
  )
}
