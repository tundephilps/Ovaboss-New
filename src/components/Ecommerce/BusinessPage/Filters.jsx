import React from "react";

import { FaStar } from "react-icons/fa";

const SidebarFilter = () => {
  return (
    <div className="">
      {/* Category */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-500 mb-2">CATEGORY</h3>
        <ul className="space-y-1 text-sm text-gray-700">
          <div className="space-y-2 text-sm text-gray-700">
            {[
              "Computer and Gadget",
              "Home and Office",
              "Beauty Products",
              "Gifts and Toys",
              "Business Service",
              "Health and Fitness",
            ].map((brand) => (
              <label key={brand} className="flex items-center space-x-2">
                <input type="checkbox" className="accent-yellow-500" />
                <span>{brand}</span>
              </label>
            ))}
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
      {/* <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-500 mb-2">COLOR</h3>
        <div className="space-y-2 text-sm text-gray-700">
          {["Beige", "Black", "Blue", "Brown", "Cyan"].map((color) => (
            <label key={color} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-yellow-500" />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div> */}

      {/* Gender */}
      {/* <div>
        <h3 className="text-xs font-bold text-gray-500 mb-2">GENDER</h3>
        <div className="space-y-2 text-sm text-gray-700">
          {["Boys", "Female", "Girls", "Male"].map((gender) => (
            <label key={gender} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-yellow-500" />
              <span>{gender}</span>
            </label>
          ))}
        </div>
      </div> */}

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

      {/* SIZE */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-500 mb-2">SIZE</h3>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm mb-3"
        />
        <div className="space-y-2 text-sm text-gray-700">
          {["XXS", "XS", "S", "S/M", "M"].map((brand) => (
            <label key={brand} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-yellow-500" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
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
