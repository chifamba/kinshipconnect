import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import { useTree } from '../context/TreeContext';
import { Person } from '../types';

const NodeCard = ({ person, role, onClick, isEmpty, onAdd }: { person?: Person, role?: string, onClick?: () => void, isEmpty?: boolean, onAdd?: () => void }) => {
  if (isEmpty) {
    return (
      <div onClick={onAdd} className="group flex flex-col items-center">
        <div className="w-24 h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-white dark:hover:bg-gray-800 transition">
          <span className="material-symbols-outlined text-gray-400 group-hover:text-primary mb-1">add_circle</span>
          <span className="text-xs text-gray-500 font-semibold uppercase">{role || 'Add'}</span>
        </div>
      </div>
    );
  }

  if (!person) return null;

  return (
    <div onClick={onClick} className="group flex flex-col items-center cursor-pointer hover:-translate-y-1 transition duration-200">
      <div className="w-24 h-32 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col overflow-hidden hover:shadow-md relative">
        <div className="h-20 bg-gray-200 dark:bg-gray-600 w-full overflow-hidden">
          {person.photoUrl ? (
             <img alt={person.firstName} className="w-full h-full object-cover" src={person.photoUrl} />
          ) : (
             <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-4xl">person</span>
             </div>
          )}
        </div>
        <div className="p-2 text-center">
          <div className="font-bold text-xs dark:text-gray-200 truncate">{person.firstName} {person.lastName}</div>
          <div className="text-[10px] text-gray-500">{person.birthDate ? person.birthDate.split('-')[0] : '????'} - {person.isLiving ? 'Present' : '????'}</div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { people, getPerson, getParents, getChildren, homePersonId } = useTree();
  
  // Initialize focusId from URL param or fall back to homePersonId
  const paramFocusId = searchParams.get('focusId');
  const [focusId, setFocusId] = useState<string>(paramFocusId || homePersonId);

  // Update URL when internal state changes
  useEffect(() => {
    if (focusId) {
      setSearchParams({ focusId });
    }
  }, [focusId, setSearchParams]);

  // Update internal state if URL changes externally (e.g. back button)
  useEffect(() => {
    if (paramFocusId && paramFocusId !== focusId) {
      setFocusId(paramFocusId);
    }
  }, [paramFocusId]);

  const focusPerson = getPerson(focusId);
  const { father, mother } = getParents(focusId);
  const children = getChildren(focusId);

  if (!focusPerson) return <div>Loading...</div>;

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
              <Link to={`/add-person?childId=${focusId}&relation=FATHER`} className="w-full flex items-center gap-3 px-3 py-2 bg-primary text-white rounded-lg shadow-sm hover:bg-opacity-90 transition text-sm font-bold justify-center">
                <span className="material-symbols-outlined text-lg">person_add</span> Add Parent
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
                <div className="text-xl font-bold text-gray-800 dark:text-white">{people.length}</div>
                <div className="text-xs text-gray-500">People</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-center">
                <div className="text-xl font-bold text-gray-800 dark:text-white">15</div>
                <div className="text-xs text-gray-500">Photos</div>
              </div>
            </div>
          </div>
        </aside>
        
        <main className="flex-grow bg-[#f0f4f8] dark:bg-[#111] relative overflow-auto cursor-grab active:cursor-grabbing flex items-center justify-center p-10">
          <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4a7729 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10 flex flex-col items-center gap-16">
            
            {/* Generation 1: Parents */}
            <div className="flex gap-16 relative">
              <div className="relative">
                <NodeCard 
                    person={father} 
                    isEmpty={!father} 
                    role="Add Father" 
                    onClick={() => father && setFocusId(father.id)}
                    onAdd={() => navigate(`/add-person?childId=${focusId}&relation=FATHER`)}
                />
                {/* Connector Line Down */}
                <div className="absolute top-full left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
              </div>

              <div className="relative">
                 <NodeCard 
                    person={mother} 
                    isEmpty={!mother} 
                    role="Add Mother" 
                    onClick={() => mother && setFocusId(mother.id)}
                    onAdd={() => navigate(`/add-person?childId=${focusId}&relation=MOTHER`)}
                 />
                 <div className="absolute top-full left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
              </div>
              
              {/* Horizontal Connector between parents */}
              <div className="absolute top-1/2 left-[25%] right-[25%] h-px bg-gray-300 -z-10"></div>
            </div>

            {/* Generation 2: Focus Person */}
            <div className="relative">
               {/* Connector Line Up */}
               <div className="absolute bottom-full left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
               {/* Horizontal line joining the parents' vertical lines to this center line */}
               <div className="absolute bottom-[calc(100%+0px)] left-1/2 w-32 h-px bg-gray-300 -translate-x-1/2 mb-8"></div>
               
               <div className="w-40 h-48 border-2 border-primary bg-white dark:bg-gray-800 rounded-xl shadow-xl flex flex-col overflow-hidden hover:shadow-2xl transition cursor-pointer relative z-10 ring-4 ring-primary/10">
                <div className="h-28 bg-gray-200 dark:bg-gray-600 w-full overflow-hidden relative">
                  {focusPerson.photoUrl ? (
                      <img alt={focusPerson.firstName} className="w-full h-full object-cover" src={focusPerson.photoUrl} />
                  ) : (
                      <div className="flex items-center justify-center h-full text-4xl font-display text-primary bg-gray-100 dark:bg-gray-700">
                        {focusPerson.firstName[0]}{focusPerson.lastName[0]}
                      </div>
                  )}
                </div>
                <div className="p-4 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-lg dark:text-white truncate">{focusPerson.firstName} {focusPerson.lastName}</div>
                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide text-primary">Focus Person</div>
                  </div>
                  <div className="mt-1 text-xs text-gray-400">{focusPerson.birthDate?.split('-')[0] || 'Unknown'} - {focusPerson.isLiving ? 'Present' : 'Unknown'}</div>
                </div>
              </div>

              {/* Connector Line Down to Children */}
              {children.length > 0 && (
                  <div className="absolute top-full left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
              )}
            </div>

            {/* Generation 3: Children */}
            <div className="flex gap-8 relative">
                {children.length > 0 && (
                     <div className="absolute bottom-full left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2 mb-16"></div>
                )}
                
                {children.map(child => (
                    <div key={child.id} className="relative pt-8">
                        {/* Connector from main line to child */}
                        <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
                         {/* Horizontal bar if multiple children - simplified for now */}
                        <NodeCard person={child} onClick={() => setFocusId(child.id)} />
                    </div>
                ))}

                <div className="pt-8">
                    <Link to={`/add-person?parentId=${focusId}&relation=CHILD`} className="flex flex-col items-center justify-center w-24 h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary cursor-pointer text-gray-400 hover:text-primary transition">
                        <span className="material-symbols-outlined mb-1">child_care</span>
                        <span className="text-xs font-bold uppercase">Add Child</span>
                    </Link>
                </div>
            </div>

          </div>
        </main>
        
        <aside className="w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 flex flex-col shrink-0 z-10 hidden xl:flex">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800">
            <h2 className="font-display text-xl font-bold mb-1 dark:text-white">{focusPerson.firstName} {focusPerson.lastName}</h2>
            <p className="text-sm text-gray-500 mb-4">{focusPerson.gender} • {focusPerson.birthDate?.split('-')[0] || '?'} - {focusPerson.isLiving ? 'Present' : '?'}</p>
            <div className="flex gap-2 mb-6">
              <button className="flex-1 bg-primary text-white py-1.5 rounded text-sm font-bold shadow-sm hover:bg-opacity-90">Edit</button>
              <button className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-1.5 rounded text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700">Profile</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-gray-400">cake</span>
                <span>Born: <span className="text-gray-900 dark:text-gray-200 font-medium">{focusPerson.birthDate || 'Unknown'}</span></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-gray-400">location_on</span>
                <span>{focusPerson.birthPlace || 'Unknown'}</span>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="bg-primary/10 rounded-lg p-3 flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">groups</span>
              <div>
                <p className="text-xs font-bold text-primary mb-1">Collaborate</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-snug">Invite {focusPerson.firstName} to edit their own profile.</p>
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