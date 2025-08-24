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
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import { BusinessAccount } from "../../../types/business.type";
import Loading from "../../../components/Loading";
import DeleteModal from "../../../components/DeleteModal";
import useBusinessAccount from "../../../hooks/useBusinessAccount";

interface StatCardProps {
  icon: React.ReactElement<any, any>;
  label: string;
  value: string | number;
  bg: string;
}

const AllBusinesses = () => {
  const [ isVisibleDeleteModal, setIsVisibleDeleteModal ] = React.useState(false);
  const { businessAccounts, selectedBusinessAccount, setSelectedBusinessAccount } = useAppContext();
  const { isSaving, handleDeleteBusiness } = useBusinessAccount({ shouldGetBusinessData: false });

  if(!selectedBusinessAccount) {
    return <Loading/>;
  }

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">PCC</h1>
        <p className="text-xs text-[#687280]">Dashboard</p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
      </div>

      <DeleteModal 
        isOpen={isVisibleDeleteModal} 
        onClose={() => setIsVisibleDeleteModal(false)}
        onConfirm={async () => { 
          setIsVisibleDeleteModal(false);
          await handleDeleteBusiness(selectedBusinessAccount.id);
          setSelectedBusinessAccount(businessAccounts[0]);
        }}  
        message={`Are you sure you want to delete this business? \n Business Name: ${selectedBusinessAccount.name}`}  
      />

      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* All Businesses List */}
        <div className="w-full md:w-1/3 bg-white rounded-xl shadow py-2 px-4 h-full">
          <h2 className="text-lg font-semibold mb-4 border-b py-4">
            All Businesses
          </h2>
          <div className=" space-y-2">
            {businessAccounts.map((item, key) => (
              <div
                key={key}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer border ${
                  selectedBusinessAccount.id === item.id
                    ? "bg-yellow-50 border-yellow-500"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setSelectedBusinessAccount(item)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      Type: Business
                    </div>
                  </div>
                </div>
                {selectedBusinessAccount.id === item.id && (
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
                src={selectedBusinessAccount.logo}
                alt={selectedBusinessAccount.name}
                className="w-32 h-32 rounded-xl object-cover"
              />
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-1 w-full  text-sm">
                <div className="pb-8">
                  <span className="font-semibold ">Business Type:</span>{" "}
                  BUSINESS
                </div>
                <div>
                  <span className="font-semibold">Store Name:</span>{" "}
                  {selectedBusinessAccount.storeName}
                </div>
                <div>
                  <span className="font-semibold">Business Name:</span>{" "}
                  {selectedBusinessAccount.name}
                </div>
                <div>
                  <span className="font-semibold">Link:</span>{" "}
                  <a
                    href={`https://${selectedBusinessAccount.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {selectedBusinessAccount.link}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4 justify-end">
              <Link to={`/createbusiness?updateId=${selectedBusinessAccount.id}`}>
                <button className="bg-[#FFD700] text-black px-4 py-2 rounded-lg font-semibold">
                  Edit Business
                </button>
              </Link>
              <button
                onClick={() => setIsVisibleDeleteModal(true)}
                type="button"
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                {isSaving ? <Loading/> : 'Delete Business'}
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
                value={0}
                bg="bg-blue-100"
              />
              <StatCard
                icon={<FaShoppingCart size={20} className="text-green-600" />}
                label="Total Orders"
                value={0}
                bg="bg-green-100"
              />
              <StatCard
                icon={<FaUser size={20} className="text-purple-600" />}
                label="Customers"
                value={0}
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
const StatCard = ({ icon, label, value, bg }: StatCardProps) => (
  <div className={`rounded-xl p-4 flex items-center gap-3 ${bg}`}>
    <div className="p-2 rounded-full bg-white shadow">{icon}</div>
    <div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  </div>
);

export default AllBusinesses;
