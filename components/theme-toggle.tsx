"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-14 h-7 rounded-full bg-foreground/10 animate-pulse" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-7 w-14 items-center rounded-full border border-foreground/20 bg-foreground/10 transition-colors duration-300 cursor-pointer touch-manipulation select-none hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
    >
      {/* Track fill */}
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          isDark ? "bg-foreground/15" : "bg-foreground/5"
        }`}
        style={{ pointerEvents: "none" }}
      />
      {/* Thumb */}
      <span
        className={`relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-background border border-foreground/20 shadow-sm transition-transform duration-300 ${
          isDark ? "translate-x-8" : "translate-x-1"
        }`}
        style={{ pointerEvents: "none" }}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-foreground" style={{ pointerEvents: "none" }} />
        ) : (
          <Sun className="h-3 w-3 text-foreground" style={{ pointerEvents: "none" }} />
        )}
      </span>
    </button>
  )
}
