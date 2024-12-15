export const PAGESPEED_CONFIG = {
  API_KEY: 'AIzaSyDmXWKrdD-xTPo6N4EMp6sNNtjLppIIUn0',
  BASE_URL: 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed',
  CATEGORIES: ['accessibility'],
  STRATEGY: 'desktop'
} as const;

export const DEFAULT_OPTIONS = {
  category: 'accessibility',
  strategy: 'desktop',
  locale: 'es'
} as const;