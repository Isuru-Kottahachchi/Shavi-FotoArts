import Image from "next/image"
import Link from "next/link"

interface PortfolioSectionProps {
  id: string
  title: string
  subtitle: string
  images: {
    src: string
    alt: string
    span?: "col" | "row" | "both"
  }[]
  reverse?: boolean
}

export function PortfolioSection({
  id,
  title,
  subtitle,
  images,
  reverse = false,
}: PortfolioSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-start gap-10 md:gap-16`}
      >
        {/* Title Block */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 md:sticky md:top-32">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl tracking-[0.15em] uppercase font-light text-foreground text-balance">
            {title}
          </h2>
          <div className="w-12 h-px bg-foreground/30 mt-2" />
        </div>

        {/* Image Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {images.map((image, index) => (
            <Link
              key={index}
              href={`/portfolio/${id}`}
              className={`relative overflow-hidden group cursor-pointer block ${
                image.span === "col"
                  ? "sm:col-span-2 aspect-[16/9]"
                  : image.span === "row"
                    ? "sm:row-span-2 aspect-[4/3] sm:aspect-[3/5]"
                    : image.span === "both"
                      ? "sm:col-span-2 sm:row-span-2 aspect-square"
                      : "aspect-[4/3] sm:aspect-[4/5]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
