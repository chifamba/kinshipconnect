import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f2f0ea] dark:bg-gray-950 py-12 px-4 border-t border-gray-300 dark:border-gray-800 text-sm mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h5 className="font-bold text-gray-900 dark:text-white mb-4">Genealogy Resources</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:underline">Surname Meanings</a></li>
              <li><a href="#" className="hover:underline">Collaborative Guidelines</a></li>
              <li><a href="#" className="hover:underline">Historical Person Search</a></li>
              <li><a href="#" className="hover:underline">Genealogy Wiki</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 dark:text-white mb-4">Historical Collections</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:underline">Vital Records</a></li>
              <li><a href="#" className="hover:underline">Census Records</a></li>
              <li><a href="#" className="hover:underline">Military Records</a></li>
              <li><a href="#" className="hover:underline">All Free Records</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 dark:text-white mb-4">Family Trees</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:underline">Create a Free Tree</a></li>
              <li><a href="#" className="hover:underline">Import GEDCOM</a></li>
              <li><a href="#" className="hover:underline">Search Public Trees</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 dark:text-white mb-4">Support</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Community Guidelines</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-500">
          <div className="mb-4 md:mb-0 space-x-4">
            <a href="#" className="hover:underline">Support Center</a>
            <a href="#" className="hover:underline">Kinship Blog</a>
            <a href="#" className="hover:underline">Site Map</a>
            <a href="#" className="hover:underline">Careers (We're Hiring!)</a>
          </div>
          <div>
            © 2023-2024 KinshipConnect. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;