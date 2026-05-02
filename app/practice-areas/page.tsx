"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Briefcase, Building2, Globe, Heart, Scale, Users } from "lucide-react"

type PracticeArea = {
  id: string
  number: string
  name: string
  tab: string
  tagline: string
  description: string[]
  services: string[]
  caseSummary: string
}

const practiceAreas: PracticeArea[] = [
  {
    id: "corporate",
    number: "01",
    tab: "Corporate",
    name: "Corporate Law",
    tagline: "Strategic counsel for business at every stage.",
    description: [
      "Our corporate team advises founders, boards, and investors from initial company formation through complex exits. We design legal structures that support growth, reduce operational friction, and protect stakeholder interests from day one.",
      "We manage mergers, acquisitions, joint ventures, and shareholder negotiations with rigorous attention to risk allocation and transaction certainty. Every stage is driven by disciplined due diligence, commercial alignment, and clear execution strategy.",
      "Lexara regularly supports cross-border transactions spanning Spanish and broader European frameworks. For international clients, our multilingual counsel ensures negotiations, disclosures, and governance obligations remain precise, aligned, and commercially fluent.",
    ],
    services: [
      "Company Formation & Structuring",
      "Mergers & Acquisitions",
      "Shareholder Agreements",
      "Corporate Governance",
      "Due Diligence",
      "Regulatory Compliance",
    ],
    caseSummary:
      "Advised a Barcelona-based technology company on a EUR47 million acquisition by a German investment group, coordinating legal teams across three jurisdictions.",
  },
  {
    id: "employment",
    number: "02",
    tab: "Employment",
    name: "Employment Law",
    tagline: "Protecting rights. Resolving disputes.",
    description: [
      "We advise employers and employees on the full employment lifecycle, from drafting robust contracts and executive packages to managing policy frameworks and statutory obligations. Our approach balances legal certainty with practical workplace realities.",
      "In contentious matters, we represent clients in unfair dismissal claims, discrimination disputes, and collective bargaining procedures. We prioritise early risk assessment and strong procedural control to protect position before litigation escalates.",
      "Our team has deep experience with ERTE procedures, severance strategy, and compliance audits for national and multinational organisations. Every mandate is handled with sensitivity to business continuity, reputation, and workforce impact.",
    ],
    services: [
      "Employment Contracts",
      "Unfair Dismissal Claims",
      "Collective Bargaining",
      "Workplace Discrimination",
      "ERTE Procedures",
      "Executive Severance",
    ],
    caseSummary:
      "Successfully represented a multinational corporation in a collective dismissal procedure affecting 140 employees, achieving full regulatory compliance and minimising litigation.",
  },
  {
    id: "real-estate",
    number: "03",
    tab: "Real Estate",
    name: "Real Estate Law",
    tagline: "Every transaction protected. Every investment secured.",
    description: [
      "We act on high-value residential and commercial acquisitions, lease frameworks, and development matters across Spain. Our advice is structured to preserve value, mitigate title and planning risk, and secure transactional certainty.",
      "For investors and international buyers, we provide end-to-end conveyancing support tailored to Spanish legal and administrative requirements. This includes due diligence, contract negotiation, financing coordination, and completion oversight.",
      "Lexara is particularly active in off-plan development and Golden Visa-linked investment structures. We guide clients through local complexities with clear timelines, practical communication, and uncompromising legal control.",
    ],
    services: [
      "Property Purchase & Sale",
      "Golden Visa Investments",
      "Commercial Leases",
      "Off-Plan Development",
      "Property Disputes",
      "International Buyer Conveyancing",
    ],
    caseSummary:
      "Managed the acquisition of a 23-unit residential development in Valencia for an international investment fund, coordinating due diligence, planning permissions, and completion across a six-month period.",
  },
  {
    id: "civil-litigation",
    number: "04",
    tab: "Civil Litigation",
    name: "Civil Litigation",
    tagline: "When negotiation ends, precision begins.",
    description: [
      "Our litigators represent clients in contractual disputes, debt recovery, property conflicts, tortious claims, and insurance matters before Spanish civil courts. We combine forensic preparation with clear courtroom strategy from the outset.",
      "Before trial, we execute disciplined pre-litigation negotiations designed to preserve leverage and maximise settlement value. When proceedings are necessary, we move decisively with evidence-led pleadings and procedural accuracy.",
      "Lexara also manages appeals, including matters reaching the Tribunal Supremo. Our appellate approach is grounded in technical depth, narrative clarity, and meticulous review of first-instance vulnerabilities.",
    ],
    services: [
      "Contractual Disputes",
      "Debt Recovery",
      "Tortious Claims",
      "Property Litigation",
      "Insurance Disputes",
      "Tribunal Supremo Appeals",
    ],
    caseSummary:
      "Secured a EUR2.3 million judgment for a client in a complex contractual dispute involving a failed commercial joint venture, overturning an initial unfavourable first-instance ruling on appeal.",
  },
  {
    id: "family",
    number: "05",
    tab: "Family",
    name: "Family Law",
    tagline: "Sensitive matters handled with absolute discretion.",
    description: [
      "We advise on contested and uncontested divorce proceedings, custody arrangements, asset division, and prenuptial planning with equal focus on legal precision and personal sensitivity. Family matters require both strategy and empathy.",
      "Our lawyers are experienced in cross-border and expat family law issues, where jurisdiction, enforcement, and asset tracing become critical. We coordinate these matters with rigorous confidentiality and measured advocacy.",
      "From negotiated settlements to courtroom representation, we build robust positions that protect long-term family and financial interests. Every case is managed with discretion, structure, and calm leadership throughout the process.",
    ],
    services: [
      "Divorce Proceedings",
      "Child Custody Arrangements",
      "Asset Division",
      "Prenuptial Agreements",
      "International Family Law",
      "Adoption",
    ],
    caseSummary:
      "Represented an international client in a contested divorce involving assets across four countries, achieving a settlement that protected the client's primary business interests and secured full custody of two children.",
  },
  {
    id: "immigration",
    number: "06",
    tab: "Immigration",
    name: "Immigration Law",
    tagline: "Your path to Spain, secured.",
    description: [
      "Lexara supports individuals, families, and investors navigating Spanish immigration pathways including Golden Visa, Non-Lucrative Visa, Digital Nomad Visa, and residency by investment. We manage applications with strict procedural control.",
      "Our immigration practice also covers citizenship, nationality by descent, work permits, and family reunification. We prepare fully documented files that anticipate authority scrutiny and reduce avoidable delays.",
      "We maintain dedicated expertise for UK nationals post-Brexit as well as US and international clients relocating to Spain. Our multilingual team delivers clear advice across jurisdictions, timelines, and documentary requirements.",
    ],
    services: [
      "Golden Visa Applications",
      "Non-Lucrative Visa",
      "Digital Nomad Visa",
      "Citizenship Applications",
      "Work Permits",
      "Family Reunification",
    ],
    caseSummary:
      "Processed 47 Golden Visa applications for a single international property development, coordinating documentation across six nationalities and achieving 100% approval rate.",
  },
]

function AreaIcon({ id }: { id: string }) {
  const classes = "h-12 w-12 text-[#C9A84C]"

  if (id === "corporate") return <Briefcase className={classes} strokeWidth={1} />
  if (id === "employment") return <Users className={classes} strokeWidth={1} />
  if (id === "real-estate") return <Building2 className={classes} strokeWidth={1} />
  if (id === "civil-litigation") return <Scale className={classes} strokeWidth={1} />
  if (id === "family") return <Heart className={classes} strokeWidth={1} />
  return <Globe className={classes} strokeWidth={1} />
}

export default function PracticeAreasPage() {
  const [activeId, setActiveId] = useState(practiceAreas[0].id)

  const ids = useMemo(() => practiceAreas.map((item) => item.id), [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-120px 0px -45% 0px" }
    )

    ids.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [ids])

  return (
    <main className="bg-[#080808]">
      <section className="flex min-h-screen items-center py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-4">
              <span className="text-xs tracking-[0.3em] text-[#C9A84C]">LEGAL EXPERTISE</span>
              <span className="h-px w-16 bg-[#C9A84C]" />
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] text-[#F5F5F0] sm:text-5xl lg:text-6xl">
              Comprehensive Legal Services Across Spain.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#888880]">
              Six core practice areas. One unwavering standard of excellence. Whatever your legal matter, Lexara Law
              has the expertise to protect your interests.
            </p>
          </div>

          <div className="relative overflow-hidden border border-white/5 bg-[#111111] p-10 lg:p-12">
            <span className="pointer-events-none absolute -left-4 top-0 font-serif text-[14rem] leading-none text-[#C9A84C]/10">
              6
            </span>
            <div className="relative space-y-8">
              <p className="font-serif text-3xl text-[#F5F5F0]">Practice Areas</p>
              <div className="h-px w-full bg-[#C9A84C]/60" />
              <p className="text-sm tracking-[0.2em] text-[#F5F5F0]">Spain-Wide Coverage</p>
              <div className="h-px w-full bg-[#C9A84C]/60" />
              <p className="text-sm tracking-[0.2em] text-[#F5F5F0]">Multilingual Service</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-y border-white/10 bg-[#080808]/95 py-4 backdrop-blur-md">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex gap-6 overflow-x-auto whitespace-nowrap">
            {practiceAreas.map((area) => (
              <a
                key={area.id}
                href={`#${area.id}`}
                className={`border-b pb-2 text-sm tracking-[0.14em] transition-all duration-300 ease-in-out ${
                  activeId === area.id
                    ? "border-[#C9A84C] text-[#C9A84C]"
                    : "border-transparent text-[#888880] hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
                }`}
              >
                {area.tab}
              </a>
            ))}
          </div>
        </div>
      </section>

      {practiceAreas.map((area, index) => {
        const reverse = index % 2 !== 0
        return (
          <section id={area.id} key={area.id} className="flex min-h-[80vh] items-center py-16 lg:py-24">
            <div
              className={`mx-auto grid w-full max-w-7xl items-center gap-10 px-6 lg:gap-16 ${
                reverse ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
              }`}
            >
              <div className={reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                <p className="text-xs tracking-[0.28em] text-[#C9A84C]">
                  {area.number}/06
                </p>
                <h2 className="mt-4 font-serif text-4xl text-[#F5F5F0] sm:text-5xl">{area.name}</h2>
                <p className="mt-4 font-serif text-xl italic text-[#C9A84C]">{area.tagline}</p>
                <div className="mt-8 space-y-5 text-[#888880]">
                  {area.description.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <h3 className="mt-10 text-xs tracking-[0.24em] text-[#C9A84C]">KEY SERVICES</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {area.services.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-[#F5F5F0]">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-10 text-xs tracking-[0.24em] text-[#C9A84C]">RELEVANT EXPERIENCE</h3>
                <p className="mt-4 border-l border-[#C9A84C]/70 pl-4 leading-relaxed text-[#888880]">{area.caseSummary}</p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center text-sm tracking-[0.14em] text-[#C9A84C] transition-all duration-300 ease-in-out hover:translate-x-1"
                >
                  Discuss Your Matter &rarr;
                </Link>
              </div>

              <div
                className={`relative flex min-h-[420px] items-center justify-center border border-white/5 bg-[#111111] p-8 ${
                  reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"
                }`}
              >
                <span className="pointer-events-none absolute left-6 top-2 font-serif text-[10rem] text-[#C9A84C]/10">
                  {area.number}
                </span>
                <span className="absolute left-1/2 top-16 h-64 w-px -translate-x-1/2 bg-[#C9A84C]/70" />
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A84C] bg-[rgba(201,168,76,0.1)]">
                  <AreaIcon id={area.id} />
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </main>
  )
}
