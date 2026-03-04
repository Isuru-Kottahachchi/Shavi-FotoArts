import { SiteHeader } from "@/components/site-header"
import { HeroGrid } from "@/components/hero-grid"
import { PortfolioSection } from "@/components/portfolio-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

const portfolioSections = [
  {
    id: "travel-hotel",
    title: "Travel & Hotel",
    subtitle: "Destination Photography",
    images: [
      {
        src: "/images/portfolio-5.jpg",
        alt: "Luxury resort aerial view with infinity pool",
        span: "col" as const,
      },
      {
        src: "/images/portfolio-7.jpg",
        alt: "Modern luxury interior design",
      },
      {
        src: "/images/portfolio-3.jpg",
        alt: "Coastal lifestyle editorial",
      },
    ],
  },
  {
    id: "wedding",
    title: "Wedding",
    subtitle: "Love Stories",
    reverse: true,
    images: [
      {
        src: "/images/portfolio-4.jpg",
        alt: "Romantic couple in garden at golden hour",
        span: "row" as const,
      },
      {
        src: "/images/portfolio-9.jpg",
        alt: "Bridal portrait in natural setting",
      },
      {
        src: "/images/portfolio-2.jpg",
        alt: "Elegant portrait with accessories",
      },
    ],
  },
  {
    id: "fashion-product",
    title: "Fashion & Product",
    subtitle: "Editorial & Commercial",
    images: [
      {
        src: "/images/portfolio-1.jpg",
        alt: "Fashion editorial with dramatic lighting",
      },
      {
        src: "/images/portfolio-8.jpg",
        alt: "Street style fashion photography",
      },
      {
        src: "/images/portfolio-6.jpg",
        alt: "Luxury product photography",
        span: "col" as const,
      },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Architectural & Interior",
    reverse: true,
    images: [
      {
        src: "/images/portfolio-7.jpg",
        alt: "Modern luxury interior photography",
        span: "col" as const,
      },
      {
        src: "/images/portfolio-5.jpg",
        alt: "Resort architecture exterior",
      },
      {
        src: "/images/portfolio-6.jpg",
        alt: "Minimalist product styling",
      },
    ],
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Shavi FotoArts",
  description:
    "Professional photography services specializing in wedding, fashion, travel & hotel, and real estate photography.",
  url: "https://shavifotoarts.com",
  image: "/images/portfolio-2.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sri Lanka",
    addressCountry: "LK",
  },
  areaServed: ["Sri Lanka"],
  priceRange: "$$$$",
  sameAs: ["https://instagram.com/shavifotoarts"],
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main>
        <HeroGrid />

        {/* Divider */}
        <div className="flex items-center justify-center py-16 md:py-20">
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-light">
              Portfolio
            </span>
            <div className="w-px h-12 bg-border" />
          </div>
        </div>

        {/* Portfolio Categories */}
        {portfolioSections.map((section) => (
          <PortfolioSection
            key={section.id}
            id={section.id}
            title={section.title}
            subtitle={section.subtitle}
            images={section.images}
            reverse={section.reverse}
          />
        ))}

        {/* About */}
        <div className="border-t border-border/40">
          <AboutSection />
        </div>

        {/* Contact */}
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}
