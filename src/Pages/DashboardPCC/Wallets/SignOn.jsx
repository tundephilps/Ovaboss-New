import React from "react";
import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
// import PCMtable from "../../../components/DashboardPCC/MyCommunity/PCMtable";
// import Pagination from "../../../components/DashboardPCC/MyCommunity/Pagination";
import SignOnCard from "../../../components/DashboardPCC/Wallet/SignOnCard";
import SignOnForm from "../../../components/DashboardPCC/Wallet/SignOnForm";
import SignOnTab from "../../../components/DashboardPCC/Wallet/SignOnTab";
import SignOnForm2 from "../../../components/DashboardPCC/Wallet/SignOnForm2";
import { FaChevronDown, FaFile, FaFolder } from "react-icons/fa";
import { useState } from "react";

const SignOn = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Transfer to Wallet");

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  // Dummy components for switching content
  function TransferToWallet() {
    return <SignOnForm />;
  }

  function TransferToBank() {
    return <SignOnForm2 />;
  }

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Wallet</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">
            Dashboard › {"  "} All Wallet Transactions{" "}
          </span>{" "}
          <span className="text-yellow-500">
            {" "}
            › {"  "} SIGNON Transactions{" "}
          </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />

        <div className="mx-auto bg-white rounded-xl  p-4 my-6 ">
          <div className="flex justify-between pb-4">
            <p className="text-lg font-semibold">Ovaboss Wallet Details</p>

            {/* Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="bg-gray-100 border border-gray-300 text-xs px-3 py-1 rounded flex items-center gap-2 hover:bg-gray-200"
              >
                <FaFolder />
                <span>{selected}</span>
                <FaChevronDown className="text-xs" />
              </button>

              {open && (
                <div className="absolute right-0 mt-1 w-44 bg-white border rounded shadow-md z-10 text-sm">
                  {["Transfer to Wallet", "Transfer to Bank"].map((option) => (
                    <div
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <SignOnCard />

          {/* Dynamic Component Below */}
          {selected === "Transfer to Wallet" && <TransferToWallet />}
          {selected === "Transfer to Bank" && <TransferToBank />}
        </div>

        <SignOnTab />
      </div>
    </div>
  );
};

export default SignOn;
