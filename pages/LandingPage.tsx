import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PublicNavbar from '../components/PublicNavbar';
import { useTree } from '../context/TreeContext';

const LandingPage = () => {
  const navigate = useNavigate();
  const { login } = useTree();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email) {
      login(`${formData.firstName} ${formData.lastName}`, formData.email);
      navigate('/dashboard');
    }
  };

  return (
    <>
      <PublicNavbar />
      <div className="bg-primary text-white py-3 px-4 text-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
          <div className="font-display text-xl md:text-2xl">OPEN ACCESS MILESTONE</div>
          <div className="hidden md:block h-6 w-px bg-white/50"></div>
          <div className="text-sm md:text-lg font-light">Over 10 million free records added by volunteers. <span className="font-bold">Help us grow.</span></div>
          <a href="#" className="bg-white text-primary px-4 py-1 rounded-full text-sm font-bold hover:bg-gray-100 transition mt-2 md:mt-0">Volunteer Now</a>
        </div>
      </div>

      <header className="bg-banner-dark dark:bg-gray-800 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-banner-dark/90 via-banner-dark/70 to-transparent dark:from-gray-900/90"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl mb-6 leading-tight font-display">Build your story,<br /><span className="text-[#cfdb7d] italic">together &amp; freely.</span></h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                Collaborate securely with relatives to uncover your shared history. KinshipConnect is a 100% free, open-source platform dedicated to preserving family heritage for everyone.
              </p>
              <ul className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 text-sm font-semibold text-gray-300 mb-8">
                <li className="flex items-center gap-2"><span className="material-icons text-primary text-base">check_circle</span> Forever Free</li>
                <li className="flex items-center gap-2"><span className="material-icons text-primary text-base">check_circle</span> Open Source</li>
                <li className="flex items-center gap-2"><span className="material-icons text-primary text-base">check_circle</span> Privacy First</li>
              </ul>
              <div className="hidden lg:block">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Supported by the community</p>
                <div className="flex -space-x-2">
                  <img alt="User" className="w-8 h-8 rounded-full border-2 border-banner-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGhIr4-unnKd7teAgxSgo-nDI_f9KX3FAu192I64Xm5TMjOOBj54K_6FT4gNjySmTitzm6aH5MPJtWV3W-7iJVK8W-TjswieQVZ3gd5wGfjfKzjF-sb0hRjuahMnMU6INxUORC0OC9spcp1cTUl02iU7R35Pzi37c_NSgTabUVrwRqsV7ihucygxL5qWygXMmfuKbNS5-KknyyKjz5Hom4GGgF4i_pOrr32WxgtgC0r-wxczwAFoCMuEceyvBp0wVr2CA8L8sBhac9" />
                  <img alt="User" className="w-8 h-8 rounded-full border-2 border-banner-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9_gCqvJIcTOxnNdgc_yFVxCzxMN2bdXVEeNxaNs8L4oVyY7EQkuR-QT56AuSyueHmwo03oaOGH9v7IqGoT50EFIxGdiDGQ6AO0vmEp0CIpvrIlg6dK9Ew7GUH3hFon4nTcIPvlkmkP5zlfYXim7r_nAvMH1g9_uHLjLnkFJclQPE8fgOlIcdXZtN8DKgcItEGC5fasJlu2JwIS_nSjBDkknlLvy64icJ1IwH-758SQHx4TqEin_Eem_imAEB8vzi1VYtOrriqS-H-" />
                  <img alt="User" className="w-8 h-8 rounded-full border-2 border-banner-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRe9lC-EC2DVFbqI-VgT2yuNu-trsWUgAo8WRtEp2o0fakK9wp3zZc2ArTBEDaoVpyp2OopqNF7p_xPywlaAJowIXoQ91d4yc4gusAHV7jSJ19lv4zg-XsIQ3yTZdjKOvPWhDGM76MQv2EicDgDW81y71djx4iCIS-ST5kMjJ_OZo4G3LNyQprh3k6CRe23U4l0VgyMXMh_XoZLVFCU6ydcsoVlxyPS9rhxHYr_iKB8X3JUHDK1sXNlc2gwYn6Auu9ZpnGhQQLDbPB" />
                  <div className="w-8 h-8 rounded-full border-2 border-banner-dark bg-gray-600 flex items-center justify-center text-[10px] font-bold">+2M</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent-blue"></div>
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white font-display">Join the Community</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Create your free account to start building.</p>
                <form className="space-y-4" onSubmit={handleJoin}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                      <input 
                        className="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" 
                        placeholder="Jane" 
                        type="text" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                      <input 
                        className="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" 
                        placeholder="Doe" 
                        type="text" 
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                    <input 
                      className="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" 
                      placeholder="jane@example.com" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Password</label>
                    <input className="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" placeholder="Create a password" type="password" />
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-green-700 text-white font-bold py-3 px-4 rounded shadow-lg transition mt-2 transform hover:-translate-y-0.5 block text-center cursor-pointer">
                    Create Free Account
                  </button>
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                    Already a member? <Link to="/dashboard" className="text-accent-blue hover:underline font-bold">Log in</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Testimonials and Features Sections kept as is, they are purely presentational */}
      <section className="bg-[#ebe9e4] dark:bg-gray-900 py-12 px-4 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-serif text-gray-800 dark:text-gray-100 mb-8">Families are connecting every day—completely free.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#3e5641] dark:bg-gray-800 p-6 rounded text-white relative shadow-md">
              <span className="material-icons text-4xl opacity-30 absolute top-4 left-4">format_quote</span>
              <p className="relative z-10 text-sm italic mb-4 pt-4 leading-relaxed">"I was tired of hitting paywalls on other sites just to see my own grandmother's census record. KinshipConnect is a breath of fresh air."</p>
              <p className="font-bold text-xs text-right opacity-80">— Marcus T.</p>
              <span className="material-icons text-4xl opacity-30 absolute bottom-4 right-4">format_quote</span>
            </div>
            <div className="bg-[#3e5641] dark:bg-gray-800 p-6 rounded text-white relative shadow-md">
              <span className="material-icons text-4xl opacity-30 absolute top-4 left-4">format_quote</span>
              <p className="relative z-10 text-sm italic mb-4 pt-4 leading-relaxed">"The collaborative features let our whole extended family work on the tree at once. It feels like a true group project."</p>
              <p className="font-bold text-xs text-right opacity-80">— Sarah M.</p>
              <span className="material-icons text-4xl opacity-30 absolute bottom-4 right-4">format_quote</span>
            </div>
            <div className="bg-[#3e5641] dark:bg-gray-800 p-6 rounded text-white relative shadow-md">
              <span className="material-icons text-4xl opacity-30 absolute top-4 left-4">format_quote</span>
              <p className="relative z-10 text-sm italic mb-4 pt-4 leading-relaxed">"The automatic discovery tool linked my tree with a distant cousin in Ireland. We're planning a reunion next summer!"</p>
              <p className="font-bold text-xs text-right opacity-80">— Elena K.</p>
              <span className="material-icons text-4xl opacity-30 absolute bottom-4 right-4">format_quote</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center text-4xl md:text-5xl font-display text-gray-900 dark:text-white mb-4">
            Collaborate and grow, <span className="italic text-accent-blue">without limits</span>.
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
            Your <span className="text-primary font-bold">Kinship Tree</span> allows for manual building and photo sharing, while our community-powered <span className="text-accent-blue font-bold">Smart Match</span> technology helps you find connections in open records.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#f0f2eb] dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft flex flex-col">
              <div className="p-8 pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <span className="material-icons">diversity_2</span>
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">Collaborative Tree Building</h3>
                </div>
                <div className="mt-6 relative">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-t-lg shadow-lg transform translate-y-2 mx-4 border border-gray-200 dark:border-gray-600">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                        <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe-oZXc_eEL5L6gD1IqsgKrQPzdUGJhUgHIldyBVHDaY6d7yqPINpzUOflkMxXOZkO491qXl_CLEhufyPHmuP7LPDYFzkbogYoC_bzIP89iISWO-3DFHwrhs1dF8ERt93yb25Xf3ag51xhkws10x6HfWFnQyDOxG9cZRXvip05QAcS81xwHcF5JntIXPUXrLq4sK1dvcPtN9na05scd3sl4HFlYWmJ1-3vq1PsE14cYAcm6l2zQWCPnJpy9OxNdr-4pxvE3537aW4c" />
                      </div>
                      <div>
                        <div className="h-3 w-32 bg-gray-300 dark:bg-gray-500 rounded mb-2"></div>
                        <div className="h-2 w-20 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center gap-1">
                        <span className="material-icons text-[10px]">check_circle</span> Edited by Mom
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-xl relative z-10 border border-gray-200 dark:border-gray-600">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded overflow-hidden">
                          <img alt="Grandmother" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7n00kSO2NKkHS6ksQR1YRqo3lOQctf0bacpR2SNWE5PgR7cVnch6Q2lb4qvkrMJP0KXkc103mL1gzHbm3rb9iADn33LhyGLO-ZWaLY0IcV0m6YhqP66i5uzpK_Ou5cRb4-T4ix4JRFfx112YGVJabjUiWHWpiZpBnLnSF39dMuJnLfxMe3FONvY_zMYeZ71FzJHdTzkCN0H7dxbetnnqI6VV7-dEovt0KWc4eqlUFwZ0Mv50naFVP5Rnw-7kbIwJzWRG22uVRbCEb" />
                        </div>
                        <div>
                          <p className="font-bold text-lg dark:text-white">Eleanor Rigby</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">1924 - 1999</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Liverpool, UK</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 border-t border-gray-100 dark:border-gray-600 pt-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-bold text-primary">New Photo Added</span> by Uncle John
                    </div>
                  </div>
                </div>
                <div className="p-8 pt-6 flex-grow flex flex-col justify-between bg-white dark:bg-gray-750 dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Invite unlimited family members to view, edit, or contribute to your tree. Set granular permissions to keep personal data secure while crowd-sourcing your family history.
                  </p>
                </div>
              </div>
              <div className="bg-[#eef5fa] dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft flex flex-col">
                <div className="p-8 pb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent-blue text-white p-2 rounded-full">
                      <span className="material-icons">manage_search</span>
                    </div>
                    <h3 className="text-xl font-bold dark:text-white">Open Record Discovery</h3>
                  </div>
                  <div className="mt-6 relative h-48 flex items-center justify-center">
                    <div className="absolute inset-x-8 top-4 h-32 bg-white dark:bg-gray-700 rounded shadow-sm opacity-60 scale-95"></div>
                    <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-xl w-3/4 border border-accent-blue/20 relative z-10">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-accent-blue uppercase tracking-wide">Record Match Found</span>
                        <span className="text-gray-400 dark:text-gray-500 text-xs">98% Confidence</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-icons text-gray-400 text-3xl">description</span>
                        <div>
                          <p className="font-bold text-sm dark:text-white">1940 US Census</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Contains info for: James Smith</p>
                        </div>
                        <div className="ml-auto text-primary text-xs font-bold px-3 py-1 rounded flex items-center"><span className="material-icons text-sm mr-1">lock_open</span> Free</div>
                      </div>
                    </div>
                    <svg className="absolute bottom-0 right-0 w-24 h-24 text-accent-blue opacity-20" viewBox="0 0 100 100">
                      <path d="M0,100 Q50,50 100,0" fill="none" stroke="currentColor" strokeWidth="8"></path>
                      <circle cx="100" cy="0" fill="currentColor" r="5"></circle>
                    </svg>
                  </div>
                </div>
                <div className="p-8 pt-6 flex-grow flex flex-col justify-between bg-white dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Our algorithms scan billions of open-source historical records and public trees. We'll notify you when we find a birth certificate, census record, or potential relative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default LandingPage;