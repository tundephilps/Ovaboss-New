import ProfileProgressCard from "../../../components/DashboardBCC/Homepage/ProfileProgressCard";
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaBoxOpen,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import Biz11 from "../../../assets/Biz11.png";

import Biz22 from "../../../assets/Biz22.png";
import Biz33 from "../../../assets/Biz33.png";

const businesses = [
  {
    id: 1,
    name: "Fatimah Technology",
    type: "Business",
    storeName: "Fatimah's Venture",
    link: "fatimah-s-venture",
    avatar: Biz11, // or use import
    stats: { products: 24, orders: 156, customers: 87 },
  },
  {
    id: 2,
    name: "Global Solutions",
    type: "Business",
    storeName: "Global Market",
    link: "global-market",
    avatar: Biz22,
    stats: { products: 102, orders: 304, customers: 210 },
  },
  {
    id: 3,
    name: "Innovate Labs",
    type: "Business",
    storeName: "Innovate Central",
    link: "innovate-central",
    avatar: Biz33,
    stats: { products: 58, orders: 198, customers: 143 },
  },
];

const AllBusinesses = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(businesses[0]);

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">PCC</h1>
        <p className="text-xs text-[#687280]">Dashboard</p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* All Businesses List */}
        <div className="w-full md:w-1/3 bg-white rounded-xl shadow py-2 px-4 h-full">
          <h2 className="text-lg font-semibold mb-4 border-b py-4">
            All Businesses
          </h2>
          <div className=" space-y-2">
            {businesses.map((biz) => (
              <div
                key={biz.id}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer border ${
                  selectedBusiness.id === biz.id
                    ? "bg-yellow-50 border-yellow-500"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setSelectedBusiness(biz)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={biz.avatar}
                    alt={biz.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{biz.name}</div>
                    <div className="text-sm text-gray-500">
                      Type: {biz.type}
                    </div>
                  </div>
                </div>
                {selectedBusiness.id === biz.id && (
                  <FaCheckCircle className="text-green-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Business Details */}
        <div className="w-full md:w-2/3 mb-32">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4 border-b pb-4">
              Business Details
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedBusiness.avatar}
                alt={selectedBusiness.name}
                className="w-32 h-32 rounded-xl object-cover"
              />
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-1 w-full  text-sm">
                <div className="pb-8">
                  <span className="font-semibold ">Business Type:</span>{" "}
                  {selectedBusiness.type}
                </div>
                <div>
                  <span className="font-semibold">Store Name:</span>{" "}
                  {selectedBusiness.storeName}
                </div>
                <div>
                  <span className="font-semibold">Business Name:</span>{" "}
                  {selectedBusiness.name}
                </div>
                <div>
                  <span className="font-semibold">Link:</span>{" "}
                  <a
                    href={`https://${selectedBusiness.link}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {selectedBusiness.link}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4 justify-end">
              <button className="bg-[#E6AE06] text-black px-4 py-2 rounded-lg font-semibold">
                Edit Business
              </button>
              <button className="border px-4 py-2 rounded-lg font-semibold">
                Manage Business
              </button>
            </div>

            <hr className="my-6" />

            <h3 className="text-md font-semibold mb-3">Business Statistics</h3>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 ">
              <StatCard
                icon={<FaBoxOpen size={20} className="text-blue-600" />}
                label="Total Products"
                value={selectedBusiness.stats.products}
                bg="bg-blue-100"
              />
              <StatCard
                icon={<FaShoppingCart size={20} className="text-green-600" />}
                label="Total Orders"
                value={selectedBusiness.stats.orders}
                bg="bg-green-100"
              />
              <StatCard
                icon={<FaUser size={20} className="text-purple-600" />}
                label="Customers"
                value={selectedBusiness.stats.customers}
                bg="bg-purple-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, label, value, bg }) => (
  <div className={`rounded-xl p-4 flex items-center gap-3 ${bg}`}>
    <div className="p-2 rounded-full bg-white shadow">{icon}</div>
    <div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  </div>
);

export default AllBusinesses;
