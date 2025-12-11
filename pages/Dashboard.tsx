import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import { useTree } from '../context/TreeContext';
import { Person } from '../types';

interface NodeCardProps {
  person?: Person;
  role?: string;
  onClick?: (e: React.MouseEvent | React.TouchEvent) => void;
  isEmpty?: boolean;
  onAdd?: (e: React.MouseEvent | React.TouchEvent) => void;
  isSmall?: boolean;
}

const NodeCard: React.FC<NodeCardProps> = ({ person, role, onClick, isEmpty, onAdd, isSmall = false }) => {
  const [imgError, setImgError] = useState(false);

  // Reset error state if person changes
  useEffect(() => {
    setImgError(false);
  }, [person?.id, person?.photoUrl]);

  if (isEmpty) {
    return (
      <div 
        onClick={onAdd} 
        className={`group flex flex-col items-center z-20 ${isSmall ? 'scale-90 opacity-70' : ''}`}
      >
        <div className="w-24 h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-white dark:hover:bg-gray-800 transition shadow-sm hover:shadow-md">
          <span className="material-symbols-outlined text-gray-400 group-hover:text-primary mb-1">add_circle</span>
          <span className="text-xs text-gray-500 font-semibold uppercase">{role || 'Add'}</span>
        </div>
      </div>
    );
  }

  if (!person) return null;

  return (
    <div 
      onClick={onClick} 
      className={`group flex flex-col items-center cursor-pointer hover:-translate-y-1 transition duration-200 z-20 ${isSmall ? 'scale-90 opacity-90' : ''}`}
    >
      <div className={`w-24 h-32 border-2 ${isSmall ? 'border-gray-200 dark:border-gray-700' : 'border-gray-300 dark:border-gray-600 ring-2 ring-gray-100 dark:ring-gray-800'} bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col overflow-hidden hover:shadow-md relative`}>
        <div className="h-20 bg-gray-200 dark:bg-gray-600 w-full overflow-hidden">
          {person.photoUrl && !imgError ? (
             <img 
               alt={person.firstName} 
               className="w-full h-full object-cover" 
               src={person.photoUrl} 
               onError={() => setImgError(true)}
             />
          ) : (
             <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-4xl">person</span>
             </div>
          )}
        </div>
        <div className="p-2 text-center flex flex-col justify-center flex-grow">
          <div className="font-bold text-xs dark:text-gray-200 truncate">{person.firstName} {person.lastName}</div>
          <div className="text-[10px] text-gray-500">{person.birthDate ? person.birthDate.split('-')[0] : '????'}</div>
        </div>
      </div>
    </div>
  );
};

const FocusNodeCard = ({ person }: { person: Person }) => {
  const [imgError, setImgError] = useState(false);
  
  // Reset error state if person changes
  useEffect(() => {
    setImgError(false);
  }, [person.id, person.photoUrl]);

  return (
     <div className="w-40 h-48 border-2 border-primary bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex flex-col overflow-hidden hover:shadow-3xl transition cursor-default relative z-30 ring-4 ring-primary/20 scale-105">
      <div className="h-28 bg-gray-200 dark:bg-gray-600 w-full overflow-hidden relative">
        {person.photoUrl && !imgError ? (
            <img 
              alt={person.firstName} 
              className="w-full h-full object-cover" 
              src={person.photoUrl} 
              onError={() => setImgError(true)}
            />
        ) : (
            <div className="flex items-center justify-center h-full text-4xl font-display text-primary bg-gray-100 dark:bg-gray-700">
              {person.firstName?.charAt(0)}{person.lastName?.charAt(0)}
            </div>
        )}
      </div>
      <div className="p-4 text-center flex-grow flex flex-col justify-between">
        <div>
          <div className="font-bold text-lg dark:text-white truncate leading-tight">{person.firstName} {person.lastName}</div>
          <div className="text-[10px] text-primary font-bold uppercase tracking-wider mt-1">Focus Person</div>
        </div>
        <div className="mt-1 text-xs text-gray-400">{person.birthDate?.split('-')[0] || '?'} - {person.isLiving ? 'Present' : '?'}</div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { people, getPerson, getParents, getChildren, getSiblings, getSpouse, homePersonId } = useTree();
  
  const paramFocusId = searchParams.get('focusId');
  const [focusId, setFocusId] = useState<string>(paramFocusId || homePersonId);

  // Pan & Zoom State
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track if we actually moved during the drag to distinguish from a click
  const hasMoved = useRef(false);

  useEffect(() => {
    if (focusId) setSearchParams({ focusId });
  }, [focusId, setSearchParams]);

  useEffect(() => {
    if (paramFocusId && paramFocusId !== focusId) setFocusId(paramFocusId);
  }, [paramFocusId]);

  const focusPerson = getPerson(focusId);
  
  // Robustness: Recover from invalid focusId (e.g. deleted person or broken link)
  useEffect(() => {
    if (!focusPerson && people.length > 0) {
        // If the requested person isn't found, default back to home person
        // But only if we actually have people loaded
        setFocusId(homePersonId);
    }
  }, [focusPerson, people, homePersonId]);

  const { father, mother } = focusPerson ? getParents(focusId) : { father: undefined, mother: undefined };
  const children = focusPerson ? getChildren(focusId) : [];
  const siblings = focusPerson ? getSiblings(focusId) : [];
  const spouse = focusPerson ? getSpouse(focusId) : undefined;

  // Mouse Handlers for Pan
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    hasMoved.current = false;
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    hasMoved.current = true;
    setTransform({ ...transform, x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Touch Handlers for Mobile Pan
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    hasMoved.current = false;
    setDragStart({ x: e.touches[0].clientX - transform.x, y: e.touches[0].clientY - transform.y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    hasMoved.current = true;
    const newX = e.touches[0].clientX - dragStart.x;
    const newY = e.touches[0].clientY - dragStart.y;
    setTransform({ ...transform, x: newX, y: newY });
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Wheel Handler for Zoom
  const handleWheel = (e: React.WheelEvent) => {
    const scaleAmount = -e.deltaY * 0.001;
    const newScale = Math.min(Math.max(0.5, transform.scale + scaleAmount), 2);
    setTransform({ ...transform, scale: newScale });
  };

  const handleReset = () => setTransform({ x: 0, y: 0, scale: 1 });

  // Navigation Helper (prevents drag click conflict)
  const handleNodeClick = (e: React.MouseEvent | React.TouchEvent, id: string) => {
    e.stopPropagation(); // Stop pan logic
    if (!hasMoved.current) setFocusId(id);
  };
  
  const handleAddClick = (e: React.MouseEvent | React.TouchEvent, url: string) => {
    e.stopPropagation();
    if (!hasMoved.current) navigate(url);
  }

  if (!focusPerson) return <div className="p-10 text-center text-gray-500">Loading tree...</div>;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <AppNavbar />
      <div className="flex-grow flex overflow-hidden">
        {/* Sidebar (Kept static) */}
        <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col shrink-0 z-20 overflow-y-auto hidden md:flex">
           {/* ... (Sidebar Content same as before) ... */}
           <div className="p-4 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-2">Quick Actions</h3>
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
          <div className="p-4">
             <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Tree Stats</h3>
             <div className="text-sm text-gray-600 dark:text-gray-300">
                People: <span className="font-bold">{people.length}</span>
             </div>
          </div>
        </aside>
        
        {/* Infinite Canvas */}
        <main 
          className="flex-grow bg-[#f0f4f8] dark:bg-[#111] relative overflow-hidden cursor-grab active:cursor-grabbing touch-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          ref={containerRef}
        >
          {/* Background Grid */}
          <div 
            className="absolute inset-0 z-0 opacity-10 dark:opacity-5 pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(#4a7729 1px, transparent 1px)', 
              backgroundSize: '24px 24px',
              transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
              transformOrigin: '0 0'
            }}
          ></div>

          {/* Controls */}
          <div className="absolute top-4 right-4 z-50 flex flex-col gap-2">
            <div className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex flex-col gap-1">
              <button onClick={() => setTransform({...transform, scale: transform.scale + 0.1})} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-300" title="Zoom In">
                <span className="material-symbols-outlined">add</span>
              </button>
              <button onClick={() => setTransform({...transform, scale: transform.scale - 0.1})} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-300" title="Zoom Out">
                <span className="material-symbols-outlined">remove</span>
              </button>
              <div className="h-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
              <button onClick={handleReset} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-300" title="Reset View">
                <span className="material-symbols-outlined">center_focus_strong</span>
              </button>
            </div>
          </div>
          
          {/* Tree Content Container */}
          <div 
            className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center transition-transform duration-75 ease-out origin-center"
            style={{ 
              transform: `translate(calc(-50% + ${transform.x}px), calc(-50% + ${transform.y}px)) scale(${transform.scale})`,
            }}
          >
            
            {/* --- GENERATION 1: PARENTS --- */}
            <div className="flex gap-24 relative mb-16">
               {/* Father */}
              <div className="relative">
                <NodeCard 
                    person={father} 
                    isEmpty={!father} 
                    role="Add Father" 
                    onClick={(e) => father && handleNodeClick(e, father.id)}
                    onAdd={(e) => handleAddClick(e, `/add-person?childId=${focusId}&relation=FATHER`)}
                />
                <div className="absolute top-full left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
              </div>

               {/* Mother */}
              <div className="relative">
                 <NodeCard 
                    person={mother} 
                    isEmpty={!mother} 
                    role="Add Mother" 
                    onClick={(e) => mother && handleNodeClick(e, mother.id)}
                    onAdd={(e) => handleAddClick(e, `/add-person?childId=${focusId}&relation=MOTHER`)}
                 />
                 <div className="absolute top-full left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
              </div>
              
              {/* Connector between parents */}
              <div className="absolute top-1/2 left-[calc(25%+1rem)] right-[calc(25%+1rem)] h-px bg-gray-300 -z-10"></div>
            </div>

            {/* --- GENERATION 2: SIBLINGS + FOCUS + SPOUSE --- */}
            <div className="flex items-start gap-8 relative">
                
                {/* Siblings (Left) */}
                {siblings.length > 0 && (
                  <div className="flex gap-4 mr-4">
                     {siblings.map(sib => (
                        <NodeCard key={sib.id} person={sib} isSmall onClick={(e) => handleNodeClick(e, sib.id)} />
                     ))}
                  </div>
                )}

                {/* Focus Person Group */}
                <div className="relative">
                   {/* Connector to Parents */}
                   <div className="absolute bottom-full left-1/2 w-px h-16 bg-gray-300 -translate-x-1/2"></div>
                   {/* Horizontal bar joining parents connector */}
                   <div className="absolute bottom-[calc(100%+32px)] left-1/2 w-48 h-px bg-gray-300 -translate-x-1/2"></div>

                   <div className="flex items-center gap-12">
                      <FocusNodeCard person={focusPerson} />
                      
                      {/* Spouse */}
                      {spouse ? (
                         <div className="relative">
                            <div className="absolute top-1/2 right-full w-12 h-px bg-gray-300"></div>
                            <div className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-1/2 text-gray-400 bg-[#f0f4f8] dark:bg-[#111] px-1 text-xs">♥</div>
                            <NodeCard person={spouse} onClick={(e) => handleNodeClick(e, spouse.id)} />
                         </div>
                      ) : (
                         <div className="relative opacity-50 hover:opacity-100 transition">
                            <div className="absolute top-1/2 right-full w-12 h-px bg-gray-300 border-dashed border-t"></div>
                             <Link to={`/add-person?spouseId=${focusId}&relation=SPOUSE`} onClick={(e) => e.stopPropagation()} className="w-24 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary bg-white/50 block no-underline text-current">
                                <span className="material-symbols-outlined text-gray-400 mb-1">favorite</span>
                                <span className="text-[10px] text-gray-500 uppercase font-bold">Add Spouse</span>
                             </Link>
                         </div>
                      )}
                   </div>
                   
                   {/* Connector to Children */}
                   {children.length > 0 && (
                      <div className="absolute top-full left-1/2 w-px h-16 bg-gray-300 -translate-x-1/2"></div>
                   )}
                </div>

            </div>

            {/* --- GENERATION 3: CHILDREN --- */}
            <div className="flex gap-8 relative mt-16">
                {children.length > 0 && (
                   <div className="absolute bottom-full left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
                )}
                {/* Horizontal bar for children */}
                {children.length > 1 && (
                     <div className="absolute bottom-full left-[2rem] right-[2rem] h-px bg-gray-300"></div>
                )}

                {children.map(child => (
                    <div key={child.id} className="relative">
                        <div className="absolute bottom-full left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
                        <NodeCard person={child} onClick={(e) => handleNodeClick(e, child.id)} />
                    </div>
                ))}

                <div className="relative">
                    <div className="absolute bottom-full left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
                    <Link to={`/add-person?parentId=${focusId}&relation=CHILD`} onClick={(e) => e.stopPropagation()} className="flex flex-col items-center justify-center w-24 h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary cursor-pointer text-gray-400 hover:text-primary transition bg-white/50 dark:bg-gray-800/50">
                        <span className="material-symbols-outlined mb-1">child_care</span>
                        <span className="text-xs font-bold uppercase">Add Child</span>
                    </Link>
                </div>
            </div>

          </div>
        </main>
        
        {/* Right Details Panel (Kept static, same as before) */}
        <aside className="w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 flex flex-col shrink-0 z-20 hidden xl:flex shadow-xl">
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
              {spouse && (
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="material-symbols-outlined text-gray-400">favorite</span>
                    <span>Spouse: <span className="text-gray-900 dark:text-gray-200 font-medium">{spouse.firstName} {spouse.lastName}</span></span>
                </div>
              )}
            </div>
          </div>
          <div className="p-4 bg-[#f8fcfd] dark:bg-gray-800/50 flex-grow">
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
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">1940 US Census</p>
                <p className="text-xs text-gray-500 mb-3">Found match for <span className="font-semibold">{focusPerson.firstName} (Age 5)</span>.</p>
                <div className="flex gap-2">
                    <button className="flex-1 bg-accent-blue text-white py-1 rounded text-xs font-bold hover:bg-blue-600">Review</button>
                </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;