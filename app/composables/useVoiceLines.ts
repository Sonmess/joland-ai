import tadyVidimVelkySpatny from '~/sounds/tady-vidim-velky-spatny.mp3';
import aJejeToSemSeBala from '~/sounds/a-jeje-to-sem-se-bala.mp3';
import vyMateDobryNemateNic from '~/sounds/vy-mate-dobry-nemate-nic.mp3';
import aleZeSracekMuzeteVytahnoutSe from '~/sounds/ale-ze-sracek-muzete-vytahnout-se.mp3';
import hodneVysokoMiris from '~/sounds/hodne-vysoko-miris.mp3';
import toJeZlaNemoc from '~/sounds/to-je-zla-nemoc-todleto.mp3';
import toNeniNormalni from '~/sounds/to-neni-normarni.mp3';
import vasManzelHrajeAutomaty from '~/sounds/vas-manzel-hraje-automaty.mp3';
import cimStarsiTimJeDokonalejsi from '~/sounds/cim-starsi-tim-je-dokolonejsi.mp3';
import iTenSpatnejClovekNaKazdyhoSpadne from '~/sounds/i-ten-spatnej-clovek-na-kazdyho-spadne.mp3';
import jajBozeMuj from '~/sounds/jaj-boze-muj.mp3';
import jajChudak from '~/sounds/jaj-chudak.mp3';
import mateStrach from '~/sounds/mate-strach.mp3';
import musejMitHladnouHlavu from '~/sounds/musej-mit-hladnou-hlavu.mp3';
import necekejteAzVyhasnete from '~/sounds/necekejte-az-vyhasnete.mp3';
import nespinkejte from '~/sounds/nespinkejte.mp3';
import paneBoze from '~/sounds/pane-boze.mp3';
import takDobreZdraviARodinnyStavy from '~/sounds/tak-dobre-zdravi-a-rodinny-stavy.mp3';
import vTyRodineVidimVelkyMateChaus from '~/sounds/v-ty-rodine-vidim-velky-mate-chaus.mp3';
import vasVelicePostihneVelkaDedicnost from '~/sounds/vas-velice-postihne-velka-dedicnost.mp3';
import vsechnoSeToBouri from '~/sounds/vsechno-se-to-bouri.mp3';
import zamichamNaVasVasOsud from '~/sounds/zamicham-na-vas-vas-osud.mp3';

export type VoiceLineId = keyof typeof VOICE_LINES;

const VOICE_LINES = {
  'tady-vidim-velky-spatny': tadyVidimVelkySpatny,
  'a-jeje-to-sem-se-bala': aJejeToSemSeBala,
  'vy-mate-dobry-nemate-nic': vyMateDobryNemateNic,
  'ale-ze-sracek-muzete-vytahnout-se': aleZeSracekMuzeteVytahnoutSe,
  'hodne-vysoko-miris': hodneVysokoMiris,
  'to-je-zla-nemoc': toJeZlaNemoc,
  'to-neni-normalni': toNeniNormalni,
  'vas-manzel-hraje-automaty': vasManzelHrajeAutomaty,
  'cim-starsi-tim-je-dokonalejsi': cimStarsiTimJeDokonalejsi,
  'i-ten-spatnej-clovek-na-kazdyho-spadne': iTenSpatnejClovekNaKazdyhoSpadne,
  'jaj-boze-muj': jajBozeMuj,
  'jaj-chudak': jajChudak,
  'mate-strach': mateStrach,
  'musej-mit-hladnou-hlavu': musejMitHladnouHlavu,
  'necekejte-az-vyhasnete': necekejteAzVyhasnete,
  'nespinkejte': nespinkejte,
  'pane-boze': paneBoze,
  'tak-dobre-zdravi-a-rodinny-stavy': takDobreZdraviARodinnyStavy,
  'v-ty-rodine-vidim-velky-mate-chaus': vTyRodineVidimVelkyMateChaus,
  'vas-velice-postihne-velka-dedicnost': vasVelicePostihneVelkaDedicnost,
  'vsechno-se-to-bouri': vsechnoSeToBouri,
  'zamicham-na-vas-vas-osud': zamichamNaVasVasOsud,
} as const;

const STORAGE_KEY = 'jolandai-voice-muted';

let currentAudio: HTMLAudioElement | null = null;
let mutedRestored = false;

/** Jolanda's recorded one-liners, toggled separately from the synth effects. */
export const useVoiceLines = () => {
  const voiceMuted = useState<boolean>('voice:muted', () => false);

  // Restore the persisted preference once, after hydration, so the
  // server-rendered markup (muted = false) never mismatches.
  onMounted(() => {
    if (mutedRestored) return;
    mutedRestored = true;
    voiceMuted.value = localStorage.getItem(STORAGE_KEY) === '1';
  });

  const toggleVoiceMuted = (): void => {
    voiceMuted.value = !voiceMuted.value;
    if (import.meta.client)
      localStorage.setItem(STORAGE_KEY, voiceMuted.value ? '1' : '0');
  };

  /** Plays a line unless muted. Returns whether it actually played. */
  const playVoiceLine = (id: VoiceLineId): boolean => {
    if (!import.meta.client || voiceMuted.value) return false;

    // One voice at a time — Jolanda does not talk over herself.
    currentAudio?.pause();
    currentAudio = new Audio(VOICE_LINES[id]);
    currentAudio.volume = 0.9;
    void currentAudio.play();
    return true;
  };

  return { voiceMuted, toggleVoiceMuted, playVoiceLine };
};
