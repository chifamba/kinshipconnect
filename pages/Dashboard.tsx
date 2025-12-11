import React from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <AppNavbar />
      <div className="flex-grow flex overflow-hidden">
        <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col shrink-0 z-10 overflow-y-auto">
          <div className="p-4 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider">Quick Actions</h3>
            </div>
            <div className="space-y-2">
              <Link to="/add-person" className="w-full flex items-center gap-3 px-3 py-2 bg-primary text-white rounded-lg shadow-sm hover:bg-opacity-90 transition text-sm font-bold justify-center">
                <span className="material-symbols-outlined text-lg">person_add</span> Add Person
              </Link>
              <button className="w-full flex items-center gap-3 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm font-semibold justify-center">
                <span className="material-symbols-outlined text-lg">file_upload</span> Upload GEDCOM
              </button>
              <Link to="/invite" className="w-full flex items-center gap-3 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-accent-blue rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition text-sm font-semibold justify-center">
                <span className="material-symbols-outlined text-lg">share</span> Invite Family
              </Link>
            </div>
          </div>
          <div className="p-4 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Tree Stats</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-center">
                <div className="text-xl font-bold text-gray-800 dark:text-white">42</div>
                <div className="text-xs text-gray-500">People</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-center">
                <div className="text-xl font-bold text-gray-800 dark:text-white">15</div>
                <div className="text-xs text-gray-500">Photos</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-center">
                <div className="text-xl font-bold text-gray-800 dark:text-white">8</div>
                <div className="text-xs text-gray-500">Stories</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-center">
                <div className="text-xl font-bold text-green-600">3</div>
                <div className="text-xs text-gray-500">Hints</div>
              </div>
            </div>
          </div>
          <div className="p-4 flex-grow">
            <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Community Activity</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="bg-blue-100 text-blue-600 p-1.5 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-sm">history_edu</span>
                </div>
                <div>
                  <p className="text-xs text-gray-800 dark:text-gray-200 font-medium leading-snug">New records added to <span className="font-bold">1950 Census</span></p>
                  <a href="#" className="text-[10px] text-accent-blue hover:underline">Search now</a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="bg-green-100 text-green-600 p-1.5 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-sm">volunteer_activism</span>
                </div>
                <div>
                  <p className="text-xs text-gray-800 dark:text-gray-200 font-medium leading-snug">Help transcribe <span className="font-bold">Ohio Marriage Records</span></p>
                  <a href="#" className="text-[10px] text-accent-blue hover:underline">Volunteer</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-800 text-xs text-center text-gray-400">
            Secure &amp; Encrypted • Free Forever
          </div>
        </aside>
        
        <main className="flex-grow bg-[#f0f4f8] dark:bg-[#111] relative overflow-auto cursor-grab active:cursor-grabbing flex items-center justify-center p-10">
          <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4a7729 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="absolute top-4 left-4 z-20 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex flex-col gap-1">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-300" title="Zoom In">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-300" title="Zoom Out">
              <span className="material-symbols-outlined">remove</span>
            </button>
            <div className="h-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-300" title="Fit to Screen">
              <span className="material-symbols-outlined">center_focus_strong</span>
            </button>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-16 transform scale-100 origin-center transition-transform duration-200">
            <div className="flex gap-16">
              <div className="flex gap-4 relative">
                <div className="group flex flex-col items-center">
                  <Link to="/add-person" className="w-24 h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-white dark:hover:bg-gray-800 transition">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary mb-1">add_circle</span>
                    <span className="text-xs text-gray-500 font-semibold uppercase">Add Father</span>
                  </Link>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-gray-300"></div>
                <div className="group flex flex-col items-center">
                  <Link to="/add-person" className="w-24 h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-white dark:hover:bg-gray-800 transition">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary mb-1">add_circle</span>
                    <span className="text-xs text-gray-500 font-semibold uppercase">Add Mother</span>
                  </Link>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="group flex flex-col items-center">
                  <div className="w-24 h-32 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col overflow-hidden hover:shadow-md transition cursor-pointer relative">
                    <div className="h-20 bg-gray-200 dark:bg-gray-600 w-full overflow-hidden">
                      <img alt="Grandpa" className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7n00kSO2NKkHS6ksQR1YRqo3lOQctf0bacpR2SNWE5PgR7cVnch6Q2lb4qvkrMJP0KXkc103mL1gzHbm3rb9iADn33LhyGLO-ZWaLY0IcV0m6YhqP66i5uzpK_Ou5cRb4-T4ix4JRFfx112YGVJabjUiWHWpiZpBnLnSF39dMuJnLfxMe3FONvY_zMYeZ71FzJHdTzkCN0H7dxbetnnqI6VV7-dEovt0KWc4eqlUFwZ0Mv50naFVP5Rnw-7kbIwJzWRG22uVRbCEb" />
                    </div>
                    <div className="p-2 text-center">
                      <div className="font-bold text-xs dark:text-gray-200 truncate">Robert Evans</div>
                      <div className="text-[10px] text-gray-500">1920 - 1985</div>
                    </div>
                    <div className="absolute top-1 right-1 bg-accent-blue rounded-full p-0.5">
                      <span className="material-symbols-outlined text-white text-[10px] block">smart_toy</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-gray-300"></div>
                <div className="group flex flex-col items-center">
                  <Link to="/add-person" className="w-24 h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-white dark:hover:bg-gray-800 transition">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary mb-1">add_circle</span>
                    <span className="text-xs text-gray-500 font-semibold uppercase">Add Mother</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full relative h-8 -mt-16 mb-8 pointer-events-none">
              <div className="absolute left-[25%] top-0 h-8 w-px bg-gray-300"></div>
              <div className="absolute left-[25%] top-8 h-px w-[25%] bg-gray-300 translate-x-[50%]"></div>
              <div className="absolute right-[25%] top-0 h-8 w-px bg-gray-300"></div>
              <div className="absolute right-[25%] top-8 h-px w-[25%] bg-gray-300 -translate-x-[50%]"></div>
            </div>
            <div className="flex gap-32 relative">
              <div className="group flex flex-col items-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-8 w-px bg-gray-300"></div>
                <Link to="/add-person" className="w-32 h-40 border-2 border-dashed border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-white dark:hover:bg-gray-800 transition shadow-sm">
                  <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-primary mb-2">person_add</span>
                  <span className="text-xs text-gray-500 font-bold uppercase">Add Father</span>
                  <span className="text-[10px] text-gray-400 mt-1 text-center px-2">Import from GEDCOM?</span>
                </Link>
              </div>
              <div className="group flex flex-col items-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-8 w-px bg-gray-300"></div>
                <div className="w-32 h-40 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col overflow-hidden hover:shadow-lg hover:-translate-y-1 transition cursor-pointer relative">
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-sm z-10 animate-bounce">
                    <span className="material-symbols-outlined text-xs block">star</span>
                  </div>
                  <div className="h-24 bg-gray-200 dark:bg-gray-600 w-full overflow-hidden">
                    <img alt="Mom" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe-oZXc_eEL5L6gD1IqsgKrQPzdUGJhUgHIldyBVHDaY6d7yqPINpzUOflkMxXOZkO491qXl_CLEhufyPHmuP7LPDYFzkbogYoC_bzIP89iISWO-3DFHwrhs1dF8ERt93yb25Xf3ag51xhkws10x6HfWFnQyDOxG9cZRXvip05QAcS81xwHcF5JntIXPUXrLq4sK1dvcPtN9na05scd3sl4HFlYWmJ1-3vq1PsE14cYAcm6l2zQWCPnJpy9OxNdr-4pxvE3537aW4c" />
                  </div>
                  <div className="p-3 text-center">
                    <div className="font-bold text-sm dark:text-white truncate">Jane Smith</div>
                    <div className="text-xs text-gray-500">1955 - Present</div>
                    <div className="mt-2 flex justify-center gap-1">
                      <button className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded hover:bg-primary hover:text-white transition">Edit</button>
                      <button className="text-[10px] bg-accent-blue/10 text-accent-blue px-2 py-0.5 rounded hover:bg-accent-blue hover:text-white transition">Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative h-12 -mt-4 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gray-300"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-8 w-px bg-gray-300"></div>
            </div>
            <div className="relative">
              <div className="w-40 h-48 border-2 border-primary bg-white dark:bg-gray-800 rounded-xl shadow-xl flex flex-col overflow-hidden hover:shadow-2xl transition cursor-pointer relative z-10 ring-4 ring-primary/10">
                <div className="h-28 bg-gray-200 dark:bg-gray-600 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary opacity-20"></div>
                  <div className="flex items-center justify-center h-full text-4xl font-display text-primary bg-gray-100 dark:bg-gray-700">JS</div>
                </div>
                <div className="p-4 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-lg dark:text-white truncate">John Smith</div>
                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide text-primary">Home Person</div>
                  </div>
                  <div className="mt-1 text-xs text-gray-400">1985 - Present</div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-8 w-px bg-gray-300"></div>
            </div>
            <div className="mt-2">
              <Link to="/add-person" className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm hover:border-primary hover:text-primary transition text-xs font-bold text-gray-500 uppercase tracking-wide">
                <span className="material-symbols-outlined text-base">child_care</span> Add Child
              </Link>
            </div>
          </div>
        </main>
        
        <aside className="w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 flex flex-col shrink-0 z-10 hidden xl:flex">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800">
            <h2 className="font-display text-xl font-bold mb-1 dark:text-white">Jane Smith</h2>
            <p className="text-sm text-gray-500 mb-4">Mother • 1955 - Present</p>
            <div className="flex gap-2 mb-6">
              <button className="flex-1 bg-primary text-white py-1.5 rounded text-sm font-bold shadow-sm hover:bg-opacity-90">Edit</button>
              <button className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-1.5 rounded text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700">Profile</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-gray-400">cake</span>
                <span>Born: <span className="text-gray-900 dark:text-gray-200 font-medium">May 12, 1955</span></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-gray-400">location_on</span>
                <span>Portland, Oregon</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-gray-400">diversity_1</span>
                <span>Spouse: <span className="italic text-gray-400">Unknown</span></span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#f8fcfd] dark:bg-gray-800/50 flex-grow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm text-gray-800 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-blue">manage_search</span>
                Record Hints
              </h3>
              <span className="bg-accent-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full">1 New</span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-accent-blue/30 shadow-sm mb-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs font-bold text-accent-blue uppercase">High Confidence</div>
                <span className="text-[10px] text-gray-400">Just now</span>
              </div>
              <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">1940 United States Federal Census</p>
              <p className="text-xs text-gray-500 mb-3">Found match for <span className="font-semibold">Jane Smith (Age 5)</span> in household of Robert Evans.</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-accent-blue text-white py-1 rounded text-xs font-bold hover:bg-blue-600">Review</button>
                <button className="px-2 border border-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                  <span className="material-symbols-outlined text-base text-gray-500">close</span>
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm opacity-75">
              <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">Oregon Birth Index</p>
              <p className="text-xs text-gray-500 mb-2">Potential match for Jane Evans.</p>
              <button className="text-accent-blue text-xs font-bold hover:underline">Review Record</button>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="bg-primary/10 rounded-lg p-3 flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">groups</span>
              <div>
                <p className="text-xs font-bold text-primary mb-1">Collaborate</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-snug">Invite Jane to edit her own profile and add photos.</p>
                <Link to="/invite" className="mt-2 text-xs font-bold text-primary underline">Send Invite</Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;