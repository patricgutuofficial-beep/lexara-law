import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutStrip() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Quote */}
          <div>
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-foreground leading-snug">
              &ldquo;We don&apos;t just represent clients. We protect what matters most.&rdquo;
            </blockquote>
          </div>

          {/* Right - Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in Madrid, Lexara Law has grown into one of Spain&apos;s most respected 
              boutique law firms. Our team of multilingual attorneys brings decades of combined 
              experience across corporate, civil, and international law, delivering results 
              that consistently exceed expectations.
            </p>
            <Link
              href="#team"
              className="inline-flex items-center gap-2 text-[#C9A84C] text-sm tracking-wide transition-all hover:gap-3 group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
