import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoChevronDown } from "react-icons/io5";

const EditBankInfo = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "", // Format for input type="date"
    gender: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Canada",
    pin: "",
    inviteLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      console.log("Form submitted with accepted terms");
      // Additional submission logic would go here
    } else {
      console.log("Please accept the terms to continue");
    }
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

      {/* Notice */}
      <div className="w-[80vw] mx-4 mb-6 bg-[#FFFBEB]  border-[#FFECB2] border p-4 rounded-md flex items-center">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <span className="w-5 h-5 text-amber-400 rounded-full  flex items-center justify-center text-xs font-bold">
              <AiOutlineInfoCircle />
            </span>
          </div>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Note:</span> Please fill Next of Kin
            details <span className="text-blue-700 font-medium">Correctly</span>
            .
          </p>
        </div>
      </div>

      <div className="mx-4  bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold pb-2 mb-6 border-b ">
          Personal Details 2
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 w-full">
            {/* Left Column - Basic Information */}
            <div>
              <h2 className="text-xs font-semibold text-gray-400 mb-5 uppercase tracking-wider">
                Bank Information
              </h2>

              <div className="mb-5">
                <label className="block  text-xs mb-1">
                  Account Holder's Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Account Type</label>
                <div className="relative">
                  <input
                    type=""
                    name="dob"
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm appearance-none"
                  />
                  {/* <BsCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
                </div>
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Bank Name</label>
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
                Next of kin
              </h2>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Full Name</label>
                <input
                  name="fullname"
                  onChange={handleChange}
                  placeholder="Enter your name"
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
                <label className="block  text-xs mb-1">Phone Number</label>
                <input
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Right Column - Contact Information */}
            <div>
              <div className="mb-5 pt-9">
                <label className="block  text-xs mb-1">Account Number</label>
                <input
                  name="Account Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  placeholder="Enter account number"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Swift/Sort Code</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Swift Code"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Country</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5 mt-[70px]">
                <label className="block  text-xs mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email Address"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">
                  Country of Residence
                </label>
                <div className="flex gap-2">
                  <input
                    placeholder="Canada"
                    className="w-full border border-gray-300 rounded-l px-3 py-2 text-sm bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-right mb-48 w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy-terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-4 h-4 border-gray-300 rounded accent-gray-500 cursor-pointer"
              />
              <label
                htmlFor="privacy-terms"
                className="ml-2 text-sm text-gray-700 cursor-pointer"
              >
                I read and accept the{" "}
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Privacy Terms and Conditions
                </a>
              </label>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!isChecked}
              className={`ml-4 px-6 py-2 text-white font-medium rounded ${
                isChecked
                  ? "bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
                  : "bg-yellow-400 opacity-80 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBankInfo;
