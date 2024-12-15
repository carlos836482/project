import type { WCAGLevel } from '../services/accessibility/wcag/types';

export interface AccessibilitySummary {
  totalIssues: number;
  criticalIssues: number;
  seriousIssues: number;
  moderateIssues: number;
  minorIssues: number;
  principleBreakdown: Array<{
    principle: string;
    violations: number;
    description: string;
  }>;
  levelBreakdown: Record<WCAGLevel, number>;
}

export interface AccessibilityReport {
  url: string;
  timestamp: string;
  score: number;
  violations: WCAGViolation[];
  documentType?: 'webpage' | 'pdf' | 'word';
  imageAnalysis?: ImageAnalysisResult[];
  summary: AccessibilitySummary;
}

export interface ImageAnalysisResult {
  imageUrl: string;
  altTextPresent: boolean;
  suggestedAltText?: string;
  colorContrast?: {
    ratio: number;
    passes: boolean;
  };
}