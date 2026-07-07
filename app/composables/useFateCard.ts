import { FATE_CARDS } from '~/data/fateCards'
import type { FateCard } from '~/types/fate'

// Survives re-draws within the session so the same card never comes up twice
// in a row — whether drawn randomly or picked from the deck. Client-only;
// drawing happens on click, never during SSR.
let lastDrawnId: FateCard['id'] | null = null

/**
 * The currently revealed fate card and the two ways to get one:
 * a uniform random draw (no immediate repeats) or an explicit pick
 * from the "Zmena osudu" deck. Both play the card's sound.
 */
export const useFateCard = () => {
  const current = useState<FateCard | null>('fate:current', () => null)

  const { playReveal } = useSoundEffects()
  const { playVoiceLine } = useVoiceLines()

  const playCardSound = (card: FateCard): void => {
    const spoke = card.voiceLine ? playVoiceLine(card.voiceLine) : false
    if (!spoke) playReveal()
  }

  const drawRandom = (): void => {
    const deck = FATE_CARDS.filter((card) => card.id !== lastDrawnId)
    const card = deck[Math.floor(Math.random() * deck.length)]!
    lastDrawnId = card.id
    current.value = card
    playCardSound(card)
  }

  const chooseCard = (id: FateCard['id']): void => {
    const card = FATE_CARDS.find((c) => c.id === id)
    if (!card) return
    lastDrawnId = card.id
    current.value = card
    playCardSound(card)
  }

  const resetFate = (): void => {
    current.value = null
  }

  return { current, drawRandom, chooseCard, resetFate }
}
