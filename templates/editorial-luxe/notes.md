# Editorial Luxe — Research Notes

Refs: webild.io / webild-components-v4 / styles.refero.design (JS-rendered; thin via WebFetch —
synthesized from refero-extracts.md + domain knowledge of editorial/fashion web systems).

## What reads as "editorial luxe" (vs generic AI / our charcoal & dark-luxe)
- **Display serif as architecture.** Huge refined serif (Fraunces / Cormorant) at 90–140px,
  tight tracking, mixed roman + italic in the same headline. Type carries the page, not boxes.
- **Warm muted palette, NOT charcoal-neutral.** Bone/oat paper canvas, ink that's brown-black
  (never #000), one dusty botanical accent (sage/olive) + a warm clay. Refero "putty paper",
  "warm concrete", "renaissance gallery" cues. Chalk alt-band warmer than white.
- **Asymmetric magazine grid.** 12-col, content offset, wide gutters, hanging numerals,
  rule lines, captions set in small-caps sans. Whitespace is the luxury.
- **Full-bleed cinematic photography**, single grade (saturate .9 / warm), edge-to-edge.
- **Premium detailing:** hairline rules over shadows, 0–2px radius, letter-spaced sans eyebrows,
  index numbers (01/02), generous line-height, italic serif for emphasis words.

## Tokens chosen for this build
- Palette: bone `#F4EFE6`, paper `#FBF8F2`, ink `#22201C`, clay `#9C6B4E`,
  sage `#6E7257`, stone `#8C857A`, line `rgba(34,32,28,.14)`.
- Fonts: **Fraunces** (display serif, opsz 9–144, soft + wonky) + **Jost** (geometric sans,
  eyebrows/labels/buttons). Google Fonts.
- Layout: 1180 max, asymmetric splits, index numerals, hairline rules, full-bleed gallery.
- Distinct from dark-luxe (dark obsidian + brass + Cormorant/Jost) by being LIGHT, warm,
  magazine-grid; distinct from charcoal by serif-led + muted botanical palette + no card grid look.

## Demo business
**Maison Verbena** — aesthetics studio / med spa (representative SLC business, public-info style).
Services: facials, injectables, laser, body. Real-feeling content, sticky tap-to-call.

## Motion
Inlined Peak 11 motion layer (animations.css + .js) directly in index.html — single-file,
scroll-reveal + hover lift, reduced-motion safe.
