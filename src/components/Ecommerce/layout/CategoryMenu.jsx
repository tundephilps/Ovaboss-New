import React from "react";

import { FaBars, FaChevronRight } from "react-icons/fa";
import { useCategoryContext } from "../../../context/CategoryContext";

const CategoryMenu = ({ setOpen, open }) => {
  const { useCategory } = useCategoryContext();
  const { categories } = useCategory;

  return (
    <div className="absolute z-20 mt-2 w-[800px] bg-white shadow-lg rounded-md flex">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-gray-100 p-4 space-y-4">
        {categories.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center hover:text-yellow-500 cursor-pointer"
          >
            <span className="font-semibold">{item.categoryName}</span>
            <FaChevronRight className="w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Right Content */}
      <div className="w-2/3 p-6 grid grid-cols-3 gap-6">
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
  );
};

export default CategoryMenu;
