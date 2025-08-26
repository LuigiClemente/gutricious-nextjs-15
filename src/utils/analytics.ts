/**
 * analytics.ts
 * Utility functions for Umami analytics event tracking
 */

// Define event categories for better organization in Umami dashboard
export enum EventCategory {
  USER_INTERACTION = 'user-interaction',
  NAVIGATION = 'navigation',
  FORM = 'form',
  COOKIE = 'cookie-preferences',
  ERROR = 'error',
  PERFORMANCE = 'performance'
}

// Interface for event data
export interface EventData {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track a custom event in Umami
 * @param eventName Name of the event
 * @param category Event category
 * @param data Additional data to track with the event
 */
export const trackEvent = (
  eventName: string,
  category: EventCategory,
  data?: EventData
) => {
  try {
    if (typeof window !== 'undefined' && window.umami) {
      // Combine event data with category for better filtering in Umami
      const eventData = {
        category,
        ...(data || {})
      };
      
      window.umami.track(eventName, eventData);
      if (process.env.NODE_ENV === 'development') {
        console.log(`Analytics event tracked: ${eventName}`, eventData);
      }
      return true;
    }
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
  return false;
};

/**
 * Track page view manually (useful for SPAs with client-side navigation)
 * @param url Optional URL to track (defaults to current path)
 * @param referrer Optional referrer
 */
export const trackPageView = (url?: string, referrer?: string) => {
  try {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.trackView(url, referrer);
      return true;
    }
  } catch (error) {
    console.error('Page view tracking error:', error);
  }
  return false;
};

// Add TypeScript declaration for Umami global
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: any) => void;
      trackView: (url?: string, referrer?: string) => void;
    };
  }
}
