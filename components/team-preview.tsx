"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function TeamPreview() {
  const { lang } = useLanguage()
  const t = translations[lang]
  return (
    <section id="team" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C] mb-4">{t.nav.team.toUpperCase()}</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
            {t.home.meetTeam}
          </h2>
        </div>

        {/* Attorney Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.attorneys.map((attorney) => (
            <div
              key={attorney.name}
              className="group text-center p-8"
            >
              {/* Monogram Circle */}
              <div className="mx-auto w-24 h-24 rounded-full bg-secondary border border-border flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#C9A84C]">
                <span className="font-serif text-2xl text-[#C9A84C] tracking-wider">
                  {attorney.initial}
                </span>
              </div>
              
              {/* Name */}
              <h3 className="font-serif text-xl text-foreground mb-1">
                {attorney.name}
              </h3>
              
              {/* Title */}
              <p className="text-sm text-[#C9A84C] tracking-wide mb-2">
                {attorney.title}
              </p>
              
              {/* Specialisation */}
              <p className="text-sm text-muted-foreground">
                {attorney.spec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
