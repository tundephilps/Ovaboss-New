import React from "react";
import { FaTshirt, FaHeartbeat, FaMicrochip, FaSeedling } from "react-icons/fa";
import { PiTShirtDuotone } from "react-icons/pi";
import { PiHeartbeat } from "react-icons/pi";
import { BiMicrochip } from "react-icons/bi";
import { PiBowlFood } from "react-icons/pi";

const CategoryNavbarMobile = () => {
  const categories = [
    {
      name: "Fashion and Beauty",
      icon: <PiTShirtDuotone size={24} />,
      href: "/category/fashion-and-beauty",
    },
    {
      name: "Health and Fitness",
      icon: <PiHeartbeat size={24} />,
      href: "/category/health-and-fitness",
    },
    {
      name: "Electronics",
      icon: <BiMicrochip size={24} />,
      href: "/category/electronics",
    },
    {
      name: "Agriculture and Food",
      icon: <PiBowlFood size={24} />,
      href: "/category/agriculture-and-food",
    },
  ];

  return (
    <div className="w-full lg:hidden block bg-white border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-between overflow-x-auto">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="flex flex-col items-center px-4 py-1 text-gray-700 hover:bg-gray-50"
            >
              <div className="w-12  flex items-center justify-center mb-0 ">
                {category.icon}
              </div>
              <span className="text-[10px] text-center whitespace-nowrap">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbarMobile;
