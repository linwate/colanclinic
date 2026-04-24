import { zh } from './zh'
import { en } from './en'
import { ja } from './ja'

export const languages = { zh, en, ja }
export type Lang = keyof typeof languages
export const defaultLang: Lang = 'zh'

export function useTranslations(lang: Lang) {
  return languages[lang]
}
