import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import { Person, User } from '../types';

// Mock Initial Data
const INITIAL_PEOPLE: Person[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    gender: 'Male',
    birthDate: '1985-05-12',
    birthPlace: 'Portland, Oregon',
    isLiving: true,
    motherId: '2',
    fatherId: '3',
    photoUrl: undefined,
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    gender: 'Female',
    birthDate: '1955-05-12',
    birthPlace: 'Seattle, Washington',
    isLiving: true,
    fatherId: '4', // Robert
    spouseId: '3',
    photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe-oZXc_eEL5L6gD1IqsgKrQPzdUGJhUgHIldyBVHDaY6d7yqPINpzUOflkMxXOZkO491qXl_CLEhufyPHmuP7LPDYFzkbogYoC_bzIP89iISWO-3DFHwrhs1dF8ERt93yb25Xf3ag51xhkws10x6HfWFnQyDOxG9cZRXvip05QAcS81xwHcF5JntIXPUXrLq4sK1dvcPtN9na05scd3sl4HFlYWmJ1-3vq1PsE14cYAcm6l2zQWCPnJpy9OxNdr-4pxvE3537aW4c'
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Smith', // Father of John
    gender: 'Male',
    birthDate: '1950-01-10',
    birthPlace: 'Boston, Massachusetts',
    isLiving: true,
    spouseId: '2',
    photoUrl: undefined,
  },
  {
    id: '4',
    firstName: 'Robert',
    lastName: 'Evans',
    gender: 'Male',
    birthDate: '1920-03-15',
    birthPlace: 'Chicago, Illinois',
    isLiving: false,
    photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7n00kSO2NKkHS6ksQR1YRqo3lOQctf0bacpR2SNWE5PgR7cVnch6Q2lb4qvkrMJP0KXkc103mL1gzHbm3rb9iADn33LhyGLO-ZWaLY0IcV0m6YhqP66i5uzpK_Ou5cRb4-T4ix4JRFfx112YGVJabjUiWHWpiZpBnLnSF39dMuJnLfxMe3FONvY_zMYeZ71FzJHdTzkCN0H7dxbetnnqI6VV7-dEovt0KWc4eqlUFwZ0Mv50naFVP5Rnw-7kbIwJzWRG22uVRbCEb'
  },
  {
    id: '5',
    firstName: 'Emily',
    lastName: 'Smith',
    gender: 'Female',
    birthDate: '1988-06-20',
    birthPlace: 'Portland, Oregon',
    isLiving: true,
    fatherId: '3',
    motherId: '2',
    photoUrl: undefined,
  }
];

const STORAGE_KEY = 'kinship_tree_data';

interface TreeContextType {
  people: Person[];
  user: User;
  login: (name: string, email: string) => void;
  logout: () => void;
  addPerson: (person: Omit<Person, 'id'>) => string;
  updatePerson: (id: string, updates: Partial<Person>) => void;
  deletePerson: (id: string) => void;
  getPerson: (id: string) => Person | undefined;
  getParents: (id: string) => { father?: Person; mother?: Person };
  getChildren: (id: string) => Person[];
  getSiblings: (id: string) => Person[];
  getSpouse: (id: string) => Person | undefined;
  homePersonId: string;
  setHomePersonId: (id: string) => void;
}

const TreeContext = createContext<TreeContextType | undefined>(undefined);

export const TreeProvider = ({ children }: PropsWithChildren<{}>) => {
  // Initialize state from localStorage or fallback to initial mock data
  const [people, setPeople] = useState<Person[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_PEOPLE;
    } catch (e) {
      console.error("Failed to load tree data", e);
      return INITIAL_PEOPLE;
    }
  });

  const [user, setUser] = useState<User>({ name: 'Guest', email: '', isAuthenticated: false });
  const [homePersonId, setHomePersonId] = useState<string>('1');

  // Persist people to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(people));
    } catch (e) {
      console.error("Failed to save tree data", e);
    }
  }, [people]);

  const login = (name: string, email: string) => {
    setUser({ name, email, isAuthenticated: true });
  };

  const logout = () => {
    setUser({ name: 'Guest', email: '', isAuthenticated: false });
  };

  const addPerson = (newPerson: Omit<Person, 'id'>): string => {
    const id = Date.now().toString();
    const personWithId = { ...newPerson, id };
    setPeople((prev) => [...prev, personWithId]);
    return id;
  };

  const updatePerson = (id: string, updates: Partial<Person>) => {
    setPeople((prev) => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deletePerson = (id: string) => {
    setPeople((prev) => {
      // 1. Remove the person
      const filtered = prev.filter(p => p.id !== id);
      
      // 2. Clean up references in other people
      return filtered.map(p => ({
        ...p,
        fatherId: p.fatherId === id ? undefined : p.fatherId,
        motherId: p.motherId === id ? undefined : p.motherId,
        spouseId: p.spouseId === id ? undefined : p.spouseId
      }));
    });
  };

  const getPerson = (id: string) => people.find(p => p.id === id);

  const getParents = (id: string) => {
    const person = getPerson(id);
    if (!person) return {};
    return {
      father: people.find(p => p.id === person.fatherId),
      mother: people.find(p => p.id === person.motherId)
    };
  };

  const getChildren = (id: string) => {
    return people.filter(p => p.fatherId === id || p.motherId === id);
  };

  const getSiblings = (id: string) => {
    const person = getPerson(id);
    if (!person || (!person.fatherId && !person.motherId)) return [];
    return people.filter(p => p.id !== id && (
      (p.fatherId === person.fatherId && p.fatherId !== undefined) ||
      (p.motherId === person.motherId && p.motherId !== undefined)
    ));
  };

  const getSpouse = (id: string) => {
    const person = getPerson(id);
    if (!person || !person.spouseId) return undefined;
    return people.find(p => p.id === person.spouseId);
  }

  return (
    <TreeContext.Provider value={{
      people,
      user,
      login,
      logout,
      addPerson,
      updatePerson,
      deletePerson,
      getPerson,
      getParents,
      getChildren,
      getSiblings,
      getSpouse,
      homePersonId,
      setHomePersonId
    }}>
      {children}
    </TreeContext.Provider>
  );
};

export const useTree = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error('useTree must be used within a TreeProvider');
  }
  return context;
};