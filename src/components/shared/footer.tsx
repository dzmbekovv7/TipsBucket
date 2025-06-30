import { Container } from './container'

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-24">
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Колонка 1: Логотип и слоган */}
          <div className="flex flex-col justify-center md:items-start items-center text-center md:text-left space-y-4">
            <h2 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 select-none">
              TipsBucket
            </h2>
            <p className="text-lg max-w-xs text-gray-400 font-light">
              Your daily source of inspiration, tips, and practical wisdom for a better life.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <nav className="flex flex-col space-y-4 text-center md:text-left md:justify-center">
            <a
              href="/"
              className="text-lg text-gray-400 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-lg text-gray-400 hover:text-white transition"
            >
              About
            </a>
            <a
              href="/blog"
              className="text-lg text-gray-400 hover:text-white transition"
            >
              Blog
            </a>
            <a
              href="/contacts"
              className="text-lg text-gray-400 hover:text-white transition"
            >
              Contacts
            </a>
            <a
              href="/privacy-policy"
              className="text-lg text-gray-400 hover:text-white transition"
            >
              Privacy Policy
            </a>
          </nav>

          {/* Колонка 3: Подписка */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
            <h3 className="text-2xl font-semibold text-white">Subscribe</h3>
            <p className="text-gray-400 max-w-xs font-light mb-2">
              Get exclusive tips and updates delivered to your inbox.
            </p>
            <form className="w-full max-w-sm flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-grow px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  )
}
