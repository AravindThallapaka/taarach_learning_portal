import React from 'react';

export const LoadingSpinner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-6 h-6 border-2 border-blue-200 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-6 h-6 border-2 border-blue-400 border-b-transparent rounded-full animate-spin animation-delay-150"></div>
    </div>
  );
};