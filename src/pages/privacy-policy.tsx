import { Container } from '../components/shared/container';

export const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-24">
      <Container className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-extrabold drop-shadow-lg tracking-tight">
            TipsBucket
          </h1>
          <p className="mt-4 text-xl font-light max-w-3xl mx-auto text-indigo-300">
            Your trusted source of life tips and hacks. We protect your privacy with care and transparency.
          </p>
        </header>

        <section className="space-y-12">
          {[
            {
              title: 'What Data We Collect',
              content:
                'We only collect essential data such as usage info and contact details you voluntarily provide. Sensitive personal data is never collected without explicit consent.',
            },
            {
              title: 'How We Use Your Data',
              content:
                'Your data helps us personalize content, improve services, and respond to your inquiries effectively.',
            },
            {
              title: 'Your Rights',
              content:
                'You can request access, corrections, or deletion of your data anytime by contacting us.',
            },
            {
              title: 'Updates to This Policy',
              content:
                'We may update this policy occasionally. Please check back here to stay informed.',
            },
            {
              title: 'Contact Us',
              content:
                'Questions? Email us at ',
              contact: 'privacy@tipsbucket.com',
              contactHref: 'mailto:privacy@tipsbucket.com',
            },
          ].map(({ title, content, contact, contactHref }, idx) => (
            <article
              key={idx}
              className="bg-indigo-800 bg-opacity-30 rounded-3xl p-8 shadow-xl border border-indigo-600 hover:bg-opacity-50 transition-all duration-300"
            >
              <h2 className="text-3xl font-semibold mb-4 text-indigo-200 drop-shadow-md">
                {title}
              </h2>
              <p className="text-indigo-300 leading-relaxed text-lg">
                {content}
                {contact && (
                  <a
                    href={contactHref}
                    className="text-yellow-400 underline ml-1 hover:text-yellow-300 transition"
                  >
                    {contact}
                  </a>
                )}
              </p>
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
};
