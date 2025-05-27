import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/navbar'

export const metadata: Metadata = {
  title: 'Collar - Hyperliquid Intelligence',
  description: 'AI-powered intelligence platform for the Hyperliquid ecosystem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
