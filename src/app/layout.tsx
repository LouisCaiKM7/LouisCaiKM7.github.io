import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LOUISCAIKM7 - Technological Universe",
  description: "Exploring the digital frontier through code, design, and innovation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        {/* Animated background elements */}
        <div className="grid-bg"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        
        {/* Futuristic header */}
        <header className="relative z-10 p-4 glass m-4 animated-border">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold font-['Orbitron'] neon-text text-cyan-400">
              LOUISCAIKM7
            </Link>
            <nav className="flex space-x-12"> {/* Increased from space-x-6 to space-x-12 */}
              <Link
                href="/"
                className="relative px-4 py-2 text-white hover:text-cyan-400 transition-all duration-300 group"
              >
                <span className="relative z-10">Home &nbsp;&nbsp;</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link
                href="/blog"
                className="relative px-4 py-2 text-white hover:text-cyan-400 transition-all duration-300 group"
              >
                <span className="relative z-10">Blog &nbsp;&nbsp;</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link
                href="/photos"
                className="relative px-4 py-2 text-white hover:text-cyan-400 transition-all duration-300 group"
              >
                <span className="relative z-10">Photos &nbsp;&nbsp;</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link
                href="/videos"
                className="relative px-4 py-2 text-white hover:text-cyan-400 transition-all duration-300 group"
              >
                <span className="relative z-10">Videos</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content with tech grid pattern */}
        <main className="relative z-10 flex-1 container mx-auto px-6 py-8">
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border border-cyan-500/20"></div>
              ))}
            </div>
          </div>
          <div className="relative z-10">{children}</div>
        </main>

        {/* Futuristic footer */}
        <footer className="relative z-10 p-6 glass m-4 mt-8 animated-border">
          <div className="text-center">
            <p className="text-cyan-400 font-['Orbitron'] text-sm tracking-wider">
              © {new Date().getFullYear()} LOUISCAIKM7 // DIGITAL FRONTIERS UNLIMITED
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="w-2 h-2 bg-cyan-400 rounded-full pulse-neon"></span>
              <span className="w-2 h-2 bg-purple-400 rounded-full pulse-neon animation-delay-2000"></span>
              <span className="w-2 h-2 bg-green-400 rounded-full pulse-neon animation-delay-4000"></span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}