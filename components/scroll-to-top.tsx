"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" })
    document.body.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 bg-background/90 text-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-foreground hover:text-background cursor-pointer touch-manipulation"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  )
}
