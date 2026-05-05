"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function AboutPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  return (
    <main className="bg-[#080808]">
      <section className="flex min-h-screen items-center py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-4">
              <span className="text-xs tracking-[0.3em] text-[#C9A84C]">{t.about.label}</span>
              <span className="h-px w-16 bg-[#C9A84C]" />
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] text-[#F5F5F0] sm:text-5xl lg:text-6xl">
              {t.about.heroHeadline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#888880]">
              {t.about.heroSub}
            </p>
            <Link
              href="#team"
              className="mt-10 inline-flex w-fit items-center border border-[#C9A84C] px-8 py-3 text-sm tracking-[0.14em] text-[#C9A84C] transition-all duration-300 ease-in-out hover:bg-[#C9A84C] hover:text-black"
            >
              {t.about.meetTeamBtn}
            </Link>
          </div>

          <div className="relative overflow-hidden border border-white/5 bg-[#111111] p-10 lg:p-12">
            <span className="pointer-events-none absolute -left-3 top-0 font-serif text-[14rem] leading-none text-[#C9A84C]/10">
              25
            </span>
            <div className="relative space-y-8">
              <div>
                <p className="font-serif text-3xl text-[#F5F5F0]">{t.about.stat1label}</p>
              </div>
              <div className="h-px w-full bg-[#C9A84C]/60" />
              <div>
                <p className="font-serif text-5xl text-[#F5F5F0]">300+</p>
                <p className="mt-1 text-sm tracking-[0.16em] text-[#888880]">{t.about.stat2label}</p>
              </div>
              <div className="h-px w-full bg-[#C9A84C]/60" />
              <div>
                <p className="font-serif text-5xl text-[#F5F5F0]">4</p>
                <p className="mt-1 text-sm tracking-[0.16em] text-[#888880]">{t.about.stat3label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3">
            <blockquote className="font-serif text-2xl leading-relaxed text-[#F5F5F0] italic sm:text-3xl">
              &ldquo;{t.about.philosophyQuote}&rdquo;
            </blockquote>
            <p className="mt-8 text-xs tracking-[0.28em] text-[#C9A84C]">{t.about.philosophyAttrib}</p>
          </div>
          <div className="flex gap-6 lg:col-span-2">
            <span className="w-px bg-[#C9A84C]" />
            <p className="text-base leading-relaxed text-[#888880]">
              {t.about.philosophyPara}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C]">{t.about.valuesLabel}</p>
          <h2 className="mt-4 font-serif text-4xl text-[#F5F5F0] sm:text-5xl">{t.about.valuesHeading}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.about.values.map((value) => (
              <article
                key={value.name}
                className="group relative border border-white/5 border-l-2 border-l-[#C9A84C] bg-[#111111] p-8 transition-all duration-300 ease-in-out hover:border-[#C9A84C]/40 hover:bg-[#1A1A1A]"
              >
                <span className="absolute right-6 top-4 font-serif text-5xl text-[#C9A84C]/20">{value.numeral}</span>
                <h3 className="font-serif text-2xl text-[#F5F5F0]">{value.name}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-[#888880]">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C]">{t.about.teamLabel}</p>
          <h2 className="mt-4 font-serif text-4xl text-[#F5F5F0] sm:text-5xl">{t.about.teamHeading}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.about.attorneys.map((attorney) => (
              <article
                key={attorney.name}
                className="group border border-white/5 bg-[#111111] p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#C9A84C]/40 hover:shadow-[0_0_24px_rgba(201,168,76,0.18)]"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A84C] bg-[#C9A84C]/15">
                  <span className="font-serif text-3xl text-[#C9A84C]">{attorney.initial}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-[#F5F5F0]">{attorney.name}</h3>
                <p className="mt-2 text-xs tracking-[0.2em] text-[#C9A84C]">{attorney.title}</p>
                <p className="mt-3 text-sm text-[#888880]">{attorney.spec}</p>
                <span className="mt-6 block h-px w-16 bg-[#C9A84C]/60" />
                <p className="mt-6 text-sm leading-relaxed text-[#888880]">{attorney.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="border border-white/5 bg-[#111111] px-8 py-14 text-center">
            <h2 className="font-serif text-4xl text-[#F5F5F0] sm:text-5xl">{t.about.ctaHeading}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#888880]">
              {t.about.ctaSub}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#C9A84C] px-8 py-3 text-sm tracking-[0.15em] text-black transition-all duration-300 ease-in-out hover:bg-[#b6953f]"
              >
                {t.about.ctaBtn1}
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center border border-[#C9A84C] px-8 py-3 text-sm tracking-[0.15em] text-[#C9A84C] transition-all duration-300 ease-in-out hover:bg-[#C9A84C] hover:text-black"
              >
                {t.about.ctaBtn2}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
