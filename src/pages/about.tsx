import { Container } from '../components/shared/container'

export function AboutPage() {
  return (
    <div className="min-h-screen text-gray-900">
      {/* Hero Section с градиентным фоном */}
      <section className="py-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg">
                TipsBucket — <br />
                Your Guide <span className="underline decoration-yellow-300 decoration-4">to a Better Life</span>
              </h1>
              <p className="text-xl font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                We provide practical tips, life hacks, and inspiring stories that help you grow, stay motivated, and live fully every day. Join a vibrant community and start your journey to self-improvement today.
              </p>
              <a href='/blog'>
              <button className="mt-6 px-10 py-4 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition">
                Explore Our Tips
              </button>
              </a>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Inspiration and Growth"
                className="rounded-3xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Миссия — белый фон */}
      <section className="py-24 bg-white text-gray-900">
        <Container>
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Our Mission
          </h2>
          <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
            At TipsBucket, our mission is to empower individuals to improve their daily lives through actionable advice and inspiration. We believe everyone deserves access to reliable, easy-to-apply tips that foster personal growth, wellness, and happiness.
          </p>
        </Container>
      </section>

      {/* Ценности — градиентный фон */}
      <section className="py-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <Container>
          <h2 className="text-4xl font-extrabold text-center mb-16 drop-shadow-md">
            What We Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 text-black gap-12 text-center">
            {[
              {
                icon: '💡',
                title: 'Practical Wisdom',
                desc: 'Real-life advice that you can apply immediately to see positive changes.'
              },
              {
                icon: '🔥',
                title: 'Inspiration',
                desc: 'Motivational stories and ideas to keep your inner fire burning strong.'
              },
              {
                icon: '🌱',
                title: 'Growth',
                desc: 'Continuous personal development for a happier and more fulfilling life.'
              }
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-8 rounded-xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform cursor-default">
                <div className="text-6xl mb-6">{icon}</div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-lg font-light">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Команда — белый фон */}
      <section className="py-24 bg-white text-gray-900">
        <Container>
          <h2 className="text-4xl font-extrabold text-center mb-16">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: 'Kim Yu Ri', role: 'Content Creator', img: 'https://static.toiimg.com/photo/95224093/95224093.jpg' },
              { name: 'James Lee', role: 'Community Manager', img: 'https://imgk.timesnownews.com/story/men.gif' },
              { name: 'Maria Watkins', role: 'Wellness Coach', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkc6GUnmOBBP45tJ8G3nWpd4YUuUrhJcrxYQ&s' },
              { name: 'Li Shi Dzhen', role: 'Tech Specialist', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkoSohS2_jKZcayEqs6jn2VPxu9YkCDKswA&s' },
            ].map(({ name, role, img }) => (
              <div key={name} className="bg-gray-100 rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition">
                <img src={img} alt={name} className="w-24 h-24 rounded-full mx-auto object-cover mb-5 shadow-md" />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm opacity-80">{role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Процесс — градиентный фон */}
      <section className="py-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <Container>
          <h2 className="text-4xl font-extrabold text-center mb-16 drop-shadow-md">How We Work</h2>
          <div className="max-w-4xl mx-auto space-y-12 text-center text-lg font-light leading-relaxed drop-shadow-sm">
            <p>
              Our team researches thoroughly, curates the best advice, and presents it in a clear, actionable way. We prioritize trustworthy sources and real experiences to provide tips that truly make a difference.
            </p>
            <p>
              Regular updates and community feedback keep our content fresh and relevant. We encourage engagement and sharing to grow a supportive environment.
            </p>
            <p>
              Whether you’re seeking productivity hacks, wellness advice, or inspirational stories, TipsBucket is your reliable companion for lifelong learning and self-improvement.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ — белый фон */}
      <section className="py-24 bg-white text-gray-900">
        <Container>
          <h2 className="text-4xl font-extrabold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                question: 'How often do you update the tips?',
                answer: 'We add new tips and articles weekly to keep our content fresh and relevant.'
              },
              {
                question: 'Can I contribute my own tips?',
                answer: 'Yes! We welcome guest contributions. Contact us via the contact page to learn more.'
              },
              {
                question: 'Is the advice suitable for everyone?',
                answer: 'Our tips are designed to be general and applicable to a wide audience, but always use your own discretion.'
              },
            ].map(({ question, answer }) => (
              <div key={question}>
                <h3 className="text-2xl font-semibold mb-2">{question}</h3>
                <p className="text-gray-700 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action — градиентный фон */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-6 drop-shadow-lg">Ready to Transform Your Life?</h2>
            <p className="text-lg font-light mb-8 drop-shadow-sm">
              Join thousands of others who improve daily with TipsBucket. Empower yourself with knowledge, motivation, and community support.
            </p>
            <a href='/blog'>
            <button className="px-12 py-4 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition">
              Get Started Now
            </button>
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
