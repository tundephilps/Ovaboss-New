import React from "react";
import {
  FaHeart,
  FaBoxOpen,
  FaWallet,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStore,
  FaUserCircle,
  FaTruck,
} from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { PiWallet } from "react-icons/pi";
import { IoMdLocate } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";

const UserDashboardQuickLinks = () => {
  return (
    <div className="bg-white p-4 rounded shadow w-full  mx-auto">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <div className="bg-yellow-500 text-white font-bold rounded-md h-10 w-10 flex items-center justify-center mr-3 text-lg">
          a
        </div>
        <div>
          <div className="font-semibold text-gray-800">alexsander army</div>
          <div className="text-sm text-gray-500">alexsander@gamil.com</div>
        </div>
      </div>

      {/* If users not logged in */}
      <div className="flex space-x-4 justify-between pb-4">
        <button className="w-full text-xs py-2 border border-yellow-400 text-yellow-400 font-medium rounded hover:bg-yellow-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
          Login
        </button>

        <button className="w-full text-xs py-2 border border-yellow-400 text-yellow-400 font-medium rounded hover:bg-yellow-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
          Signup
        </button>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <LinkItem
          icon={<CiLocationOn />}
          label="Track Orders"
          sub="View order status"
        />
        <LinkItem
          icon={<CiHeart />}
          label="Saved Items"
          sub="View saved items"
        />
        <LinkItem icon={<BsBoxSeam />} label="Orders" sub="0 Items Ordered" />
        <LinkItem icon={<PiWallet />} label="Wallet" sub="Bal: N0" />
        <LinkItem icon={<CiMail />} label="Inbox" sub="0 Message" />
        <LinkItem
          icon={<IoMdLocate />}
          label="Center Locator"
          sub="Join other merchants"
        />
        <LinkItem
          icon={<IoStorefrontOutline />}
          label="Sell on Ovaboss"
          sub="Join other merchants"
        />
        <LinkItem
          icon={<AiOutlineDashboard />}
          label="My Dashboard"
          sub="Profile Dashboard"
        />
      </div>
    </div>
  );
};

const LinkItem = ({ icon, label, sub }) => (
  <div className="flex items-start space-x-3">
    <div className="text-xl text-gray-600 mt-1">{icon}</div>
    <div>
      <div className="font-medium">{label}</div>
      <div className="text-xs text-gray-500">{sub}</div>
    </div>
  </div>
);

export default UserDashboardQuickLinks;
