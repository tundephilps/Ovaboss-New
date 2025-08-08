import React, { useState } from "react";

import { FaBars, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Loading";
import { Category, SubCategory } from "../../../types/category.type";
import { useCategoryContext } from "../../../context/CategoryContext";

const CategoryNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const { useCategory, setSelectedCategory, setSelectedSubCategory } = useCategoryContext();

  const { categories, isLoading, subCategories, getSubCategory, getAllProducts } = useCategory;


  const navigate = useNavigate();

  const getCategory = (item: Category) => {
    // setSelectedCategory(item);
    navigate(`/Categories/${item.categoryId}`);
    getSubCategory(item.categoryId);
  }

  const changeCategory = (item: Category) => {
    navigate(`/Categories/${item.categoryId}`);
    setSelectedCategory(item);
    // getSubCategory(item.categoryId);
  }

  const changeSubCategory = (item: SubCategory) => {
    setSelectedSubCategory(item);
    setOpen(false);
    getAllProducts({ subCategoryId: item.id });
  }

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
            {isLoading.categories &&
              <Loading/>
            }
            {categories.map((item, idx) => (
              <button
                key={idx}
                onClick={() => getCategory(item)}
                className="flex justify-between items-center text-xs hover:bg-white px-4 py-3.5 hover:text-yellow-500 cursor-pointer"
              >
                <span className="font-semibold">{item.categoryName}</span>
                <FaChevronRight className="w-4 h-4" />
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-3/4 p-6 grid grid-cols-3 gap-6 text-xs">
            {isLoading.subCategories &&
              <Loading/>
            }
            <ul className="space-y-3 text-sm text-gray-700">
              {!isLoading.subCategories && subCategories.map((item, key) => (
                <li
                  key={key}
                  onClick={() => changeSubCategory(item)}
                  className="hover:text-yellow-500 cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-3/4 p-6 grid grid-cols-3 gap-6 text-xs">
            {/* Each column */}
            {false && [
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
          <button
            key={index}
            onClick={() => changeCategory(category)}
            className="px-5 py-4 whitespace-nowrap text-[#202020] font-semibold hover:bg-white hover:text-yellow-500 "
          >
            {category.categoryName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavbar;
