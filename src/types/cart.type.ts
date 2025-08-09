export interface VariantOption {
  key: string | null;
  value: string;
}

export interface VariantDetails {
  id: number;
  price: string;
  stock: number;
  isActive: boolean;
  variants: VariantOption[];
}

export interface Cart {
  productId: number;
  productName: string;
  description: string;
  productImage: string;
  variantDetails: VariantDetails;
}

export interface UseCart {
    shouldGetCart?: boolean;
}