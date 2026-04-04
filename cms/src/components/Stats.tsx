'use client'

import { useEffect, useRef, useMemo } from 'react'

const DEFAULT_STATS = [
  { target: 15,  suffix: '+', label: 'Years Active' },
  { target: 84,  suffix: '',  label: 'Artists Signed' },
  { target: 320, suffix: '+', label: 'Releases' },
  { target: 4.2, suffix: 'B', label: 'Total Streams' },
]

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }

function animateCounter(el: HTMLElement, target: number, suffix: string) {
  const isFloat  = target % 1 !== 0
  const duration = 2400
  let start: number | null = null

  function step(ts: number) {
    if (!start) start = ts
    const elapsed  = Math.min(ts - start, duration)
    const progress = easeOutCubic(elapsed / duration)
    const current  = progress * target
    el.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix
    if (elapsed < duration) requestAnimationFrame(step)
    else el.textContent = target + suffix
  }
  requestAnimationFrame(step)
}

export default function Stats({ data = {} }: { data?: any }) {
  const STATS = useMemo(
    () => data.stats?.length ? data.stats : DEFAULT_STATS,
    [data.stats]
  )
  const refs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      refs.current.forEach((el, i) => {
        if (el) el.textContent = STATS[i].target + STATS[i].suffix
      })
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = refs.current.indexOf(entry.target as HTMLSpanElement)
            if (idx === -1) return
            animateCounter(entry.target as HTMLElement, STATS[idx].target, STATS[idx].suffix)
          }
        })
      },
      { threshold: 0.5 }
    )

    refs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [STATS])

  return (
    <section id="stats" className="stats section-pad">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat: any, i: number) => (
            <div className="stat-item" key={stat.label} data-reveal data-reveal-delay={i + 1}>
              <span
                className="stat-number display-lg"
                ref={el => { refs.current[i] = el }}
                aria-label={`${stat.target}${stat.suffix} ${stat.label}`}
              >
                0
              </span>
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
