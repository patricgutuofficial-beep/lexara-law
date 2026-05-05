"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const headlineParts = t.home.heroHeadline.split(" ")
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-8 pt-20">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="font-serif text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
              <span className="block">{headlineParts.slice(0, 2).join(" ")}</span>
              <span className="block mt-2">
                {headlineParts.slice(2, -1).join(" ")} <span className="text-[#C9A84C]">{headlineParts.at(-1)}</span>
              </span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-xl">
              {t.home.heroSub}
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-block bg-[#C9A84C] px-8 py-4 text-sm tracking-[0.1em] font-medium text-black transition-all hover:bg-[#b6953f]"
              >
                {t.home.scheduleBtn.toUpperCase()}
              </Link>
              <Link
                href="#practice-areas"
                className="inline-block border border-foreground/30 px-8 py-4 text-sm tracking-[0.1em] font-medium text-foreground transition-all hover:border-foreground hover:bg-foreground/5"
              >
                {t.home.practiceAreasBtn.toUpperCase()}
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="tracking-wide">{t.home.stat1}</span>
              <span className="h-4 w-px bg-border" />
              <span className="tracking-wide">{t.home.stat2}</span>
              <span className="h-4 w-px bg-border" />
              <span className="tracking-wide">{t.home.stat3}</span>
            </div>
          </div>

          {/* Right side - Decorative element */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative">
              {/* Vertical gold line */}
              <div className="h-[400px] w-px bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent" />
              
              {/* Roman numerals */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 text-[#C9A84C]/50 font-serif text-sm tracking-widest">
                <span>I</span>
                <span>II</span>
                <span>III</span>
                <span>IV</span>
                <span>V</span>
              </div>

              {/* Geometric accent */}
              <div className="absolute -right-8 top-1/4 w-16 h-16 border border-[#C9A84C] rotate-45" />
              <div className="absolute -right-12 bottom-1/4 w-8 h-8 border border-[#C9A84C] rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
