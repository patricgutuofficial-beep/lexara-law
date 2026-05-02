"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hash, setHash] = useState("")
  const pathname = usePathname()

  const navLinks = [
    { href: "/practice-areas", label: "PRACTICE AREAS", match: "/practice-areas" },
    { href: "/about", label: "ABOUT", match: "/about" },
    { href: "/about#team", label: "TEAM", match: "/about" },
    { href: "/contact", label: "CONTACT", match: "/contact" },
  ]

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    updateHash()
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  const isActive = (matchPath: string, href: string) => {
    if (href === "/about#team") {
      return pathname === "/about" && hash === "#team"
    }
    if (href === "/about") {
      return pathname === "/about" && hash !== "#team"
    }
    return pathname === matchPath
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-serif text-xl tracking-[0.3em] text-[#C9A84C]">
              LEXARA
            </span>
            <span className="h-5 w-px bg-[#C9A84C]" />
            <span className="font-serif text-xl tracking-[0.3em] text-[#F5F5F0]">
              LAW
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.2em] transition-all duration-300 ease-in-out hover:text-[#C9A84C] ${
                  isActive(link.match, link.href) ? "text-[#C9A84C]" : "text-[#888880]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 border border-[#C9A84C] bg-[#C9A84C] px-6 py-2.5 text-xs tracking-[0.15em] text-black transition-all duration-300 ease-in-out hover:bg-[#b6953f]"
            >
              BOOK CONSULTATION
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#F5F5F0] lg:hidden"
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

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`w-fit text-xs tracking-[0.2em] transition-all duration-300 ease-in-out hover:text-[#C9A84C] ${
                  isActive(link.match, link.href) ? "text-[#C9A84C]" : "text-[#888880]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 w-fit border border-[#C9A84C] bg-[#C9A84C] px-6 py-2.5 text-xs tracking-[0.15em] text-black transition-all duration-300 ease-in-out hover:bg-[#b6953f]"
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
