import React from 'react';
import { Link } from 'react-router-dom';

const PublicNavbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-3 px-6 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-2xl font-bold font-display text-primary tracking-tight">
          Kinship<span className="text-gray-500 dark:text-gray-400 font-normal">Connect</span>
        </Link>
        <div className="hidden md:flex space-x-6 text-sm font-semibold text-gray-600 dark:text-gray-300">
          <a href="#" className="hover:text-primary transition">EXPLORE TREES</a>
          <a href="#" className="hover:text-primary transition">RECORDS</a>
          <a href="#" className="hover:text-primary transition">PROJECTS</a>
          <a href="#" className="hover:text-primary transition">FORUMS</a>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-sm font-semibold">
        <Link to="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-primary">LOG IN</Link>
        <Link to="/dashboard" className="bg-primary text-white px-5 py-2 rounded hover:bg-opacity-90 transition shadow-md">
          JOIN FOR FREE
        </Link>
      </div>
    </nav>
  );
};

export default PublicNavbar;