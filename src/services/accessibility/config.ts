export const LIGHTHOUSE_CONFIG = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['accessibility'],
    formFactor: 'desktop',
    throttling: { cpuSlowdownMultiplier: 1 },
  },
} as const;

export const IMPACT_THRESHOLDS = {
  CRITICAL: 0,
  SERIOUS: 0.3,
  MODERATE: 0.7,
} as const;