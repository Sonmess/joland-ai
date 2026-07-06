export type GenderId = 'muz' | 'zena'

export type StatusId = 'slobodny' | 'zenaty' | 'ovdoveny'

export type ZodiacId =
  | 'baran'
  | 'byk'
  | 'blizenci'
  | 'rak'
  | 'lev'
  | 'panna'
  | 'vahy'
  | 'skorpion'
  | 'strelec'
  | 'kozorozec'
  | 'vodnar'
  | 'ryby'

/** Generic shape rendered by a TarotCard — every selectable option maps to this. */
export interface CardOption<TId extends string = string> {
  id: TId
  label: string
  symbol: string
  sublabel?: string
}

export interface GenderOption extends CardOption<GenderId> {}

/** Status labels differ by grammatical gender — resolved to a CardOption once gender is known. */
export interface StatusOption {
  id: StatusId
  symbol: string
  labels: Record<GenderId, string>
}

export interface ZodiacSign extends CardOption<ZodiacId> {
  /** e.g. "21. 3. – 19. 4." */
  dateRange: string
}

export interface Horoscope {
  title: string
  paragraphs: string[]
}

export interface HoroscopeSelection {
  gender: GenderId
  status: StatusId
  sign: ZodiacId
}
