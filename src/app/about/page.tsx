export default function About() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#14F195] via-[#3DD9EB] to-[#5B9EF8] bg-clip-text text-transparent">
              About Collar
            </span>
            <span className="text-white">.</span>
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              Collar is the intelligence layer for the Hyperliquid ecosystem, providing traders and builders 
              with the insights they need to make informed decisions.
            </p>
            
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                We believe that access to high-quality information shouldn't be limited to insiders. 
                Collar democratizes Hyperliquid intelligence, making professional-grade research and 
                analysis available to everyone in the ecosystem.
              </p>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mt-6">
                <p className="text-gray-300 mb-4">
                  In finance, a "collar" is an options strategy designed to protect against downside risk while 
                  allowing for upside potential. It's about smart risk management—knowing when to protect your 
                  position and when to capture opportunity.
                </p>
                <p className="text-gray-300">
                  At Collar, we apply this same principle to information. We help you manage risk through 
                  intelligence—providing the data, analysis, and insights you need to protect your downside 
                  and identify upside opportunities in the Hyperliquid ecosystem.
                </p>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3 text-[#14F195]">Research & Analysis</h3>
                  <p className="text-gray-300">
                    Deep dives into Hyperliquid projects, protocols, and opportunities. Our research 
                    goes beyond surface-level metrics to uncover what really matters.
                  </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3 text-[#14F195]">Weekly Intelligence</h3>
                  <p className="text-gray-300">
                    Every Friday, subscribers receive our curated intelligence report with new launches, 
                    actionable insights, and ecosystem trends.
                  </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3 text-[#14F195]">AI-Powered Insights</h3>
                  <p className="text-gray-300">
                    Ask Collar anything about the Hyperliquid ecosystem and get instant, 
                    accurate answers powered by our proprietary knowledge base.
                  </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3 text-[#14F195]">Pro Analytics</h3>
                  <p className="text-gray-300">
                    Advanced analytics and real-time market intelligence for serious traders, 
                    including custom alerts and deep market insights.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Why Collar?</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#14F195] mt-1">•</span>
                  <span><strong>Independent:</strong> We're not affiliated with any projects, ensuring unbiased analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14F195] mt-1">•</span>
                  <span><strong>Data-Driven:</strong> Our insights are based on verifiable on-chain data and thorough research</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14F195] mt-1">•</span>
                  <span><strong>Community-First:</strong> Built for the Hyperliquid community, by the community</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14F195] mt-1">•</span>
                  <span><strong>Actionable:</strong> We focus on insights you can actually use, not just information</span>
                </li>
              </ul>
            </section>
            
            <section id="pro-features" className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Pro Features</h2>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <p className="text-gray-300 mb-4">
                  Collar Pro offers advanced features for traders who need deeper insights and real-time analytics. 
                  Get priority access to new features, enhanced AI responses, and exclusive research reports.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#14F195] mt-1">•</span>
                    <span>Real-time market alerts and notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#14F195] mt-1">•</span>
                    <span>Advanced portfolio analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#14F195] mt-1">•</span>
                    <span>Priority AI assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#14F195] mt-1">•</span>
                    <span>Early access to new features</span>
                  </li>
                </ul>
              </div>
            </section>
            
            <section className="mb-12 bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
              <p className="text-gray-300 mb-6">
                Join our community and stay ahead of the curve with weekly Hyperliquid intelligence.
              </p>
              <a href="/#newsletter" className="inline-block bg-[#14F195] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#12d984] transition-colors">
                Subscribe to Newsletter
              </a>
            </section>
            
            <section>
              <h2 className="text-3xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-300">
                Have questions or feedback? Reach out at{' '}
                <a href="mailto:hello@hypercollar.com" className="text-[#14F195] hover:underline">
                  hello@hypercollar.com
                </a>
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}
