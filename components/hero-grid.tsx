import Image from "next/image"

const heroImages = [
  {
    src: "/images/portfolio-1.jpg",
    alt: "Fashion editorial - model in flowing blue dress with dramatic lighting",
  },
  {
    src: "/images/portfolio-2.jpg",
    alt: "Beauty portrait - close-up with pearl accessories",
  },
  {
    src: "/images/portfolio-3.jpg",
    alt: "Lifestyle photography - coastal editorial on seaside rocks",
  },
]

export function HeroGrid() {
  return (
    <section aria-label="Featured portfolio work" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] md:gap-1">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index < 3}
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
          </div>
        ))}
      </div>
    </section>
  )
}
