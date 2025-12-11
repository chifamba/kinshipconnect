import React from 'react';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-2 px-4 flex justify-between items-center z-50 shadow-sm shrink-0">
      <div className="flex items-center space-x-6">
        <Link to="/dashboard" className="text-2xl font-bold font-display text-primary tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl">account_tree</span>
          <span>Kinship<span className="text-gray-500 dark:text-gray-400 font-normal">Connect</span></span>
        </Link>
        <div className="hidden md:flex space-x-1">
          <Link to="/dashboard" className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-primary font-bold text-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">nature_people</span> My Tree
          </Link>
          <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold text-sm transition flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">search</span> Search Records
          </a>
          <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold text-sm transition flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">diversity_3</span> Community
          </a>
          <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold text-sm transition flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">genetics</span> DNA
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="text-gray-500 hover:text-primary transition relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="text-gray-500 hover:text-primary transition">
          <span className="material-symbols-outlined">mail</span>
        </button>
        <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-1 rounded-full pr-3 transition">
          <div className="h-8 w-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">JS</div>
          <span className="text-sm font-semibold hidden sm:block">John Smith</span>
          <span className="material-symbols-outlined text-sm text-gray-400">expand_more</span>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;