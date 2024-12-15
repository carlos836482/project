import type { AuditResult } from '../types';
import type { WCAGViolation } from '../wcag/types';
import { WCAG_GUIDELINES } from '../wcag/guidelines';
import { determineImpact } from '../utils/impact';

export function processAuditResults(audits: Record<string, AuditResult>): WCAGViolation[] {
  return Object.values(audits)
    .filter(audit => audit.score !== null && audit.score < 1)
    .map(audit => {
      const guideline = WCAG_GUIDELINES.find(g => g.id === audit.id) || {
        id: audit.id,
        level: 'A',
        principle: 'unknown',
        helpUrl: ''
      };

      return {
        guidelineId: audit.id,
        principle: guideline.principle,
        level: guideline.level,
        impact: determineImpact(audit.score!),
        element: audit.details?.items?.[0]?.element || '',
        description: audit.description,
        recommendation: audit.title,
        helpUrl: guideline.helpUrl
      };
    });
}