interface ToneOptions {
  /** Frequency in Hz. */
  frequency: number
  /** Seconds after "now" to start. */
  start?: number
  /** Length of the tone including decay, in seconds. */
  duration: number
  volume: number
  type?: OscillatorType
  /** Seconds the tone takes to swell in — long values feel like an approaching presence. */
  attack?: number
}

export type CardSelectVariant = 'gender' | 'status' | 'zodiac'

/** Equal-temperament minor third above a root (root × 2^(3/12)). */
const MINOR_THIRD = 2 ** (3 / 12)

/** Root notes per selection step, stepping down through D minor. */
const SELECT_ROOTS: Record<CardSelectVariant, number> = {
  gender: 293.66, // D4
  status: 261.63, // C4
  zodiac: 233.08, // B♭3
}

const STORAGE_KEY = 'jolandai-sound-muted'

let audioContext: AudioContext | null = null
let mutedRestored = false

// Created lazily inside a click handler, which also satisfies autoplay policies.
const getContext = (): AudioContext | null => {
  if (!import.meta.client) return null
  audioContext ??= new AudioContext()
  if (audioContext.state === 'suspended') void audioContext.resume()
  return audioContext
}

const playTone = (ctx: AudioContext, { frequency, start = 0, duration, volume, type = 'sine', attack = 0.02 }: ToneOptions): void => {
  const oscillator = ctx.createOscillator()
  const gain = ctx.createGain()
  oscillator.type = type
  oscillator.frequency.value = frequency

  const t0 = ctx.currentTime + start
  gain.gain.setValueAtTime(0, t0)
  gain.gain.linearRampToValueAtTime(volume, t0 + attack)
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration)

  oscillator.connect(gain)
  gain.connect(ctx.destination)
  oscillator.start(t0)
  oscillator.stop(t0 + duration + 0.05)
}

/** Synthesized mystic sound effects — no audio assets needed. */
export const useSoundEffects = () => {
  const muted = useState<boolean>('sound:muted', () => false)

  // Restore the persisted preference once, after hydration, so the
  // server-rendered markup (muted = false) never mismatches.
  onMounted(() => {
    if (mutedRestored) return
    mutedRestored = true
    muted.value = localStorage.getItem(STORAGE_KEY) === '1'
  })

  const toggleMuted = (): void => {
    muted.value = !muted.value
    if (import.meta.client) localStorage.setItem(STORAGE_KEY, muted.value ? '1' : '0')
  }
  /**
   * Warm, dark toll built on the given root note: soft sub an octave below,
   * root with a minor third above, and a faint octave overtone. All sine —
   * no bright partials, so nothing rings metallic.
   */
  const playSelectChime = (root: number): void => {
    if (muted.value) return
    const ctx = getContext()
    if (!ctx) return
    playTone(ctx, { frequency: root / 2, duration: 1.0, volume: 0.09, attack: 0.04 })
    playTone(ctx, { frequency: root, duration: 1.6, volume: 0.12, attack: 0.03 })
    playTone(ctx, { frequency: root * MINOR_THIRD, start: 0.05, duration: 1.6, volume: 0.07, attack: 0.03 })
    playTone(ctx, { frequency: root * 2, start: 0.1, duration: 1.1, volume: 0.025, attack: 0.03 })
  }

  /** One chime per step, descending through D minor: D4 → C4 → B♭3. */
  const playCardSelect = (variant: CardSelectVariant): void => {
    playSelectChime(SELECT_ROOTS[variant])
  }

  /** Slow dark rite — deep drone, unsettling swell, low rising minor arpeggio. */
  const playReveal = (): void => {
    if (muted.value) return
    const ctx = getContext()
    if (!ctx) return

    // Deep hollow drone: D2 with an open fifth, all sine for warmth
    playTone(ctx, { frequency: 73.42, duration: 3.4, volume: 0.1 })
    playTone(ctx, { frequency: 110, duration: 3.0, volume: 0.05 })

    // Slowly swelling tritone pad — the "something approaches" unease
    playTone(ctx, { frequency: 146.83, duration: 2.8, volume: 0.05, attack: 0.6 })
    playTone(ctx, { frequency: 207.65, duration: 2.8, volume: 0.035, attack: 0.8 })

    // Low, unhurried minor arpeggio rising out of the dark
    const arpeggio = [293.66, 349.23, 440, 523.25, 587.33]
    arpeggio.forEach((frequency, i) => {
      playTone(ctx, { frequency, start: 0.4 + 0.18 * i, duration: 1.5, volume: 0.07 - i * 0.006 })
    })

    // A single distant glint, kept very dim so it doesn't ring metallic
    playTone(ctx, { frequency: 1174.66, start: 1.5, duration: 1.6, volume: 0.012, attack: 0.1 })
  }

  return { muted, toggleMuted, playCardSelect, playReveal }
}
