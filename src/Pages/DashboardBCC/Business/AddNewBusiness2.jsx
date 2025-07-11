import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaLinkedinIn, FaTrash, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";

import { FiUserPlus, FiXCircle } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { BsCalendar } from "react-icons/bs";

const AddNewBusiness2 = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImagePreview(null);
    fileInputRef.current.value = ""; // Clear file input
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">Profile</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> Business Profile › {"  "}</span>
          <span className="text-yellow-500">Add New Business</span>{" "}
        </p>
      </div>

      <div className="mx-4  bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold pb-2 mb-6 border-b ">
          Business Details
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Upload Section */}
          <div className="flex flex-col items-center w-full lg:w-1/4">
            <div
              className="relative w-32 h-32 rounded-full bg-[#F3F4F6] border-dashed border-2 border-[#D1D5DB] flex items-center justify-center text-gray-400 mb-4  cursor-pointer"
              onClick={triggerFileSelect}
            >
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent triggering file input
                      handleImageDelete();
                    }}
                    className="absolute -bottom-0  right-0 z-50  text-red-700  rounded-full"
                    title="Remove image"
                  >
                    <FaTrash className="text-lg" />
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <FiUserPlus className="text-2xl" />
                  <span className="text-xs">Upload Photo</span>
                </div>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="hidden"
            />

            <button
              className="text-[10px] text-gray-600 bg-[#f3f4f6] p-2 rounded-md"
              onClick={triggerFileSelect}
            >
              Choose Image
            </button>
          </div>

          {/* Form Section */}
          <div className="w-full">
            <div className="w-full mb-6">
              <label className="block text-sm font-medium mb-1 ">
                Business Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Fatima Technology"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-full">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Store Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter store name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Store URL: https://www.ovaboss.com/
                </label>
                <input
                  type="text"
                  placeholder="Enter your store slug eg. ovaboss"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>Choose Country</option>
                  {/* Add actual country options dynamically */}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  State/Region <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>Choose state/region</option>
                  {/* Add actual states dynamically */}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter Business description max 250 characters"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter Business address"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-right mb-48">
          <Link to="/Business/AddNew3">
            <button className="bg-[#FFD700] text-black font-semibold px-6 py-2 rounded hover:bg-yellow-600">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddNewBusiness2;
