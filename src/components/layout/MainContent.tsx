import React from 'react';
import { UrlAnalyzer } from '../analyzers/UrlAnalyzer';
import { DocumentUploader } from '../analyzers/DocumentUploader';
import { AccessibilityDashboard } from '../dashboard/AccessibilityDashboard';

export function MainContent() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <UrlAnalyzer />
          <DocumentUploader />
        </div>
        <AccessibilityDashboard />
      </div>
    </main>
  );
}