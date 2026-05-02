import { ArrowRight } from "lucide-react"

const offices = [
  {
    city: "MADRID (HEADQUARTERS)",
    lines: [
      "Calle de Serrano 41, 3a Planta",
      "28001 Madrid, Espana",
      "+34 91 555 0147",
      "madrid@lexaralaw.com",
      "Mon-Fri: 9:00-19:00",
    ],
  },
  {
    city: "BARCELONA",
    lines: [
      "Passeig de Gracia 92, 2o",
      "08008 Barcelona, Espana",
      "+34 93 555 0284",
      "barcelona@lexaralaw.com",
      "Mon-Fri: 9:00-18:00",
    ],
  },
]

const languages = ["Spanish", "English", "French", "German"]

export default function ContactPage() {
  return (
    <main className="bg-[#080808]">
      <section className="flex min-h-[50vh] items-center py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C]">CONTACT LEXARA LAW</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-[#F5F5F0] sm:text-5xl lg:text-6xl">
            Your Matter Deserves Immediate Attention.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#888880]">
            All initial consultations are strictly confidential. A senior attorney will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-5">
          <aside className="space-y-10 lg:col-span-2">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#C9A84C]">OUR OFFICES</p>
              <div className="mt-6 space-y-8">
                {offices.map((office) => (
                  <div key={office.city} className="border-t border-[#C9A84C]/70 pt-5">
                    <h2 className="font-serif text-2xl text-[#F5F5F0]">{office.city}</h2>
                    <div className="mt-4 space-y-1 text-sm text-[#888880]">
                      <p>{office.lines[0]}</p>
                      <p>{office.lines[1]}</p>
                      <p>{office.lines[2]}</p>
                      <p className="text-[#C9A84C]">{office.lines[3]}</p>
                      <p>{office.lines[4]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.3em] text-[#C9A84C]">LANGUAGES</h3>
              <ul className="mt-4 grid gap-2">
                {languages.map((language) => (
                  <li key={language} className="flex items-center gap-3 text-[#F5F5F0]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                    <span>{language}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.3em] text-[#C9A84C]">RESPONSE TIME</h3>
              <p className="mt-4 max-w-md leading-relaxed text-[#888880]">
                We respond to all enquiries within 24 hours. For urgent matters, please call our Madrid office
                directly.
              </p>
            </div>
          </aside>

          <section className="border border-white/5 bg-[#111111] p-8 lg:col-span-3 lg:p-10">
            <h2 className="font-serif text-3xl text-[#F5F5F0]">Send Us a Message</h2>
            <p className="mt-3 text-[#888880]">All information is treated with absolute confidentiality.</p>

            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">FULL NAME</label>
                <input
                  type="text"
                  className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out placeholder:text-[#888880] focus:border-[#C9A84C]"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out placeholder:text-[#888880] focus:border-[#C9A84C]"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">PHONE NUMBER</label>
                  <input
                    type="tel"
                    className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out placeholder:text-[#888880] focus:border-[#C9A84C]"
                    placeholder="+34 ..."
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">AREA OF LAW</label>
                <select className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out focus:border-[#C9A84C]">
                  <option>Select Area of Law</option>
                  <option>Corporate Law</option>
                  <option>Employment Law</option>
                  <option>Real Estate Law</option>
                  <option>Civil Litigation</option>
                  <option>Family Law</option>
                  <option>Immigration Law</option>
                  <option>Other Matter</option>
                </select>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">PREFERRED OFFICE</label>
                  <select className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out focus:border-[#C9A84C]">
                    <option>Madrid</option>
                    <option>Barcelona</option>
                    <option>No Preference</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">HOW DID YOU HEAR ABOUT US</label>
                  <select className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out focus:border-[#C9A84C]">
                    <option>Google Search</option>
                    <option>Referral</option>
                    <option>LinkedIn</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">MESSAGE</label>
                <textarea
                  rows={5}
                  className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out placeholder:text-[#888880] focus:border-[#C9A84C]"
                  placeholder="Please describe your legal matter in as much detail as you are comfortable sharing. All information is strictly confidential."
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-[#888880]">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded-sm border border-white/20 bg-[#1A1A1A]" />
                <span>
                  I confirm that I have read and agree to the Privacy Policy and consent to Lexara Law contacting me
                  regarding my enquiry.
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 bg-[#C9A84C] px-6 py-3 text-sm tracking-[0.15em] text-black transition-all duration-300 ease-in-out hover:bg-[#b6953f]"
              >
                Send Enquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </section>
        </div>
      </section>

      <section className="bg-[#111111] py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 md:grid-cols-3">
          {[
            { title: "Strictly Confidential", icon: "I" },
            { title: "Senior Attorney Response", icon: "II" },
            { title: "No Obligation Consultation", icon: "III" },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <p className="font-serif text-4xl text-[#C9A84C]/80">{item.icon}</p>
              <p className="mt-4 text-sm tracking-[0.16em] text-[#F5F5F0]">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
