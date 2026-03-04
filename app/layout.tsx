import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: 'Shavi FotoArts | International Photographer & Visual Storyteller',
  description:
    'Professional photography services by Shavi FotoArts. Specializing in wedding, fashion, travel & hotel, and real estate photography. Available in Sri Lanka.',
  keywords: [
    'photographer',
    'wedding photography',
    'fashion photography',
    'travel photography',
    'real estate photography',
    'Sri Lanka photographer',
    'Shavi FotoArts',
    'professional photographer',
    'editorial photography',
  ],
  authors: [{ name: 'Shavi FotoArts' }],
  creator: 'Shavi FotoArts',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shavifotoarts.com',
    siteName: 'Shavi FotoArts',
    title: 'Shavi FotoArts | International Photographer & Visual Storyteller',
    description:
      'Professional photography services specializing in wedding, fashion, travel, and real estate photography. Available in Sri Lanka.',
    images: [
      {
        url: '/images/portfolio-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Shavi FotoArts Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shavi FotoArts | International Photographer',
    description:
      'Professional photography services specializing in wedding, fashion, travel, and real estate photography. Available in Sri Lanka.',
    images: ['/images/portfolio-2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
