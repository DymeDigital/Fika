---
name: frontend-design
description: Frontend/UI design conventions for the FINKA site (Next.js 15 + Tailwind v4). Use before building or editing any component, page, or styling — buttons, cards, forms, hero sections, typography, spacing, color. Keeps new UI visually consistent with the existing brand system in app/globals.css.
---

# FINKA Frontend Design

FINKA is a tool & plant hire (equipment rental) site. Stack: Next.js 15 (App Router), React 19, Tailwind CSS v4 (`@theme` tokens, no `tailwind.config.js`), `framer-motion` for motion, `lucide-react` for icons, `clsx` for conditional classes.

Design tokens and reusable classes already live in `app/globals.css` — **read it before adding new ones**, and extend it rather than duplicating one-off styles inline.

## Brand identity
FIKA is a real hardware/trade-supplier brand — deep forest green + safety yellow, bold blocky all-caps headings, printed-flyer energy. The source of truth is the actual logo (`public/images/logo.png`) and the promo catalogue flyer (`.claude/branding/`) — both show a **bold, high-contrast, print-catalogue look**: solid color blocks, real product photography on white cards with yellow price tags, thin borders, subtle rounded corners. Not moody cinematic photography, not glassmorphism/backdrop-blur, not soft translucent hairline borders — that pattern reads as generic "AI slop" and was explicitly rejected by the client once already. When in doubt, ask: "would this appear on a printed hardware-store flyer?" If not, reconsider it.

## Color tokens (`--color-finka-*` in `app/globals.css`)
Sampled directly from the logo and flyer — don't eyeball new brand colors, sample the actual assets in `.claude/branding/` if a value is ever in doubt.
- `finka-green` (#116242) — true logo green. Primary accent: section labels, dividers, focus states, icons/links on white backgrounds, active filter states
- `finka-green-light` (#178257) — slightly brighter variant for hover states
- `finka-green-dark` (#03341E) — deep forest from the flyer's footer band. Use for **all large dark surfaces**: navbar-solid, footer, mobile drawer, mobile action bar, dark section intro bands, hero background. Do not use plain black (`#0D0D0D`) for these — it reads as generic dark-tech, not FIKA-branded
- `finka-yellow` (#F9B603) / `finka-yellow-hover` — primary CTA, price badges, ribbon/tag accents. This is the "action" color — solid fills, not tints
- `finka-black` (#0D0D0D) — body text only, not surfaces
- `finka-grey-50…800` — neutrals for borders, muted text, backgrounds
- Never hardcode hex values in components — always reference the token (Tailwind class like `bg-finka-yellow` or `var(--color-finka-green)`). The codebase had drifted into inline hex literals (`style={{ color: '#1C3A2E' }}`) scattered across nearly every page, which is exactly how a palette update stops cascading and pages drift out of sync — always fix the token in `globals.css` first, then sweep any inline hex overrides in the same change

## Typography
- Body font: Inter (`--font-sans`)
- Display font: Poppins 700–900 (`--font-display`), loaded via `next/font/google` in `app/layout.tsx`. Bolder and blockier than Inter — matches the flyer's chunky wordmark instead of reading like a generic SaaS hero
- Display heading classes — always use these, not raw Tailwind text sizes: `.display-xl` (hero), `.display-lg` (page header), `.display-md` (section heading). All are `font-display`, heavy weight, **uppercase**, fluid via `clamp()`
- `.section-label` — small uppercase eyebrow text above section headings (11px, 700 weight, 0.15em tracking, green)
- Body copy: default `line-height: 1.6`, no special class needed, sentence case (only headings go uppercase)

## Buttons — use existing classes, don't hand-roll new ones
- `.btn-primary` — yellow fill, black text, uppercase, tracked. The main conversion action (Book Now, Enquire, etc.)
- `.btn-outline` — transparent/white border, for use over dark/photo backgrounds (hero)
- `.btn-outline-dark` — transparent/grey border, for use on light backgrounds
- `.btn-whatsapp` — WhatsApp green (#25D366), for the WhatsApp CTA specifically only

## Cards
- `.card-equipment` / `.card-category` — white bg, 1px grey-200 border, subtle radius, lift + shadow on hover (`translateY(-3px)` / `-2px`), `ease-out-expo` timing. Reuse these rather than inventing new hover treatments.
- Product/equipment photography on marketing sections (hero, featured, collages) should be real catalogue items pulled from `lib/data/equipment.ts` with a solid yellow price tag overlaid (see Hero's equipment collage) — not generic stock/atmosphere photography. It ties every page back to the actual product catalogue and reads as a real trade business, not a templated site.

## Layout & spacing
- Page width: wrap sections in `.container-site` (max-width 1380px, responsive inline padding) rather than ad-hoc `max-w-*` + `px-*` combos
- Subtle rounded corners, not sharp — `--radius-sm/md/lg` (3/5/8px) matches the flyer's product cells. Tailwind's own `rounded-sm/md/lg` utilities resolve to these tokens automatically (they share the same theme key names), so just use the plain Tailwind class. Still avoid `rounded-xl`/`rounded-2xl`/`rounded-full` (except genuine pills like status dots) — heavy rounding reads off-brand
- No glassmorphism: avoid `backdrop-blur`, translucent `bg-white/5` + `border-white/10` chips over photos/dark backgrounds. Use solid fills instead (solid yellow tag, solid white card) — this was the single biggest "AI slop" tell in the original build and is the thing to actively watch for in review
- `.section-divider` — short, bold yellow rule (48px × 3px) used under section labels/headings, like a highlighter accent

## Forms
- `.form-input` — white bg, 1.5px grey-200 border, green border on focus. Reuse for all text/select inputs rather than restyling per-form.

## Motion
- `framer-motion` for entrance/scroll animations and interactive transitions
- Timing: use `var(--ease-out-expo)` (`cubic-bezier(0.16, 1, 0.3, 1)`) for hover/lift transitions to match cards; simple `ease` for color/border transitions on buttons and inputs
- Keep durations short — 0.2–0.3s for hover states, consistent with existing card/button transitions

## Icons
- `lucide-react` exclusively — don't mix in another icon set

## Working conventions
- Check `components/` for an existing component covering the pattern you need before writing a new one (e.g. `components/layout/MobileActionBar.tsx`, `components/sections/FeaturedEquipment.tsx`)
- Use `clsx` for conditional class composition, not template-string concatenation
- Mobile-first: this is a lead-gen/rental site used heavily on-site by tradespeople on phones — test narrow viewports first, and check `MobileActionBar` doesn't get obscured by new fixed/sticky elements
- When adding a genuinely new pattern (not covered above), add it to `app/globals.css` as a named utility class following the existing BEM-ish naming (`.card-*`, `.btn-*`, `.form-*`) rather than inlining long Tailwind chains in JSX
- Real brand assets (logo, catalogue flyer) live in `.claude/branding/` and `.claude/*.pdf` — check there before guessing at colors, product names, or pricing
- `public/images/logo.png` is the original brand asset but has a huge transparent canvas around a small centered mark (source is 4500×5796, actual logo content is only the ~3168×1243 region in the middle) — placing it directly scales it tiny. `public/images/logo-mark.png` is a tight, non-destructive crop of that same content (same colors, same pixels, just cropped to bounding box) — use this one for UI placement, not the original
- The logo is green-on-transparent with no reversed/white variant, and every surface it sits on (navbar, mobile drawer, footer) is now brand green. Rather than filtering it white (loses the real brand colors), it sits in a small white rounded plaque (`bg-white rounded-md`, padded) — keeps the logo exactly as designed while guaranteeing contrast on any background. Reuse that plaque pattern for any new dark-surface placement of the logo
- `public/images/hero-bg.jpg` and `public/images/about.png` are AI-generated atmosphere shots (not real photos of the business) and were part of what read as "AI slop" to the client. The hero no longer uses `hero-bg.jpg`. If asked to keep improving realism, replacing/removing `about.png` on the About section is the next candidate — check with the user before swapping it since real photos of the actual yard/premises would be better if available
