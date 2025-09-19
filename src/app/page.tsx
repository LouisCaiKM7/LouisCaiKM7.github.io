import Link from "next/link";
import { getCategories } from "../lib/content";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Hero section with massive tech background */}
      <div className="relative w-full max-w-6xl mx-auto text-center mb-16">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        
        <h1 className="text-8xl font-black font-['Orbitron'] mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          CYBERVERSE
        </h1>
        <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Welcome to the digital nexus where technology meets creativity. 
          <span className="block mt-2 text-cyan-400">Exploring infinite possibilities through code and design.</span>
        </p>
        
        <div className="flex justify-center space-x-4 mb-12">
          <div className="tech-card px-6 py-3 rounded-lg">
            <span className="text-cyan-400 font-semibold">Next.js 15</span>
          </div>
          <div className="tech-card px-6 py-3 rounded-lg">
            <span className="text-purple-400 font-semibold">React 19</span>
          </div>
          <div className="tech-card px-6 py-3 rounded-lg">
            <span className="text-green-400 font-semibold">TypeScript</span>
          </div>
        </div>
      </div>

      {/* Categories grid with tech cards */}
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-['Orbitron'] text-center mb-12 text-cyan-400 neon-text">
          EXPLORATION MODULES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Link key={cat} href={`/${cat}`} className="group">
              <div className="tech-card p-8 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4">
                    {cat === 'blog' && '📝'}
                    {cat === 'photos' && '📸'}
                    {cat === 'videos' && '🎬'}
                    {cat === 'projects' && '💻'}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 capitalize">
                    {cat}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {cat === 'blog' && 'Digital thoughts and tech insights'}
                    {cat === 'photos' && 'Visual journey through pixels'}
                    {cat === 'videos' && 'Motion graphics and animations'}
                    {cat === 'projects' && 'Code repositories and experiments'}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center text-cyan-400 group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-semibold">ENTER MODULE</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Animated tech lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00ff41" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={`${20 + i * 15}%`}
              x2="100%"
              y2={`${30 + i * 15}%`}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}