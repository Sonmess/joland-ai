const ROMAN_VALUES: [number, string][] = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]

/** Converts a positive integer to a Roman numeral (e.g. 14 → "XIV"). */
export const toRoman = (value: number): string => {
  let remainder = Math.floor(value)
  let result = ''
  for (const [amount, glyph] of ROMAN_VALUES) {
    while (remainder >= amount) {
      result += glyph
      remainder -= amount
    }
  }
  return result
}
