import { createContext } from 'react';

export type Language = 'es' | 'en';

export interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
