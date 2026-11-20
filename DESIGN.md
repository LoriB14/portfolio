# Design

The portfolio behaves like a studio reel: a live orchid shader and billboard type lead, the interface recedes.

## Colour

| Token | Value | Use |
|---|---|---|
| `--ink` | `#050505` | Default ground (hero, work, skills, footer) |
| `--cream` | `#ece6dc` | Light fields (about, experience, education) and text on ink |
| `--orchid` | `#da70d6` | The one accent: primary pill, hover fills, contact field, footer wordmark |
| `--orchid-deep` | `#8e3a8b` | Orchid on cream (highlighted words, certificate tags), shader shadows |

Sections alternate full-bleed ink and cream; contact is drenched orchid. No other hues. Secondary text is the field's own ink or cream at reduced alpha, never grey.

## Type

- **Display:** Bricolage Grotesque, weight 600–700, `opsz` 96, tracking −0.035 to −0.05em, line-height ~0.9. The hero name uses `font-stretch: 82%` and is fitted to the viewport width in JS.
- **Body:** Schibsted Grotesk, 17px, line-height 1.55.
- **Labels:** Martian Mono, 11px, uppercase, `font-stretch: 87.5%` — for indices, dates, section labels only.

All fonts self-hosted in `public/fonts`.

## Layout

- Side gutter `--gx: clamp(16px, 3.4vw, 48px)`; section padding `clamp(72px, 8vw, 128px)`.
- Each section opens with a mono label row over a 1px rule, then a display heading.
- Hairline rules divide lists (work, experience, education). No cards, no shadows.

## Motion

- Easing: `--expo cubic-bezier(0.16, 1, 0.3, 1)` for movement, `--inout` for wipes.
- Signature: WebGL domain-warped gradient in the hero that bends toward the pointer (renders at 0.55 scale, pauses off-screen, single still frame for reduced motion).
- Entrances: masked letter/word rise (`Split` + `.rise`) on headings only; `.fade` for supporting text. Triggered once by `[data-reveal]`.
- About: scroll-scrubbed word opacity (`--p` set from scroll).
- Hovers: pill fills rise from below; work rows fill orchid from the bottom; nav links draw an underline.
- Preloader counter (1.5s) then clip-path wipe. Lenis smooth scroll.
- `prefers-reduced-motion` and `?static` settle every entrance and stop loops.

## Components

`Nav` (colour follows the section underneath), `Hero`, `Shader`, `About`, `Work` (index + slide-in project panel), `Experience` (accordion), `Skills` (two opposing marquees), `Education` (two separate entries), `Contact` (form needs `VITE_CONTACT_EMAIL`, falls back to LinkedIn), `Resume` (printable sheet, the only Tailwind user).
