export function Testimonial() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-4xl text-center">
        {/* Decorative quote mark */}
        <div className="mb-8">
          <span className="font-serif text-8xl text-[#C9A84C]/40 leading-none">&ldquo;</span>
        </div>
        
        {/* Quote */}
        <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-foreground leading-relaxed italic">
          Lexara Law guided us through the most complex acquisition in our company&apos;s history 
          with precision and unwavering dedication. Their expertise was invaluable.
        </blockquote>
        
        {/* Attribution */}
        <div className="mt-10">
          <p className="text-foreground font-medium">Javier Martínez</p>
          <p className="text-sm text-muted-foreground mt-1">CEO, Iberian Holdings Group</p>
        </div>
      </div>
    </section>
  )
}
