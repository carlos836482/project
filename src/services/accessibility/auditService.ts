import type { AccessibilityReport } from '../../types/accessibility';
import type { AuditResponse } from './types';
import { ImageAnalysisService } from '../azure/imageAnalysis';
import { DocumentAnalysisService } from '../azure/documentAnalysis';
import { PageSpeedService } from '../lighthouse/pageSpeedService';
import { createWebpageReport, createDocumentReport } from './utils/report';

export class AccessibilityAuditService {
  private imageAnalysis: ImageAnalysisService;
  private documentAnalysis: DocumentAnalysisService;
  private pageSpeedService: PageSpeedService;

  constructor() {
    this.imageAnalysis = new ImageAnalysisService();
    this.documentAnalysis = new DocumentAnalysisService();
    this.pageSpeedService = new PageSpeedService();
  }

  async auditWebpage(url: string): Promise<AccessibilityReport> {
    try {
      const auditResult = await this.pageSpeedService.analyzeUrl(url);
      return createWebpageReport(url, auditResult);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      console.error('Error during accessibility audit:', errorMessage);
      throw new Error(`Failed to perform accessibility audit: ${errorMessage}`);
    }
  }

  async auditDocument(url: string, type: 'pdf' | 'word'): Promise<AccessibilityReport> {
    try {
      const analysis = await this.documentAnalysis.analyzePDF(url);
      const imageAnalysis = await this.processDocumentImages(analysis);
      return createDocumentReport(url, type, imageAnalysis);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      console.error('Error during document audit:', errorMessage);
      throw new Error(`Failed to analyze document: ${errorMessage}`);
    }
  }

  private async processDocumentImages(analysis: any) {
    // TODO: Implement image analysis processing
    return [];
  }
}