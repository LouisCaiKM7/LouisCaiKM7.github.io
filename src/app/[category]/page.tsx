import Link from "next/link";
import { getFilesInCategory } from "../../lib/content";

type Props = { params: { category: string } };

export default async function CategoryPage({ params }: Props) {
  const files = await getFilesInCategory(params.category);
  const category = params.category;

  return (
    <div className="min-h-screen relative">
      {/* Category header with massive title */}
      <div className="text-center mb-16 relative">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        
        <h1 className="text-7xl font-black font-['Orbitron'] mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          {category.toUpperCase()}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {category === 'blog' && 'Digital chronicles from the cyber frontier'}
          {category === 'photos' && 'Pixel-perfect moments captured in time'}
          {category === 'videos' && 'Motion pictures from the digital realm'}
          {category === 'projects' && 'Code experiments and technological innovations'}
        </p>
      </div>

      {/* Files grid with tech cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {files.map((f) => {
          const title = f.replace(".md", "").replace(/-/g, " ");
          return (
            <Link key={f} href={`/${category}/${f.replace(".md", "")}`} className="group">
              <div className="tech-card p-6 rounded-xl h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {category === 'blog' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        )}
                        {category === 'photos' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        )}
                        {category === 'videos' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        )}
                        {category === 'projects' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white capitalize">
                        {title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center text-cyan-400 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-semibold">VIEW CONTENT</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Back button with tech styling */}
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          RETURN TO CYBERVERSE
        </Link>
      </div>
    </div>
  );
}