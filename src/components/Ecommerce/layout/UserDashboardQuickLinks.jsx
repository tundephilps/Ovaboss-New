import React from "react";
import { CiLocationOn, CiMail, CiHeart } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { PiWallet } from "react-icons/pi";
import { IoMdLocate } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { useAppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";

const UserDashboardQuickLinks = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded shadow w-full mx-auto">
      {/* User Info */}
      <div className="flex items-center mb-4">
        {user && (
          <div>
            <div className="bg-yellow-500 text-white font-bold rounded-md h-10 w-10 flex items-center justify-center mr-3 text-lg">
              {user.firstname.charAt(0)}
            </div>
            <div className="font-semibold text-gray-800">
              {user.firstname} {user.lastname}
            </div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        )}
      </div>

      {/* If users not logged in */}
      {!user && (
        <div className="flex space-x-4 justify-between pb-4">
          <button
            onClick={() => navigate("/signin")}
            className="w-full text-xs py-2 border border-yellow-400 text-yellow-400 font-medium rounded hover:bg-yellow-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="w-full text-xs py-2 border border-yellow-400 text-yellow-400 font-medium rounded hover:bg-yellow-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
          >
            Signup
          </button>
        </div>
      )}

      {/* Links Grid */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <LinkItem
          icon={<CiLocationOn />}
          label="Track Orders"
          sub="View order status"
          path="/#"
        />
        <LinkItem
          icon={<CiHeart />}
          label="Saved Items"
          sub="View saved items"
          path="/#"
        />
        <LinkItem
          icon={<BsBoxSeam />}
          label="Orders"
          sub="0 Items Ordered"
          path="/#"
        />
        <LinkItem icon={<PiWallet />} label="Wallet" sub="Bal: N0" path="/#" />
        <LinkItem icon={<CiMail />} label="Inbox" sub="0 Message" path="/#" />
        <LinkItem
          icon={<IoMdLocate />}
          label="Center Locator"
          sub="Join other merchants"
          path="/#"
        />
        <LinkItem
          icon={<IoStorefrontOutline />}
          label="Sell on Ovaboss"
          sub="Join other merchants"
          path="/#"
        />
        <LinkItem
          icon={<AiOutlineDashboard />}
          label="My Dashboard"
          sub="Profile Dashboard"
          path="/PCCdashboard"
        />
      </div>
    </div>
  );
};

const LinkItem = ({ icon, label, sub, path }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="flex items-start space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
    >
      <div className="text-xl text-gray-600 mt-1">{icon}</div>
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-xs text-gray-500">{sub}</div>
      </div>
    </div>
  );
};

export default UserDashboardQuickLinks;
