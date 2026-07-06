import type { GenderOption, StatusOption, ZodiacSign } from '~/types/horoscope'

export const GENDERS: GenderOption[] = [
  { id: 'muz', label: 'Muž', symbol: '♂︎' },
  { id: 'zena', label: 'Žena', symbol: '♀︎' },
]

export const STATUSES: StatusOption[] = [
  {
    id: 'slobodny',
    symbol: '✦',
    labels: { muz: 'Slobodný', zena: 'Slobodná' },
  },
  {
    id: 'zenaty',
    symbol: '⚭',
    labels: { muz: 'Ženatý', zena: 'Vydatá' },
  },
  {
    id: 'ovdoveny',
    symbol: '🕯',
    labels: { muz: 'Vdovec', zena: 'Vdova' },
  },
]

// The ︎ variation selector forces text presentation so the glyphs
// inherit the card's colors instead of rendering as platform emoji.
export const ZODIAC_SIGNS: ZodiacSign[] = [
  { id: 'baran', label: 'Baran', symbol: '♈︎', dateRange: '21. 3. – 19. 4.' },
  { id: 'byk', label: 'Býk', symbol: '♉︎', dateRange: '20. 4. – 20. 5.' },
  { id: 'blizenci', label: 'Blíženci', symbol: '♊︎', dateRange: '21. 5. – 21. 6.' },
  { id: 'rak', label: 'Rak', symbol: '♋︎', dateRange: '22. 6. – 22. 7.' },
  { id: 'lev', label: 'Lev', symbol: '♌︎', dateRange: '23. 7. – 22. 8.' },
  { id: 'panna', label: 'Panna', symbol: '♍︎', dateRange: '23. 8. – 22. 9.' },
  { id: 'vahy', label: 'Váhy', symbol: '♎︎', dateRange: '23. 9. – 23. 10.' },
  { id: 'skorpion', label: 'Škorpión', symbol: '♏︎', dateRange: '24. 10. – 22. 11.' },
  { id: 'strelec', label: 'Strelec', symbol: '♐︎', dateRange: '23. 11. – 21. 12.' },
  { id: 'kozorozec', label: 'Kozorožec', symbol: '♑︎', dateRange: '22. 12. – 20. 1.' },
  { id: 'vodnar', label: 'Vodnár', symbol: '♒︎', dateRange: '21. 1. – 19. 2.' },
  { id: 'ryby', label: 'Ryby', symbol: '♓︎', dateRange: '20. 2. – 20. 3.' },
]
