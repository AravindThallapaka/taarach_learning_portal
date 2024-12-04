import React from 'react';
import { Shield } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Shield className="h-8 w-8 text-cyan-400" />
      <span className="text-xl font-bold text-white">Tarcah Solutions</span>
    </div>
  );
};