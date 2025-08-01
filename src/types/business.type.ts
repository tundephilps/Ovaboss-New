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
