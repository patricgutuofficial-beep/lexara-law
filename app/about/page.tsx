import Link from "next/link"

const values = [
  {
    numeral: "I",
    name: "INTEGRITY",
    description:
      "We hold ourselves to an absolute standard of honesty and transparency. Our clients always know exactly where they stand and why.",
  },
  {
    numeral: "II",
    name: "EXCELLENCE",
    description:
      "Mediocrity has never been an option at Lexara Law. We pursue the best possible outcome in every matter we handle, regardless of complexity.",
  },
  {
    numeral: "III",
    name: "DISCRETION",
    description:
      "The matters entrusted to us remain confidential absolutely and without exception. Our clients' privacy is non-negotiable.",
  },
  {
    numeral: "IV",
    name: "RESULTS",
    description:
      "We measure our success by one metric only - our clients' outcomes. Strategy, precision, and execution in service of results.",
  },
]

const attorneys = [
  {
    name: "Alejandro Reyes",
    title: "FOUNDING PARTNER",
    specialisation: "Corporate & Commercial Law",
    bio: "With 28 years of practice, Alejandro has advised Spain's most significant corporate transactions.",
    initial: "AR",
  },
  {
    name: "Elena Martinez",
    title: "SENIOR PARTNER",
    specialisation: "Employment & Labour Law",
    bio: "Elena is recognised as one of Spain's leading employment law specialists with an unmatched litigation record.",
    initial: "EM",
  },
  {
    name: "Carlos Vidal",
    title: "PARTNER",
    specialisation: "Real Estate & Property Law",
    bio: "Carlos has overseen property transactions exceeding EUR2 billion across Spain and Portugal.",
    initial: "CV",
  },
  {
    name: "Isabel Fontaine",
    title: "PARTNER",
    specialisation: "Civil Litigation",
    bio: "Isabel's courtroom precision and strategic preparation have produced landmark civil litigation outcomes.",
    initial: "IF",
  },
  {
    name: "Marco Delgado",
    title: "ASSOCIATE PARTNER",
    specialisation: "Family Law",
    bio: "Marco brings sensitivity and rigour to complex family matters, protecting clients through life's most difficult transitions.",
    initial: "MD",
  },
  {
    name: "Sofia Herrera",
    title: "ASSOCIATE",
    specialisation: "Immigration Law",
    bio: "Sofia specialises in residency, citizenship, and Golden Visa applications for international clients relocating to Spain.",
    initial: "SH",
  },
]

export default function AboutPage() {
  return (
    <main className="bg-[#080808]">
      <section className="flex min-h-screen items-center py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-4">
              <span className="text-xs tracking-[0.3em] text-[#C9A84C]">EST. 1999</span>
              <span className="h-px w-16 bg-[#C9A84C]" />
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] text-[#F5F5F0] sm:text-5xl lg:text-6xl">
              A Legacy of <br /> Legal Excellence.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#888880]">
              Lexara Law was founded with a single conviction - that exceptional legal representation should be
              accessible to those who demand nothing less than the best. For over two decades, we have been that
              standard.
            </p>
            <Link
              href="#team"
              className="mt-10 inline-flex w-fit items-center border border-[#C9A84C] px-8 py-3 text-sm tracking-[0.14em] text-[#C9A84C] transition-all duration-300 ease-in-out hover:bg-[#C9A84C] hover:text-black"
            >
              Meet Our Team
            </Link>
          </div>

          <div className="relative overflow-hidden border border-white/5 bg-[#111111] p-10 lg:p-12">
            <span className="pointer-events-none absolute -left-3 top-0 font-serif text-[14rem] leading-none text-[#C9A84C]/10">
              25
            </span>
            <div className="relative space-y-8">
              <div>
                <p className="font-serif text-3xl text-[#F5F5F0]">Years of Excellence</p>
              </div>
              <div className="h-px w-full bg-[#C9A84C]/60" />
              <div>
                <p className="font-serif text-5xl text-[#F5F5F0]">300+</p>
                <p className="mt-1 text-sm tracking-[0.16em] text-[#888880]">Cases Won</p>
              </div>
              <div className="h-px w-full bg-[#C9A84C]/60" />
              <div>
                <p className="font-serif text-5xl text-[#F5F5F0]">4</p>
                <p className="mt-1 text-sm tracking-[0.16em] text-[#888880]">Office Languages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3">
            <blockquote className="font-serif text-2xl leading-relaxed text-[#F5F5F0] italic sm:text-3xl">
              &ldquo;We do not simply practice law. We protect legacies, defend futures, and pursue justice with the
              precision of those who understand that every case is someone&apos;s life.&rdquo;
            </blockquote>
            <p className="mt-8 text-xs tracking-[0.28em] text-[#C9A84C]">- ALEJANDRO REYES, FOUNDER</p>
          </div>
          <div className="flex gap-6 lg:col-span-2">
            <span className="w-px bg-[#C9A84C]" />
            <p className="text-base leading-relaxed text-[#888880]">
              Our philosophy is built on three decades of understanding that the law is not merely a system of rules
              - it is a framework for human dignity. Every client who walks through our doors receives the full force
              of our expertise, our integrity, and our relentless commitment to their interests.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C]">WHAT WE STAND FOR</p>
          <h2 className="mt-4 font-serif text-4xl text-[#F5F5F0] sm:text-5xl">Our Core Values</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.name}
                className="group relative border border-white/5 border-l-2 border-l-[#C9A84C] bg-[#111111] p-8 transition-all duration-300 ease-in-out hover:border-[#C9A84C]/40 hover:bg-[#1A1A1A]"
              >
                <span className="absolute right-6 top-4 font-serif text-5xl text-[#C9A84C]/20">{value.numeral}</span>
                <h3 className="font-serif text-2xl text-[#F5F5F0]">{value.name}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-[#888880]">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C]">THE PEOPLE BEHIND LEXARA</p>
          <h2 className="mt-4 font-serif text-4xl text-[#F5F5F0] sm:text-5xl">Meet Our Attorneys</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {attorneys.map((attorney) => (
              <article
                key={attorney.name}
                className="group border border-white/5 bg-[#111111] p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#C9A84C]/40 hover:shadow-[0_0_24px_rgba(201,168,76,0.18)]"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A84C] bg-[#C9A84C]/15">
                  <span className="font-serif text-3xl text-[#C9A84C]">{attorney.initial}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-[#F5F5F0]">{attorney.name}</h3>
                <p className="mt-2 text-xs tracking-[0.2em] text-[#C9A84C]">{attorney.title}</p>
                <p className="mt-3 text-sm text-[#888880]">{attorney.specialisation}</p>
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
            <h2 className="font-serif text-4xl text-[#F5F5F0] sm:text-5xl">Ready to Work With Us?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#888880]">
              Schedule a confidential consultation with one of our senior attorneys.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#C9A84C] px-8 py-3 text-sm tracking-[0.15em] text-black transition-all duration-300 ease-in-out hover:bg-[#b6953f]"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center border border-[#C9A84C] px-8 py-3 text-sm tracking-[0.15em] text-[#C9A84C] transition-all duration-300 ease-in-out hover:bg-[#C9A84C] hover:text-black"
              >
                View Practice Areas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
