import Image from "next/image"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Photo */}
        <div className="md:w-2/5 w-full">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/portfolio-10.png"
              alt="Shavi FotoArts - Professional photographer portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="md:w-3/5 flex flex-col gap-6">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
            About the Artist
          </span>
          <h2 className="text-3xl md:text-5xl tracking-[0.15em] uppercase font-light text-foreground">
            Shavi FotoArts
          </h2>
          <div className="w-12 h-px bg-foreground/30" />
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            An international photographer and visual storyteller based in Sri Lanka. With over a decade of experience capturing
            life&apos;s most profound moments, Shavi FotoArts specializes in
            wedding, fashion, travel, and real estate photography.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            Every frame tells a story. From the intimate emotions of a
            wedding day to the grandeur of architectural spaces, the lens
            captures authentic beauty with a cinematic, editorial touch.
            Working with clients worldwide, each project is approached with
            a unique creative vision.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            Available for bookings in Sri Lanka.
          </p>
        </div>
      </div>
    </section>
  )
}
