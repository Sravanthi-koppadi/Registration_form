export interface AppUser {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  gender: 'male' | 'female' | 'other' | '';
  qualification: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}