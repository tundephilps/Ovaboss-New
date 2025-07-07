export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  country: string;
  userType: string;
  verified: boolean;
  pin: string;
  sponsor: string;
  parent_pin: string;
  level: string;
  position: string;
  profile_complete: boolean;
  stars: string;
  gender: string;
  remember_token: string;
  smile_status: string;
  profile_picture: string;
  date_of_birth: string;
  userId: string;
  fullName: string;
  dateOfBirth: string | null;
  defaultCurrency: string | null;
  nid: string | null;
  nextOfKin: string | null;
  bankAccountDetails: any[];  // You can define a separate interface if needed
  address: any[];             // Same as above
  token: string;
}
