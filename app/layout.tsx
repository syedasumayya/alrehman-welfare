import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Al Rehman Welfare — Helping Orphans & Families',
  description: 'A youth-led welfare organization supporting orphans, widows, and needy families across Pakistan and worldwide.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}