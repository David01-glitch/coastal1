// Lightweight wrapper around Google Analytics 4 (gtag.js) with Consent Mode v2.
// The gtag base snippet + consent defaults are loaded in index.html <head>.

export const GA_MEASUREMENT_ID = 'G-4J046JXWVC';
const CONSENT_KEY = 'crl-consent';

function gtag() {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

// Fire a custom event. Safe no-op during SSR/pre-render.
export function trackEvent(action, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', action, params);
}

// Manually record a page view (used on SPA route changes).
export function trackPageView(path, title) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}

// Read stored consent decision: 'granted' | 'denied' | null (undecided).
export function getStoredConsent() {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch (e) {
    return null;
  }
}

// Persist + apply a consent decision through Consent Mode v2.
export function setConsent(granted) {
  if (typeof window === 'undefined') return;
  const value = granted ? 'granted' : 'denied';
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch (e) {}
  gtag('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}
