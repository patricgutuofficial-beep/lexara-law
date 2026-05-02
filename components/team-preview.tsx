const attorneys = [
  {
    initial: "MR",
    name: "María Rodríguez",
    title: "Managing Partner",
    specialisation: "Corporate Law & M&A",
  },
  {
    initial: "CR",
    name: "Carlos Ruiz",
    title: "Senior Partner",
    specialisation: "Civil Litigation",
  },
  {
    initial: "EG",
    name: "Elena García",
    title: "Partner",
    specialisation: "Employment & Immigration",
  },
]

export function TeamPreview() {
  return (
    <section id="team" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C] mb-4">OUR TEAM</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
            Meet Our Attorneys
          </h2>
        </div>

        {/* Attorney Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((attorney) => (
            <div
              key={attorney.name}
              className="group text-center p-8"
            >
              {/* Monogram Circle */}
              <div className="mx-auto w-24 h-24 rounded-full bg-secondary border border-border flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#C9A84C]">
                <span className="font-serif text-2xl text-[#C9A84C] tracking-wider">
                  {attorney.initial}
                </span>
              </div>
              
              {/* Name */}
              <h3 className="font-serif text-xl text-foreground mb-1">
                {attorney.name}
              </h3>
              
              {/* Title */}
              <p className="text-sm text-[#C9A84C] tracking-wide mb-2">
                {attorney.title}
              </p>
              
              {/* Specialisation */}
              <p className="text-sm text-muted-foreground">
                {attorney.specialisation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
