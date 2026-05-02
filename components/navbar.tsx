"use client"

import { useState } from "react"
import Link from "next/link"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#practice-areas", label: "PRACTICE AREAS" },
    { href: "#about", label: "ABOUT" },
    { href: "#team", label: "TEAM" },
    { href: "#contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo with decorative line */}
          <Link href="/" className="flex items-center gap-3">
            <span className="font-serif text-xl tracking-[0.3em] text-[#C9A84C]">
              LEXARA
            </span>
            <span className="h-5 w-px bg-[#C9A84C]" />
            <span className="font-serif text-xl tracking-[0.3em] text-foreground">
              LAW
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.2em] text-muted-foreground transition-colors hover:text-[#C9A84C]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 border border-[#C9A84C] bg-[#C9A84C] px-6 py-2.5 text-xs tracking-[0.15em] text-black transition-all hover:bg-[#b6953f]"
            >
              BOOK CONSULTATION
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 border-t border-border/50" : "max-h-0"
          }`}
        >
          <div className="py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.2em] text-muted-foreground transition-colors hover:text-[#C9A84C]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-4 w-fit border border-[#C9A84C] bg-[#C9A84C] px-6 py-2.5 text-xs tracking-[0.15em] text-black transition-all hover:bg-[#b6953f]"
              onClick={() => setIsMenuOpen(false)}
            >
              BOOK CONSULTATION
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
