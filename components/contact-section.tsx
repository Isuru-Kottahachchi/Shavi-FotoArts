"use client"

import { Facebook, Instagram, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-secondary"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
          Get in Touch
        </span>
        <h2 className="text-3xl md:text-5xl tracking-[0.15em] uppercase font-light text-secondary-foreground text-balance">
          Let&apos;s Create Together
        </h2>
        <div className="w-12 h-px bg-secondary-foreground/30" />
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light max-w-xl">
          Whether it&apos;s a destination wedding, a fashion editorial, or a
          luxury property shoot, I&apos;d love to hear about your vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-8 mt-4">
          <a
            href="mailto:hello@shavifotoarts.com"
            className="flex items-center gap-3 text-secondary-foreground hover:text-secondary-foreground/70 transition-colors group"
          >
            <Mail className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-sm tracking-widest uppercase font-light">
              hello@shavifotoarts.com
            </span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-secondary-foreground hover:text-secondary-foreground/70 transition-colors group"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-sm tracking-widest uppercase font-light">
              @shavifotoarts
            </span>
          </a>
           <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-secondary-foreground hover:text-secondary-foreground/70 transition-colors group"
          >
            <Facebook className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-sm tracking-widest uppercase font-light">
              @shavifotoarts
            </span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-sm tracking-widest uppercase font-light">
             Sri Lanka
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
