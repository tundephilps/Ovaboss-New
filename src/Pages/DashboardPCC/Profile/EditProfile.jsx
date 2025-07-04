import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTrash, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";

import { FiUserPlus, FiXCircle } from "react-icons/fi";
import { useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import { BsCalendar } from "react-icons/bs";
import { Link } from "react-router-dom";

const EditProfile = () => {
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

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleImageDelete = () => {
    setImagePreview(null);
    fileInputRef.current.value = ""; // Clear file input
  };

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "2025-02-03", // Format for input type="date"
    gender: "Male",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Canada",
    pin: "••••••",
    inviteLink: "https://www.ovaboss.com/register?",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">Profile</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard{" "}
          <span className="text-yellow-500"> › {"  "} Personal Profile </span>{" "}
          <span className="text-yellow-500"> › {"  "} Edit </span>{" "}
        </p>
      </div>

      <div className="mx-4  bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold pb-2 mb-6 border-b ">
          Personal Details
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 w-full">
            {/* Left Column - Basic Information */}
            <div>
              <h2 className="text-xs font-semibold text-gray-400 mb-5 uppercase tracking-wider">
                Basic Information
              </h2>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Full Name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Date of Birth</label>
                <div className="relative">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm appearance-none"
                  />
                  {/* <BsCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
                </div>
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Gender</label>
                <div className="relative">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm appearance-none"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <h2 className="text-xs font-semibold text-gray-400 mt-8 mb-5 uppercase tracking-wider">
                Location Details
              </h2>

              <div className="mb-5">
                <label className="block  text-xs mb-1">City</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">State</label>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter your state"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Postal Code</label>
                <input
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Enter your postal code"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">
                  Country of Residence
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm appearance-none"
                  >
                    <option>Canada</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                  <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Right Column - Contact Information */}
            <div>
              <h2 className="text-xs font-semibold text-gray-400 mb-5 uppercase tracking-wider">
                Contact Information
              </h2>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Address</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <h2 className="text-xs font-semibold text-gray-400 mt-8 mb-5 uppercase tracking-wider">
                User's Invite (Auto Generated)
              </h2>

              <div className="mb-5">
                <label className="block  text-xs mb-1">PIN</label>
                <input
                  type="text"
                  value={formData.pin}
                  readOnly
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">
                  Personal Invite Link
                </label>
                <div className="flex gap-2">
                  <input
                    value={formData.inviteLink}
                    readOnly
                    className="w-full border border-gray-300 rounded-l px-3 py-2 text-sm bg-white"
                  />
                  <button className="px-4 py-2 bg-gray-200 text-sm rounded-r border border-gray-300">
                    Copy
                  </button>
                </div>
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Share Link</label>
                <div className="flex gap-2 mt-1">
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white"
                  >
                    <SiX size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-right mb-48">
          <Link to="/EditBankInfo">
            <button className="bg-[#FFD700] text-black font-semibold px-6 py-2 rounded hover:bg-yellow-600">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
