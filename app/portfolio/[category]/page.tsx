import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { portfolioCategories } from "@/lib/portfolio-data"

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return portfolioCategories.map((c) => ({ category: c.id }))
}

export async function generateMetadata({ params }: Props) {
  const { category: categoryId } = await params
  const category = portfolioCategories.find((c) => c.id === categoryId)
  if (!category) return {}
  return {
    title: `${category.title} | Portfolio | Shavi FotoArts`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category: categoryId } = await params
  const category = portfolioCategories.find((c) => c.id === categoryId)

  if (!category) notFound()

  const otherCategories = portfolioCategories.filter((c) => c.id !== category.id)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
          All Categories
        </Link>

        {/* Category Header */}
        <div className="flex flex-col gap-3 mb-12 md:mb-16">
          <span className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-light">
            {category.subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl tracking-[0.15em] uppercase font-light">
            {category.title}
          </h1>
          <div className="w-12 h-px bg-foreground/30 mt-1" />
          <p className="text-muted-foreground font-light max-w-xl leading-relaxed mt-2">
            {category.description}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {category.images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group aspect-[4/3] ${
                image.span === "col"
                  ? "sm:col-span-2"
                  : image.span === "both"
                    ? "sm:col-span-2 lg:col-span-3"
                    : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Other Categories */}
        <div className="mt-24 md:mt-32 border-t border-border/40 pt-16">
          <div className="flex flex-col items-center gap-3 mb-12 text-center">
            <span className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-light">
              Explore More
            </span>
            <h2 className="text-2xl md:text-3xl tracking-[0.15em] uppercase font-light">
              Other Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {otherCategories.map((other) => (
              <Link
                key={other.id}
                href={`/portfolio/${other.id}`}
                className="group relative block overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={other.cover}
                  alt={other.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-white">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-light opacity-80">
                    {other.subtitle}
                  </span>
                  <h3 className="text-lg md:text-xl tracking-[0.15em] uppercase font-light">
                    {other.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
