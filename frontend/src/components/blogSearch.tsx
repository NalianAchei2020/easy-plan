import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../lib/utils';

const BlogSearchSection: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="w-full p-4 my-4 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div
        className={cn(
          'relative flex items-center justify-center rounded-2xl overflow-hidden',
          'bg-white dark:bg-gray-800 shadow-sm',
          'transition-all duration-300 ease-in-out',
          'border border-gray-200 dark:border-gray-700',
          isFocused ? 'shadow-lg ring-2 ring-primary/20' : 'hover:shadow-md'
        )}
      >
        <span
          className={cn(
            'px-4 text-gray-400 transition-colors duration-200',
            isFocused && 'text-primary'
          )}
        >
          <Search className="w-5 h-5" />
        </span>

        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            'w-full px-2 py-4 bg-transparent',
            'text-gray-800 dark:text-gray-100 placeholder-gray-400',
            'focus:outline-none',
            'transition-all duration-200 ease-in-out'
          )}
        />

        {searchValue && (
          <button
            onClick={() => setSearchValue('')}
            className={cn(
              'px-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300',
              'transition-opacity duration-200 ease-in-out',
              'focus:outline-none'
            )}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Optional: Add search suggestions panel */}
      {isFocused && searchValue && (
        <div
          className={cn(
            'absolute mt-2 w-full max-w-3xl',
            'bg-white dark:bg-gray-800',
            'rounded-xl shadow-xl',
            'border border-gray-200 dark:border-gray-700',
            'transform opacity-100 scale-100',
            'transition-all duration-200 ease-in-out',
            'animate-in fade-in-0 zoom-in-95',
            'z-50'
          )}
        >
          <div className="p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Start typing to see search suggestions...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSearchSection;
