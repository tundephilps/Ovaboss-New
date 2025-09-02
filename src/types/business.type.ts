import { Address } from "./user.type";

export interface BusinessCategoryType {
    type: string;
    id: number;
    createdAt: string;
}

export interface BusinessCategory {
    id: number;
    category: string;
}

export interface BusinessType {
    id: number;
    type: string;
}

export interface BusinessSalesType {
    id: number;
    type: string;
}

export interface BusinessScale {
    id: number;
    scale: string;
}

export interface BusinessData {
    categories: BusinessCategory[];
    categoryTypes: BusinessCategoryType[];
    salesTypes: BusinessSalesType[];
    businessScales: BusinessScale[];
    businessTypes: BusinessSalesType[];
}

export interface BusinessAccount {
  id: number;
  name: string;
  storeName: string;
  link: string | null;
  logo: string;
  description: string;
  businessCategoryType: string[];
}


export interface BusinessCategoryType {
  id: number;
  name: string;
}

export interface BusinessSpeciality {
  businessScale: string;
  businessCategory: string;
}

export interface BusinessAccountDetails {
  id: number;
  name: string;
  storeName: string;
  link: string | null;
  logo: string | null;
  description: string | null;
  isRegistered: boolean | null;
  registrationNumber: string;
  registrationDate: string | null;
  storeSlug: string;
  tin: string | null;
  country: string;
  stars: string;
  assignedBy: string | null;
  assignedTo: string | null;
  verifiedBy: string | null;
  phone: string;
  businessCategoryType: BusinessCategoryType[];
  address: Address;
  businessSpeciality: BusinessSpeciality;
  salesType: BusinessSalesType[];
  businessType: BusinessType[];
}
