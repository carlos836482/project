import React from 'react';
import { AlertTriangle, AlertCircle, AlertOctagon, ExternalLink } from 'lucide-react';
import type { WCAGViolation } from '../../services/accessibility/wcag/types';

interface ViolationsListProps {
  violations: WCAGViolation[];
}

const ImpactIcon = {
  critical: AlertOctagon,
  serious: AlertTriangle,
  moderate: AlertCircle,
  minor: AlertCircle,
} as const;

const ImpactStyles = {
  critical: 'border-red-500 bg-red-50 text-red-800',
  serious: 'border-orange-500 bg-orange-50 text-orange-800',
  moderate: 'border-yellow-500 bg-yellow-50 text-yellow-800',
  minor: 'border-blue-500 bg-blue-50 text-blue-800',
} as const;

function ViolationCard({ violation }: { violation: WCAGViolation }) {
  const Icon = ImpactIcon[violation.impact];
  const style = ImpactStyles[violation.impact];

  return (
    <div
      className={`border-l-4 p-4 rounded-r-lg ${style}`}
      role="alert"
      aria-labelledby={`violation-${violation.guidelineId}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <Icon className="w-5 h-5" aria-hidden="true" />
          <h3 
            id={`violation-${violation.guidelineId}`}
            className="font-medium"
          >
            {violation.guidelineId}: {violation.impact}
          </h3>
        </div>
        {violation.helpUrl && (
          <a
            href={violation.helpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
          >
            <span className="text-sm">Learn more</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        )}
      </div>
      <p className="mt-2">{violation.description}</p>
      <div className="mt-2 text-sm">
        <strong>Recommendation:</strong> {violation.recommendation}
      </div>
      {violation.element && (
        <div className="mt-2 text-sm font-mono bg-white/50 p-2 rounded">
          <strong>Element:</strong> {violation.element}
        </div>
      )}
    </div>
  );
}

export function ViolationsList({ violations }: ViolationsListProps) {
  if (violations.length === 0) {
    return (
      <div 
        className="bg-green-50 p-4 rounded-lg"
        role="status"
        aria-label="No accessibility violations found"
      >
        <p className="text-green-700">No accessibility violations found!</p>
        <p className="text-green-600 mt-2">
          The site meets the analyzed WCAG guidelines. Continue monitoring and conducting periodic audits.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Accessibility Issues ({violations.length})
      </h2>
      <div 
        className="space-y-4"
        role="list"
        aria-label="List of accessibility violations"
      >
        {violations.map((violation, index) => (
          <ViolationCard key={`${violation.guidelineId}-${index}`} violation={violation} />
        ))}
      </div>
    </div>
  );
}