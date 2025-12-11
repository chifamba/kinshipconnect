import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import { useTree } from '../context/TreeContext';
import { Person } from '../types';

const AddPerson = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { addPerson, getPerson, updatePerson } = useTree();
  
  // Parse query params to determine relationship
  const childId = searchParams.get('childId');
  const parentId = searchParams.get('parentId');
  const spouseId = searchParams.get('spouseId');
  const relationType = searchParams.get('relation'); // 'FATHER', 'MOTHER', 'CHILD', 'SPOUSE'

  const relativeName = childId 
    ? getPerson(childId)?.firstName 
    : parentId 
      ? getPerson(parentId)?.firstName 
      : spouseId
        ? getPerson(spouseId)?.firstName
        : 'Relative';

  const [formData, setFormData] = useState<Partial<Person>>({
    firstName: '',
    lastName: '',
    gender: 'Male',
    birthDate: '',
    birthPlace: '',
    isLiving: true,
  });

  // Set default gender based on relation type
  useEffect(() => {
    if (relationType === 'FATHER') setFormData(prev => ({ ...prev, gender: 'Male' }));
    if (relationType === 'MOTHER') setFormData(prev => ({ ...prev, gender: 'Female' }));
    if (relationType === 'SPOUSE' && spouseId) {
        const spouse = getPerson(spouseId);
        if (spouse && spouse.gender === 'Male') setFormData(prev => ({ ...prev, gender: 'Female' }));
        if (spouse && spouse.gender === 'Female') setFormData(prev => ({ ...prev, gender: 'Male' }));
    }
  }, [relationType, spouseId, getPerson]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct new person object
    const newPerson: any = {
      ...formData,
      firstName: formData.firstName?.trim(),
      lastName: formData.lastName?.trim(),
    };
    
    // Logic for adding a CHILD (link child to existing parent)
    if (relationType === 'CHILD' && parentId) {
       const parent = getPerson(parentId);
       if (parent) {
         if (parent.gender === 'Male') {
            newPerson.fatherId = parentId;
            // Robustness: If the father has a spouse, assume she is the mother
            if (parent.spouseId) newPerson.motherId = parent.spouseId;
         } else {
            newPerson.motherId = parentId;
            // Robustness: If the mother has a spouse, assume he is the father
            if (parent.spouseId) newPerson.fatherId = parent.spouseId;
         }
       }
    }

    // Logic for adding a SPOUSE (link new person to existing spouse)
    if (relationType === 'SPOUSE' && spouseId) {
        newPerson.spouseId = spouseId;
    }

    // Add the person and get the new ID
    const newPersonId = addPerson(newPerson);
    
    // Logic for adding a PARENT (link existing child to new parent)
    if (relationType === 'FATHER' && childId) {
        updatePerson(childId, { fatherId: newPersonId });
    }
    else if (relationType === 'MOTHER' && childId) {
        updatePerson(childId, { motherId: newPersonId });
    }
    // Logic for linking the existing spouse to the new person
    else if (relationType === 'SPOUSE' && spouseId) {
        updatePerson(spouseId, { spouseId: newPersonId });
    }

    // Redirect logic:
    let nextFocusId = newPersonId; 
    
    if (childId) {
        nextFocusId = childId; 
    } else if (parentId) {
        nextFocusId = parentId;
    } else if (spouseId) {
        nextFocusId = spouseId;
    }

    navigate(`/dashboard?focusId=${nextFocusId}`);
  };

  return (
    <>
      <AppNavbar />
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/dashboard" className="hover:text-primary">My Trees</Link>
          <span className="material-icons text-base">chevron_right</span>
          <span className="text-gray-800 dark:text-white font-semibold">Add Person</span>
        </div>
      </div>
      <main className="py-12 px-4 bg-background-light dark:bg-background-dark min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-display text-gray-900 dark:text-white mb-2">Grow your family tree</h1>
            <p className="text-gray-600 dark:text-gray-300">
              {relationType ? `Adding ${relationType.toLowerCase()} to ${relativeName}.` : 'Add a relative to discover more connections.'}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-200 dark:border-gray-700 overflow-hidden">
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
                            <input 
                              className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm dark:text-white" 
                              placeholder="First Name" 
                              required 
                              type="text" 
                              value={formData.firstName}
                              onChange={e => setFormData({...formData, firstName: e.target.value})}
                            />
                          </div>
                          <div className="flex-1">
                            <input 
                              className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm dark:text-white" 
                              placeholder="Last Name" 
                              required 
                              type="text" 
                              value={formData.lastName}
                              onChange={e => setFormData({...formData, lastName: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <input 
                            className="rounded text-primary focus:ring-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700" 
                            id="living" 
                            type="checkbox" 
                            checked={formData.isLiving}
                            onChange={e => setFormData({...formData, isLiving: e.target.checked})}
                          />
                          <label className="text-sm text-gray-600 dark:text-gray-400" htmlFor="living">This person is living</label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Gender</label>
                        <select 
                          className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm dark:text-white"
                          value={formData.gender}
                          onChange={e => setFormData({...formData, gender: e.target.value as any})}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other / Unknown</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Birth Date</label>
                        <input 
                          className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm dark:text-white" 
                          type="date" 
                          value={formData.birthDate}
                          onChange={e => setFormData({...formData, birthDate: e.target.value})}
                        />
                        <p className="text-xs text-gray-500 mt-1">Approximate dates are okay</p>
                      </div>
                      <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Birth Place</label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">location_on</span>
                          <input 
                            className="pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary focus:ring-primary shadow-sm dark:text-white" 
                            placeholder="City, County, State, Country" 
                            type="text" 
                            value={formData.birthPlace}
                            onChange={e => setFormData({...formData, birthPlace: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/30 px-8 py-5 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700">
                  <Link to={`/dashboard?focusId=${childId || parentId || spouseId || ''}`} className="px-6 py-2 rounded-full font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition">Cancel</Link>
                  <button className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-8 rounded-full shadow-lg transition transform hover:-translate-y-0.5 flex items-center gap-2" type="submit">
                    <span className="material-icons text-sm">save</span>
                    Save Person
                  </button>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddPerson;