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

export interface Cart {
  productId: number;
  productName: string;
  description: string;
  productImage: string;
  variantDetails: VariantDetails | null;
  quantity: string;
  price: string;
}

export interface UseCart {
  shouldGetCart?: boolean;
}

export interface AddToCartProps {
  productId: number;
  variantId?: number;
  product?: FullProduct;
  shouldShowToast?: boolean;
  cart?: Cart;
  quantity: number | string;
  addToServer?: boolean;
}

export interface CheckoutItems extends Cart {
  address: string;
}