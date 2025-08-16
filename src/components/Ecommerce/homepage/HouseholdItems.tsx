import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
// import Product2 from "../../../assets/Product2.png";

import { useNavigate } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { numberFormat } from "../../../utils";
import Loading from "../../Loading";
import { Product } from "../../../types/product.type";
import { useAppContext } from "../../../context/AppContext";
import ProductCardSkeleton from "../../skeletons/ProductCardSkeleton";
import NoProducts from "../../NoProducts";

export default function HouseholdItems() {
  const navigate = useNavigate();
  const { allProducts, isLoading } = useProduct({ shouldGetAllProducts: true, shouldGetBusinessCategoryType: false, shouldGetCategory: false, })
  const { setCurrentProduct } = useAppContext();

  const handleOpenProductDetails = (product: Product) => {
    setCurrentProduct(product);
    navigate(`/ProductDetails/${product.productId}`);
  };

  return (
    <div className="rounded-lg w-full pb-12 ">
      <h2 className="text-lg font-bold mb-4 text-gray-800 bg-[#FFF9E6] w-full lg:px-12 px-4 py-2">
        Latest Products
      </h2>

      {!isLoading.allProducts && allProducts.length === 0 && <NoProducts />}

      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:px-12 px-4">
        {isLoading.allProducts &&
          Array.from({ length: 12 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}

        {allProducts.map((product, key) => (
          <div
            key={key}
            onClick={() => handleOpenProductDetails(product)}
            className="flex-1 bg-white rounded-lg p-3 border shadow-lg cursor-pointer"
          >
            <div className="relative">
              <span className="absolute top-0 left-0 bg-[#FFF0E6] text-[#FF0000] text-xs font-semibold py-1 px-2 rounded-full">
                {/* -{product.discount}% */}
              </span>
              <img
                src={product.productImages[0].imageUrl}
                alt={product.title}
                className="w-full h-40 object-contain mb-2"
              />
            </div>

            <h3 className="text-sm font-medium mb-1 line-clamp-2 h-10">
              {product.title}
            </h3>

            <div className="flex flex-col gap-1 mb-2">
              <div className="inline-flex items-center justify-between w-full">
                <div className="font-bold text-lg text-gray-900">
                  £{numberFormat(product.main_price, 2)}
                </div>
                <button className="ml-auto border-yellow-200 border hover:bg-yellow-500 w-10  h-6 rounded-full flex items-center justify-center">
                  <FaShoppingCart className="text-yellow-300" size={14} />
                </button>
              </div>

              <div className="text-xs text-gray-500 line-through ">
                {/* £{formatPrice(product.originalPrice)} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
