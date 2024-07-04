import React from 'react';
import { FaSearch } from 'react-icons/fa';

const BlogSearchSection: React.FC = () => {
  return (
    <div className="w-full bg-white p-4 my-4 px-8">
      <div className="flex items-center border rounded-lg overflow-hidden">
        <span className="px-3 text-gray-600">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default BlogSearchSection;
