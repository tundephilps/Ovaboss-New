import React, { useState } from "react";
import Acc1 from "../../../assets/Acc1.png";
import Acc2 from "../../../assets/Acc2.png";

export default function AccessoriesCategories() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: "womens",
      image: Acc1,
    },
    {
      id: "mens",
      image: Acc2,
    },
  ];

  return (
    <div className="lg:px-12 px-4 mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden rounded-lg cursor-pointer flex-1"
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="relative w-full h-48 md:h-64 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
                style={{
                  backgroundImage: `url(${category.image})`,
                  transform:
                    hoveredCategory === category.id ? "scale(1.1)" : "scale(1)",
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-white"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b border-gray-200 border-opacity-50 mt-4"></div>
    </div>
  );
}
