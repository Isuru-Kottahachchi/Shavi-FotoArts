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
    return (
      <button
        type="button"
        className="p-2 text-foreground/60 hover:text-foreground transition-colors cursor-pointer touch-manipulation select-none"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 pointer-events-none" />
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 text-foreground/60 hover:text-foreground transition-colors cursor-pointer touch-manipulation select-none"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 pointer-events-none" />
      ) : (
        <Moon className="h-5 w-5 pointer-events-none" />
      )}
    </button>
  )
}
