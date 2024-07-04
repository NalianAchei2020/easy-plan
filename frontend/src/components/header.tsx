import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white py-4 md:py-8 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 md:px-8">
        <div className="text-2xl font-bold">
          <Link to="/" onClick={closeMenu}>
            <img className="h-10 w-auto" src="LOGO 1.png" alt="Logo" />
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`w-full md:w-auto md:flex md:items-center md:space-x-6 text-[15px] ${
            menuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <Link
            to="/features"
            onClick={closeMenu}
            className="relative group text-gray-700 py-2 block hover:text-[#1447FB] mb-2"
          >
            Features
            <span className="hidden md:block absolute left-0 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/templates"
            onClick={closeMenu}
            className="relative group text-gray-700 py-2 block md:inline-block hover:text-[#1447FB] mb-2"
          >
            Templates
            <span className="hidden md:block absolute left-0 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/blog"
            onClick={closeMenu}
            className="relative group text-gray-700 py-2 block md:inline-block hover:text-[#1447FB] mb-2"
          >
            Blog
            <span className="hidden md:block absolute left-0 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/help-center"
            onClick={closeMenu}
            className="relative group text-gray-700 py-2 block md:inline-block hover:text-[#1447FB] mb-2"
          >
            Help Center
            <span className="hidden md:block absolute left-0 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <div
          className={`w-full md:w-auto md:flex md:items-center md:space-x-4 ${
            menuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <Link
            to="/login"
            onClick={closeMenu}
            className="relative group text-gray-700 py-2 block hover:text-[#1447FB] md:inline-block mb-2"
          >
            Login
            <span className="hidden md:block absolute left-0 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/signup"
            onClick={closeMenu}
            className="block bg-black text-white px-4 py-2 rounded hover:text-white hover:bg-[#1447FB] w-full md:w-auto text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
