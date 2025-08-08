import React from "react";
import { FaTshirt, FaHeartbeat, FaMicrochip, FaSeedling } from "react-icons/fa";
import { PiTShirtDuotone } from "react-icons/pi";
import { PiHeartbeat } from "react-icons/pi";
import { BiMicrochip } from "react-icons/bi";
import { PiBowlFood } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useCategoryContext } from "../../../context/CategoryContext";

const CategoryNavbarMobile = () => {
  const { useCategory } = useCategoryContext();
  
  const { categories, isLoading } = useCategory;

  return (
    <div className="w-full lg:hidden block bg-white border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-between overflow-x-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/categories/${category.categoryId}`}
              className="flex flex-col items-center px-4 py-1 text-gray-700 hover:bg-gray-50"
            >
              <img className="w-12 h-12 flex items-center justify-center mb-0 " src={category.icon}/>
              <span className="text-[10px] text-center whitespace-nowrap">
                {category.categoryName}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbarMobile;
