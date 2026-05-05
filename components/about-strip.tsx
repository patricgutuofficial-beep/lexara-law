"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function AboutStrip() {
  const { lang } = useLanguage()
  const t = translations[lang]
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Quote */}
          <div>
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-foreground leading-snug">
              &ldquo;{t.home.aboutQuote}&rdquo;
            </blockquote>
          </div>

          {/* Right - Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.home.aboutPara}
            </p>
            <Link
              href="#team"
              className="inline-flex items-center gap-2 text-[#C9A84C] text-sm tracking-wide transition-all hover:gap-3 group"
            >
              <span>{t.home.learnMore}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
