"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const headlineParts = t.home.heroHeadline.split(" ")
  return (
    <section className="relative min-h-[85vh] flex items-center px-6 lg:px-8 pt-24 pb-12">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
   
   
          {/* Left side - Text content */}
          <div>
            <h1 className="font-serif text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl leading-[1.1]">
       
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

          {/* Right side - Stats card */}
          <div className="hidden lg:flex justify-end items-center self-center">
     
     
     
            <div className="relative w-full max-w-xl border border-white/10 bg-[#111111] p-8">
       
              <span className="pointer-events-none absolute -left-4 top-0 font-serif text-[10rem] leading-none text-[#C9A84C]/10">
                L
              </span>
              <div className="relative space-y-8">
                <p className="text-xs tracking-[0.3em] text-[#C9A84C]">EST. 1999</p>
                <div className="h-px w-full bg-[#C9A84C]/30" />
                <div className="space-y-1">
                  <p className="font-serif text-5xl text-[#F5F5F0]">25+</p>
                  <p className="text-sm tracking-[0.2em] text-[#888880]">{t.home.stat1}</p>
                </div>
                <div className="h-px w-full bg-[#C9A84C]/30" />
                <div className="space-y-1">
                  <p className="font-serif text-5xl text-[#F5F5F0]">300+</p>
                  <p className="text-sm tracking-[0.2em] text-[#888880]">{t.home.stat2}</p>
                </div>
                <div className="h-px w-full bg-[#C9A84C]/30" />
                <div className="space-y-1">
                  <p className="font-serif text-5xl text-[#F5F5F0]">4</p>
                  <p className="text-sm tracking-[0.2em] text-[#888880]">{t.home.stat3}</p>
                </div>
                <div className="h-px w-full bg-[#C9A84C]/30" />
                <p className="text-xs tracking-[0.2em] text-[#888880]">MADRID · BARCELONA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
