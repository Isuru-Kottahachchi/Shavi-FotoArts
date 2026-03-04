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
    id: "travel-hotel",
    title: "Travel & Hotel",
    subtitle: "Destination Photography",
    cover: "/images/portfolio-5.jpg",
    description:
      "Capturing the soul of destinations — from sweeping resort landscapes to intimate hotel interiors that tell a story of place and experience.",
    images: [
      {
        src: "/images/portfolio-5.jpg",
        alt: "Luxury resort aerial view with infinity pool",
        span: "col",
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
    cover: "/images/portfolio-4.jpg",
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
    title: "Fashion & Product",
    subtitle: "Editorial & Commercial",
    cover: "/images/portfolio-11.jpg",
    description:
      "High-concept fashion editorials and clean commercial product imagery that elevates brands and communicates vision with precision.",
    images: [
      {
        src: "/images/portfolio-11.jpg",
        alt: "Fashion editorial with dramatic lighting",
      },
      {
        src: "/images/portfolio-8.jpg",
        alt: "Street style fashion photography",
      },
      {
        src: "/images/portfolio-6.jpg",
        alt: "Luxury product photography",
        span: "col",
      },
    ],
  },
  {
    id: "nature",
    title: "Nature",
    subtitle: "Natural & Scenic",
    cover: "/images/portfolio-1.jpg",
    description:
      "Capturing the beauty of the natural world — from sweeping landscapes to intimate wildlife moments that tell a story of place and environment.",
    reverse: true,
    images: [
      {
        src: "/images/portfolio-1.jpg",
        alt: "Modern luxury interior photography",
        span: "col",
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
