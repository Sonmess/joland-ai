import type { GenderId, StatusId, ZodiacId } from '~/types/horoscope'

/**
 * Pre-written horoscopes for every sign × status × gender combination (72 total).
 * Each entry has three paragraphs: the sign's energy, a love paragraph specific
 * to the status and grammatical gender, and the sign's career/advice paragraph.
 *
 * This catalog doubles as the offline fallback once AI generation is added —
 * the lookup shape (sign → status → gender) mirrors the future cache key.
 */

// --- Shared per-sign paragraphs -------------------------------------------

const baranEnergy =
  'Mars, váš vládca, vám dnes vlieva do žíl dvojnásobnú dávku energie. Svet čaká na váš prvý krok — a vy ho urobíte skôr, než ostatní stihnú začať premýšľať.'
const baranWork =
  'V práci sa nebojte povedať svoj názor nahlas, Mars stojí pevne za vami. Šťastie dnes praje odvážnym — no večer patrí oddychu, ktorý ste si poctivo zaslúžili.'

const bykEnergy =
  'Venuša vás dnes obdarí pokojom, ktorý vám ostatní môžu len závidieť. Nikam sa neponáhľajte — všetko podstatné si vás nájde samo.'
const bykWork =
  'Vo financiách sa blíži stabilné obdobie, vaša trpezlivosť dozrieva ako dobré víno. Nepodpisujte nič unáhlene a odmeňte sa niečím, čo poteší zmysly.'

const blizenciEnergy =
  'Merkúr dnes zrýchľuje vaše myšlienky aj jazyk. Slová budú vaším najostrejším nástrojom — používajte ich s ľahkosťou, ktorá je vám vlastná.'
const blizenciWork =
  'V práci dnes zvládnete tri veci naraz, no dokončite aspoň dve. Popoludní príde správa, ktorá vám otvorí nové dvere — neprehliadnite ju.'

const rakEnergy =
  'Luna, vaša ochrankyňa, dnes zosilňuje vašu intuíciu na maximum. Prvý pocit bude ten správny — nenechajte si ho nikým vyhovoriť.'
const rakWork =
  'V práci dajte na intuíciu skôr než na tabuľky — Luna vidí ďalej. Večer si doprajte teplo domova; práve tam sa dnes dobíja vaša sila.'

const levEnergy =
  'Slnko, váš vládca, dnes svieti priamo na vás — a vy to dobre viete. Vstupujete do miestností tak, že sa rozsvietia; využite to na dobré veci.'
const levWork =
  'V práci prichádza chvíľa, keď si vaše výsledky konečne niekto všimne — stojte si za nimi. Len pozor na pýchu: aj Slnko občas zapadá, aby mohlo ráno vyjsť krajšie.'

const pannaEnergy =
  'Merkúr dnes ladí váš zmysel pre detail do dokonalosti. Uvidíte veci, ktoré ostatní prehliadajú — a práve v tom je vaša tichá moc.'
const pannaWork =
  'V práci dnes odhalíte chybu, ktorú všetci prehliadli — povedzte o nej s taktom. Večer si dovoľte vypnúť zoznamy úloh; svet sa bez kontroly nezrúti.'

const vahyEnergy =
  'Venuša dnes vyvažuje vaše misky s mimoriadnou gráciou. Harmónia, ktorú okolo seba šírite, sa vám vráti dvojnásobne.'
const vahyWork =
  'V práci budete dnes diplomatom, ktorého si všetci pýtajú — no nezabudnite, že aj váš hlas má váhu. Rozhodnutie, ktoré odkladáte, dozrelo; popoludnie mu praje.'

const skorpionEnergy =
  'Pluto dnes prehlbuje vašu už aj tak prenikavú intuíciu. Vidíte pod povrch vecí aj ľudí — málokto pred vami niečo utají.'
const skorpionWork =
  'V práci odhalíte, čo sa deje v zákulisí — použite to múdro, nie ako zbraň. Večer venujte niečomu, čo vás úplne pohltí; premena potrebuje palivo.'

const strelecEnergy =
  'Jupiter, planéta šťastia, dnes letí presne vaším smerom. Obzor sa rozširuje — a vy už cítite vôňu nových diaľok.'
const strelecWork =
  'V práci sa neuspokojte s malými cieľmi — Jupiter praje veľkorysým plánom. Ak dnes dostanete ponuku, ktorá vonia dobrodružstvom, počúvajte veľmi pozorne.'

const kozorozecEnergy =
  'Saturn dnes odmeňuje vašu disciplínu, ktorú si iní mýlia s tvrdohlavosťou. Schody, po ktorých stúpate, sú strmé — no vy máte najlepšie topánky.'
const kozorozecWork =
  'Kariérny vrchol, na ktorý myslíte, je bližšie, než vyzerá — no dnes stavajte základy, nie vlajku. Financie prajú rozvážnym krokom; presne takým, aké robíte vy.'

const vodnarEnergy =
  'Urán dnes elektrizuje vaše nápady — tie najbláznivejšie budú tie najlepšie. Svet potrebuje ľudí, ktorí myslia o dve dekády dopredu; vy to robíte od narodenia.'
const vodnarWork =
  'V práci dnes prineste ten nápad, ktorý sa bojíte povedať nahlas — Urán stojí pri inovátoroch. Budúcnosť sa píše dnes a pero držíte vy.'

const rybyEnergy =
  'Neptún dnes rozostiera hmlu, v ktorej vy jediní vidíte jasno. Vaše sny nie sú útek — sú mapa; čítajte ju pozorne.'
const rybyWork =
  'V práci dôverujte predtuche — Neptún vám šepká správne odpovede. Doprajte si dnes chvíľu pri vode alebo pri hudbe; tam sa vaše myšlienky poskladajú samy.'

// --- Full catalog ----------------------------------------------------------

export const HOROSCOPES: Record<ZodiacId, Record<StatusId, Record<GenderId, string[]>>> = {
  baran: {
    slobodny: {
      muz: [
        baranEnergy,
        'Vaša priamosť tento týždeň zapôsobí silnejšie než akékoľvek naučené frázy. Niekde medzi povinnosťami zachytíte pohľad, ktorý vás vyzve na malý súboj — a vy v ňom prehráte rád.',
        baranWork,
      ],
      zena: [
        baranEnergy,
        'Vaša priamosť tento týždeň zapôsobí silnejšie než akékoľvek naučené frázy. Niekde medzi povinnosťami zachytíte pohľad, ktorý vás vyzve na malý súboj — a vy v ňom prehráte rada.',
        baranWork,
      ],
    },
    zenaty: {
      muz: [
        baranEnergy,
        'Vo vzťahu je čas prevziať iniciatívu. Prekvapte svoju partnerku niečím odvážnym — spoločné dobrodružstvo vás zblíži viac než tisíc pokojných večerov.',
        baranWork,
      ],
      zena: [
        baranEnergy,
        'Vo vzťahu je čas prevziať iniciatívu. Prekvapte svojho partnera niečím odvážnym — spoločné dobrodružstvo vás zblíži viac než tisíc pokojných večerov.',
        baranWork,
      ],
    },
    ovdoveny: {
      muz: [
        baranEnergy,
        'Spomienky vás dnes nezaťažia, naopak — dodajú vám silu bojovníka, ktorým ste vždy boli. Buďte otvorený nečakaným rozhovorom; jeden z nich môže rozžiariť celý týždeň.',
        baranWork,
      ],
      zena: [
        baranEnergy,
        'Spomienky vás dnes nezaťažia, naopak — dodajú vám silu bojovníčky, ktorou ste vždy boli. Buďte otvorená nečakaným rozhovorom; jeden z nich môže rozžiariť celý týždeň.',
        baranWork,
      ],
    },
  },

  byk: {
    slobodny: {
      muz: [
        bykEnergy,
        'Láska k vám nepribehne, prikráča pomaly — a o to istejšie. Pozvite niekoho na dobré jedlo; pri stole ste neodolateľný.',
        bykWork,
      ],
      zena: [
        bykEnergy,
        'Láska k vám nepribehne, prikráča pomaly — a o to istejšie. Pozvite niekoho na dobré jedlo; pri stole ste neodolateľná.',
        bykWork,
      ],
    },
    zenaty: {
      muz: [
        bykEnergy,
        'Váš vzťah stojí na pevných základoch, no aj tie treba občas pohladiť. Buďte dnes štedrý na dotyky a malé rituály vo dvojici — káva, prechádzka, ticho — urobia zázraky.',
        bykWork,
      ],
      zena: [
        bykEnergy,
        'Váš vzťah stojí na pevných základoch, no aj tie treba občas pohladiť. Buďte dnes štedrá na dotyky a malé rituály vo dvojici — káva, prechádzka, ticho — urobia zázraky.',
        bykWork,
      ],
    },
    ovdoveny: {
      muz: [
        bykEnergy,
        'Ste trpezlivý aj so svojím smútkom — a v tichu spomienok nachádzate pokoj, ktorý iní hľadajú celý život. Doprajte si dnes niečo dobré a nebráňte sa spoločnosti ľudí, pri ktorých sa cítite v bezpečí.',
        bykWork,
      ],
      zena: [
        bykEnergy,
        'Ste trpezlivá aj so svojím smútkom — a v tichu spomienok nachádzate pokoj, ktorý iní hľadajú celý život. Doprajte si dnes niečo dobré a nebráňte sa spoločnosti ľudí, pri ktorých sa cítite v bezpečí.',
        bykWork,
      ],
    },
  },

  blizenci: {
    slobodny: {
      muz: [
        blizenciEnergy,
        'Flirt vám dnes pôjde sám od seba, no hviezdy radia: za jednou z ľahkých konverzácií sa skrýva niekto, kto vás dokáže naozaj počúvať. Nebuďte len zábavný — buďte aj úprimný.',
        blizenciWork,
      ],
      zena: [
        blizenciEnergy,
        'Flirt vám dnes pôjde sám od seba, no hviezdy radia: za jednou z ľahkých konverzácií sa skrýva niekto, kto vás dokáže naozaj počúvať. Nebuďte len zábavná — buďte aj úprimná.',
        blizenciWork,
      ],
    },
    zenaty: {
      muz: [
        blizenciEnergy,
        'S partnerkou sa dnes rozprávajte o všetkom — aj o tom, čo obvykle preskočíte. Jedna spoločná téma vám pripomenie, prečo ste si kedysi tak rozumeli.',
        blizenciWork,
      ],
      zena: [
        blizenciEnergy,
        'S partnerom sa dnes rozprávajte o všetkom — aj o tom, čo obvykle preskočíte. Jedna spoločná téma vám pripomenie, prečo ste si kedysi tak rozumeli.',
        blizenciWork,
      ],
    },
    ovdoveny: {
      muz: [
        blizenciEnergy,
        'Ste zvedavý na svet aj napriek všetkému — a to je dar, ktorý sa nestráca. Slová, ktoré ste nestihli povedať, dnes môžete napísať; a potom zavolajte niekomu, s kým ste sa dávno nesmiali.',
        blizenciWork,
      ],
      zena: [
        blizenciEnergy,
        'Ste zvedavá na svet aj napriek všetkému — a to je dar, ktorý sa nestráca. Slová, ktoré ste nestihli povedať, dnes môžete napísať; a potom zavolajte niekomu, s kým ste sa dávno nesmiali.',
        blizenciWork,
      ],
    },
  },

  rak: {
    slobodny: {
      muz: [
        rakEnergy,
        'Vaše srdce je citlivý kompas a dnes ukazuje jasným smerom. Nebojte sa ukázať, aký ste vo vnútri — práve tá jemnosť niekoho očarí.',
        rakWork,
      ],
      zena: [
        rakEnergy,
        'Vaše srdce je citlivý kompas a dnes ukazuje jasným smerom. Nebojte sa ukázať, aká ste vo vnútri — práve tá jemnosť niekoho očarí.',
        rakWork,
      ],
    },
    zenaty: {
      muz: [
        rakEnergy,
        'Domov je váš chrám a dnes je čas doň pozvať viac svetla. Uvarte niečo spoločne s partnerkou; pri hrncoch sa dnes rodí nežnosť.',
        rakWork,
      ],
      zena: [
        rakEnergy,
        'Domov je váš chrám a dnes je čas doň pozvať viac svetla. Uvarte niečo spoločne s partnerom; pri hrncoch sa dnes rodí nežnosť.',
        rakWork,
      ],
    },
    ovdoveny: {
      muz: [
        rakEnergy,
        'Spomienky dnes prídu ako príliv — nechajte ich prísť aj odísť. Ste nositeľom lásky, ktorá nezmizla, len zmenila podobu; podeľte sa o ňu s blízkymi.',
        rakWork,
      ],
      zena: [
        rakEnergy,
        'Spomienky dnes prídu ako príliv — nechajte ich prísť aj odísť. Ste nositeľkou lásky, ktorá nezmizla, len zmenila podobu; podeľte sa o ňu s blízkymi.',
        rakWork,
      ],
    },
  },

  lev: {
    slobodny: {
      muz: [
        levEnergy,
        'Obdivovateľov máte dosť, no hviezdy dnes ukazujú na jedného konkrétneho človeka, ktorý sa nebojí vášho jasu. Kráľ potrebuje niekoho, kto v ňom vidí aj človeka — dovoľte to.',
        levWork,
      ],
      zena: [
        levEnergy,
        'Obdivovateľov máte dosť, no hviezdy dnes ukazujú na jedného konkrétneho človeka, ktorý sa nebojí vášho jasu. Kráľovná potrebuje niekoho, kto v nej vidí aj človeka — dovoľte to.',
        levWork,
      ],
    },
    zenaty: {
      muz: [
        levEnergy,
        'Doprajte dnes partnerke miesto na výslní — vaša veľkorysosť je najkrajšia koruna, akú môžete nosiť. Spoločný večer nech je malou slávnosťou.',
        levWork,
      ],
      zena: [
        levEnergy,
        'Doprajte dnes partnerovi miesto na výslní — vaša veľkorysosť je najkrajšia koruna, akú môžete nosiť. Spoločný večer nech je malou slávnosťou.',
        levWork,
      ],
    },
    ovdoveny: {
      muz: [
        levEnergy,
        'Vaša hrdosť vás držala vzpriameného aj v najťažších dňoch — dnes ju premeňte na vľúdnosť. Niekto vo vašom okolí potrebuje práve vaše povzbudenie; rozdávajte svetlo, máte ho nadbytok.',
        levWork,
      ],
      zena: [
        levEnergy,
        'Vaša hrdosť vás držala vzpriamenú aj v najťažších dňoch — dnes ju premeňte na vľúdnosť. Niekto vo vašom okolí potrebuje práve vaše povzbudenie; rozdávajte svetlo, máte ho nadbytok.',
        levWork,
      ],
    },
  },

  panna: {
    slobodny: {
      muz: [
        pannaEnergy,
        'Prestaňte hľadať chyby v zozname vlastností a začnite počúvať srdce. Človek, ktorý vás rozosmeje napriek vašim plánom, je vzácnejší než dokonalosť na papieri — buďte naň pripravený.',
        pannaWork,
      ],
      zena: [
        pannaEnergy,
        'Prestaňte hľadať chyby v zozname vlastností a začnite počúvať srdce. Človek, ktorý vás rozosmeje napriek vašim plánom, je vzácnejší než dokonalosť na papieri — buďte naň pripravená.',
        pannaWork,
      ],
    },
    zenaty: {
      muz: [
        pannaEnergy,
        'Drobné gesto povie partnerke viac než veľké slová — a práve drobnosti sú vaša špecialita. Opravte dnes niečo, čo dlho vŕzga; pokojne aj vo vzťahu.',
        pannaWork,
      ],
      zena: [
        pannaEnergy,
        'Drobné gesto povie partnerovi viac než veľké slová — a práve drobnosti sú vaša špecialita. Opravte dnes niečo, čo dlho vŕzga; pokojne aj vo vzťahu.',
        pannaWork,
      ],
    },
    ovdoveny: {
      muz: [
        pannaEnergy,
        'Ste pozorný k druhým aj vo chvíľach vlastného ticha — to je vzácny dar. Venujte spomienkam krátku, upratanú chvíľu a potom otvorte okno; čerstvý vzduch dnes prináša nových ľudí.',
        pannaWork,
      ],
      zena: [
        pannaEnergy,
        'Ste pozorná k druhým aj vo chvíľach vlastného ticha — to je vzácny dar. Venujte spomienkam krátku, upratanú chvíľu a potom otvorte okno; čerstvý vzduch dnes prináša nových ľudí.',
        pannaWork,
      ],
    },
  },

  vahy: {
    slobodny: {
      muz: [
        vahyEnergy,
        'Krása vás dnes priťahuje zo všetkých strán, no skutočná rovnováha príde s človekom, pri ktorom nemusíte nič vážiť. Ak váhate medzi dvomi možnosťami, vyberte si tú, pri ktorej ste pokojnejší.',
        vahyWork,
      ],
      zena: [
        vahyEnergy,
        'Krása vás dnes priťahuje zo všetkých strán, no skutočná rovnováha príde s človekom, pri ktorom nemusíte nič vážiť. Ak váhate medzi dvomi možnosťami, vyberte si tú, pri ktorej ste pokojnejšia.',
        vahyWork,
      ],
    },
    zenaty: {
      muz: [
        vahyEnergy,
        'Vzťah je tanec a dnes vediete vy — jemne a s eleganciou. Urovnajte s partnerkou starý drobný spor; zmierenie vám obom spadne z pliec ako kameň.',
        vahyWork,
      ],
      zena: [
        vahyEnergy,
        'Vzťah je tanec a dnes vediete vy — jemne a s eleganciou. Urovnajte s partnerom starý drobný spor; zmierenie vám obom spadne z pliec ako kameň.',
        vahyWork,
      ],
    },
    ovdoveny: {
      muz: [
        vahyEnergy,
        'Rovnováhu, ktorú ste stratili, pomaly nachádzate znova — s eleganciou sebe vlastnou. Nemusíte na všetko byť sám; obklopte sa dnes krásou a dobrou spoločnosťou, duša si pýta pastvu.',
        vahyWork,
      ],
      zena: [
        vahyEnergy,
        'Rovnováhu, ktorú ste stratili, pomaly nachádzate znova — s eleganciou sebe vlastnou. Nemusíte na všetko byť sama; obklopte sa dnes krásou a dobrou spoločnosťou, duša si pýta pastvu.',
        vahyWork,
      ],
    },
  },

  skorpion: {
    slobodny: {
      muz: [
        skorpionEnergy,
        'Vášeň sa dnes skrýva na nečakanom mieste a spozná vás skôr, než vy ju. Nechajte tentoraz masku doma — tajomný ste dosť aj bez nej.',
        skorpionWork,
      ],
      zena: [
        skorpionEnergy,
        'Vášeň sa dnes skrýva na nečakanom mieste a spozná vás skôr, než vy ju. Nechajte tentoraz masku doma — tajomná ste dosť aj bez nej.',
        skorpionWork,
      ],
    },
    zenaty: {
      muz: [
        skorpionEnergy,
        'Hĺbka vášho vzťahu sa dnes môže ešte prehĺbiť — stačí povedať nahlas jedno tajomstvo, ktoré nosíte v sebe. Partnerka unesie viac, než si myslíte; dôvera je vaša najsilnejšia vášeň.',
        skorpionWork,
      ],
      zena: [
        skorpionEnergy,
        'Hĺbka vášho vzťahu sa dnes môže ešte prehĺbiť — stačí povedať nahlas jedno tajomstvo, ktoré nosíte v sebe. Partner unesie viac, než si myslíte; dôvera je vaša najsilnejšia vášeň.',
        skorpionWork,
      ],
    },
    ovdoveny: {
      muz: [
        skorpionEnergy,
        'Prešli ste hlbinou, z ktorej sa mnohí nevrátia — a vy ste sa vrátili silnejší. Dnes niekto ocení práve vašu schopnosť mlčky rozumieť; buďte nablízku.',
        skorpionWork,
      ],
      zena: [
        skorpionEnergy,
        'Prešli ste hlbinou, z ktorej sa mnohí nevrátia — a vy ste sa vrátili silnejšia. Dnes niekto ocení práve vašu schopnosť mlčky rozumieť; buďte nablízku.',
        skorpionWork,
      ],
    },
  },

  strelec: {
    slobodny: {
      muz: [
        strelecEnergy,
        'Láska na vás dnes môže vyskočiť uprostred pohybu — na ceste, pri športe, na neznámom mieste. Zostaňte slobodný duchom, ale nechajte dvere srdca pootvorené.',
        strelecWork,
      ],
      zena: [
        strelecEnergy,
        'Láska na vás dnes môže vyskočiť uprostred pohybu — na ceste, pri športe, na neznámom mieste. Zostaňte slobodná duchom, ale nechajte dvere srdca pootvorené.',
        strelecWork,
      ],
    },
    zenaty: {
      muz: [
        strelecEnergy,
        'Naplánujte s partnerkou útek z rutiny — pokojne len na jeden večer. Spoločné objavovanie je palivo vášho vzťahu; nádrž si pýta doplniť.',
        strelecWork,
      ],
      zena: [
        strelecEnergy,
        'Naplánujte s partnerom útek z rutiny — pokojne len na jeden večer. Spoločné objavovanie je palivo vášho vzťahu; nádrž si pýta doplniť.',
        strelecWork,
      ],
    },
    ovdoveny: {
      muz: [
        strelecEnergy,
        'Ste rodený objaviteľ a život vás naučil, že cesta nekončí — len mení smer. Dnes je dobrý deň naplánovať malý výlet; horizont vám vždy robil dobre a čaká aj teraz.',
        strelecWork,
      ],
      zena: [
        strelecEnergy,
        'Ste rodená objaviteľka a život vás naučil, že cesta nekončí — len mení smer. Dnes je dobrý deň naplánovať malý výlet; horizont vám vždy robil dobre a čaká aj teraz.',
        strelecWork,
      ],
    },
  },

  kozorozec: {
    slobodny: {
      muz: [
        kozorozecEnergy,
        'Aj pevnosť potrebuje bránu — nechajte ju dnes odomknutú. Niekto trpezlivý už dlhšie klope; možno je čas prestať predstierať, že nepočujete. Ste vytrvalý vo všetkom, buďte aj v láske.',
        kozorozecWork,
      ],
      zena: [
        kozorozecEnergy,
        'Aj pevnosť potrebuje bránu — nechajte ju dnes odomknutú. Niekto trpezlivý už dlhšie klope; možno je čas prestať predstierať, že nepočujete. Ste vytrvalá vo všetkom, buďte aj v láske.',
        kozorozecWork,
      ],
    },
    zenaty: {
      muz: [
        kozorozecEnergy,
        'Vzťah je vaša najdôležitejšia investícia — a dnes je deň na vklad. Odložte prácu o hodinu skôr a venujte ju partnerke; taký úrok nenájdete nikde inde.',
        kozorozecWork,
      ],
      zena: [
        kozorozecEnergy,
        'Vzťah je vaša najdôležitejšia investícia — a dnes je deň na vklad. Odložte prácu o hodinu skôr a venujte ju partnerovi; taký úrok nenájdete nikde inde.',
        kozorozecWork,
      ],
    },
    ovdoveny: {
      muz: [
        kozorozecEnergy,
        'Niesli ste bremeno, pod ktorým by sa iní zlomili — a stojíte. Dovoľte si dnes oprieť sa o niekoho aj vy; sila nie je len v tom, vydržať všetko sám.',
        kozorozecWork,
      ],
      zena: [
        kozorozecEnergy,
        'Niesli ste bremeno, pod ktorým by sa iní zlomili — a stojíte. Dovoľte si dnes oprieť sa o niekoho aj vy; sila nie je len v tom, vydržať všetko sama.',
        kozorozecWork,
      ],
    },
  },

  vodnar: {
    slobodny: {
      muz: [
        vodnarEnergy,
        'Priateľstvo sa dnes môže nečakane zmeniť na niečo viac — pozrite sa lepšie na ľudí, ktorých už poznáte. Buďte otvorený prekvapeniu; ten správny človek vašu originalitu nebude chcieť meniť.',
        vodnarWork,
      ],
      zena: [
        vodnarEnergy,
        'Priateľstvo sa dnes môže nečakane zmeniť na niečo viac — pozrite sa lepšie na ľudí, ktorých už poznáte. Buďte otvorená prekvapeniu; ten správny človek vašu originalitu nebude chcieť meniť.',
        vodnarWork,
      ],
    },
    zenaty: {
      muz: [
        vodnarEnergy,
        'Prekvapte partnerku niečím, čo sa nedá naplánovať — spontánnosť je korenie, ktoré váš vzťah miluje. Vaša nezávislosť a jej blízkosť si dnes podajú ruky.',
        vodnarWork,
      ],
      zena: [
        vodnarEnergy,
        'Prekvapte partnera niečím, čo sa nedá naplánovať — spontánnosť je korenie, ktoré váš vzťah miluje. Vaša nezávislosť a jeho blízkosť si dnes podajú ruky.',
        vodnarWork,
      ],
    },
    ovdoveny: {
      muz: [
        vodnarEnergy,
        'Ste jedinečný a vaša myseľ vždy hľadela dopredu — práve to je dnes vaša záchrana aj dar. Zapojte sa do niečoho spoločného: komunita, projekt, susedia; medzi ľuďmi sa vaše srdce nadýchne.',
        vodnarWork,
      ],
      zena: [
        vodnarEnergy,
        'Ste jedinečná a vaša myseľ vždy hľadela dopredu — práve to je dnes vaša záchrana aj dar. Zapojte sa do niečoho spoločného: komunita, projekt, susedia; medzi ľuďmi sa vaše srdce nadýchne.',
        vodnarWork,
      ],
    },
  },

  ryby: {
    slobodny: {
      muz: [
        rybyEnergy,
        'Niekto sa dnes zahľadí do vašich očí a uvidí oceán — nechajte ho plávať. Vaša citlivosť nie je slabosť; je to jazyk, ktorým hovorí len málokto. Buďte trpezlivý.',
        rybyWork,
      ],
      zena: [
        rybyEnergy,
        'Niekto sa dnes zahľadí do vašich očí a uvidí oceán — nechajte ho plávať. Vaša citlivosť nie je slabosť; je to jazyk, ktorým hovorí len málokto. Buďte trpezlivá.',
        rybyWork,
      ],
    },
    zenaty: {
      muz: [
        rybyEnergy,
        'Partnerka dnes potrebuje vašu empatiu viac, než dáva najavo — vy to však cítite, ako vždy. Večer bez slov, len vo dvojici, povie všetko potrebné.',
        rybyWork,
      ],
      zena: [
        rybyEnergy,
        'Partner dnes potrebuje vašu empatiu viac, než dáva najavo — vy to však cítite, ako vždy. Večer bez slov, len vo dvojici, povie všetko potrebné.',
        rybyWork,
      ],
    },
    ovdoveny: {
      muz: [
        rybyEnergy,
        'Ste citlivý, no silný — a láska, ktorú nosíte v sebe, presahuje brehy času. Premeňte ju dnes na niečo hmatateľné: list, kvet, dobrý skutok; duši sa uľaví.',
        rybyWork,
      ],
      zena: [
        rybyEnergy,
        'Ste citlivá, no silná — a láska, ktorú nosíte v sebe, presahuje brehy času. Premeňte ju dnes na niečo hmatateľné: list, kvet, dobrý skutok; duši sa uľaví.',
        rybyWork,
      ],
    },
  },
}
