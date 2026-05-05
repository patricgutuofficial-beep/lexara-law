"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function ContactCTA() {
  const { lang } = useLanguage()
  const t = translations[lang]
  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-8">
          {t.home.ctaHeading}
        </h2>
        
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            href="#"
            className="inline-block bg-[#C9A84C] px-8 py-4 text-sm tracking-[0.1em] font-medium text-black transition-all hover:bg-[#b6953f]"
          >
            {t.home.ctaBtn1.toUpperCase()}
          </Link>
          <Link
            href="tel:+34912345678"
            className="inline-block border border-foreground/30 px-8 py-4 text-sm tracking-[0.1em] font-medium text-foreground transition-all hover:border-foreground hover:bg-foreground/5"
          >
            {t.home.ctaBtn2.toUpperCase()}
          </Link>
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span>consultas@lexaralaw.es</span>
          <span className="hidden sm:inline">|</span>
          <span>+34 91 234 5678</span>
        </div>
      </div>
    </section>
  )
}
