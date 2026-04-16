# Design Brief

## Visual Direction
Refined minimalism with premium tech aesthetic. Pure white environment with dark navy primary colors and warm accent for high-priority CTAs. Inspired by Linear, Stripe, and Apple design language — clean geometry, generous spacing, sophisticated typography hierarchy.

## Tone & Differentiation
Professional, trustworthy, approachable. Elevated card surfaces with subtle shadows create depth without ornamentation. Bold display typography for headlines commands attention. Strategic accent color (warm orange) applied only to CTAs and highlights — restraint amplifies impact.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| background | 1.0 0 0 | Pure white page background |
| foreground | 0.15 0.02 240 | Dark navy text, primary content |
| card | 0.99 0.01 240 | Elevated card surfaces, subtle off-white |
| primary | 0.28 0.05 240 | Dark navy for headings, emphasis |
| accent | 0.65 0.18 32 | Warm orange for CTAs, highlights, interactions |
| muted | 0.92 0.01 240 | Light grey for secondary content, dividers |
| border | 0.93 0.01 240 | Subtle borders between zones |
| destructive | 0.55 0.22 25 | Error states, cautionary elements |

## Typography
- **Display**: General Sans (bold, 600–700 weight) for headlines, section titles
- **Body**: Inter (regular, 400 weight) for paragraphs, UI labels
- **Mono**: Geist Mono for code snippets, technical references

Type scale: 12px (xs), 14px (sm), 16px (base), 18px (lg), 24px (xl), 32px (2xl), 48px (3xl)

## Structural Zones
- **Header**: White bg with subtle border-bottom, sticky on scroll
- **Hero**: Full viewport with bold headline, subtext, dual CTA buttons, tech badges
- **Content sections**: Alternating bg-background and bg-muted/5 for rhythm
- **Cards**: bg-card with shadow-elevated, rounded-lg corners, hover:shadow-hover
- **Footer**: bg-muted/10 with border-t, muted text tone

## Spacing & Rhythm
Generous margins (3rem–4rem sections), 24px card padding, 16px internal element spacing. Hierarchy through size and weight, not density. Break between hero and about: 4rem. Between sections: 3rem. Mobile: halve vertical spacing.

## Component Patterns
- **Buttons**: accent bg for primary CTAs, secondary style with border for alternatives. Hover: shadow-hover + text darkens. Smooth transitions.
- **Project cards**: bg-card with shadow-elevated, hover:scale-up + shadow-hover + darken. Internal: image area, title (bold), tech badges, description (muted), CTA link.
- **Skills grid**: 2–3 columns (mobile–desktop), each skill has icon + label. Subtle border on hover.
- **Contact form**: Input fields with border and light bg-input, focus:ring, labels in primary color.

## Motion Choreography
Entrance: fade-in + slide-up (staggered 100ms per element). Interactions: scale-in on buttons (300ms), slide-up on cards (500ms). Scroll: no parallax, subtle fade-in as elements enter viewport. All transitions use ease-out cubic-bezier(0.4, 0, 0.2, 1).

## Constraints
- No gradients or color fades (solid colors only)
- No drop shadows beyond shadow hierarchy (subtle, elevated, hover)
- No rounded-full borders (use rounded-lg max)
- Single accent color across entire product — orange only on CTAs and highlights
- Typography: 2 font families maximum (General Sans + Geist Mono)
- Mobile-first responsive design (sm: 640px, md: 768px, lg: 1024px)

## Signature Detail
Strategic use of accent orange on high-priority CTAs creates "landing beacon" effect — user eye drawn to action points immediately. Combined with dark navy headings on white, produces premium, confident aesthetic without decoration.
