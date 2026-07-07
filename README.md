# JolandAI — hviezdy na dosah ✨

A Slovak tarot-style horoscope web app. Pick who you are, let the fortune teller
Jolanda lay the cards, and receive a personalized horoscope — revealed on a
flipping tarot card, followed by a bonus **fate card** drawn from her deck,
complete with her legendary voice lines.

Horoscopes are for entertainment only. Jolanda insists.

## Features

- 🃏 **Tarot-card selection flow** — gender, relationship status and zodiac sign
  are all chosen by picking ornate tarot cards; status labels adapt to Slovak
  grammatical gender (Ženatý / Vydatá)
- 🔮 **72 pre-written horoscopes** — one for every sign × status × gender
  combination, with proper gender inflections
- 🎴 **Karta osudu** — after the reading, a second card is drawn from a 15-card
  fate deck inspired by real tarot arcana (Veža, Smrť, Diabol, Koleso šťastia…),
  uniform random with no immediate repeats
- 🗣️ **Jolanda voice lines** — each fate card plays a matching mp3 recording
- 🎵 **Synthesized sound effects** — Web Audio API chimes (no audio assets),
  a descending D-minor motif across the three selection steps
- 🌌 **Living night sky** — seeded starfield, and the real constellation of the
  selected zodiac sign fades into the background
- 🔇 Independent mute toggles for effects and voice lines, persisted in
  `localStorage`
- 📱 Fully responsive, SSR-safe, dark mystical theme

## Tech Stack

- [Nuxt 4](https://nuxt.com) + Vue 3 Composition API, TypeScript everywhere
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` —
  CSS-first config, design tokens in `@theme` (no `tailwind.config`)
- [@nuxt/fonts](https://fonts.nuxt.com) — Cinzel (display) + Inter (body)
- Web Audio API for synthesized effects, `HTMLAudioElement` for voice lines
- No backend, no database — the whole first version runs client-side

## Getting Started

Requires **Node.js 20.19+** (or 22+).

```bash
npm install       # install dependencies (runs `nuxt prepare` afterwards)
npm run dev       # start dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run preview    # preview the production build
npm run generate   # static site generation
npm run typecheck  # vue-tsc type checking
```

## Project Structure

Components follow **atomic design** — atoms compose into molecules, molecules
into organisms, assembled by the page:

```
app/
├─ assets/css/main.css        # Tailwind import + @theme design tokens
├─ types/                     # horoscope.ts, fate.ts — all shared types
├─ data/
│  ├─ options.ts              # genders, statuses, zodiac signs (Slovak labels)
│  ├─ horoscopes.ts           # the 72-entry horoscope catalog
│  ├─ constellations.ts       # star charts of the 12 zodiac constellations
│  └─ fateCards.ts            # Jolanda's 15-card fate deck
├─ composables/
│  ├─ useHoroscope.ts         # selection state + horoscope lookup
│  ├─ useFateCard.ts          # fate deck draw (no immediate repeats)
│  ├─ useSoundEffects.ts      # Web Audio synth chimes + mute state
│  └─ useVoiceLines.ts        # mp3 voice line registry + mute state
├─ sounds/                    # Jolanda's recordings (imported via Vite)
├─ components/
│  ├─ atoms/                  # CardFrame, TarotCard visuals, logo, buttons,
│  │                          # starfield, zodiac constellation
│  ├─ molecules/              # TarotCard, StepIndicator
│  └─ organisms/              # HeroSection, SelectionStep, HoroscopeReveal,
│                             # FateCardReveal, AppFooter
├─ pages/index.vue            # the single-page flow
└─ app.vue                    # background layers + page + footer
```

## How It Works

**The flow.** `pages/index.vue` renders three `SelectionStep` organisms
(gender → status → sign), each a grid of `TarotCard`s. Steps appear
progressively and auto-scroll as choices are made; `StepIndicator` tracks
progress. All selection state lives in the `useHoroscope` composable
(`useState`, shared app-wide).

**The reading.** `HoroscopeReveal` shows a face-down card; clicking it looks up
`HOROSCOPES[sign][status][gender]` from the catalog and flips the card with a
CSS 3D transform. The nested `Record` type makes TypeScript prove that all 72
combinations exist. A second later, `FateCardReveal` slides in — `useFateCard`
draws uniformly from the deck (never the same card twice in a row), the card
flips with a mood-colored glow (gold / crimson / violet), and its voice line
plays.

**Sound.** Two independent systems, each with its own persisted mute toggle in
the footer: `useSoundEffects` synthesizes everything with the Web Audio API
(selection chimes descend D4 → C4 → B♭3 through the flow; the reveal is a dark
drone + rising arpeggio), and `useVoiceLines` plays Jolanda's mp3 recordings —
one at a time, she does not talk over herself. A fate card without an assigned
voice line falls back to the synth reveal chime.

**The sky.** `StarfieldBackground` renders ~110 twinkling star `<span>`s from a
*seeded* PRNG — deterministic output keeps server and client renders identical
(no hydration mismatch). `ZodiacConstellation` watches the selected sign and
fades in that sign's real constellation, drawn as faint SVG lines from
`data/constellations.ts`.

**A hard-won rendering note:** never put a CSS `filter` (e.g. `drop-shadow`)
on the 3D flip containers or their faces — it flattens `transform-style` and
breaks backface culling. Card glows use `box-shadow` for this reason.

## Extending

- **Add a fate card:** drop an entry into `data/fateCards.ts` (id, name,
  numeral, symbol, mood, interpretation, optional `voiceLine`). That's it.
- **Add a voice line:** put the mp3 in `app/sounds/`, register it in
  `useVoiceLines.ts` (import + one registry entry) — the `VoiceLineId` type
  updates automatically and card assignments are type-checked.
- **Edit horoscopes:** all texts live in `data/horoscopes.ts`; per-sign energy
  and career paragraphs are shared constants, love paragraphs are per
  status × gender.

## Roadmap

- **AI-generated horoscopes** — a hybrid approach: LLM-generated daily
  readings cached per profile (only 72 combinations), with the current
  catalog serving as the offline fallback. The catalog's lookup shape already
  mirrors the future cache key.
- Persistence/database if reading history or accounts ever land.

---

Created by Ing. Matej Boháč · Horoskopy slúžia len na zábavu 🌙
