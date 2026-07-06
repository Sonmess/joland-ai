import { HOROSCOPES } from '~/data/horoscopes'
import { ZODIAC_SIGNS } from '~/data/options'
import type { GenderId, Horoscope, StatusId, ZodiacId } from '~/types/horoscope'

/**
 * Selection state and horoscope resolution for the reading flow.
 *
 * Texts come from the pre-written catalog in `data/horoscopes.ts`. When AI
 * generation is added, `generateHoroscope` becomes the place that calls the
 * API and falls back to this catalog on failure.
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
    if (gender.value === null || status.value === null || sign.value === null) return

    const zodiac = ZODIAC_SIGNS.find((z) => z.id === sign.value)!

    horoscope.value = {
      title: `${zodiac.symbol} ${zodiac.label}`,
      paragraphs: HOROSCOPES[sign.value][status.value][gender.value],
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
