import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { SiX } from "react-icons/si";
import { CiEdit } from "react-icons/ci";
import { RiDownloadLine } from "react-icons/ri";
import { MdOutlinePrint } from "react-icons/md";

import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
import BankAccountDetails from "../../../components/DashboardPCC/Profile/BankDetails";
import { Link } from "react-router-dom";

const Detail = ({ label, value }) => (
  <div>
    <span className="block text-gray-500 text-xs">{label}</span>
    <span className="block font-bold">{value}</span>
  </div>
);

const Profile = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">Profile</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard{" "}
          <span className="text-yellow-500"> › {"  "} Personal Profile </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
      </div>

      <div className="px-4 space-y-6 mb-28">
        <div className="bg-white shadow-sm rounded-lg p-6 w-full  ">
          {/* Header */}
          <div className="flex items-center justify-between w-full border-b pb-4">
            <h2 className="text-lg font-semibold ">Personal Details</h2>

            <div className="inline-flex gap-2">
              <Link to="/EditProfile">
                <div className="border p-2 rounded-md">
                  <CiEdit />
                </div>
              </Link>

              <div className="border p-2 rounded-md">
                <MdOutlinePrint />
              </div>
              <div className="border p-2 rounded-md">
                <RiDownloadLine />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 pt-8">
            {/* Static Image Section */}

            <div className="flex flex-col items-center lg:w-1/4">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
                <img
                  src="https://via.placeholder.com/150" // Replace with your own image URL
                  alt="User"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700">
              <Detail label="Full Name" value="Alexander Mitchell" />
              <Detail label="Date of Birth" value="03/02/2025" />
              <Detail label="Gender" value="Male" />
              <Detail label="Email" value="alexander.mitchell@example.com" />
              <Detail label="Address" value="41, Lawson, Surulere, Lagos" />
              <Detail label="City" value="Lagos" />
              <Detail label="Country" value="Nigeria" />
              <Detail label="Postal Code" value="100134" />
              <Detail label="PIN" value="•••••" />
              <div className="flex items-center gap-2 col-span-1 sm:col-span-2">
                <div className="w-40">
                  <span className="block text-gray-500 text-xs mb-1">
                    Personal Invite Link:
                  </span>
                  <a
                    href="https://www.ovaboss.co"
                    className="text-blue-500 break-all text-sm"
                  >
                    https://www.ovaboss.co
                  </a>
                </div>
                <button className="text-xs px-2 py-1 bg-gray-200 rounded-md">
                  Copy
                </button>
              </div>
              <div className="pb-20">
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

        <BankAccountDetails />
      </div>
    </div>
  );
};

export default Profile;
