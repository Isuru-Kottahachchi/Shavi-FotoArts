"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, Instagram, Mail, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"

const workCategories = [
  { label: "Travel & Hotel", href: "/portfolio/travel-hotel" },
  { label: "Wedding", href: "/portfolio/wedding" },
  { label: "Fashion & Product", href: "/portfolio/fashion-product" },
  { label: "Nature", href: "/portfolio/nature" },
]

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Home", href: "/" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWorkOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 -ml-2 text-foreground hover:text-foreground/70 transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="h-7 w-7" strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 z-0">

            <h1 className="text-2xl md:text-3xl tracking-[0.3em] uppercase font-sans">
              <span className="font-bold">Shavi</span>
              <span className="font-light"> FotoArts</span>
            </h1>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-1 relative z-10">
            <ThemeToggle />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:hello@shavifotoarts.com"
              className="p-2 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </header>

      {/* Full-screen Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-background transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 -ml-2 text-foreground hover:text-foreground/70 transition-colors cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="h-7 w-7" strokeWidth={1.5} />
          </button>
          <ThemeToggle />
        </div>

        <nav className="flex flex-col items-center justify-center h-[calc(100vh-88px)]">
          <ul className="flex flex-col items-center gap-8">
            {/* Work with dropdown */}
            <li className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Link
                  href="/portfolio"
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl md:text-4xl tracking-[0.2em] uppercase font-light text-foreground hover:text-foreground/60 transition-colors"
                >
                  Work
                </Link>
                <button
                  onClick={() => setWorkOpen((o) => !o)}
                  className="text-foreground/60 hover:text-foreground transition-colors touch-manipulation"
                  aria-label="Toggle work categories"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 cursor-pointer ${workOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {workOpen && (
                <ul className="flex flex-col items-center gap-4">
                  {workCategories.map((cat) => (
                    <li key={cat.href}>
                      <Link
                        href={cat.href}
                        onClick={() => { setMenuOpen(false); setWorkOpen(false) }}
                        className="text-base md:text-xl tracking-[0.2em] uppercase font-light text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {cat.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl md:text-4xl tracking-[0.2em] uppercase font-light text-foreground hover:text-foreground/60 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
