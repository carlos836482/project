import { fetchPageSpeedResults } from './api';
import { transformPageSpeedResponse } from './transformer';
import type { AuditResponse } from '../accessibility/types';

export class PageSpeedService {
  async analyzeUrl(url: string): Promise<AuditResponse> {
    try {
      const data = await fetchPageSpeedResults(url);
      return transformPageSpeedResponse(data);
    } catch (error) {
      console.error('PageSpeed service error:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to analyze URL');
    }
  }
}