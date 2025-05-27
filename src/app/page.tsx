import NewsletterForm from '@/components/ui/newsletter-form'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Collar<span className="text-[#14F195]">.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Hyperliquid Intelligence Platform
          </p>
          <a href="#newsletter" className="inline-block bg-[#14F195] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#12d984] transition-colors">
            Get Weekly Intelligence
          </a>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a href="/ask" className="block group">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 group-hover:border-[#14F195] transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Ask Collar</h2>
              <p className="text-gray-400">AI-powered answers about Hyperliquid</p>
            </div>
          </a>
          
          <a href="/research" className="block group">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 group-hover:border-[#14F195] transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Research</h2>
              <p className="text-gray-400">Deep dives and project analysis</p>
            </div>
          </a>
          
          <a href="/about#hyperdog" className="block group">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 group-hover:border-[#14F195] transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Hyperdog Benefits</h2>
              <p className="text-gray-400">Exclusive features for NFT holders</p>
            </div>
          </a>
        </section>
        
        <section id="newsletter" className="max-w-2xl mx-auto text-center py-16 border-t border-gray-800">
          <div className="mb-8">
            <span className="text-[#14F195] text-sm font-semibold uppercase tracking-wider">Free Weekly Newsletter</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            The Hyperliquid Intelligence Report
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every Friday, get exclusive insights delivered to your inbox:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8 max-w-xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-[#14F195] mt-1">✓</span>
              <span className="text-gray-300">New project launches & analysis</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#14F195] mt-1">✓</span>
              <span className="text-gray-300">Actionable data & insights</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#14F195] mt-1">✓</span>
              <span className="text-gray-300">Ecosystem trends & metrics</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#14F195] mt-1">✓</span>
              <span className="text-gray-300">Exclusive research previews</span>
            </div>
          </div>
          
          <p className="text-gray-400 mb-6">
            Join 500+ traders and builders staying ahead of the curve
          </p>
          
          <NewsletterForm />
          
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Your email is safe with us.
          </p>
        </section>
      </div>
    </main>
  )
}
