// src/components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">BIZPLAN</div>
        <nav className="flex space-x-6">
          <a href="#features" className="text-gray-700 hover:text-blue-600">
            Features
          </a>
          <a href="#templates" className="text-gray-700 hover:text-blue-600">
            Templates
          </a>
          <a href="#blog" className="text-gray-700 hover:text-blue-600">
            Blog
          </a>
          <a href="#help" className="text-gray-700 hover:text-blue-600">
            Help Center
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
