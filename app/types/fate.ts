import type { VoiceLineId } from '~/composables/useVoiceLines'

export type FateCardMood = 'good' | 'bad' | 'neutral'

/** One card of Jolanda's fate deck, drawn alongside the horoscope. */
export interface FateCard {
  id: string
  /** Card name, e.g. "Veža". */
  name: string
  /** Arcana numeral shown on the card, e.g. "XVI". */
  numeral: string
  symbol: string
  /** Drives the glow color of the revealed card. */
  mood: FateCardMood
  /** Short label, e.g. "Pohroma a otras". */
  meaning: string
  /** One-to-two sentence Slovak interpretation shown on the card face. */
  interpretation: string
  /** Jolanda's recording for this card; without one, the synth chime plays. */
  voiceLine?: VoiceLineId
}
