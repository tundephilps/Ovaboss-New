import React, { useState } from "react";

import { FaBars, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCategory from "../../../hooks/useCategory";

const CategoryNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const { categories, isLoading } = useCategory();


  return (
    <div className="mx-auto  lg:flex hidden items-center justify-center relative bg-[#E5E5E5]">
      {/* All Categories button with hamburger icon */}
      <button
        onClick={toggleMenu}
        className="px-4 py-4 flex  items-center text-gray-800 font-medium "
      >
        <span>All Categories</span>
        <FaBars className="ml-2" />
      </button>
      {/* Dropdown Panel */}
      {open && (
        <div className="absolute lg:w-full top-12 z-20 mt-2   bg-white shadow-lg rounded-md flex">
          {/* Left Sidebar */}
          <div className="w-1/4 bg-gray-100  py-2">
            {categories.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center text-xs hover:bg-white px-4 py-3.5 hover:text-yellow-500 cursor-pointer"
              >
                <span className="font-semibold">{item.categoryName}</span>
                <FaChevronRight className="w-4 h-4" />
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-3/4 p-6 grid grid-cols-3 gap-6 text-xs">
            {/* Each column */}
            {[
              "Men’s Wear",
              "Men’s Footwear",
              "Men’s Accessories",
              "Women’s Wear",
              "Women’s Footwear",
              "Women’s Accessories",
            ].map((title, idx) => (
              <div key={idx}>
                <h3 className="font-bold mb-2">{title}</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {[
                    "T-shirt",
                    "Formal Suits",
                    "Jeans",
                    "Shorts",
                    "Jeans",
                    "Jeans",
                  ].map((subitem, subidx) => (
                    <li
                      key={subidx}
                      className="hover:text-yellow-500 cursor-pointer"
                    >
                      {subitem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Individual category links - visible on desktop, hidden on smaller screens */}
      <div className="hidden md:flex overflow-x-auto">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/Categories`}
            className="px-5 py-4 whitespace-nowrap text-[#202020] font-semibold hover:bg-white hover:text-yellow-500 "
          >
            {category.categoryName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavbar;
