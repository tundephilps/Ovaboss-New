import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { IoStorefrontOutline } from "react-icons/io5";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleAccountTypeSelect = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf9f9] p-4">
      <div className="max-w-lg w-full">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            <div className="relative">
              <img src={Logo} />
            </div>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm ">
          <h1 className="text-2xl font-bold text-center text-[#181818] mb-2">
            Sign Up
          </h1>
          <p className="text-sm text-center text-[#181818] font-bold mb-12">
            Choose your account type to continue
          </p>

          <div className="grid grid-cols-2 gap-4 px-8 mb-12">
            {/* Buyer Option */}
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedType === "buyer"
                  ? "border-[#e6ae06]"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => handleAccountTypeSelect("buyer")}
            >
              <div className="flex flex-col items-start">
                <div
                  className={`mb-2 ${
                    selectedType === "buyer"
                      ? "text-yellow-500"
                      : "text-gray-600"
                  }`}
                >
                  <BsCartPlus size={24} />
                </div>
                <h3 className="font-medium text-gray-800 text-sm mb-1">
                  As a Buyer
                </h3>
                <p className="text-xs text-gray-500 text-start">
                  Shop from a wide range of products
                </p>
              </div>
            </div>

            {/* Business Option */}
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedType === "business"
                  ? "border-[#e6ae06]"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => handleAccountTypeSelect("business")}
            >
              <div className="flex flex-col items-start">
                <div
                  className={`mb-2 ${
                    selectedType === "business"
                      ? "text-yellow-500"
                      : "text-gray-600"
                  }`}
                >
                  <IoStorefrontOutline size={24} />
                </div>
                <h3 className="font-medium text-gray-800 text-sm mb-1">
                  As a Business
                </h3>
                <p className="text-xs text-gray-500 text-start">
                  List your products and start selling
                </p>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <Link to="/Signupform">
            <button
              className={`w-full py-2 rounded-md text-center font-medium ${
                selectedType
                  ? "bg-[#e6ae06] text-[#202020] hover:bg-yellow-600"
                  : "bg-[#e6ae06] text-white opacity-90"
              }`}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
