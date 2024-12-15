import React from 'react';
import { Shield, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import type { WCAGLevel } from '../../services/accessibility/wcag/types';

interface ScoreCardProps {
  score: number;
  level: WCAGLevel;
}

function getScoreInfo(score: number) {
  if (score >= 90) {
    return {
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: CheckCircle,
      description: 'Excellent WCAG compliance. The site meets most accessibility guidelines and provides an inclusive experience.'
    };
  }
  
  if (score >= 70) {
    return {
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      icon: Info,
      description: 'Moderate WCAG compliance. Some accessibility improvements are needed to ensure better inclusivity.'
    };
  }
  
  return {
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    icon: AlertTriangle,
    description: 'Low WCAG compliance. Critical accessibility issues need to be addressed to ensure equal access.'
  };
}

export function ScoreCard({ score, level }: ScoreCardProps) {
  const { color, bgColor, icon: Icon, description } = getScoreInfo(score);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">WCAG Compliance Score</h2>
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-blue-600" aria-hidden="true" />
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            WCAG {level}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div 
          className={`text-5xl font-bold ${color}`} 
          role="status" 
          aria-label={`WCAG compliance score: ${score} out of 100`}
        >
          {score}
          <span className="text-2xl text-gray-400 ml-1">/100</span>
        </div>
      </div>

      <div className={`p-4 rounded-lg ${bgColor}`}>
        <div className="flex items-start space-x-3">
          <Icon className={`w-5 h-5 mt-0.5 ${color}`} aria-hidden="true" />
          <div className="space-y-2">
            <p className="text-gray-700">{description}</p>
            <p className="text-sm text-gray-600">
              {level === 'AA' ? 
                'Meets enhanced accessibility requirements suitable for government websites.' :
                'Basic accessibility requirements are being evaluated.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}