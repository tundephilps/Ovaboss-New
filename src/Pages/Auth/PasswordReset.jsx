import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaCheck, FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineInfoCircle } from "react-icons/ai";

import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf9f9] p-4">
      <div className="flex justify-center mb-4">
        <img src={Logo} />
      </div>

      <div className="max-w-lg w-full bg-white rounded-lg shadow-xs p-6">
        {/* Logo */}

        {/* Sign Up Heading */}
        <h1 className="text-2xl font-bold text-center text-[#181818] mb-2">
          Password Reset
        </h1>

        <div className="space-y-4 mx-auto mt-6 pb-8">
          {/* Success Alert */}
          <div className="flex items-center p-4 text-green-900 bg-[#b0d8b0] border text-sm border-green-300 rounded-md">
            <AiOutlineInfoCircle className="text-xl mt-1 mr-2" />
            <span>
              A password reset link has been sent to your email successfully.
            </span>
          </div>

          {/* Error Alert */}
          <div className="flex items-center p-4 text-red-900 bg-[#ffb0b0] border text-sm border-red-300 rounded-md">
            <AiOutlineInfoCircle className="text-xl mt-1 mr-2" />
            <span>
              The email address you entered is not registered with our system.
            </span>
          </div>
        </div>

        {/* Form */}
        <form>
          <div className="grid grid-cols-1 gap-x-4 gap-y-4">
            <div className="col-span-1 space-y-4">
              {/* Email */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#E6AE06] hover:bg-yellow-600 text-[#202020] py-2 rounded-md font-medium mt-4"
          >
            Send Reset Email
          </button>

          {/* Already have an account */}
          <p className="text-xs text-center mt-6 text-[#808080]">
            Return to{" "}
            <Link to="/Signin" className="text-[#1a1a1a] font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
