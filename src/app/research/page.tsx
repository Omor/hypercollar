export default function Research() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#14F195] via-[#3DD9EB] to-[#5B9EF8] bg-clip-text text-transparent">
              Research
            </span>
            <span className="text-white">.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            In-depth analysis and insights on the Hyperliquid ecosystem
          </p>
          
          <div className="mb-12 bg-[#14F195] text-black p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
            <p className="mb-4">
              We're preparing our first research reports. Subscribe to our newsletter to be the first to know when they're published.
            </p>
            <a href="/#newsletter" className="inline-block bg-black text-[#14F195] px-6 py-2 rounded font-semibold hover:bg-gray-900 transition-colors">
              Get Notified
            </a>
          </div>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">What to Expect</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-[#14F195]">Deep Dives</h3>
                <p className="text-gray-300">
                  Comprehensive analysis of Hyperliquid projects, including technical architecture, 
                  team assessment, tokenomics, and competitive positioning.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-[#14F195]">Ecosystem Reports</h3>
                <p className="text-gray-300">
                  Monthly overviews of the Hyperliquid ecosystem, tracking growth metrics, 
                  emerging trends, and opportunities.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-[#14F195]">Technical Analysis</h3>
                <p className="text-gray-300">
                  In-depth technical breakdowns of Hyperliquid's infrastructure, protocol upgrades, 
                  and security considerations.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-[#14F195]">Market Intelligence</h3>
                <p className="text-gray-300">
                  Data-driven insights on trading patterns, liquidity dynamics, and market 
                  opportunities within Hyperliquid.
                </p>
              </div>
            </div>
          </section>
          
          <section className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Research Preview</h2>
            <p className="text-gray-300 mb-4">
              Our upcoming research pipeline includes:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#14F195]">→</span>
                <span>The State of Hyperliquid: Q4 2024 Ecosystem Report</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#14F195]">→</span>
                <span>Understanding Hyperliquid's Vault Architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#14F195]">→</span>
                <span>Top 10 Projects Building on Hyperliquid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#14F195]">→</span>
                <span>DeFi Opportunities in the Hyperliquid Ecosystem</span>
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              Subscribe to get these reports delivered to your inbox as soon as they're published.
            </p>
          </section>
        </section>
      </div>
    </main>
  )
}
