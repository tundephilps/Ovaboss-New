import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import Product2 from "../../../assets/Product2.png";

import { useNavigate } from "react-router-dom";

export default function Dealoftheday() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Unilove High Capacity Backpack",
      image: Product2,
      currentPrice: 26731,
      originalPrice: 41791,
      discount: 36,
      rating: 4.8,
      countdown: "Less than 6hrs left",
    },
    {
      id: 2,
      name: "WMARK Digital Rechargeable Hair Clipper",
      image: Product2,
      currentPrice: 29000,
      originalPrice: 38000,
      discount: 24,
      rating: 4.5,
      countdown: "Less than 2hrs left",
    },
  ];

  // Format price with commas
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="rounded-lg w-full pb-12 ">
      <h2 className="text-lg font-bold mb-4 text-gray-800 bg-[#FFF9E6] w-full lg:px-12 px-4 py-2">
        Deals of the day
      </h2>

      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:px-12 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate("/ProductDetails")}
            className="flex-1 bg-white rounded-lg p-3 border shadow-lg cursor-pointer"
          >
            <div className="relative">
              <span className="absolute top-0 left-0 bg-[#FFF0E6] text-[#FF0000] text-xs font-semibold py-1 px-2 rounded-full">
                -{product.discount}%
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-2"
              />
            </div>

            <h3 className="text-sm font-medium mb-1 line-clamp-2 h-10">
              {product.name}
            </h3>

            <div className="flex flex-col gap-1 mb-2">
              <div className="inline-flex items-center justify-between w-full">
                <div className="font-bold text-lg text-gray-900">
                  £{product.currentPrice.toLocaleString()}
                </div>
                <button className="ml-auto border-yellow-200 border hover:bg-yellow-500 w-10  h-6 rounded-full flex items-center justify-center">
                  <FaShoppingCart className="text-yellow-300" size={14} />
                </button>
              </div>

              <div className="text-xs text-gray-500 line-through ">
                £{formatPrice(product.originalPrice)}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-[10px] text-[#202020]  py-0.5 flex items-center gap-0.5">
                  <span className="font-medium">{product.countdown}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
