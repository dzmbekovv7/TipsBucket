import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
  return (
    <>
      {/* Hero Section with background */}
      <section
        className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-32 px-6 text-center overflow-hidden"
      >
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold drop-shadow-lg leading-tight mb-6">
            Contact <span className="text-yellow-400">TipsBucket</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-light drop-shadow-md">
            TipsBucket is your go-to blog for life tips and hacks.  
            If you have questions, suggestions, or want to share your experiences — we’re always happy to hear from you.  
            Get in touch and let’s make life better together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 sm:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <ContactForm />
          </div>

          {/* Info Text */}
          <div className="space-y-8 text-gray-800">
            <h2 className="text-4xl font-extrabold">Get in Touch</h2>
            <p className="text-lg leading-relaxed">
              Have questions, topic ideas, or want to collaborate?  
              We’re always open to new conversations and fresh ideas.
            </p>
            <blockquote className="italic text-gray-600 border-l-4 border-yellow-400 pl-6 text-xl">
              “Life gets better when we share experiences and support each other.”
            </blockquote>
            <div className="text-lg space-y-3">
              <p>
                <strong>📍 Address:</strong> 350 5th Ave, New York, NY 10118, USA
              </p>
              <p>
                <strong>📞 Phone:</strong> +1 (212) 736-3100
              </p>
              <p>
                <strong>✉️ Email:</strong> contact@tipsbucket.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-600 text-white py-20 text-center rounded-t-3xl">
        <h3 className="text-4xl font-bold mb-4 drop-shadow-lg">Stay Connected</h3>
        <p className="max-w-xl mx-auto mb-8 text-lg font-light drop-shadow-sm">
          Subscribe to our newsletter to get the best tips and inspiration for your life.
        </p>
        <div className="mx-auto w-40 h-1 rounded-full bg-gradient-to-r from-white/70 to-white/20 animate-pulse" />
      </section>
    </>
  )
}
