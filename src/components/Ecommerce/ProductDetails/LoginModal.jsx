import React from "react";
import { FaGoogle, FaEye } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[400px] p-6 relative shadow-lg">
        {/* Close Button */}
        <IoMdCloseCircleOutline
          className="absolute top-4 right-4 cursor-pointer text-2xl text-gray-600 hover:text-black"
          onClick={onClose}
        />

        {/* Title */}
        <h2 className="text-xl font-bold text-center mb-2">Member’s Login</h2>
        <div className="w-[250px] h-1 bg-[#E6AE06] mx-auto mb-6 rounded" />

        {/* Email */}
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Password */}
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative mb-2">
          <input
            type="password"
            placeholder="********"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <FaEye className="absolute top-4 right-3 text-gray-400 cursor-pointer" />
        </div>
        <div className="text-right text-sm text-yellow-500 cursor-pointer mb-4">
          Forgot password?
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#E6AE06] hover:bg-yellow-500 text-white font-bold py-2 rounded-lg mb-4">
          Log In
        </button>

        {/* Divider */}
        <div className="flex items-center mb-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-sm text-gray-500">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Button */}
        <button className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 mb-4 hover:bg-gray-100">
          <FaGoogle className="text-red-500" />
          <span className="text-sm">Log in with Google</span>
        </button>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span className="text-black font-medium cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
