"use client"

import { createContext, ReactNode, useContext, useMemo, useState } from "react"

type Language = "en" | "es"

type LanguageContextValue = {
  lang: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en")

  const value = useMemo(
    () => ({
      lang,
      toggleLanguage: () => setLang((prev) => (prev === "en" ? "es" : "en")),
    }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}
