"use client"

export function Marquee() {
  const items = [
    "Corporate Law",
    "Employment Law",
    "Real Estate",
    "Civil Litigation",
    "Family Law",
    "Immigration",
  ]

  const marqueeContent = items.join("  ·  ") + "  ·  "

  return (
    <div className="bg-[#C9A84C] py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-[#111111] text-sm tracking-[0.2em] font-medium mx-4"
          >
            {marqueeContent}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
