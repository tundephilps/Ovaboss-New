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
  variantDetails: VariantDetails;
}

export interface UseWishlist {
    shouldGetWishlist?: boolean;
}

export interface WishlistWithQuantity extends Wishlist {
  quantity?: number;
}

export interface AddToWishlistProps {
  productId: number;
  variantId: number;
  product?: FullProduct;
  shouldShowToast?: boolean;
  addToServer?: boolean;
}