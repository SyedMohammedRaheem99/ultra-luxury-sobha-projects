import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800']
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Dubai Property Roadshow | Coimbatore 2025 - Super Realty Dubai',
  description: 'Discover premium Dubai residences at the exclusive Dubai Property Roadshow in Coimbatore. 15-16 November 2025 at Vivanta Surya, by Taj.',
  keywords: 'Dubai Property, Real Estate Investment, Coimbatore, Super Realty Dubai, Luxury Properties',
  openGraph: {
    title: 'Dubai Property Roadshow | Coimbatore 2025',
    description: 'Discover Premium Dubai Residences',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
