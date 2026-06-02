import { useState } from 'react';
import { trackEvent } from '../utils/analytics.js';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    trackEvent('newsletter_signup', { method: 'footer_form' });
    setDone(true);
    setEmail('');
  }

  return (
    <section aria-labelledby="newsletter-heading" className="container-page my-20">
      <div className="overflow-hidden rounded-3xl bg-sunset-fade px-6 py-12 shadow-soft sm:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Coastal Letter</p>
          <h2 id="newsletter-heading" className="mt-2 text-3xl sm:text-4xl">
            Slow mornings, delivered to your inbox
          </h2>
          <p className="mt-4 text-ocean-800/85">
            Join thousands of readers over 50 for two unhurried letters a month — new guides, beach-town
            spotlights, and a quiet note from the editor. Free, and always easy to leave.
          </p>

          {done ? (
            <p role="status" className="mt-8 rounded-2xl bg-white/70 px-6 py-4 font-medium text-seafoam-700">
              Thank you — please check your inbox to confirm your subscription. We are so glad you are here.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-ocean-200 bg-white px-5 py-3.5 text-ocean-900 placeholder:text-ocean-400 focus:border-ocean-400"
              />
              <button type="submit" className="btn-primary shrink-0">Subscribe</button>
            </form>
          )}
          <p className="mt-3 text-xs text-ocean-700/70">We never sell or share your email. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
