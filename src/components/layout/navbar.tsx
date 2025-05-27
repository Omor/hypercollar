'use client'

import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  
  return (
    <nav className="border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {!isHome && (
            <a href="/" className="text-2xl font-bold">
              Collar<span className="text-[#14F195]">.</span>
            </a>
          )}
          <div className={`flex gap-6 ${isHome ? 'ml-auto' : ''}`}>
            <a href="/" className="hover:text-[#14F195] transition-colors">Home</a>
            <a href="/ask" className="hover:text-[#14F195] transition-colors">Ask Collar</a>
            <a href="/research" className="hover:text-[#14F195] transition-colors">Research</a>
            <a href="/about" className="hover:text-[#14F195] transition-colors">About</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
