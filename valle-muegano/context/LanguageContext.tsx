'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'es' | 'en'

interface LangContextType {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LangContextType>({
  lang: 'es',
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es')
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
