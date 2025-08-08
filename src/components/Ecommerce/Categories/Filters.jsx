import React from "react";

import { FaStar } from "react-icons/fa";

const SidebarFilter = () => {
  return (
    <div className="">
      {/* Category */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-500 mb-2">CATEGORY</h3>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>Men's Wear</li>
          <div className="space-y-2 text-sm text-gray-700">
            {["T-shirt", "Formal Suits", "Jeans", "Shorts", "Jeans"].map(
              (brand, key) => (
                <label key={key} className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-yellow-500" />
                  <span>{brand}</span>
                </label>
              )
            )}
          </div>
        </ul>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-500 mb-2">BRAND</h3>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm mb-3"
        />
        <div className="space-y-2 text-sm text-gray-700">
          {[
            "Bestwin",
            "Binbond",
            "Bs Bee Sister",
            "Cggarry",
            "Calvin Klein",
          ].map((brand) => (
            <label key={brand} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-yellow-500" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-500 mb-2">COLOR</h3>
        <div className="space-y-2 text-sm text-gray-700">
          {["Beige", "Black", "Blue", "Brown", "Cyan"].map((color) => (
            <label key={color} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-yellow-500" />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div>
        <h3 className="text-xs font-bold text-gray-500 mb-2">GENDER</h3>
        <div className="space-y-2 text-sm text-gray-700">
          {["Boys", "Female", "Girls", "Male"].map((gender) => (
            <label key={gender} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-yellow-500" />
              <span>{gender}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <div className="flex justify-between text-xs font-bold text-gray-600 pt-4">
          <span>PRICE (₦)</span>
          <span className="text-yellow-500 cursor-pointer">Apply</span>
        </div>
        <input
          type="range"
          min="299"
          max="150000"
          className="w-full mt-2 accent-yellow-500"
        />
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="299"
            className="w-1/2 p-1 border border-gray-300 rounded"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            placeholder="150000"
            className="w-1/2 p-1 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Discount Charge */}
      <div>
        <h3 className="text-xs font-bold text-gray-600 py-2 pt-4">
          DISCOUNT CHARGE
        </h3>
        {[
          "50% or more",
          "40% or more",
          "30% or more",
          "20% or more",
          "10% or more",
        ].map((discount) => (
          <label key={discount} className="flex items-center space-x-2 mb-1">
            <input type="radio" name="discount" className="accent-yellow-500" />
            <span>{discount}</span>
          </label>
        ))}
      </div>

      {/* Delivery and Collection */}
      <div>
        <h3 className="text-xs font-bold text-gray-600 mb-2 pt-4">
          DELIVERY AND COLLECTION
        </h3>
        <label className="flex items-center space-x-2 mb-1">
          <input type="checkbox" className="accent-yellow-500" />
          <span>Delivery available (7680)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-yellow-500" />
          <span>Collect from store (9450)</span>
        </label>
      </div>

      {/* State */}
      <div>
        <h3 className="text-xs font-bold text-gray-600 mb-2 pt-4">STATE</h3>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-2 py-1 border border-gray-300 rounded mb-2"
        />
        {["Lagos", "Osun", "Enugu", "Benue", "Nasarawa"].map((state) => (
          <label key={state} className="flex items-center space-x-2 mb-1">
            <input type="checkbox" className="accent-yellow-500" />
            <span>{state}</span>
          </label>
        ))}
      </div>

      {/* Product Rating */}
      <div>
        <h3 className="text-xs font-bold text-gray-600 mb-2">PRODUCT RATING</h3>
        {[5, 4, 3, 2].map((rating) => (
          <label key={rating} className="flex items-center space-x-2 mb-1">
            <input type="radio" name="rating" className="accent-yellow-500" />
            <div className="flex items-center space-x-1">
              {Array.from({ length: rating }).map((_, i) => (
                <FaStar key={i} size={14} fill="orange" stroke="orange" />
              ))}
              <span className="ml-1 text-xs text-gray-600">& above</span>
            </div>
          </label>
        ))}
      </div>

      {/* Location Input */}
      <div>
        <h3 className="text-xs font-bold text-gray-600 my-2 pt-2">
          CHECK STOCK IN YOUR AREA
        </h3>
        <div className="flex border border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Enter town or full postcode"
            className="w-full px-2 py-1 text-sm"
          />
          <button className="bg-gray-100 px-2 text-gray-500">🔍</button>
        </div>
      </div>

      {/* Seller Score */}
      <div>
        <h3 className="text-xs font-bold text-gray-600 pt-4 mb-2">
          SELLER SCORE
        </h3>
        {["80% or more", "60% or more", "40% or more", "20% or more"].map(
          (score) => (
            <label key={score} className="flex items-center space-x-2 mb-1">
              <input
                type="radio"
                name="sellerScore"
                className="accent-yellow-500"
              />
              <span>{score}</span>
            </label>
          )
        )}
      </div>

      {/* Shipped From */}
      <div>
        <h3 className="text-xs font-bold text-gray-600 my-2 pt-2">
          SHIPPED FROM
        </h3>
        <label className="flex items-center space-x-2 mb-1">
          <input type="checkbox" className="accent-yellow-500" />
          <span>Shipped from abroad</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-yellow-500" />
          <span>Shipped from Locality</span>
        </label>
      </div>

      {/* Size */}
      <div>
        <h3 className="text-xs font-bold text-gray-600 mb-2 pt-4">SIZE</h3>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-2 py-1 border border-gray-300 rounded mb-2"
        />
        {["XXS", "XS", "S", "S/M", "M"].map((size) => (
          <label key={size} className="flex items-center space-x-2 mb-1">
            <input type="checkbox" className="accent-yellow-500" />
            <span>{size}</span>
          </label>
        ))}
      </div>

      {/* Material Family */}
      <div>
        <h3 className="text-xs font-bold text-gray-600 mb-2 mt-4">
          MATERIAL FAMILY
        </h3>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-2 py-1 border border-gray-300 rounded mb-2"
        />
        {[
          "Acetate",
          "Acier inoxydable",
          "Acrylic",
          "Aluminium",
          "Blended Cotton",
        ].map((material) => (
          <label key={material} className="flex items-center space-x-2 mb-1">
            <input type="checkbox" className="accent-yellow-500" />
            <span>{material}</span>
          </label>
        ))}
      </div>

      {/* Official Store */}
      <div>
        <h3 className="text-xs font-bold text-gray-600 mb-2 pt-4">
          OFFICIAL STORE
        </h3>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-yellow-500" />
          <span>Only Official Store</span>
        </label>
      </div>
    </div>
  );
};

export default SidebarFilter;
