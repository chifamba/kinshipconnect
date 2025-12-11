import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import { useTree } from '../context/TreeContext';

const Invite = () => {
  const { user } = useTree();
  const [invited, setInvited] = useState(false);

  const handleInvite = () => {
    setInvited(true);
    setTimeout(() => setInvited(false), 3000);
  };

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
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center font-bold text-gray-700">
               {user.name.charAt(0)}
            </div>
            <span className="text-gray-700 dark:text-gray-200">{user.name}</span>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex items-center gap-2">
            <span className="material-icons text-sm">person_add</span> INVITE
          </button>
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
                <button className="text-primary hover:text-green-700 font-semibold text-sm flex items-center gap-1 mt-2" type="button">
                  <span className="material-icons text-base">add_circle_outline</span> Add another email
                </button>
              </div>
              
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-500 flex items-center gap-1 bg-gray-50 dark:bg-gray-700 px-3 py-1 rounded-full">
                  <span className="material-icons text-base text-gray-400">lock</span> Secure invitation
                </div>
                <button 
                  onClick={handleInvite}
                  className="w-full sm:w-auto bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2" 
                  type="button"
                >
                  <span className="material-icons">send</span>
                  {invited ? 'Sent!' : 'Send Invites'}
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/3 bg-gray-50 dark:bg-gray-900/50 p-8 lg:p-10 flex flex-col h-full border-l border-gray-200 dark:border-gray-700">
             {/* Same content as before */}
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
             {/* ... rest of sidebar ... */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Invite;