"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ImageLightbox } from "@/components/image-lightbox"

interface GalleryImage {
  src: string
  alt: string
  span?: "col" | "row" | "both"
}

interface PortfolioGalleryProps {
  images: GalleryImage[]
}

export function PortfolioGallery({ images }: PortfolioGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length))
  }, [images.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))
  }, [images.length])

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 md:gap-3 space-y-2 md:space-y-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative overflow-hidden group w-full break-inside-avoid cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground block"
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </>
  )
}
