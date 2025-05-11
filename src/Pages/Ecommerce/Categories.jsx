import React, { useState } from "react";
import BreadCrumb from "../../components/Ecommerce/Categories/BreadCrumb";
import Fashion1 from "../../assets/Fashion1.png";

import Product3 from "../../assets/Product3.png";
import SidebarFilter from "../../components/Ecommerce/Categories/Filters";
import { FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import Pagination from "../../components/Ecommerce/Categories/Pagination";
import RecentlyViewed from "../../components/Ecommerce/Categories/RecentlyViewed";
import { CiHeart } from "react-icons/ci";

const Categories = () => {
  const [sortOption, setSortOption] = useState("Popularity");
  const totalResults = 4506;

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const fashionItems = [
    { label: "Clothing", image: Fashion1 },
    { label: "Shoes", image: Fashion1 },
    { label: "Accessories", image: Fashion1 },
    { label: "Underwears", image: Fashion1 },
    { label: "Bags", image: Fashion1 },
    { label: "Watches", image: Fashion1 },
    { label: "Sneakers", image: Fashion1 },
    { label: "T-Shirt", image: Fashion1 },
    { label: "Palm Sandals", image: Fashion1 },
    { label: "Vintage Clothing", image: Fashion1 },
    { label: "Leather slippers", image: Fashion1 },
    { label: "Trads Wears", image: Fashion1 },
  ];

  const products = [
    {
      id: 1,
      name: "Unilove High Capacity Backpack",
      image: Product3,
      currentPrice: 26731,
      originalPrice: 41791,
      discount: 36,
      rating: 4.8,
      ratingCount: "High repeat customers store",
    },
    {
      id: 2,
      name: "WMARK Digital Rechargeable Hair Clipper",
      image: Product3,
      currentPrice: 29000,
      originalPrice: 38000,
      discount: 24,
      rating: 4.5,
      ratingCount: "Seller established over 2 years ago",
    },
    {
      id: 3,
      name: "Unilove High Capacity Backpack",
      image: Product3,
      currentPrice: 26731,
      originalPrice: 41791,
      discount: 36,
      rating: 4.8,
      ratingCount: "High repeat customers store",
    },
    {
      id: 4,
      name: "WMARK Digital Rechargeable Hair Clipper",
      image: Product3,
      currentPrice: 29000,
      originalPrice: 38000,
      discount: 24,
      rating: 4.5,
      ratingCount: "Seller established over 2 years ago",
    },
  ];

  // Format price with commas
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="lg:py-4 py-4  bg-[#faf9f9]">
      {/* Bread Crumb */}
      <BreadCrumb />
      <h2 className="text-center text-xl font-semibold py-2  bg-[#fff9e6]">
        Men’s Fashion and Accessories
      </h2>
      <div className="bg-white py-6 px-4 lg:mx-12 mx-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {fashionItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-2 bg-white rounded  hover:shadow-md transition"
            >
              <img
                src={`${item.image}`}
                alt={item.label}
                className="w-24 h-24 object-contain mb-2"
              />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between py-4 px-12 ">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold mr-3">T-shirt</h1>
          <span className="text-xs text-gray-500">
            1-48 of {totalResults} results
          </span>
        </div>

        <div className="flex items-center bg-[#e5e5e5] px-2 rounded-md">
          <label htmlFor="sort-by" className="text-sm text-gray-600 mr-2">
            Sort by:
          </label>
          <div className="relative bg-[#e5e5e5]">
            <select
              id="sort-by"
              value={sortOption}
              onChange={handleSortChange}
              className="appearance-none bg-[#e5e5e5] border  rounded px-3 py-1 pr-0 text-sm focus:outline-none "
            >
              <option value="Popularity">Popularity</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Newest">Newest</option>
              <option value="Customer Rating">Customer Rating</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="grid grid-cols-4 lg:px-12 gap-4">
        <div className="bg-white p-4 hidden lg:block">
          <SidebarFilter />
        </div>
        <div className="lg:col-span-3 col-span-4  px-2 lg:px-0">
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 ">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-1 bg-white rounded-lg p-2 border shadow-lg"
              >
                <div className="relative">
                  <span className="absolute top-1 left-2 bg-[#FFF0E6] text-[#FF0000] text-[10px] font-semibold py-1 px-2 rounded-full">
                    -{product.discount}%
                  </span>
                  <FaRegHeart
                    size={24}
                    className="absolute cursor-pointer top-1 right-2 z-50  text-yellow-500  font-semibold "
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mb-2"
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
                      <FaStar className="text-green-700" size={10} />
                      <span className="font-medium">{product.ratingCount}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Pagination />
        </div>
      </div>

      <RecentlyViewed />
    </div>
  );
};

export default Categories;
