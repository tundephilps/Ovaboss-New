import { FullProduct } from "./product.type";

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

export interface Wishlist {
  productId: number;
  productName: string;
  description: string;
  productImage: string;
  variantDetails: VariantDetails | null;
  price: string;  
  quantity: string;
}

export interface UseWishlist {
    shouldGetWishlist?: boolean;
}

export interface AddToWishlistProps {
  productId: number;
  variantId?: number;
  product?: FullProduct;
  shouldShowToast?: boolean;
  quantity: number | string;
  addToServer?: boolean;
}