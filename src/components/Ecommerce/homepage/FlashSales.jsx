import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Product1 from "../../../assets/Product1.png";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border border-yellow-200 rounded-lg p-3 relative flex flex-col cursor-pointer "
      onClick={() => navigate("/ProductDetails")}
    >
      {/* Discount badge */}
      {product.discount && (
        <div className="absolute top-2 left-2 bg-[#FFF0E6] text-[#FF0000] text-xs font-semibold py-1 px-2 rounded-full">
          {product.discount}
        </div>
      )}

      {/* Product image */}
      <div className="flex items-center justify-center h-48 mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product name */}
      <h3 className="text-gray-800 font-medium mb-1 line-clamp-2 h-12">
        {product.name}
      </h3>

      {/* Price section */}
      <div className="mt-auto">
        <div className="inline-flex items-center justify-between w-full">
          <div className="font-bold text-lg text-gray-900">
            £{product.currentPrice.toLocaleString()}
          </div>
          <button className="ml-auto border-yellow-200 border hover:bg-yellow-500 w-10  h-6 rounded-full flex items-center justify-center">
            <FaShoppingCart className="text-yellow-300" size={14} />
          </button>
        </div>

        {product.originalPrice && (
          <div className="text-gray-500 line-through text-xs">
            £{product.originalPrice.toLocaleString()}
          </div>
        )}

        {/* Stock indicator */}
        <div className="text-[10px] text-gray-600 mt-1">
          Only {product.stockLeft} items left
        </div>

        {/* Add to cart button */}
        <div className="mt-2 flex items-center">
          <div
            className={`h-2 w-full bg-gray-200 rounded-full overflow-hidden ${
              product.stockLeft < 20 ? "bg-red-200" : ""
            }`}
          >
            <div
              className={`h-full ${
                product.stockLeft < 20 ? "bg-red-500" : "bg-yellow-500"
              }`}
              style={{
                width: `${Math.min(
                  100,
                  (product.stockLeft / product.totalStock) * 100
                )}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlashSales = () => {
  const products = [
    {
      id: 1,
      name: "Apple iPad Pro 32.77cm",
      image: Product1,
      currentPrice: 496370,
      originalPrice: 625000,
      discount: "-28.7%",
      stockLeft: 18,
      totalStock: 100,
    },
    {
      id: 2,
      name: "IOPE MEN BIO Anti-aging Essence",
      image: Product1,
      currentPrice: 12750,
      originalPrice: 15000,
      discount: "-53%",
      stockLeft: 432,
      totalStock: 1000,
    },
    {
      id: 3,
      name: "Samsung Galaxy S23 Ultra 256GB",
      image: Product1,
      currentPrice: 89999,
      originalPrice: 119999,
      discount: "-25%",
      stockLeft: 45,
      totalStock: 200,
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      image: Product1,
      currentPrice: 27999,
      originalPrice: 34999,
      discount: "-20%",
      stockLeft: 124,
      totalStock: 500,
    },
    {
      id: 5,
      name: "Nintendo Switch OLED Model with White Joy-Con",
      image: Product1,
      currentPrice: 29999,
      originalPrice: 34999,
      discount: "-14%",
      stockLeft: 72,
      totalStock: 300,
    },
    {
      id: 6,
      name: "Apple MacBook Air M2 Chip 13.6-inch",
      image: Product1,
      currentPrice: 119950,
      originalPrice: 129900,
      discount: "-8%",
      stockLeft: 9,
      totalStock: 100,
    },
  ];

  return (
    <div className="lg:px-12 mx-auto px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
