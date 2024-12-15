import type { AccessibilityReport } from '../../../types/accessibility';
import type { AuditResponse } from '../types';
import { processLighthouseResults } from '../lighthouse/processor';

export function createWebpageReport(url: string, auditResult: AuditResponse): AccessibilityReport {
  const accessibilityScore = Math.round(auditResult.categories.accessibility.score * 100);
  const violations = processLighthouseResults(auditResult.audits);

  return {
    url,
    timestamp: new Date().toISOString(),
    score: accessibilityScore,
    violations,
    documentType: 'webpage',
    summary: {
      totalIssues: violations.length,
      criticalIssues: violations.filter(v => v.impact === 'critical').length,
      seriousIssues: violations.filter(v => v.impact === 'serious').length,
      moderateIssues: violations.filter(v => v.impact === 'moderate').length,
      minorIssues: violations.filter(v => v.impact === 'minor').length,
      category: auditResult.categories.accessibility.title,
      description: auditResult.categories.accessibility.description
    }
  };
}

export function createDocumentReport(
  url: string, 
  type: 'pdf' | 'word',
  imageAnalysis: any[] = []
): AccessibilityReport {
  return {
    url,
    timestamp: new Date().toISOString(),
    score: 0,
    violations: [],
    documentType: type,
    imageAnalysis,
    summary: {
      totalIssues: 0,
      criticalIssues: 0,
      seriousIssues: 0,
      moderateIssues: 0,
      minorIssues: 0,
      category: 'Document Accessibility',
      description: 'Analysis of document accessibility features and compliance'
    }
  };
}