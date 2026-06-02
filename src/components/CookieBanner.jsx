import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStoredConsent, setConsent } from '../utils/analytics.js';

// Elegant slide-up consent banner. Persists the decision in localStorage and
// updates Google Consent Mode v2 (analytics + ads) on accept/decline.
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function decide(granted) {
    setConsent(granted);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl translate-y-0 rounded-2xl border border-ocean-100 bg-coastalwhite/95 p-5 shadow-soft backdrop-blur transition duration-500 ease-gentle sm:inset-x-6 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-lg text-ocean-900">A gentle note about cookies</p>
          <p className="mt-1 text-sm leading-relaxed text-ocean-800/80">
            We use privacy-friendly analytics to understand which coastal guides are most loved. You can
            accept or decline — your choice is remembered on this device. Read our{' '}
            <Link to="/legal/privacy" className="font-medium text-ocean-700 underline">Privacy Policy</Link>.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button type="button" onClick={() => decide(false)} className="btn-ghost px-5 py-2.5 text-sm">
            Decline
          </button>
          <button type="button" onClick={() => decide(true)} className="btn-primary px-5 py-2.5 text-sm">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
