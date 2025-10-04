import { getFileContent } from "../../../lib/content";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./markdown-styles.css";
import Link from "next/link";

type Props = {
  params: { category: string; slug: string };
};

export default async function PostPage({ params }: Props) {
  const category = params.category;
  const slug = params.slug;
  const content = await getFileContent(category, slug);

  return (
    <div className="min-h-screen relative">
      {/* Article header with massive title */}
      <div className="mb-12 relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-4">
            {category.toUpperCase()}
          </div>
          <h1 className="text-5xl font-black font-['Orbitron'] mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {slug.replace(/-/g, " ").toUpperCase()}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Article content with tech styling */}
      <article className="max-w-4xl mx-auto relative">
        <div className="absolute -left-20 top-0 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -right-20 bottom-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="glass p-8 rounded-2xl relative z-10">
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Navigation buttons */}
      <div className="mt-12 flex justify-between items-center max-w-4xl mx-auto">
        <Link href={`/${category}`} className="inline-flex items-center px-6 py-3 glass text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO {category.toUpperCase()}
        </Link>
        
        <Link href="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { getCategories, getFilesInCategory } = await import("../../../lib/content");
  const categories = await getCategories();
  const paths: { category: string; slug: string }[] = [];

  for (const category of categories) {
    const files = await getFilesInCategory(category);
    for (const file of files) {
      paths.push({ category, slug: file.replace(".md", "") });
    }
  }

  return paths;
}