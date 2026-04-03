# CLAUDE.md — Web Development Reference
> Personal knowledge base for building distinctive, non-generic websites with Claude.
> Use this file at the start of any Claude chat or as a CLAUDE.md in Claude Code projects.

---

## 1. Design Philosophy

**Core rule:** Never default to generic AI aesthetics.
- NO: Inter/Roboto fonts, purple gradients on white, centered hero + 3-feature-grid, pill buttons, rounded cards with drop shadows
- YES: Intentional aesthetic direction, named fonts, specific hex colors, distinctive layout logic

**Before writing any code, commit to one aesthetic direction:**

| Aesthetic | Fonts | Colors | Layout Feel |
|-----------|-------|--------|-------------|
| Brutalist/Raw | Druk Wide + Space Mono | Black + white + neon accent | Asymmetric, heavy borders, no shadows |
| Luxury/Refined | Cormorant Garamond + DM Sans | Warm black + gold + ivory | Generous whitespace, thin dividers |
| Editorial/Magazine | Playfair Display + DM Mono | Paper white + near-black + ink accent | Multi-column, pull quotes, big section numbers |
| Retro-Futuristic | Rajdhani + IBM Plex Mono | Near-black + cyan + magenta | Grid overlays, scan lines, terminal UI |
| Organic/Natural | Lora + Josefin Sans | Linen + forest + clay | Fluid asymmetric, blob shapes |
| Brutally Minimal | Helvetica Neue only | Pure black + white ONLY | 2 elements per screen, extreme whitespace |
| Maximalist/Chaotic | 3+ mixed fonts | Saturated clashing palette | Overlapping, rotated text, clashing grids |
| Art Deco/Geometric | Cinzel + Source Serif Pro | Deep navy + gold + ivory | Symmetrical, chevron dividers, geometric borders |

---

## 2. Typography Rules

Always specify fonts by exact name. Never let Claude pick.

**Recommended pairings:**
- Editorial: `Cormorant Garamond` (display) + `DM Mono` (captions/labels)
- Dark/Cinematic: `Bebas Neue` (titles) + `Editorial New Italic` (body)
- Data/Dashboard: `IBM Plex Mono` (numbers) + `Syne` (headings)
- Luxury: `Playfair Display` + `DM Sans`
- Brutalist: `Druk Wide` + `Space Mono`
- Art Deco: `Cinzel` + `Source Serif Pro`
- Organic: `Lora` + `Josefin Sans`

**Typography sizing principles:**
- Use extreme size contrast: 96px headline next to 13px mono label
- Letter-spacing: `-0.04em` for tight headlines, `0.08em` for label tracking
- Line height: `1.8` for body, `0.9–1.1` for large display headlines
- `text-transform: uppercase` for category labels only

---

## 3. Component Libraries

### Copy-Paste Animated (React + Tailwind + Framer Motion)
- **Aceternity UI** — `ui.aceternity.com` — 200+ animated hero sections, spotlight, beams, cards
- **Magic UI** — `magicui.design` — 50+ animated components built on shadcn, 3D effects
- **21st.dev** — install shadcn components via CLI, community-built ecosystem . https://21st.dev/community/components

### Foundation Libraries
- **shadcn/ui** — `ui.shadcn.com` — gold standard, copy-paste, you own the code, Radix + Tailwind
- **Radix UI** — unstyled accessible primitives powering shadcn
- **Tailwind CSS** — utility-first, powers most modern component libraries
- **DaisyUI** — Tailwind component library, works in plain HTML, many themes
- **Preline** — open-source Tailwind components for landing pages + dashboards

### Animation Libraries
- **Framer Motion** — React animation, powers most of Aceternity/Magic UI effects
- **GSAP + ScrollTrigger** — most powerful, works with any framework, scroll-driven animations
- **Motion Primitives** — copy-paste animations built with Framer Motion

### 3D & Advanced
- **Three.js** — 3D WebGL in browser, Claude can build scenes from description
- **React Three Fiber** — React wrapper for Three.js

### Plain HTML/CSS (no framework needed)
- **UIverse** — `uiverse.io` — Pinterest-style pure CSS effects, copy-paste
- **CodePen** — `codepen.io` — thousands of effects with full source code

---

## 4. Inspiration & Reference Sources

### Design Galleries (paste URLs to Claude)
- `godly.website` — best curated gallery for distinctive work
- `awwwards.com` — award-winning sites, reference for "wow factor"
- `lapa.ninja` — 6,700+ landing pages by category (SaaS, 3D, ecommerce)
- `siteinspire.com` — filter by style, type, subject, platform
- `cssnectar.com` — vetted by design experts, rated by design/coding/creativity
- `stacksorted.com` — individual UI elements with implementation details

### Component & UI References
- `designvault.io` — breakdowns of Notion, Stripe, Spotify UI by component
- `uidesigndaily.com` — free downloadable buttons, cards, navbars, Figma-friendly
- `codrops.net` — creative web techniques with full tutorials and source

### Typography
- `fonts.google.com` — always use named Google Fonts so Claude can import reliably
- `fontsinuse.com` — see what fonts real brands use

---

## 5. How to Ask Claude to Learn from Code

### Method 1: Paste code directly
```
Here is code I found. Learn from this technique:

[paste code]

Now build me the same effect but for [use case].
Keep the animation timing but change colors to [palette].
```

### Method 2: Fetch a URL
```
Fetch [URL] and learn how [specific effect] works.
Apply it to my [component] with these changes: [list changes].
```

### Method 3: Describe a visual effect
```
I see this effect on [site]: [describe exactly what moves, when, how fast, what triggers it].
Reverse-engineer how this probably works and build it for my [component].
```

### Method 4: Reference by library + technique name
```
Using Aceternity UI's spotlight pattern, build [component].
Using GSAP ScrollTrigger's pin and scrub technique, build [section].
Using Framer Motion's stagger animation, animate [list] on scroll.
```

### Method 5: Analyze and upgrade existing code
```
Here is my current [component]:
[paste code]

Analyze what's generic about this. Rewrite it with:
- Aesthetic: [brutalist/luxury/editorial/etc.]
- Font: [specific font]
- Colors: [specific hex values]
- Key interaction: [describe]
```

---

## 6. Prompt Structure Template

Use this structure for all website build requests:

```
Build a [type of site/component] for [purpose].

AESTHETIC: [pick one from Section 1]
Vibe reference: [e.g., "like Monocle magazine", "like a Bloomberg terminal"]

FONTS: [exact Google Font names]
Import: [display font] for headlines, [body font] for text

COLORS:
- Background: [hex]
- Text: [hex]
- Accent: [hex]
- [additional colors as needed]

LAYOUT: [describe the grid/structure/breaks]

INTERACTIONS:
- [specific animation on scroll/hover/load]
- [cursor effect if any]
- [page transitions if any]

AVOID:
- [list generic defaults to prevent]
- NO Inter font
- NO purple gradients
- NO [other specific things]
```

---

## 7. The 5-Round Refinement Loop

1. **Round 1 — Aesthetic direction**: Lock fonts, colors, vibe. Don't add features yet.
2. **Round 2 — Layout skeleton**: Structure, columns, spacing, grid breaks.
3. **Round 3 — Key interaction**: One signature effect (cursor, scroll anim, hover reveal).
4. **Round 4 — Typography detail**: Sizes, tracking, weight contrasts, label styles.
5. **Round 5 — Unexpected detail**: Custom cursor, noise texture, counter animation, magnetic button.

---

## 8. Common Mistakes to Avoid

| Instead of... | Say... |
|---------------|--------|
| "Make it look cool" | "Dark brutalist aesthetic, Druk Wide font, neon yellow on black, zero rounded corners" |
| "Add some animations" | "Staggered text reveal on scroll using Intersection Observer, 80ms delay per line" |
| "Make it professional" | "Editorial/magazine aesthetic, Cormorant Garamond, dense text-heavy layout like Monocle" |
| "Add a hero section" | "Full-viewport hero, title 120px/line-height 0.9, no background image, typography only" |
| Accepting round 1 output | Always iterate at least 3 times before finalizing |

---

## 9. CDN Libraries Claude Can Use Directly

Claude can import these via CDN in HTML/React without any install:

```html
<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Three.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- Chart.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>

<!-- Lottie (for animations) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>
```

React/JSX can import from `cdn.jsdelivr.net`, `esm.sh`, or `unpkg.com`.

---

## 10. MCP Servers for Web Development

Connect these in Claude.ai settings for an enhanced workflow:

| MCP | Use case |
|-----|----------|
| **Figma** | Share design frames → Claude extracts exact colors, fonts, spacing and generates matching code |
| **Vercel** | Deploy sites, check deployment status, debug build errors from chat |
| **Netlify** | Deploy static sites directly from Claude conversations |
| **Magic Patterns** | Iterate on individual UI components before assembling full pages |

---

## 11. Quick Reference: Effect Names for Claude

Use these phrases — Claude knows exactly what to build:

- `magnetic button effect` — button follows cursor with spring physics
- `text scramble on hover` — letters randomize before resolving
- `spotlight card effect` — radial glow follows cursor on card
- `staggered text reveal on scroll` — lines fade/slide in sequentially
- `parallax hero` — background moves slower than scroll
- `smooth scroll with Lenis` — buttery scroll feel
- `cursor dot follower` — custom dot cursor with lag/lerp
- `number counter animation` — counts up on load with requestAnimationFrame
- `horizontal scroll section` — pinned section scrolls horizontally
- `card flip on hover` — 3D CSS perspective flip revealing back
- `gradient mesh background` — animated blurred color blobs
- `noise texture overlay` — grain effect for depth
- `text split animation` — GSAP splits text into chars/words/lines

---

*Last updated: Based on conversation covering design libraries, component ecosystems, and prompting strategies for non-generic web development with Claude.*
