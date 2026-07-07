import type { FateCard } from '~/types/fate'

/**
 * Jolanda's fate deck — situations inspired by real tarot arcana, each mapped
 * to one of her recorded hlášky where a fitting one exists. Cards without a
 * recording fall back to the synth reveal chime. Adding a card = one entry.
 *
 * Keep the array sorted by ascending arcana numeral: the order is the deck
 * order shown in the "Zmena osudu" picker, whose card backs are numbered
 * sequentially (I–XV) by position.
 */
export const FATE_CARDS: FateCard[] = [
  {
    id: 'blazon',
    name: 'Blázon',
    numeral: '0',
    symbol: '⚘',
    mood: 'neutral',
    meaning: 'Nový začiatok',
    interpretation:
      'Karta nových začiatkov. Skočte do neznáma skôr, než vás rozum stihne odhovoriť — najväčšie chyby robia tí, čo nikdy nevykročia.',
    voiceLine: 'necekejte-az-vyhasnete',
  },
  {
    id: 'pat-minci',
    name: 'Päť mincí',
    numeral: 'V',
    symbol: '⛤',
    mood: 'bad',
    meaning: 'Bieda a núdza',
    interpretation:
      'Karta prázdnych vreciek. Peniaze tento týždeň radšej dvakrát prepočítajte — no pamätajte, bohatstvo nie je len v minciach.',
    voiceLine: 'vy-mate-dobry-nemate-nic',
  },
  {
    id: 'milenci',
    name: 'Milenci',
    numeral: 'VI',
    symbol: '♥︎',
    mood: 'good',
    meaning: 'Láska a voľba srdca',
    interpretation:
      'Karta srdca. Láska, partnerstvo alebo veľká voľba citov stojí pred vami — vyberajte srdcom, no oči nechajte otvorené.',
    voiceLine: 'tak-dobre-zdravi-a-rodinny-stavy',
  },
  {
    id: 'devat-mecov',
    name: 'Deväť mečov',
    numeral: 'IX',
    symbol: '⚕︎',
    mood: 'bad',
    meaning: 'Choroba a úzkosť',
    interpretation:
      'Karta ťažkých nocí a starostí o zdravie. Doprajte telu aj duši odpočinok — a nezanedbajte prevenciu.',
    voiceLine: 'to-je-zla-nemoc',
  },
  {
    id: 'pustovnik',
    name: 'Pustovník',
    numeral: 'IX',
    symbol: '⛯',
    mood: 'neutral',
    meaning: 'Samota a múdrosť',
    interpretation:
      'Odpovede, ktoré hľadáte, nie sú vonku — sú v tichu. Doprajte si samotu s lampášom vlastných myšlienok; múdrosť prichádza s rokmi.',
    voiceLine: 'musej-mit-hladnou-hlavu',
  },
  {
    id: 'koleso-stastia',
    name: 'Koleso šťastia',
    numeral: 'X',
    symbol: '☸︎',
    mood: 'neutral',
    meaning: 'Zmena osudu',
    interpretation:
      'Osud sa otáča. Veľká zmena je blízko a nedá sa jej vyhnúť — dá sa na ňu len dobre nastúpiť.',
    voiceLine: 'zamicham-na-vas-vas-osud',
  },
  {
    id: 'spravodlivost',
    name: 'Spravodlivosť',
    numeral: 'XI',
    symbol: '⚖︎',
    mood: 'neutral',
    meaning: 'Pravda a karma',
    interpretation:
      'Váhy osudu merajú každému rovnako. Čo ste zasiali, to sa vracia — dlhy sa splácajú a pravda vyjde najavo.',
    voiceLine: 'i-ten-spatnej-clovek-na-kazdyho-spadne',
  },
  {
    id: 'obesenec',
    name: 'Obesenec',
    numeral: 'XII',
    symbol: '⌛︎',
    mood: 'bad',
    meaning: 'Zastavenie a nadhľad',
    interpretation:
      'Svet vyzerá inak dolu hlavou. Veci sa zasekli — no možno práve preto, aby ste sa na ne pozreli z druhej strany. Nezaspite pri tom.',
    voiceLine: 'nespinkejte',
  },
  {
    id: 'smrt',
    name: 'Smrť',
    numeral: 'XIII',
    symbol: '☠︎',
    mood: 'bad',
    meaning: 'Koniec a premena',
    interpretation:
      'Neľakajte sa mena — Smrť je karta premeny. Niečo staré končí, aby uvoľnilo miesto novému. Pustite to.',
    voiceLine: 'a-jeje-to-sem-se-bala',
  },
  {
    id: 'diabol',
    name: 'Diabol',
    numeral: 'XV',
    symbol: '⛧',
    mood: 'bad',
    meaning: 'Pokušenie a závislosť',
    interpretation:
      'Pokušenie a závislosti majú tento týždeň navrch. Dávajte pozor, komu a čomu prepadnete — a strážte rodinné úspory.',
    voiceLine: 'vas-manzel-hraje-automaty',
  },
  {
    id: 'veza',
    name: 'Veža',
    numeral: 'XVI',
    symbol: '♜',
    mood: 'bad',
    meaning: 'Pohroma a otras',
    interpretation:
      'Niečo, čo vyzeralo pevné, sa môže otriasť v základoch. Nebojte sa — Veža búra len to, čo aj tak nemalo vydržať.',
    voiceLine: 'tady-vidim-velky-spatny',
  },
  {
    id: 'hviezda',
    name: 'Hviezda',
    numeral: 'XVII',
    symbol: '★',
    mood: 'good',
    meaning: 'Nádej a záchrana',
    interpretation:
      'Nádej po búrke. Nech ste klesli akokoľvek hlboko, práve teraz sa začínate dvíhať — a pôjde to rýchlejšie, než čakáte.',
    voiceLine: 'ale-ze-sracek-muzete-vytahnout-se',
  },
  {
    id: 'mesiac',
    name: 'Mesiac',
    numeral: 'XVIII',
    symbol: '☾',
    mood: 'neutral',
    meaning: 'Ilúzie a znamenia',
    interpretation:
      'Nie všetko je také, ako vyzerá. Znamenia sú čudné a hmla hustá — nerobte veľké rozhodnutia, kým sa nerozjasní.',
    voiceLine: 'to-neni-normalni',
  },
  {
    id: 'slnko',
    name: 'Slnko',
    numeral: 'XIX',
    symbol: '☀︎',
    mood: 'good',
    meaning: 'Šťastie a úspech',
    interpretation:
      'Karta čistej radosti. Úspech, na ktorom pracujete, dozrieva — a hviezdy hovoria, že mierite vysoko. Nechajte sa hriať.',
    voiceLine: 'hodne-vysoko-miris',
  },
  {
    id: 'svet',
    name: 'Svet',
    numeral: 'XXI',
    symbol: '❂',
    mood: 'good',
    meaning: 'Zavŕšenie cesty',
    interpretation:
      'Posledná karta veľkej cesty. Kruh sa uzatvára, dielo je hotové — a vy ste presne tam, kde máte byť. Dozreli ste.',
    voiceLine: 'cim-starsi-tim-je-dokonalejsi',
  },
]
