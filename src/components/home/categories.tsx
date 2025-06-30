import { useGetArticles } from '@/hooks/useArticles'
import { useEffect, useState } from 'react'

const gradients = [
  'from-pink-500 to-yellow-400',
  'from-green-400 to-blue-500',
  'from-purple-500 to-indigo-600',
  'from-red-400 to-pink-600',
  'from-cyan-400 to-blue-600',
  'from-yellow-400 to-red-400',
  'from-teal-400 to-green-500',
  'from-indigo-500 to-purple-600',
]

export function CategoriesSection() {
  const { data: articles, isLoading } = useGetArticles()
  const categories = [...new Set(articles?.map((a) => a.type).filter(Boolean))]
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative bg-white py-32 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-28 left-1/4 w-[480px] h-[480px] bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute -bottom-24 right-1/3 w-[400px] h-[400px] bg-indigo-300 opacity-15 blur-2xl rounded-full animate-pulse-slower" />

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-transparent bg-clip-text drop-shadow-md">
          TipsBucket
        </h2>
        <p className="mt-8 max-w-3xl mx-auto text-xl font-light text-gray-700">
          Discover diverse life tips — from wellness and productivity to inspiration and self-growth.
        </p>
      </div>

      {/* Categories grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-56 bg-gray-200 rounded-lg animate-pulse shadow-inner"
                />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {categories.map((category, i) => (
              <a
                key={category}
                href={`/blog?type=${encodeURIComponent(category)}`}
                className={`group relative rounded-lg p-10 flex flex-col justify-center items-center shadow-lg text-white transition-transform duration-300
                  ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  hover:scale-105 hover:shadow-2xl
                  bg-gradient-to-br ${gradients[i % gradients.length]}`}
              >
                <h3 className="text-3xl font-semibold tracking-wide select-none">
                  {category.toUpperCase()}
                </h3>
                <p className="mt-4 text-center max-w-xs font-medium leading-relaxed text-white/90">
                  Dive deep into {category.toLowerCase()} tips to boost your lifestyle and mindset.
                </p>
                <span className="absolute top-6 right-6 w-5 h-5 rounded-full bg-white opacity-20 group-hover:opacity-50 transition-opacity" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Bottom decorative line */}
      <div className="mt-32 flex justify-center">
        <div className="w-64 h-1 rounded-full bg-gradient-to-r from-transparent via-purple-600 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
