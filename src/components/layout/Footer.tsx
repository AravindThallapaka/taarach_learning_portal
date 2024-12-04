import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full py-6 px-4 bg-gradient-to-t from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="flex space-x-6 text-sm text-blue-200">
          <a href="#" className="hover:text-blue-100">Privacy Policy</a>
          <a href="#" className="hover:text-blue-100">Terms of Service</a>
          <a href="#" className="hover:text-blue-100">Contact Support</a>
        </div>
        <div className="text-sm text-blue-300">
          © {new Date().getFullYear()} CompanyName. All rights reserved.
        </div>
      </div>
    </footer>
  );
};