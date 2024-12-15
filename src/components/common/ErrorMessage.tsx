import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div 
      className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4"
      role="alert"
    >
      <div className="flex items-start">
        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" aria-hidden="true" />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Error</h3>
          <p className="mt-1 text-sm text-red-700">{message}</p>
        </div>
      </div>
    </div>
  );
}