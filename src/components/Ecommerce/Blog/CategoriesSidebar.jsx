import React, { useState } from "react";

const CategoriesSidebar = () => {
  const categories = [
    "Platform News",
    "Business Tips",
    "Platform Guides",
    "Events",
  ];

  const [activeCategory, setActiveCategory] = useState("Platform News");

  return (
    <div className="w-full  py-4 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => setActiveCategory(category)}
              className={`w-full text-left px-4 py-2 rounded-md transition-all ${
                activeCategory === category
                  ? "bg-yellow-400 text-black font-medium"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSidebar;
