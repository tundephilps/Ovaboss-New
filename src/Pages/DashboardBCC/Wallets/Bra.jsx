import React, { useState } from "react";
import ChangeBusiness from "../../../components/DashboardBCC/Homepage/ChangeBusiness";

import { FaChevronDown, FaFile, FaFolder } from "react-icons/fa";
import BraForm from "../../../components/DashboardBCC/Wallet/BraForm";
import BraForm2 from "../../../components/DashboardBCC/Wallet/BraForm2";
import BraCard from "../../../components/DashboardBCC/Wallet/BraCard";
import BraTab from "../../../components/DashboardBCC/Wallet/BraTab";
import PayWithCard from "../../../components/DashboardBCC/Wallet/PayWithCard";

const BraBCC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Transfer to Wallet");

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  // Dummy components for switching content
  function TransferToWallet() {
    return <BraForm />;
  }

  function TransferToBank() {
    return <BraForm2 />;
  }
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <ChangeBusiness />
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Wallets</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> All Wallet Transactions ›</span>
          <span className="text-yellow-500">
            {"  "} BCC BUYON Wallet Transactions{" "}
          </span>{" "}
        </p>

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
                  {[
                    "Transfer to Wallet",
                    "Transfer to Bank",
                    "Bank To Wallet",
                  ].map((option) => (
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

          <BraCard />

          {/* Dynamic Component Below */}

          {selected === "Bank To Wallet" && <PayWithCard />}
          {selected === "Transfer to Wallet" && <TransferToWallet />}
          {selected === "Transfer to Bank" && <TransferToBank />}
        </div>

        <BraTab />
      </div>
      {/* <PMBTable /> */}
    </div>
  );
};

export default BraBCC;
