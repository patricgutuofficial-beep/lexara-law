"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Testimonial() {
  const { lang } = useLanguage()
  const t = translations[lang]
  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-4xl text-center">
        {/* Decorative quote mark */}
        <div className="mb-8">
          <span className="font-serif text-8xl text-[#C9A84C]/40 leading-none">&ldquo;</span>
        </div>
        
        {/* Quote */}
        <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-foreground leading-relaxed italic">
          {t.home.testimonialQuote}
        </blockquote>
        
        {/* Attribution */}
        <div className="mt-10">
          <p className="text-sm text-muted-foreground mt-1">{t.home.testimonialAuthor}</p>
        </div>
      </div>
    </section>
  )
}
