import { getApps, initializeApp } from "firebase/app";
import { Analytics, getAnalytics, isSupported, logEvent } from "firebase/analytics";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean);
const isLocalDebugHost =
  typeof window !== "undefined" && ["localhost", "127.0.0.1"].includes(window.location.hostname);

let analyticsPromise: Promise<Analytics | null> | null = null;

const sanitizeParams = (params: AnalyticsParams) =>
  Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined));

export const initAnalytics = () => {
  if (analyticsPromise) {
    return analyticsPromise;
  }

  if (typeof window === "undefined" || !hasFirebaseConfig) {
    analyticsPromise = Promise.resolve(null);
    return analyticsPromise;
  }

  analyticsPromise = isSupported()
    .then((supported) => {
      if (!supported) {
        return null;
      }

      const app = getApps()[0] ?? initializeApp(firebaseConfig);
      return getAnalytics(app);
    })
    .catch(() => null);

  return analyticsPromise;
};

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  const safeParams = sanitizeParams({
    ...params,
    debug_mode: isLocalDebugHost ? true : undefined,
  });

  void initAnalytics().then((analytics) => {
    if (!analytics) {
      return;
    }

    logEvent(analytics, eventName, safeParams);
  });
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: typeof window !== "undefined" ? window.location.href : pagePath,
  });
};

export const trackClick = (target: string, location: string, extra: AnalyticsParams = {}) => {
  trackEvent("select_content", {
    content_type: "click_target",
    item_id: target,
    location,
    ...extra,
  });
};
