"use client"

import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function PracticeAreas() {
  const { lang } = useLanguage()
  const t = translations[lang]
  return (
    <section id="practice-areas" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C] mb-4">{t.home.practiceAreasLabel.toUpperCase()}</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
            {t.home.practiceAreasHeading}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.services.map((area) => (
            <div
              key={area.number}
              className="group relative bg-card hover:bg-[#1A1A1A] border border-border p-8 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Top border that expands on hover */}
              <div className="absolute top-0 left-0 h-0.5 w-12 bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
              
              {/* Number */}
              <span className="text-[#C9A84C] text-sm tracking-wider font-medium">
                {area.number}
              </span>
              
              {/* Title */}
              <h3 className="font-serif text-xl text-foreground mt-4 mb-3">
                {area.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {area.desc}
              </p>
              
              {/* Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <ArrowRight className="h-5 w-5 text-[#C9A84C]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
