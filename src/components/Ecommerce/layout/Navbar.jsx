import React, { useState } from "react";
import {
  FaSearch,
  FaQuestionCircle,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaRegHeart,
  FaChevronRight,
} from "react-icons/fa";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import Banner from "../../../assets/Banner.png";
import { LuShoppingCart } from "react-icons/lu";
import { LiaUserCheckSolid } from "react-icons/lia";
import { VscDashboard } from "react-icons/vsc";
import { BsBoxSeam } from "react-icons/bs";
import { PiWallet } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineInbox } from "react-icons/md";

import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import UserDashboardQuickLinks from "./UserDashboardQuickLinks";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import MoreOptionsDropdown from "./MoreOptionsDropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    "Fashion and Accessories",
    "Home and Office",
    "Computers and Gadgets",
    "Agriculture and Food",
    "Electronics",
    "Beauty Products",
    "Gifts and Toys",
    "Health and Fitness",
  ];

  const submenus = {
    "Fashion and Accessories": [
      "Men's Clothing",
      "Women's Clothing",
      "Watches",
      "Bags",
      "Jewelry",
    ],
    "Home and Office": ["Furniture", "Decor", "Kitchen Appliances", "Lighting"],
    "Computers and Gadgets": [
      "Laptops",
      "Smartphones",
      "Accessories",
      "Gaming Gear",
    ],
    "Agriculture and Food": ["Fertilizers", "Seeds", "Food Items"],
    Electronics: ["TVs", "Audio Systems", "Cameras", "Smart Devices"],
    "Beauty Products": ["Makeup", "Skincare", "Hair Products", "Fragrances"],
    "Gifts and Toys": ["Toys for Kids", "Gift Sets", "Party Supplies"],
    "Health and Fitness": [
      "Supplements",
      "Fitness Equipment",
      "Personal Care",
      "Medical Devices",
    ],
  };

  const toggleCategory = (cat) => {
    setExpandedCategory((prev) => (prev === cat ? null : cat));
  };

  return (
    <div className="w-full">
      <img
        src={Banner}
        className="w-full lg:block hidden h-16 overflow-y-clip"
      />

      <nav className="bg-white relative py-3 px-4 lg:px-10 w-full">
        <div className="w-full mx-auto">
          {/* Desktop Navigation */}
          <div className="flex items-center justify-between w-full">
            {/* Mobile menu burger icon */}

            <div className="inline-flex gap-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-2 text-gray-700 focus:outline-none lg:hidden block mr-4"
              >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>

              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="md:mr-4">
                  <img src={Logo} className="h-12" alt="Ovaboss" />
                </Link>
              </div>
            </div>

            {/* Side Drawer */}
            <div
              className={`fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg z-40 overflow-y-auto transform transition-transform duration-300 ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <UserDashboardQuickLinks />
              <div className="p-4 border-b font-semibold text-black">
                All Categories
              </div>
              <div className="overflow-y-auto h-full p-4 space-y-2">
                {categories.map((cat) => (
                  <div key={cat}>
                    <button
                      onClick={() => toggleCategory(cat)}
                      className="w-full flex justify-between items-center text-left px-2 py-2 rounded hover:bg-yellow-100"
                    >
                      <span>{cat}</span>
                      {expandedCategory === cat ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                    {expandedCategory === cat && (
                      <div className="pl-4 mt-1 text-sm text-gray-600 space-y-1">
                        {submenus[cat].map((item, idx) => (
                          <Link
                            key={idx}
                            to={`/category/${encodeURIComponent(
                              item.toLowerCase().replace(/\s+/g, "-")
                            )}`}
                            className="block hover:text-yellow-500"
                            onClick={() => setIsMenuOpen(false)} // close menu on click
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <MoreOptionsDropdown />
              </div>
            </div>

            {/* Backdrop */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-black opacity-30 z-30"
                onClick={() => setIsMenuOpen(false)}
              />
            )}

            {/* Mobile Search + Icons - Visible only on mobile */}
            <div className="flex md:hidden items-center">
              {/* Mobile wishlist icon */}
              <div className="relative mx-2">
                <FaRegHeart size={20} className="text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  1
                </span>
              </div>

              {/* Mobile cart icon */}
              <Link to="/ShoppingCart">
                <div className="relative mx-2">
                  <LuShoppingCart size={20} className="text-gray-700" />
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    3
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-xl px-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Ovaboss"
                  className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-0 top-0 h-full bg-[#e6ae06] px-4 rounded-r-md flex items-center justify-center">
                  <FaSearch className="text-black" />
                </button>
              </div>
            </div>

            {/* Desktop Nav Icons - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-10">
              <div
                className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer relative"
                onClick={() => {
                  setShowHelpMenu(!showHelpMenu);
                  setShowProfileMenu(false); // Close profile if help is clicked
                }}
              >
                <FaQuestionCircle size={20} />
                <span className="ml-1 text-sm">Help</span>
                <svg
                  className="w-2 h-2 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {/* Help Dropdown Menu */}
              {showHelpMenu && (
                <div className="absolute top-full mt-2 right-52 bg-white  shadow-lg rounded-md w-48 py-2 z-50">
                  <a
                    href="/#"
                    className="block px-4 py-2  text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
                  >
                    Sell on Ovaboss
                  </a>
                  <a
                    href="/#"
                    className="block px-4 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
                  >
                    Help Centre
                  </a>
                  <a
                    href="/#"
                    className="block px-4 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
                  >
                    Blog
                  </a>
                  <a
                    href="/#"
                    className="block px-4 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
                  >
                    Center Locator
                  </a>
                  <a
                    href="/#"
                    className="block px-4 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
                  >
                    Track My Orders
                  </a>
                  <a
                    href="/#"
                    className="block px-4 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
                  >
                    Ovaboss Return Policy
                  </a>
                </div>
              )}

              <div className="relative">
                <FaRegHeart
                  size={20}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer"
                />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  2
                </span>
              </div>

              <Link to="/ShoppingCart">
                <div className="relative">
                  <LuShoppingCart
                    size={20}
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                  />
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    3
                  </span>
                </div>
              </Link>
              <div
                className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer"
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowHelpMenu(false); // Close help if profile is clicked
                }}
              >
                <LiaUserCheckSolid size={24} />
                <span className="ml-2 text-sm">Alexand...</span>
                <svg
                  className="w-2 h-2 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Profile Dropdown Menu */}
              {showProfileMenu && (
                <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md w-56 py-0 z-50">
                  <div className="px-4 py-2 font-semibold text-gray-800">
                    Hi, Alexander
                  </div>
                  <a
                    href="/#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <VscDashboard className="mr-2" /> My Dashboard
                  </a>
                  <a
                    href="/#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <BsBoxSeam className="mr-2" /> Orders
                  </a>
                  <a
                    href="/#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <PiWallet className="mr-2" /> Wallet
                  </a>
                  <a
                    href="/#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <IoLocationOutline className="mr-2" /> Track My Orders
                  </a>
                  <a
                    href="/#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <MdOutlineInbox className="mr-2" /> Inbox
                  </a>
                  <div className="border-t mt-2"></div>
                  <a
                    href="/#"
                    className="block px-4 py-2 text-center bg-[#E6AE06] text-black font-semibold hover:bg-yellow-600"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar - Now full width */}
      <div className="lg:hidden w-full px-4 py-2 bg-white">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Overboss"
            className="w-full py-2 pl-4 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-0 top-0 h-full bg-yellow-500 px-3 rounded-r-md flex items-center justify-center">
            <FaSearch className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
