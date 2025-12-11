import React from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';

const Invite = () => {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-3 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold font-display text-primary tracking-tight">Kinship<span className="text-gray-500 dark:text-gray-400 font-normal">Connect</span></Link>
          <div className="hidden md:flex space-x-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <Link to="/dashboard" className="hover:text-primary transition">TREES</Link>
            <a href="#" className="hover:text-primary transition">SEARCH</a>
            <a href="#" className="hover:text-primary transition">DNA</a>
            <a href="#" className="hover:text-primary transition">COMMUNITY</a>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm font-semibold">
          <div className="hidden md:flex items-center gap-2 mr-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe-oZXc_eEL5L6gD1IqsgKrQPzdUGJhUgHIldyBVHDaY6d7yqPINpzUOflkMxXOZkO491qXl_CLEhufyPHmuP7LPDYFzkbogYoC_bzIP89iISWO-3DFHwrhs1dF8ERt93yb25Xf3ag51xhkws10x6HfWFnQyDOxG9cZRXvip05QAcS81xwHcF5JntIXPUXrLq4sK1dvcPtN9na05scd3sl4HFlYWmJ1-3vq1PsE14cYAcm6l2zQWCPnJpy9OxNdr-4pxvE3537aW4c" />
            </div>
            <span className="text-gray-700 dark:text-gray-200">Jane Doe</span>
          </div>
          <a href="#" className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex items-center gap-2">
            <span className="material-icons text-sm">person_add</span> INVITE
          </a>
        </div>
      </nav>

      <div className="bg-banner-dark dark:bg-gray-800 text-white pt-12 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576769919018-b2a54388e36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 font-semibold">
            <Link to="/dashboard" className="hover:text-white transition">My Tree</Link>
            <span className="material-icons text-sm">chevron_right</span>
            <span className="text-white">Invite Collaborators</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display mb-4">Grow your tree together.</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Invite relatives to view, edit, and contribute to your family history. <br className="hidden md:block" />
            Collaboration is always 100% free and secure.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 -mt-16 relative z-20 mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-2/3 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send Email Invitations</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">We'll send them an email with a secure link to join your tree. They don't need to pay to join.</p>
            <form className="space-y-6">
              <div className="space-y-4">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">Invite People</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow">
                    <input className="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary dark:text-white p-3 shadow-sm" placeholder="Email address" type="email" />
                  </div>
                  <div className="sm:w-1/3">
                    <select className="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary dark:text-white p-3 shadow-sm">
                      <option>Can Edit</option>
                      <option>Can View</option>
                      <option>Admin</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow">
                    <input className="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary dark:text-white p-3 shadow-sm" placeholder="Email address (optional)" type="email" />
                  </div>
                  <div className="sm:w-1/3">
                    <select className="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary dark:text-white p-3 shadow-sm">
                      <option>Can Edit</option>
                      <option>Can View</option>
                      <option>Admin</option>
                    </select>
                  </div>
                </div>
                <button className="text-primary hover:text-green-700 font-semibold text-sm flex items-center gap-1 mt-2" type="button">
                  <span className="material-icons text-base">add_circle_outline</span> Add another email
                </button>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Personal Message</label>
                <textarea className="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary dark:text-white p-3 text-sm shadow-sm" placeholder="Hey! I've started building our family tree on KinshipConnect. Come check out the photos I found of Grandpa and help me fill in the blanks!" rows={4}></textarea>
                <p className="text-xs text-gray-400 mt-1 text-right">0/500 characters</p>
              </div>
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-500 flex items-center gap-1 bg-gray-50 dark:bg-gray-700 px-3 py-1 rounded-full">
                  <span className="material-icons text-base text-gray-400">lock</span> Secure invitation
                </div>
                <button className="w-full sm:w-auto bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2" type="button">
                  <span className="material-icons">send</span>
                  Send Invites
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/3 bg-gray-50 dark:bg-gray-900/50 p-8 lg:p-10 flex flex-col h-full border-l border-gray-200 dark:border-gray-700">
            <div className="mb-10">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-icons text-accent-blue">link</span>
                Share Unique Link
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Anyone with this link can request to join your tree as a viewer.</p>
              <div className="flex shadow-sm rounded-md">
                <input className="flex-grow rounded-l border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-500 text-sm p-2 bg-gray-100 focus:ring-0" readOnly type="text" value="https://kinship.co/join/x8d92m" />
                <button className="bg-white dark:bg-gray-600 dark:text-white border border-l-0 border-gray-300 dark:border-gray-600 rounded-r px-3 text-primary font-bold hover:bg-gray-50 transition">
                  Copy
                </button>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-icons text-accent-blue">share</span>
                Share on Social
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2 rounded text-sm font-semibold hover:bg-opacity-90 transition shadow-sm">
                  Facebook
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2 rounded text-sm font-semibold hover:bg-opacity-90 transition shadow-sm">
                  WhatsApp
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#1DA1F2] text-white py-2 rounded text-sm font-semibold hover:bg-opacity-90 transition shadow-sm">
                  Twitter
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-600 text-white py-2 rounded text-sm font-semibold hover:bg-opacity-90 transition shadow-sm">
                  Email App
                </button>
              </div>
            </div>
            <div className="mt-auto bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-100 dark:border-blue-800">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 text-sm flex items-center gap-2">
                <span className="material-icons text-accent-blue text-sm">tips_and_updates</span> Why invite family?
              </h4>
              <ul className="text-xs space-y-3 text-blue-800 dark:text-blue-200">
                <li className="flex items-start gap-2"><span className="material-icons text-sm text-accent-blue">check_circle</span> <strong>Identify photos:</strong> They might know who that "Unknown Cousin" is.</li>
                <li className="flex items-start gap-2"><span className="material-icons text-sm text-accent-blue">check_circle</span> <strong>Fill gaps:</strong> Get accurate dates and places for your ancestors.</li>
                <li className="flex items-start gap-2"><span className="material-icons text-sm text-accent-blue">check_circle</span> <strong>Preserve stories:</strong> Capture oral history before it's lost.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-background-light dark:bg-background-dark pb-20 px-4 flex-grow">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display text-gray-900 dark:text-white mb-4">Safe, Secure, and Community Driven</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We prioritize your family's privacy. You maintain full control over who sees what.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-icons text-3xl">lock_person</span>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Bank-Grade Security</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">All data is encrypted in transit and at rest. Your family tree is private by default and only visible to those you approve.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-accent-blue mb-4">
                <span className="material-icons text-3xl">admin_panel_settings</span>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Granular Permissions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Assign roles like 'Editor' for close family or 'Viewer' for distant relatives. You can revoke access at any time.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 mb-4">
                <span className="material-icons text-3xl">volunteer_activism</span>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Always Free</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Invited members never hit a paywall. KinshipConnect is supported by the community, for the community.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Invite;