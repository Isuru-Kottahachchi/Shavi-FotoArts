export interface PortfolioImage {
  src: string
  alt: string
  span?: "col" | "row" | "both"
}

export interface PortfolioCategory {
  id: string
  title: string
  subtitle: string
  cover: string
  description: string
  reverse?: boolean
  images: PortfolioImage[]
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "fashion",
    title: "Fashion",
    subtitle: "Fashion & Product",
    cover: "/images/portfolio-11.jpg",
    description:
      "Capturing the soul of destinations — from sweeping resort landscapes to intimate hotel interiors that tell a story of place and experience.",
    images: [
      {
        src: "/images/Fashion-portrait.jpg",
        alt: "Luxury resort aerial view with infinity pool",
        span: "col",
      },
      {
        src: "/images/Fashion-portrait-1.jpg",
        alt: "Modern luxury interior design",
      },
      {
        src: "/images/Fashion-portrait-2.jpg",
        alt: "Coastal lifestyle editorial",
      },
      {
        src: "/images/Fashion-portrait-3.jpg",
        alt: "Coastal lifestyle editorial",
      },
      {
        src: "/images/Fashion-portrait-4.jpg",
        alt: "Coastal lifestyle editorial",
      },
      {
        src: "/images/Fashion-portrait-5.jpg",
        alt: "Coastal lifestyle editorial",
      },
      {
        src: "/images/Fashion-portrait-6.jpg",
        alt: "Coastal lifestyle editorial",
      },
    ],
  },
  {
    id: "love-stories",
    title: "Love Stories",
    subtitle: "Love Stories & Weddings",
    cover: "/images/portfolio-12.jpg",
    description:
      "Every love story is unique. We document your day with a timeless, editorial approach — candid moments woven with carefully crafted portraits.",
    reverse: true,
    images: [
      {
        src: "/images/portfolio-4.jpg",
        alt: "Romantic couple in garden at golden hour",
        span: "row",
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
    title: "Nature | Arts",
    subtitle: "Nature & Arts",
    cover: "/images/portfolio-1.jpg",
    description:
      "High-concept fashion editorials and clean commercial product imagery that elevates brands and communicates vision with precision.",
    images: [
      {
        src: "/images/Nature-fine-arts.jpg",
        alt: "Fashion editorial with dramatic lighting",
      },
      {
        src: "/images/Nature-fine-arts-1.jpg",
        alt: "Fashion editorial with dramatic lighting",
      },
      {
        src: "/images/Nature-fine-arts-2.jpeg",
        alt: "Street style fashion photography",
      },
      {
        src: "/images/Nature-fine-arts-3.jpeg",
        alt: "Luxury product photography",
        span: "col",
      },
       {
        src: "/images/Nature-fine-arts-4.jpeg",
        alt: "Luxury product photography",
        span: "col",
      },
       {
        src: "/images/Nature-fine-arts-5.jpg",
        alt: "Luxury product photography",
        span: "col",
      },
    ],
  },
  {
    id: "commercials",
    title: "Commercials",
    subtitle: "Commercials & Architecture",
    cover: "/images/portfolio-13.jpeg",
    description:
      "Capturing the beauty of the natural world — from sweeping landscapes to intimate wildlife moments that tell a story of place and environment.",
    reverse: true,
    images: [
      {
        src: "/images/Commercials.jpg",
        alt: "Modern luxury interior photography",
        span: "col",
      },
      {
        src: "/images/Commercials-1.jpg",
        alt: "Resort architecture exterior",
      },
      {
        src: "/images/Commercials-2.jpeg",
        alt: "Minimalist product styling",
      },
      {
        src: "/images/Commercials-3.jpeg",
        alt: "Minimalist product styling",
      },
       {
        src: "/images/Commercials-5.jpeg",
        alt: "Minimalist product styling",
      },
    ],
  },
]
