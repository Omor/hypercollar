export default function AskCollar() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#14F195] via-[#3DD9EB] to-[#5B9EF8] bg-clip-text text-transparent">
              Ask Collar.
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Your AI-powered Hyperliquid research assistant
          </p>
          
          <div className="mb-12 bg-gradient-to-r from-[#14F195] via-[#3DD9EB] to-[#5B9EF8] p-[2px] rounded-lg">
            <div className="bg-black p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">Launching Soon</h2>
              <p className="mb-4">
                We're training Collar on the entire Hyperliquid ecosystem. Be the first to access our AI assistant when it launches.
              </p>
              <a href="/#newsletter" className="inline-block bg-gradient-to-r from-[#14F195] to-[#3DD9EB] text-black px-6 py-2 rounded font-semibold hover:opacity-90 transition-opacity">
                Get Early Access
              </a>
            </div>
          </div>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">What to Expect</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#14F195] to-[#3DD9EB] bg-clip-text text-transparent">
                  Instant Answers
                </h3>
                <p className="text-gray-300">
                  Get immediate answers about any Hyperliquid project, protocol feature, or trading strategy. No more searching through docs or Discord.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#14F195] to-[#3DD9EB] bg-clip-text text-transparent">
                  Deep Knowledge
                </h3>
                <p className="text-gray-300">
                  Collar is trained on project whitepapers, technical documentation, on-chain data, and community discussions for comprehensive insights.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#14F195] to-[#3DD9EB] bg-clip-text text-transparent">
                  Real-Time Data
                </h3>
                <p className="text-gray-300">
                  Access current TVL, volume, user metrics, and market data. Collar stays updated with the latest ecosystem developments.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#14F195] to-[#3DD9EB] bg-clip-text text-transparent">
                  Strategic Analysis
                </h3>
                <p className="text-gray-300">
                  Beyond basic facts, get strategic insights on opportunities, risks, and comparative analysis across projects.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Example Questions</h2>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <p className="text-gray-400 mb-6">Here's what you'll be able to ask Collar:</p>
              
              <div className="space-y-4">
                <div className="bg-black p-4 rounded">
                  <p className="text-sm text-gray-400 mb-1">You:</p>
                  <p className="text-white">"What are the most promising DeFi projects on Hyperliquid?"</p>
                </div>
                
                <div className="bg-black p-4 rounded">
                  <p className="text-sm text-gray-400 mb-1">You:</p>
                  <p className="text-white">"Explain Hyperliquid's vault architecture and its advantages"</p>
                </div>
                
                <div className="bg-black p-4 rounded">
                  <p className="text-sm text-gray-400 mb-1">You:</p>
                  <p className="text-white">"What's the current TVL breakdown across Hyperliquid projects?"</p>
                </div>
                
                <div className="bg-black p-4 rounded">
                  <p className="text-sm text-gray-400 mb-1">You:</p>
                  <p className="text-white">"Compare the tokenomics of the top 3 projects by market cap"</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Access Tiers</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="bg-gradient-to-r from-[#14F195] to-[#3DD9EB] bg-clip-text text-transparent text-xl">•</span>
                <div>
                  <h3 className="font-semibold mb-1">Free Tier</h3>
                  <p className="text-gray-300">5 questions per day for everyone</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="bg-gradient-to-r from-[#14F195] to-[#3DD9EB] bg-clip-text text-transparent text-xl">•</span>
                <div>
                  <h3 className="font-semibold mb-1">Pro Members</h3>
                  <p className="text-gray-300">20 questions per day + priority responses</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="bg-gradient-to-r from-[#14F195] to-[#3DD9EB] bg-clip-text text-transparent text-xl">•</span>
                <div>
                  <h3 className="font-semibold mb-1">Pro Members</h3>
                  <p className="text-gray-300">Unlimited questions + API access + advanced features</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
