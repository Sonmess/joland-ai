import tadyVidimVelkySpatny from '~/sounds/01. tady-vidim-velky-spatny.mp3'
import aJejeToSemSeBala from '~/sounds/02. a-jeje-to-sem-se-bala.mp3'
import vyMateDobryNemateNic from '~/sounds/03. vy-mate-dobry-nemate-nic.mp3'
import aleZeSracekMuzeteVytahnoutSe from '~/sounds/ale-ze-sracek-muzete-vytahnout-se.mp3'
import hodneVysokoMiris from '~/sounds/hodne-vysoko-miris.mp3'
import toJeZlaNemoc from '~/sounds/to-je-zla-nemoc-todleto.mp3'
import toNeniNormalni from '~/sounds/to-neni-normarni.mp3'
import vasManzelHrajeAutomaty from '~/sounds/vas-manzel-hraje-automaty.mp3'

export type VoiceLineId = keyof typeof VOICE_LINES

const VOICE_LINES = {
  'tady-vidim-velky-spatny': tadyVidimVelkySpatny,
  'a-jeje-to-sem-se-bala': aJejeToSemSeBala,
  'vy-mate-dobry-nemate-nic': vyMateDobryNemateNic,
  'ale-ze-sracek-muzete-vytahnout-se': aleZeSracekMuzeteVytahnoutSe,
  'hodne-vysoko-miris': hodneVysokoMiris,
  'to-je-zla-nemoc': toJeZlaNemoc,
  'to-neni-normalni': toNeniNormalni,
  'vas-manzel-hraje-automaty': vasManzelHrajeAutomaty,
} as const

const STORAGE_KEY = 'jolandai-voice-muted'

let currentAudio: HTMLAudioElement | null = null
let mutedRestored = false

/** Jolanda's recorded one-liners, toggled separately from the synth effects. */
export const useVoiceLines = () => {
  const voiceMuted = useState<boolean>('voice:muted', () => false)

  // Restore the persisted preference once, after hydration, so the
  // server-rendered markup (muted = false) never mismatches.
  onMounted(() => {
    if (mutedRestored) return
    mutedRestored = true
    voiceMuted.value = localStorage.getItem(STORAGE_KEY) === '1'
  })

  const toggleVoiceMuted = (): void => {
    voiceMuted.value = !voiceMuted.value
    if (import.meta.client) localStorage.setItem(STORAGE_KEY, voiceMuted.value ? '1' : '0')
  }

  /** Plays a line unless muted. Returns whether it actually played. */
  const playVoiceLine = (id: VoiceLineId): boolean => {
    if (!import.meta.client || voiceMuted.value) return false

    // One voice at a time — Jolanda does not talk over herself.
    currentAudio?.pause()
    currentAudio = new Audio(VOICE_LINES[id])
    currentAudio.volume = 0.9
    void currentAudio.play()
    return true
  }

  return { voiceMuted, toggleVoiceMuted, playVoiceLine }
}
