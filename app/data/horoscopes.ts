import type { StatusId } from '~/types/horoscope'

/**
 * Placeholder text fragments for the horoscope generator.
 * A horoscope is assembled as: opening + love (by status) + career + closing.
 * The token {sign} is replaced by the chosen zodiac sign name.
 */

export const OPENINGS: string[] = [
  'Hviezdy dnes stoja v znamení {sign} v neobyčajnej konštelácii. Vesmír vám posiela odkaz, ktorý by ste nemali prehliadnuť.',
  'Karta osudu sa pre znamenie {sign} práve otočila. Energia dnešného dňa vám praje viac, než tušíte.',
  'Mesiac prechádza fázou, ktorá znameniu {sign} otvára brány k novým možnostiam. Dôverujte svojej intuícii.',
  'Planéty sa pre znamenie {sign} zoradili do vzácneho obrazca. Dnešok má potenciál zmeniť váš pohľad na svet.',
]

export const LOVE_BY_STATUS: Record<StatusId, string[]> = {
  slobodny: [
    'V oblasti citov sa blíži nečakané stretnutie. Osoba, ktorú spoznáte v najbližších dňoch, môže vo vašom srdci zanechať hlbokú stopu.',
    'Vaše srdce je otvorené a hviezdy to vedia. Nebojte sa vykročiť z komfortnej zóny — láska často čaká tam, kde ju najmenej hľadáte.',
    'Venuša vám praje. Ak zachytíte pohľad, ktorý trvá o sekundu dlhšie, než je zvykom, neodvracajte sa.',
  ],
  zenaty: [
    'Vo vašom vzťahu sa otvára priestor pre hlbšie porozumenie. Malé gesto pozornosti dnes zaváži viac než veľké slová.',
    'Hviezdy pripomínajú, že aj dlhoročná láska potrebuje iskru. Prekvapte svoju polovičku niečím, čo ste už dlho neurobili.',
    'Vzájomná dôvera bude v najbližších dňoch vaším najcennejším spojencom. Zdieľajte aj to, o čom obvykle mlčíte.',
  ],
  ovdoveny: [
    'Spomienky sú mostom, nie kotvou. Hviezdy vám dnes dodávajú silu pozerať sa dopredu s pokojom v duši.',
    'Vaše srdce nesie múdrosť, ktorú iní len hľadajú. Nový deň prináša jemné svetlo — dovoľte mu vstúpiť.',
    'Vesmír vám posiela ľudí, ktorí vás vedia vypočuť. Neodmietajte pozvanie, ktoré príde nečakane.',
  ],
}

export const CAREER: string[] = [
  'V práci sa objaví príležitosť, ktorá si vyžiada odvahu. Merkúr vám však dáva jasnú hlavu — využite ju.',
  'Vaša trpezlivosť v pracovných záležitostiach čoskoro prinesie ovocie. Nenechajte sa vyviesť z rovnováhy drobnými prekážkami.',
  'Finančná hviezda sa nakláňa vo váš prospech. Deň je priaznivý pre rozhodnutia, ktoré ste dlho odkladali.',
  'Niekto vo vašom okolí si všíma vašu prácu viac, než dávate najavo vy sami. Uznanie je bližšie, než si myslíte.',
]

export const CLOSINGS: string[] = [
  'Šťastné čísla dňa: 3, 7 a 21. Farba, ktorá vám prinesie pokoj, je tmavofialová.',
  'Večer venujte chvíľu tichu. Odpoveď, ktorú hľadáte, príde, keď prestanete hľadať.',
  'Karty hovoria jasne: to najlepšie máte ešte pred sebou. Vykročte pravou nohou.',
  'Nechajte si dnes otvorené okno pre náhodu — práve ona býva poslom osudu.',
]
