import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Al Rehman Welfare — Stand for Palestine',
  description: 'A youth-led welfare organization from Pakistan standing in solidarity with Palestine.',
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