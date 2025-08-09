import { Category, SubCategory } from "./category.type";

export interface ProductCategory extends Category{}

export interface ProductSubCategory extends SubCategory{}

export interface ProductVariant {
    name: string;
    id: number;
}

export interface ProductInput {
    business_id: string;
    product_type_id: string;
    category_id: string;
    sub_category_id: string;
    title: string;
    brand: string;
    weight: string;
    highlights: string;
    description: string;
    notes: string;
    main_price: string;
    production_country: string;
    images: File[];
}

export interface ProductVariantOption {
  variant_type_id: string;
  variant: string;
}

export interface ProductInputVariant {
  price: string;
  stock: string;
  variants: ProductVariantOption[];
}

export interface BusinessCategoryType {
  type: string;
  id: number;
}

export interface ProductImage {
  imageUrl: string;
  thumbnail: string | null;
}

export interface ProductSubVariant {
    variantTypeId: string;
    variant: string;
    variantType: string;
}

export interface ProductFullVariant {
    id: number;
    price: string;
    stock: number;
    isActive: boolean;
    variants: ProductSubVariant[];
}

export interface ProductReview {
    sender: string;
    star: string;
    review: string;
    createdAt: string;
}

export interface Product {
  productId: number;
  productType: string;
  category: string;
  title: string;
  main_price: number;
  description: string;
  approvalStatus: string;
  status: string;
  createdAt: string;
  productImages: ProductImage[];
}

export interface ProductBusinessInformation {
  id: number;
  name: string;
  storeName: string;
  link: string | null;
  logo: string;
  description: string;
  businessCategoryType: string[];
}

export interface FullProduct extends Product{
    productVariants: ProductFullVariant[];
    productReviews: ProductReview[];
    businessInformation: ProductBusinessInformation;
}

export interface VariantTable {
    tableHead: string[],
    tableData: string[][]
}

export interface IsLoading {
    productCategory: boolean,
    productSubCategory: boolean,
    productVariants: boolean,
    allProducts: boolean,
    myProducts: boolean,
    addProduct: boolean,
    productType: boolean,
    isSaving: boolean,
}

export interface UseProductProps {
    shouldGetAllProducts?: boolean;
    shouldGetMyProducts?: boolean;
}