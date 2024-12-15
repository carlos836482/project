export interface LighthouseConfig {
  extends: string;
  settings: {
    onlyCategories: string[];
    formFactor: string;
    throttling: {
      cpuSlowdownMultiplier: number;
    };
    skipAudits?: string[];
    emulatedFormFactor?: string;
  };
  audits?: string[];
}

export interface AuditResponse {
  categories: {
    accessibility: {
      score: number;
      title: string;
      description: string;
      manualDescription?: string;
      auditRefs: Array<{
        id: string;
        weight: number;
        group: string;
      }>;
    };
  };
  audits: Record<string, AuditResult>;
}

export interface AuditResult {
  id: string;
  title: string;
  description: string;
  score: number | null;
  scoreDisplayMode: string;
  details?: {
    type: string;
    items?: Array<{
      element?: string;
      node?: {
        selector: string;
        snippet: string;
      };
    }>;
  };
  warnings?: string[];
  failureDescription?: string;
}