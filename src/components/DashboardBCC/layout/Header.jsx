// This component demonstrates how you can further enhance the UserDropdown
// with an avatar image and additional styling

import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import Profile from "../../../assets/Profile.jpg";

import Logo from "../../../assets/Logo.png";
import { MdMenu, MdOutlineArrowDownward } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative bg-white flex items-center justify-between lg:justify-end"
      ref={dropdownRef}
    >
      <img src={Logo} className="h-12 ml-2 lg:hidden flex" />

      {/* User info and toggle button */}
      <div className="inline-flex">
        <div
          className="flex items-center gap-2 cursor-pointer py-2 px-3 rounded-md hover:bg-gray-100"
          onClick={toggleDropdown}
        >
          <div className="flex flex-col text-right">
            <span className="font-medium text-[#000000]">
              Fatimah Oladigbolu
            </span>
            <span className="text-xs text-gray-500">Member</span>
          </div>
          <IoMdArrowDropdown
            className={`text-gray-500 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
          {/* User avatar */}
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
            <img src={Profile} className="h-full w-full rounded-full" />
          </div>
        </div>
        <button>
          <MdMenu className="text-2xl text-black lg:hidden block mr-2" />
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 top-12 mt-2 w-60 bg-white rounded-md shadow-lg border border-gray-200 z-10 overflow-hidden">
          {/* User info header in dropdown */}
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-800">Signed in as</p>
            <p className="text-sm text-gray-600 truncate">
              fatimah.oladigbolu@example.com
            </p>
          </div>

          <div className="py-1">
            <button className="flex items-center gap-3 w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100">
              <FiUser className="text-gray-500" />
              <span>Update Profile</span>
            </button>

            <button className="flex items-center gap-3 w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100">
              <FiLogOut className="text-gray-500" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
