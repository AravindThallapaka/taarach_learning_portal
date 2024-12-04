import React from 'react';

export const AnimatedHi: React.FC = () => {
  return (
    <div className="fixed top-1/4 right-10 opacity-10 pointer-events-none">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-mono text-cyan-400 animate-pulse">
          &lt;/&gt;
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full animate-ping rounded-full bg-cyan-500/10"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 animate-pulse rounded-full bg-emerald-500/5"></div>
        </div>
      </div>
    </div>
  );
};