export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  country: string;
  userType: string;
  verified: boolean;
  currencyCode: string;
  pin: string;
  sponsor: string;
  parentPin: string;
  level: string;
  position: string;
  profileComplete: boolean;
  stars: string;
  remember_token: string;
  smile_status: string;
  profilePicture: string;
  userId: string;
  fullName: string;
  dateOfBirth: string | null;
  defaultCurrency: string | null;
  nid: string | null;
  nextOfKin: NextOfKin;
  bankAccountDetails: BankAccountDetails[];
  address: Address[];
  token: string;
}

export interface NextOfKin {
  fullName: string;
  birthDate: string; // ISO date string (e.g. "2025-06-24")
  address: string;
  email: string;
  phoneNumber: string;
  nationality: string;
}

export interface BankAccountDetails {
  id: number;
  bankId: string;
  bankName: string;
  countryId: string;
  countryName: string;
  bankAccountTypeId: string;
  bankAccountType: string;
  accountNumber: string;
  accountName: string;
  swiftCode: string;
  recipientCode: string;
}

export interface Address {
  id: number;
  address: string;
  cityId: string;
  city: string;
  stateId: string;
  state: string;
  postalCode: string;
  countryId: string;
  country: string;
  contactPerson: string;
}

