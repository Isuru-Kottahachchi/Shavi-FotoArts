import { Facebook, Instagram, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="py-10 px-6 md:px-10 lg:px-16 border-t border-border/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-light">
          &copy; {new Date().getFullYear()} Shavi FotoArts. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
          </a>
           <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a
            href="mailto:hello@shavifotoarts.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  )
}
