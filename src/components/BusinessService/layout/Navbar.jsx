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
} from "react-icons/fa";
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
import { useAppContext } from "../../../context/AppContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { user } = useAppContext();

  return (
    <div className="w-full">
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
                <div className="md:mr-4">
                  <img src={Logo} className="h-12" alt="Ovaboss" />
                </div>
              </div>
            </div>

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
              <div className="relative mx-2">
                <LuShoppingCart size={20} className="text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  3
                </span>
              </div>
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
                <button className="absolute right-0 top-0 h-full bg-[#FFD700] px-4 rounded-r-md flex items-center justify-center">
                  <FaSearch className="text-black" />
                </button>
              </div>
            </div>

            {/* Desktop Nav Icons - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-10">
              <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer relative">
                <Link
                  to="/"
                  className="ml-1 text-sm text-[#008000] font-semibold"
                >
                  Switch to Store
                </Link>
              </div>

              <div className="relative">
                <FaRegHeart
                  size={20}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer"
                />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  2
                </span>
              </div>
              {/* <div className="relative">
                <LuShoppingCart
                  size={20}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer"
                />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  3
                </span>
              </div> */}
              {user && 
                <div
                  className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer"
                  onClick={() => {
                    setShowProfileMenu(!showProfileMenu);
                    setShowHelpMenu(false); // Close help if profile is clicked
                  }}
                >
                  <LiaUserCheckSolid size={24} />
                  <span className="ml-2 text-sm">{user.firstname}</span>
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
              }
              {/* Profile Dropdown Menu */}
              {showProfileMenu && user && (
                <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md w-56 py-0 z-50">
                  <div className="px-4 py-2 font-semibold text-gray-800">
                    Hi, { user.firstname }
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
                    className="block px-4 py-2 text-center bg-[#FFD700] text-black font-semibold hover:bg-yellow-600"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu - Shown when menu is open */}
          {isMenuOpen && user && (
            <div className="md:hidden mt-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center text-gray-700">
                    <FaUser size={20} />
                    <span className="ml-2 text-sm">{ user.firstname }</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center text-gray-700">
                    <FaHeart size={20} />
                    <span className="ml-2">Wishlist</span>
                  </div>
                  <span className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    2
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center text-gray-700">
                    <FaShoppingCart size={20} />
                    <span className="ml-2">Cart</span>
                  </div>
                  <span className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    3
                  </span>
                </div>

                <div className="flex items-center py-2 border-b border-gray-200">
                  <FaQuestionCircle size={20} className="text-gray-700" />
                  <span className="ml-2">Help</span>
                </div>
              </div>
            </div>
          )}
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
