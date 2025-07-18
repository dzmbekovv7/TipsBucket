import { useGetArticles } from '@/hooks/useArticles'
export function FeaturedArticlesSection() {
  const { data: articles, isLoading } = useGetArticles()

  if (!isLoading && (!articles || articles.length === 0)) return null

  // Группируем статьи по типу
  const groupedByType = (articles ?? []).reduce<Record<string, typeof articles>>((acc, article) => {
    const t = article.type ?? 'Unknown'
    if (!acc[t]) acc[t] = []
    acc[t].push(article)
    return acc
  }, {})

  return (
    <section className="relative bg-gradient-to-br from-purple-100 via-indigo-50 to-white py-28 overflow-hidden">
      {/* Фоновый декор */}
      <div className="absolute -top-20 left-0 w-[600px] h-[600px] bg-indigo-300 opacity-10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-300 opacity-10 rounded-full blur-2xl animate-pulse-slower" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-700 text-transparent bg-clip-text tracking-tight drop-shadow-lg">
            TipsBucket
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 font-medium">
            Discover expert tips, trending topics, and inspirational stories in health, lifestyle, and personal growth.
          </p>
        </div>

        {/* Секции по типам */}
        {Object.entries(groupedByType).map(([type, articlesOfType]) => {
  if (!articlesOfType || articlesOfType.length === 0) return null
          const mainArticle = articlesOfType[0]
          const mediumArticles = articlesOfType.slice(1, 3)
          const smallArticles = articlesOfType.slice(3, 9)

          return (
            <section key={type} className="mb-28">
              <h3 className="text-4xl font-bold text-gray-900 mb-12 border-b-4 border-purple-600 pb-3">
                {type}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
  {/* Главная статья */}
{mainArticle && (
  <div className="md:col-span-6 sm:col-span-2 col-span-1">
    <a
      href={`/blog/${mainArticle.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-60"
    >
      <img
        src={mainArticle.image}
        alt={mainArticle.title}
        className="w-full h-1/2 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4 h-1/2 flex flex-col justify-center items-center text-center">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-purple-700">
          {mainArticle.title}
        </h4>
        <p className="text-gray-600 mt-1 text-sm line-clamp-2">{mainArticle.summary}</p>
      </div>
    </a>
  </div>
)}


  {/* Средние статьи */}
  {mediumArticles.map((article) => (
    <div key={article.id} className="md:col-span-3 sm:col-span-2 col-span-1">
      <a
        href={`/blog/${article.id}`}
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-60"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-1/2 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4 h-1/2 flex flex-col justify-between">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-purple-700">
            {article.title}
          </h4>
          <p className="text-gray-600 mt-1 text-sm line-clamp-2">{article.summary}</p>
        </div>
      </a>
    </div>
  ))}

  {/* Маленькие статьи */}
  {smallArticles.map((article) => (
    <div key={article.id} className="md:col-span-2 sm:col-span-1 col-span-1">
      <a
        href={`/blog/${article.id}`}
        className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-60 flex flex-col"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-1/2 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-3 h-1/2 flex flex-col justify-center">
          <h5 className="text-base font-medium text-gray-800 group-hover:text-indigo-600 text-center">
            {article.title}
          </h5>
        </div>
      </a>
    </div>
  ))}
</div>

            </section>
          )
        })}

        {/* Кнопка показать больше */}
        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-block px-10 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Show More Articles
          </a>
        </div>
      </div>
    </section>
  )
}
