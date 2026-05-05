"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Briefcase, Building2, Globe, Heart, Scale, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

const practiceAreaIds = [
  "corporate",
  "employment",
  "real-estate",
  "civil-litigation",
  "family",
  "immigration",
] as const

function AreaIcon({ id }: { id: string }) {
  const classes = "h-12 w-12 text-[#C9A84C]"

  if (id === "corporate") return <Briefcase className={classes} strokeWidth={1} />
  if (id === "employment") return <Users className={classes} strokeWidth={1} />
  if (id === "real-estate") return <Building2 className={classes} strokeWidth={1} />
  if (id === "civil-litigation") return <Scale className={classes} strokeWidth={1} />
  if (id === "family") return <Heart className={classes} strokeWidth={1} />
  return <Globe className={classes} strokeWidth={1} />
}

export default function PracticeAreasPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [activeId, setActiveId] = useState("corporate")

  const ids = useMemo(() => [...practiceAreaIds], [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-120px 0px -45% 0px" }
    )

    ids.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [ids])

  const handleTabClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setActiveId(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="bg-[#080808]">
      <section className="flex min-h-screen items-center py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-4">
              <span className="text-xs tracking-[0.3em] text-[#C9A84C]">{t.practiceAreas.label}</span>
              <span className="h-px w-16 bg-[#C9A84C]" />
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] text-[#F5F5F0] sm:text-5xl lg:text-6xl">
              {t.practiceAreas.heroHeadline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#888880]">
              {t.practiceAreas.heroSub}
            </p>
          </div>

          <div className="relative overflow-hidden border border-white/5 bg-[#111111] p-10 lg:p-12">
            <span className="pointer-events-none absolute -left-4 top-0 font-serif text-[14rem] leading-none text-[#C9A84C]/10">
              6
            </span>
            <div className="relative space-y-8">
              <p className="font-serif text-3xl text-[#F5F5F0]">{t.practiceAreas.statsTitle}</p>
              <div className="h-px w-full bg-[#C9A84C]/60" />
              <p className="text-sm tracking-[0.2em] text-[#F5F5F0]">{t.practiceAreas.statsCoverage}</p>
              <div className="h-px w-full bg-[#C9A84C]/60" />
              <p className="text-sm tracking-[0.2em] text-[#F5F5F0]">{t.practiceAreas.statsService}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-y border-white/10 bg-[#080808]/95 py-4 backdrop-blur-md">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {practiceAreaIds.map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={handleTabClick(id)}
                className={`shrink-0 border-b-2 px-4 py-2 text-sm tracking-[0.14em] transition-all duration-300 ease-in-out ${
                  activeId === id
                    ? "border-[#C9A84C] text-[#C9A84C]"
                    : "border-transparent text-[#888880] hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
                }`}
              >
                {t.practiceAreas.tabs[index]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {practiceAreaIds.map((id, index) => {
        const reverse = index % 2 !== 0
        const area = t.practiceAreas.areas[index]
        return (
          <section id={id} key={id} className="flex min-h-[80vh] items-center py-16 lg:py-24">
            <div
              className={`mx-auto grid w-full max-w-7xl items-center gap-10 px-6 lg:gap-16 ${
                reverse ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
              }`}
            >
              <div className={reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                <p className="text-xs tracking-[0.28em] text-[#C9A84C]">
                  {area.number}/06
                </p>
                <h2 className="mt-4 font-serif text-4xl text-[#F5F5F0] sm:text-5xl">{area.title}</h2>
                <p className="mt-4 font-serif text-xl italic text-[#C9A84C]">{area.tagline}</p>
                <div className="mt-8 space-y-5 text-[#888880]">
                  {t.practiceAreas.descriptions[index].map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <h3 className="mt-10 text-xs tracking-[0.24em] text-[#C9A84C]">{t.practiceAreas.keyServices.toUpperCase()}</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {t.practiceAreas.services[index].map((service) => (
                    <li key={service} className="flex items-start gap-3 text-[#F5F5F0]">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-10 text-xs tracking-[0.24em] text-[#C9A84C]">{t.practiceAreas.relevantExperience.toUpperCase()}</h3>
                <p className="mt-4 border-l border-[#C9A84C]/70 pl-4 leading-relaxed text-[#888880]">{t.practiceAreas.cases[index]}</p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center text-sm tracking-[0.14em] text-[#C9A84C] transition-all duration-300 ease-in-out hover:translate-x-1"
                >
                  {t.practiceAreas.discussBtn}
                </Link>
              </div>

              <div
                className={`relative flex min-h-[420px] items-center justify-center border border-white/5 bg-[#111111] p-8 ${
                  reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"
                }`}
              >
                <span className="pointer-events-none absolute left-6 top-2 font-serif text-[10rem] text-[#C9A84C]/10">
                  {area.number}
                </span>
                <span className="absolute left-1/2 top-16 h-64 w-px -translate-x-1/2 bg-[#C9A84C]/70" />
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A84C] bg-[rgba(201,168,76,0.1)]">
                  <AreaIcon id={id} />
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </main>
  )
}
