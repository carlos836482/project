export interface PageSpeedResponse {
  captchaResult?: string;
  kind: string;
  id: string;
  loadingExperience: {
    metrics: Record<string, unknown>;
    overall_category: string;
    initial_url: string;
  };
  originLoadingExperience: {
    metrics: Record<string, unknown>;
    overall_category: string;
    initial_url: string;
  };
  lighthouseResult: {
    requestedUrl: string;
    finalUrl: string;
    mainDocumentUrl: string;
    finalDisplayedUrl: string;
    lighthouseVersion: string;
    userAgent: string;
    fetchTime: string;
    environment: Record<string, unknown>;
    runWarnings: string[];
    configSettings: Record<string, unknown>;
    categories: {
      accessibility: {
        id: string;
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
    audits: Record<string, {
      id: string;
      title: string;
      description: string;
      score: number | null;
      scoreDisplayMode: string;
      details?: {
        type: string;
        items?: Array<{
          node?: {
            selector: string;
            snippet: string;
          };
        }>;
      };
    }>;
  };
  analysisUTCTimestamp: string;
}