import { SiteHeader } from "@/components/site-header"
import { HeroGrid } from "@/components/hero-grid"
import { PortfolioSection } from "@/components/portfolio-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { portfolioCategories } from "@/lib/portfolio-data"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Shavi FotoArts",
  description:
    "Professional photography services specializing in wedding, fashion, travel & hotel, and nature photography.",
  url: "https://shavifotoarts.com",
  image: "/images/portfolio-2.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sri Lanka",
    addressCountry: "LK",
  },
  areaServed: ["Sri Lanka"],
  priceRange: "$$$$",
  sameAs: ["https://www.instagram.com/shavi.fotoarts?igsh=MWhpcWhzcHFkYTJwMA=="],
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
        <div className="flex items-center justify-center pt-16 md:pt-20 pb-0">
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-light">
              Portfolio
            </span>
            <div className="w-px h-12 bg-border" />
          </div>
        </div>

        {/* Portfolio Categories */}
        {portfolioCategories.map((section) => (
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
