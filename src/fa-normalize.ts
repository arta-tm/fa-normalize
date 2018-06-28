// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
import 'core-js/fn/array/index-of'
import {
  EndFaLetters,
  FaSigns,
  FaAlefLetters,
  FaRealLetters,
  FirstFaLetters,
  MiddleFaLetters,
  NoneCountinuesLetters,
  SeparateFaLetters,
  WhiteSpaces
} from './chars'
// ...

/**
 * Persian Text Normalizer Class
 * @class FaNormalize
 */
class FaNormalize {
  private static flagJump: boolean = false

  /**
   * this is a static class so you create new instance of class
   */
  constructor() {
    throw new Error('FaNormalize is a static class')
  }

  /**
   * Normalize passed text
   *
   * @param text [String] Text for normalizing
   * @param reverse [boolean] if you want reverse text pass this true (DEFAULT: true)
   */
  public static normalize(text: string, reverse: boolean = true) {
    let j = 0
    let rText = ''
    while (j < text.length) {
      let c = FaNormalize.normalizeChar(text, j)
      rText += c
      if (FaNormalize.flagJump) {
        j++
      }
      j++
    }
    if (reverse) {
      return rText
        .split('')
        .reverse()
        .join('')
    }
    return rText
  }

  /**
   * return normalized char for index of the text
   * @param text [String]  String for normalize
   * @param index [number] index of char in string
   */
  private static normalizeChar(text: string, index: number): string {
    let prevChar = null
    let currChar = null
    let nextChar = null
    let j = index - 1

    FaNormalize.flagJump = false

    if (index > 0) {
      prevChar = text[j]
    }

    // Passes Erab to previous letter
    while (prevChar && FaSigns.indexOf(prevChar) >= 0 && prevChar != null) {
      if (j > 1) {
        prevChar = text[--j]
      } else {
        prevChar = null
      }
    }

    if (index < text.length) {
      currChar = text[index]
    }
    if (index < text.length - 1) {
      nextChar = text[index + 1]
    }

    // Passes Erab to next letter
    j = index + 1
    while (nextChar && FaSigns.indexOf(nextChar) >= 0 && nextChar != null) {
      if (j < text.length - 1) {
        nextChar = text[++j]
      } else {
        nextChar = null
      }
    }

    if (currChar && FaRealLetters.indexOf(currChar) < 0) {
      return currChar
    } else {
      if (
        prevChar === null ||
        NoneCountinuesLetters.indexOf(prevChar) >= 0 ||
        WhiteSpaces.indexOf(prevChar) >= 0
      ) {
        // if the previous letter is not connected
        if (
          currChar &&
          (nextChar === null ||
            FaRealLetters.indexOf(nextChar) < 0 ||
            WhiteSpaces.indexOf(nextChar) >= 0)
        ) {
          // if the next letter is not connected
          return SeparateFaLetters[FaRealLetters.indexOf(currChar)]
        } else if (nextChar != null && FaRealLetters.indexOf(nextChar) >= 0) {
          // if the next letter is part of the persian letters
          if (currChar === '\u0644' /*ل*/ && FaAlefLetters.indexOf(nextChar) >= 0) {
            FaNormalize.flagJump = true
            switch (nextChar) {
              case '\u0622' /*آ*/:
                return '\uFEF5' /*ﻵ*/
              case '\u0627' /*ا*/:
                return '\uFEFB' /*ﻻ*/
              case '\u0623' /*أ*/:
                return '\uFEF7' /*ﻷ*/
              case '\u0625' /*إ*/:
                return '\uFEF9' /*ﻹ*/
            }
          }
          if (currChar) {
            return FirstFaLetters[FaRealLetters.indexOf(currChar)]
          }
        }
      } else if (
        prevChar != null &&
        FaRealLetters.indexOf(prevChar) >= 0 &&
        NoneCountinuesLetters.indexOf(prevChar) < 0
      ) {
        // if the previous letter is part of the connected Persian letters
        if (
          currChar &&
          (nextChar == null ||
            FaRealLetters.indexOf(nextChar) < 0 ||
            WhiteSpaces.indexOf(nextChar) >= 0)
        ) {
          // if the next char does not have a connection to the current letter
          return EndFaLetters[FaRealLetters.indexOf(currChar)]
        } else if (nextChar != null && FaRealLetters.indexOf(nextChar) >= 0) {
          // if the next letter is part of the Persian letters
          if (currChar === '\u0644' /*ل*/ && FaAlefLetters.indexOf(nextChar) >= 0) {
            FaNormalize.flagJump = true
            switch (nextChar) {
              case '\u0622' /*آ*/:
                return '\uFEF6' /*ﻶ*/
              case '\u0627' /*ا*/:
                return '\uFEFC' /*ﻼ*/
              case '\u0623' /*أ*/:
                return '\uFEF8' /*ﻸ*/
              case '\u0625' /*إ*/:
                return '\uFEFA' /*ﻺ*/
            }
          }
          if (currChar) {
            return MiddleFaLetters[FaRealLetters.indexOf(currChar)]
          }
        }
      }
    }
    return ''
  }
}
/**
 * Normalize passed text
 *
 * @param text [String] Text for normalizing
 * @param reverse [boolean] if you want reverse text pass this true (DEFAULT: true)
 */
const normalize = (text: string, reverse: boolean = true) => {
  return FaNormalize.normalize(text, reverse)
}
export default normalize
