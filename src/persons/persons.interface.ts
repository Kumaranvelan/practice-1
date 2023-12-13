export interface Person {
  id: number;
  name: string;
  email: string;
  phone: string;
  website?: string;
  contact?: string;
  notes?: string;
  type: string[];
  categories: string[];
  commission?: number;
  dateOfBirth?: string;
  logo?: string;
  criticalAccounts: string[];
  payment: string[];
}
