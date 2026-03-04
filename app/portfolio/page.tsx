import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { portfolioCategories } from "@/lib/portfolio-data"

export const metadata = {
  title: "Portfolio | Shavi FotoArts",
  description:
    "Browse the full portfolio of Shavi FotoArts — wedding, fashion, travel & hotel, and real estate photography.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        {/* Page Title */}
        <div className="flex flex-col items-center gap-4 mb-16 md:mb-24 text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-light">
            Work
          </span>
          <h1 className="text-4xl md:text-6xl tracking-[0.15em] uppercase font-light">
            Portfolio
          </h1>
          <div className="w-12 h-px bg-foreground/30 mt-2" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {portfolioCategories.map((category) => (
            <Link
              key={category.id}
              href={`/portfolio/${category.id}`}
              className="group relative block overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <Image
                src={category.cover}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                <span className="text-xs tracking-[0.35em] uppercase font-light opacity-80">
                  {category.subtitle}
                </span>
                <h2 className="text-2xl md:text-3xl tracking-[0.2em] uppercase font-light">
                  {category.title}
                </h2>
                <div className="w-8 h-px bg-white/60 mt-1 group-hover:w-16 transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
