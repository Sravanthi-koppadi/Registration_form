export interface AppUser {
  id?: number;              // Optional for new users
  firstName: string;
  lastName: string;
  email: string;
  password?: string;        // Optional if editing an existing user
  phone: string;
  dob: string;              // Format: YYYY-MM-DD
  gender: 'male' | 'female' | 'other' | '';
  qualification: string;
  aboutMe?: string;         // Matches your "description" field
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  skills?: string[];        // If you want to handle multiple checkboxes
  course?: string;          // Matches your "dropdown" menu
}