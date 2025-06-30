import React from "react";
import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
import BuyOnCard from "../../../components/DashboardPCC/Wallet/BuyOnCard";
import BuyOnTab from "../../../components/DashboardPCC/Wallet/BuyOnTab";
import { FaChevronDown, FaFile, FaFolder } from "react-icons/fa";

const BuyOn = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Wallet</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">
            Dashboard › {"  "} All Wallet Transactions{" "}
          </span>{" "}
          <span className="text-yellow-500"> › {"  "} BuyOn Transactions </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />

        <div className="mx-auto bg-white rounded-xl shadow-md p-4  my-6">
          <div className="flex justify-between pb-4">
            <p className="text-lg font-semibold">Ovaboss Wallet Details</p>
          </div>
          <BuyOnCard />
        </div>

        <BuyOnTab />
      </div>
    </div>
  );
};

export default BuyOn;
