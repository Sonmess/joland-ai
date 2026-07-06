import { FATE_CARDS } from '~/data/fateCards'
import type { FateCard } from '~/types/fate'

// Survives re-draws within the session so the same card never comes up twice
// in a row. Client-only — drawing happens on click, never during SSR.
let lastDrawnId: FateCard['id'] | null = null

/** Drawing from Jolanda's fate deck: uniform random, no immediate repeats. */
export const useFateCard = () => {
  const drawCard = (): FateCard => {
    const deck = FATE_CARDS.filter((card) => card.id !== lastDrawnId)
    const card = deck[Math.floor(Math.random() * deck.length)]!
    lastDrawnId = card.id
    return card
  }

  return { drawCard }
}
