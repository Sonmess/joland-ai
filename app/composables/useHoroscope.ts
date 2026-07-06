import { CAREER, CLOSINGS, LOVE_BY_STATUS, OPENINGS } from '~/data/horoscopes'
import { ZODIAC_SIGNS } from '~/data/options'
import type { GenderId, Horoscope, StatusId, ZodiacId } from '~/types/horoscope'

const pickRandom = <T>(items: T[]): T => items[Math.floor(Math.random() * items.length)]!

/**
 * Selection state and horoscope generation for the reading flow.
 *
 * Generation is a placeholder (random Slovak fragments) — swapping it for a real
 * AI call later only means replacing the body of `generateHoroscope`.
 */
export const useHoroscope = () => {
  const gender = useState<GenderId | null>('horoscope:gender', () => null)
  const status = useState<StatusId | null>('horoscope:status', () => null)
  const sign = useState<ZodiacId | null>('horoscope:sign', () => null)
  const horoscope = useState<Horoscope | null>('horoscope:result', () => null)

  const isComplete = computed(() => gender.value !== null && status.value !== null && sign.value !== null)

  /** 1-based step the user is currently on (1 = gender, 2 = status, 3 = sign, 4 = done). */
  const currentStep = computed(() => {
    if (gender.value === null) return 1
    if (status.value === null) return 2
    if (sign.value === null) return 3
    return 4
  })

  const generateHoroscope = (): void => {
    if (!isComplete.value) return

    const zodiac = ZODIAC_SIGNS.find((z) => z.id === sign.value)!

    horoscope.value = {
      title: `${zodiac.symbol} ${zodiac.label}`,
      paragraphs: [
        pickRandom(OPENINGS).replaceAll('{sign}', zodiac.label),
        pickRandom(LOVE_BY_STATUS[status.value!]),
        pickRandom(CAREER),
        pickRandom(CLOSINGS),
      ],
    }
  }

  const reset = (): void => {
    gender.value = null
    status.value = null
    sign.value = null
    horoscope.value = null
  }

  return {
    gender,
    status,
    sign,
    horoscope,
    isComplete,
    currentStep,
    generateHoroscope,
    reset,
  }
}
