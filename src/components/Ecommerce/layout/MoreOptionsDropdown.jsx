import React, { useState } from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MoreOptionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Help Center", to: "/help" },
    { label: "Blog", to: "/blog" },
    { label: "Center Locator", to: "/locator" },
    { label: "Track my orders", to: "/track-orders" },
    { label: "Ovaboss Return Policy", to: "/return-policy" },
  ];

  return (
    <div className="relative w-full">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between w-full px-3 py-2  rounded bg-white shadow"
      >
        <p className="inline-flex items-center gap-2">
          <HiOutlineDotsCircleHorizontal className="text-2xl" />
          More Options
        </p>
        <FaChevronRight />
      </button>

      {/* Dropdown Items */}
      {isOpen && (
        <div className="mt-2 bg-white  rounded  w-full">
          {options.map((opt, index) => (
            <Link
              key={index}
              to={opt.to}
              className="block px-4 py-3 text-sm border-b hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {opt.label}
            </Link>
          ))}

          <button
            className="w-full text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-3 text-center text-sm font-semibold"
            onClick={() => {
              // Handle logout logic here
              setIsOpen(false);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default MoreOptionsDropdown;
