import React from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';

const AddPerson = () => {
  return (
    <>
      <AppNavbar />
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-primary">My Trees</a>
          <span className="material-icons text-base">chevron_right</span>
          <Link to="/dashboard" className="hover:text-primary">Doe Family Tree</Link>
          <span className="material-icons text-base">chevron_right</span>
          <span className="text-gray-800 dark:text-white font-semibold">Add Person</span>
        </div>
      </div>
      <main className="py-12 px-4 bg-background-light dark:bg-background-dark min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-display text-gray-900 dark:text-white mb-2">Grow your family tree</h1>
            <p className="text-gray-600 dark:text-gray-300">Add a relative to discover more connections. We'll check our community records for matches automatically.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form className="bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-8 space-y-8">
                  <section>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="material-symbols-outlined text-primary">person</span>
                      Personal Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <input className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm" placeholder="First Name" required type="text" />
                          </div>
                          <div className="flex-1">
                            <input className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm" placeholder="Last Name" required type="text" />
                          </div>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <input className="rounded text-primary focus:ring-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700" id="living" type="checkbox" />
                          <label className="text-sm text-gray-600 dark:text-gray-400" htmlFor="living">This person is living</label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Gender</label>
                        <select className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm">
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other / Unknown</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Birth Date</label>
                        <input className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm" type="date" />
                        <p className="text-xs text-gray-500 mt-1">Approximate dates are okay</p>
                      </div>
                      <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Birth Place</label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">location_on</span>
                          <input className="pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm" placeholder="City, County, State, Country" type="text" />
                        </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="material-symbols-outlined text-primary">diversity_3</span>
                      Relationships
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-dashed border-gray-300 dark:border-gray-600">
                      <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Related to whom?</label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
                          <input className="pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm" placeholder="Search for existing family member..." type="text" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Relationship Type</label>
                          <select className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm">
                            <option>Child</option>
                            <option>Spouse</option>
                            <option>Parent</option>
                            <option>Sibling</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="mt-3 text-sm text-accent-blue font-semibold flex items-center hover:underline" type="button">
                      <span className="material-icons text-sm mr-1">add</span> Add another relationship
                    </button>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="material-symbols-outlined text-primary">add_a_photo</span>
                      Photo
                    </h2>
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-500 overflow-hidden relative group cursor-pointer">
                        <span className="material-icons text-gray-400 text-3xl group-hover:hidden">person</span>
                        <div className="hidden group-hover:flex absolute inset-0 bg-black/50 items-center justify-center text-white text-xs text-center p-1">
                          Upload
                        </div>
                        <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Add a profile photo</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Supported formats: JPG, PNG. Max size 5MB.</p>
                        <button className="text-sm border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition" type="button">Choose File</button>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/30 px-8 py-5 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700">
                  <Link to="/dashboard" className="px-6 py-2 rounded-full font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition">Cancel</Link>
                  <Link to="/dashboard" className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-8 rounded-full shadow-lg transition transform hover:-translate-y-0.5 flex items-center gap-2">
                    <span className="material-icons text-sm">save</span>
                    Save Person
                  </Link>
                </div>
              </form>
            </div>
            <div className="md:col-span-1 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                <div className="flex items-start gap-3 mb-3">
                  <span className="material-symbols-outlined text-accent-blue mt-1">lightbulb</span>
                  <h3 className="font-bold text-gray-900 dark:text-white">Tips for accuracy</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Use maiden names for women to help match historical records.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>"About 1940" is better than leaving a date blank.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Add locations as specific as possible (City, County, State).</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Need help?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Our community volunteers might have already researched this surname.</p>
                <a className="text-primary text-sm font-bold hover:underline flex items-center gap-1" href="#">
                  Search Community Trees
                  <span className="material-icons text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center gap-2 mb-2 text-gray-500 dark:text-gray-400">
                  <span className="material-symbols-outlined text-lg">lock</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Privacy &amp; Security</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Information about living people is automatically hidden from public view to protect their privacy. You control who sees what.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddPerson;