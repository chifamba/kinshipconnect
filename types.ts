export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  gender: 'Male' | 'Female' | 'Other';
  birthDate?: string;
  birthPlace?: string;
  isLiving: boolean;
  fatherId?: string;
  motherId?: string;
  spouseId?: string;
  photoUrl?: string;
}

export type RelationshipType = 'FATHER' | 'MOTHER' | 'SPOUSE' | 'CHILD';

export interface User {
  name: string;
  email: string;
  isAuthenticated: boolean;
}