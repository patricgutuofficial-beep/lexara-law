"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const quickLinks = [
    { href: "/practice-areas", label: t.nav.practiceAreas },
    { href: "/about", label: t.nav.about },
    { href: "/about#team", label: t.nav.team },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <footer className="border-t border-white/10 bg-[#080808] px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-3 mb-12">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <span className="font-serif text-lg tracking-[0.3em] text-[#C9A84C]">
                LEXARA
              </span>
              <span className="h-4 w-px bg-[#C9A84C]" />
              <span className="font-serif text-lg tracking-[0.3em] text-foreground">
                LAW
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[#888880]">
              {t.home.footerTagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-xs tracking-[0.2em] text-[#F5F5F0]">QUICK LINKS</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#888880] transition-all duration-300 ease-in-out hover:text-[#C9A84C]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mb-6 text-xs tracking-[0.2em] text-[#F5F5F0]">{t.nav.contact.toUpperCase()}</h4>
            <div className="flex flex-col gap-3 text-sm text-[#888880]">
              <p>Calle Serrano 50, 4th Floor</p>
              <p>28001 Madrid, Spain</p>
              <p className="mt-2">consultas@lexaralaw.es</p>
              <p>+34 91 234 5678</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-xs text-[#888880]">
            {t.home.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
