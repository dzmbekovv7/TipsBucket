import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { XIcon } from 'lucide-react'
import { useSearchParams } from 'react-router'

export function BlogPage() {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') || ''
  const { data: articles = [], isLoading, isError } = useGetArticles()

  if (isLoading) {
    return (
      <div className="relative min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden flex items-center justify-center">
        <div className="text-center text-white space-y-6">
          <div className="text-6xl font-extrabold tracking-tight animate-pulse">Loading...</div>
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="relative min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden flex items-center justify-center px-4">
        <div className="bg-white bg-opacity-90 rounded-2xl p-12 max-w-xl text-center shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-pink-600">Loading Error</h1>
          <p className="text-gray-700 mb-8">Failed to fetch blog posts. Please try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            Refresh Page
          </button>
        </div>
      </div>
    )
  }

const filteredArticles = type 
  ? (articles ?? []).filter(article => article.type === type) 
  : (articles ?? [])

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-x-hidden py-12">
      <Container>
        {/* Header */}
        <header className="text-center mb-16 px-4 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
            TipsBucket — Advice & Life Hacks Blog
          </h1>
          <p className="mt-4 text-indigo-100 text-lg sm:text-xl max-w-3xl mx-auto drop-shadow-md">
            Discover the best tips across tech, lifestyle, and more.
            Read, get inspired, and apply them in your life!
          </p>
        </header>

        {/* Filter */}
        {type && (
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 rounded-lg opacity-60 transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div
                className="relative bg-white p-5 shadow-lg rounded-lg border-l-8 border-pink-500 flex items-center space-x-4"
                style={{ clipPath: 'polygon(0 0, 95% 0, 100% 15%, 95% 100%, 0 100%)' }}
              >
                <span className="font-semibold text-gray-700">Filter by category:</span>
                <span className="text-pink-600 font-extrabold text-xl">{type}</span>
                <a
                  href="/blog"
                  className="ml-auto flex items-center justify-center w-9 h-9 rounded-full bg-pink-500 text-white hover:bg-pink-600 shadow-md transition"
                  aria-label="Clear filter"
                >
                  <XIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Articles grid — все одинакового размера */}
        {filteredArticles.length > 0 ? (
          <div
            className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredArticles.map(article => (
              <div
                key={article.id}
                className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer
                  hover:scale-[1.05] transition-transform duration-500
                  bg-white"
              >
                <ArticleCardMedium article={article} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-indigo-100 mt-32 px-4">
            <p className="text-3xl font-semibold mb-4">No articles found</p>
            {type ? (
              <p className="mb-6">
                No articles found for category <span className="font-bold text-pink-300">"{type}"</span>
              </p>
            ) : (
              <p className="mb-6">No articles yet. Please check back later.</p>
            )}
            <a
              href="/blog"
              className="inline-block bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              View all articles
            </a>
          </div>
        )}
      </Container>
    </div>
  )
}
