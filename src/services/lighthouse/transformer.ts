import type { PageSpeedResponse } from './types';
import type { AuditResponse } from '../accessibility/types';

export function transformPageSpeedResponse(data: PageSpeedResponse): AuditResponse {
  const { lighthouseResult } = data;
  
  if (!lighthouseResult?.categories?.accessibility) {
    throw new Error('Invalid PageSpeed response: Missing accessibility data');
  }

  return {
    categories: {
      accessibility: {
        score: lighthouseResult.categories.accessibility.score,
        title: lighthouseResult.categories.accessibility.title,
        description: lighthouseResult.categories.accessibility.description,
        auditRefs: lighthouseResult.categories.accessibility.auditRefs || []
      }
    },
    audits: Object.entries(lighthouseResult.audits).reduce((acc, [key, audit]) => {
      acc[key] = {
        id: audit.id,
        title: audit.title,
        description: audit.description,
        score: audit.score,
        scoreDisplayMode: audit.scoreDisplayMode,
        details: audit.details
      };
      return acc;
    }, {} as AuditResponse['audits'])
  };
}