import { useState } from 'react';
import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import FaqSection from '../components/FaqSection.jsx';
import { img } from '../assets/images.js';
import { site, fullAddress } from '../data/site.js';
import { trackEvent } from '../utils/analytics.js';

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Editorial & reader support',
    email: site.email,
    telephone: site.phone,
    areaServed: 'US',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    trackEvent('contact_form_submit', { subject: form.subject || 'general' });
    setSent(true);
  }

  return (
    <>
      <SEO
        title="Contact"
        description={`Contact Coastal Retirement Life. Email ${site.email}, call ${site.phone}, or visit us at ${fullAddress}. A real person reads and replies to every message.`}
        path="/contact"
        jsonLd={contactJsonLd}
      />
      <PageHero
        eyebrow="Say Hello"
        title="Let’s talk coastal living"
        intro="A real member of our small team reads and personally replies to every message. We would genuinely love to hear from you."
        image={img.community.cafe}
        imageAlt="Welcoming seaside café table by the water"
      />

      <section className="container-page my-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl">Our details</h2>
            <p className="mt-3 text-ocean-800/80">
              Whether you have a town to recommend, a question about your coastal retirement plans, or a story
              to share, here is how to reach us. We are a small editorial team, so please allow a few business
              days for a thoughtful reply.
            </p>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-seafoam-600">Email</dt>
                <dd className="mt-1 text-lg"><a href={`mailto:${site.email}`} className="text-ocean-700 hover:underline">{site.email}</a></dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-seafoam-600">Phone</dt>
                <dd className="mt-1 text-lg"><a href={`tel:${site.phoneHref}`} className="text-ocean-700 hover:underline">{site.phone}</a></dd>
                <dd className="text-sm text-ocean-600/80">Mon–Fri, 9am–5pm ET</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-seafoam-600">Studio</dt>
                <dd className="mt-1 not-italic"><address className="not-italic">{fullAddress}</address></dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-3">
            <div className="card p-7 sm:p-9">
              {sent ? (
                <div role="status" className="rounded-2xl bg-seafoam-50 p-8 text-center">
                  <h2 className="text-2xl text-ocean-900">Thank you, {form.name || 'friend'}!</h2>
                  <p className="mt-3 text-ocean-800/85">
                    Your message is on its way to our team. We read every note and will reply to{' '}
                    <span className="font-medium">{form.email || 'your email'}</span> within a few business days.
                  </p>
                  <p className="mt-2 text-sm text-ocean-600/80">In a hurry? Email us directly at {site.email}.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5">
                  <h2 className="text-2xl">Send us a message</h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ocean-800">Name</label>
                      <input id="name" name="name" required value={form.name} onChange={update} className="w-full rounded-2xl border border-ocean-200 px-4 py-3 focus:border-ocean-400" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ocean-800">Email</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={update} className="w-full rounded-2xl border border-ocean-200 px-4 py-3 focus:border-ocean-400" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ocean-800">Subject</label>
                    <input id="subject" name="subject" value={form.subject} onChange={update} className="w-full rounded-2xl border border-ocean-200 px-4 py-3 focus:border-ocean-400" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ocean-800">Message</label>
                    <textarea id="message" name="message" rows="5" required value={form.message} onChange={update} className="w-full rounded-2xl border border-ocean-200 px-4 py-3 focus:border-ocean-400" />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">Send message</button>
                  <p className="text-xs text-ocean-600/70">By sending, you agree to our Privacy Policy. We never share your details.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FaqSection intro="A few quick answers — and our inbox is always open for the rest." />
    </>
  );
}
