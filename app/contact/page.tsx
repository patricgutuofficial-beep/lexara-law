"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function ContactPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: t.contact.fields.areaDefault,
    office: t.contact.officeOptions[0],
    source: t.contact.sourceOptions[0],
    message: "",
    consent: false,
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: event.target.checked }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send")
      }

      setIsSubmitted(true)
    } catch (error) {
      alert(lang === "en" ? "Something went wrong. Please try again." : "Algo salió mal. Inténtelo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-[#080808]">
      <section className="flex min-h-[50vh] items-center py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C]">{t.contact.label}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-[#F5F5F0] sm:text-5xl lg:text-6xl">
            {t.contact.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#888880]">
            {t.contact.heroSub}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-5">
          <aside className="space-y-10 lg:col-span-2">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#C9A84C]">{t.contact.officesLabel}</p>
              <div className="mt-6 space-y-8">
                {[
                  {
                    city: t.contact.madrid,
                    lines: [
                      t.contact.officeAddressMadrid1,
                      t.contact.officeAddressMadrid2,
                      t.contact.phoneMadrid,
                      t.contact.emailMadrid,
                      t.contact.hours,
                    ],
                  },
                  {
                    city: t.contact.barcelona,
                    lines: [
                      t.contact.officeAddressBarcelona1,
                      t.contact.officeAddressBarcelona2,
                      t.contact.phoneBarcelona,
                      t.contact.emailBarcelona,
                      t.contact.hoursB,
                    ],
                  },
                ].map((office) => (
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
              <h3 className="text-xs tracking-[0.3em] text-[#C9A84C]">{t.contact.languagesLabel}</h3>
              <ul className="mt-4 grid gap-2">
                {t.contact.languageList.map((language) => (
                  <li key={language} className="flex items-center gap-3 text-[#F5F5F0]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                    <span>{language}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.3em] text-[#C9A84C]">{t.contact.responseLabel}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-[#888880]">
                {t.contact.responsePara}
              </p>
            </div>
          </aside>

          <section className="border border-white/5 bg-[#111111] p-8 lg:col-span-3 lg:p-10">
            {isSubmitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center border border-white/5 bg-[#111111] p-8 text-center">
                <span className="text-5xl text-[#C9A84C]">✓</span>
                <h2 className="mt-6 font-serif text-3xl text-[#F5F5F0]">{t.contact.successHeading}</h2>
                <p className="mt-4 max-w-xl text-[#888880]">
                  {t.contact.successMsg}
                </p>
                <Link
                  href="/"
                  className="mt-8 inline-flex items-center bg-[#C9A84C] px-6 py-3 text-sm tracking-[0.15em] text-black transition-all duration-300 ease-in-out hover:bg-[#b6953f]"
                >
                  {t.contact.returnHome}
                </Link>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-3xl text-[#F5F5F0]">{t.contact.formHeading}</h2>
                <p className="mt-3 text-[#888880]">{t.contact.formSub}</p>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">{t.contact.fields.name.toUpperCase()}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out placeholder:text-[#888880] focus:border-[#C9A84C]"
                      placeholder={t.contact.fields.name}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">{t.contact.fields.email.toUpperCase()}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out placeholder:text-[#888880] focus:border-[#C9A84C]"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">{t.contact.fields.phone.toUpperCase()}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out placeholder:text-[#888880] focus:border-[#C9A84C]"
                        placeholder="+34 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">{t.contact.fields.area.toUpperCase()}</label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out focus:border-[#C9A84C]"
                    >
                      <option>{t.contact.fields.areaDefault}</option>
                      {t.contact.areaOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">{t.contact.fields.office.toUpperCase()}</label>
                      <select
                        name="office"
                        value={formData.office}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out focus:border-[#C9A84C]"
                      >
                        {t.contact.officeOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">{t.contact.fields.source.toUpperCase()}</label>
                      <select
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out focus:border-[#C9A84C]"
                      >
                        {t.contact.sourceOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs tracking-[0.24em] text-[#C9A84C]">{t.contact.fields.message.toUpperCase()}</label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-white/10 bg-[#1A1A1A] px-4 py-3 text-[#F5F5F0] outline-none transition-all duration-300 ease-in-out placeholder:text-[#888880] focus:border-[#C9A84C]"
                      placeholder={t.contact.fields.messagePlaceholder}
                    />
                  </div>

                  <label className="flex items-start gap-3 text-sm text-[#888880]">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                      className="mt-1 h-4 w-4 rounded-sm border border-white/20 bg-[#1A1A1A]"
                    />
                    <span>
                      {t.contact.fields.checkbox}
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 bg-[#C9A84C] px-6 py-3 text-sm tracking-[0.15em] text-black transition-all duration-300 ease-in-out hover:bg-[#b6953f] disabled:cursor-not-allowed disabled:opacity-80"
                  >
                    {isSubmitting ? t.contact.fields.submitting : t.contact.fields.submit}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      </section>

      <section className="bg-[#111111] py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 md:grid-cols-3">
          {[
            { title: t.contact.trust1, icon: "I" },
            { title: t.contact.trust2, icon: "II" },
            { title: t.contact.trust3, icon: "III" },
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
