import { create } from 'zustand';
import type { AccessibilityReport } from '../types/accessibility';
import { createAuditService } from '../services/accessibility/auditServiceFactory';

interface AccessibilityState {
  currentReport: AccessibilityReport | null;
  isLoading: boolean;
  error: string | null;
}

interface AccessibilityActions {
  auditUrl: (url: string) => Promise<void>;
  auditDocument: (url: string, type: 'pdf' | 'word') => Promise<void>;
  resetError: () => void;
}

const auditService = createAuditService();

export const useAccessibilityStore = create<AccessibilityState & AccessibilityActions>((set) => ({
  currentReport: null,
  isLoading: false,
  error: null,

  auditUrl: async (url: string) => {
    set({ isLoading: true, error: null });
    try {
      const report = await auditService.auditWebpage(url);
      set({ currentReport: report, isLoading: false });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to analyze URL';
      set({ error: errorMessage, isLoading: false });
    }
  },

  auditDocument: async (url: string, type: 'pdf' | 'word') => {
    set({ isLoading: true, error: null });
    try {
      const report = await auditService.auditDocument(url, type);
      set({ currentReport: report, isLoading: false });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to analyze document';
      set({ error: errorMessage, isLoading: false });
    }
  },

  resetError: () => set({ error: null })
}));