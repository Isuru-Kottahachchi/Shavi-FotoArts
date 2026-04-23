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
           I’m Shavinda Ekanayaka, a Sri Lankan photographer specializing in cinematic portrait, travel, and nature photography.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            My journey into photography began during the COVID period, a time that brought uncertainty and personal struggle. While studying Business Management, I realized it wasn’t the path I truly wanted to follow. During that phase, I went through a low point in life that pushed me to rethink everything and search for something more meaningful and creative.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            I trained under Mahesh Ganganath, one of Sri Lanka’s well-known fine art and wedding photographers, where I built my foundation in professional photography before starting my career in wedding photography in 2021. Since then, I’ve worked with studios and freelance projects across Sri Lanka, gaining experience in both outdoor and indoor photography styles, as well as working under tight time schedules during real wedding assignments.
          </p>
           <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            Today, I work with international travelers, couples, and creators visiting Sri Lanka, capturing natural and emotional moments in coastal landscapes, jungles, and golden-hour light. My style is cinematic, minimal, and focused on real connection between people and place.
          </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            My goal is simple — to turn real moments into timeless visual stories.
          </p>
        </div>
      </div>
    </section>
  )
}
