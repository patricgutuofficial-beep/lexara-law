import Link from "next/link"

const quickLinks = [
  { href: "#practice-areas", label: "Practice Areas" },
  { href: "#about", label: "About Us" },
  { href: "#team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#050505] py-16 px-6 lg:px-8 border-t border-border/50">
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
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Excellence in legal counsel. Protecting what matters most since 2001.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-foreground mb-6">QUICK LINKS</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-[#C9A84C]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-foreground mb-6">CONTACT</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <p>Calle Serrano 50, 4th Floor</p>
              <p>28001 Madrid, Spain</p>
              <p className="mt-2">consultas@lexaralaw.es</p>
              <p>+34 91 234 5678</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Lexara Law. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
