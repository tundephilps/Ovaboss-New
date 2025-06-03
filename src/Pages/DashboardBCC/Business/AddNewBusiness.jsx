import React from "react";
import ChangeBusiness from "../../../components/DashboardBCC/Homepage/ChangeBusiness";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const AddBusiness = () => {
  const [isAuxiliary, setIsAuxiliary] = useState("No");
  const [parentBusiness, setParentBusiness] = useState("");
  const [isAuxiliaryOpen, setIsAuxiliaryOpen] = useState(false);
  const [isParentOpen, setIsParentOpen] = useState(false);

  const auxiliaryOptions = ["No", "Yes"];

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <ChangeBusiness />
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Business</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> All Business ›</span>
          <span className="text-yellow-500">{"  "} Add New Business </span>{" "}
        </p>
      </div>
      <div className="mx-4 p-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Is Auxiliary Business Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Is Auxiliary Business?
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsAuxiliaryOpen(!isAuxiliaryOpen)}
                className="w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 flex items-center justify-between"
              >
                <span className="text-gray-900">{isAuxiliary}</span>
                <FaChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    isAuxiliaryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isAuxiliaryOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  {auxiliaryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setIsAuxiliary(option);
                        setIsAuxiliaryOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Parent Business Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Parent Business
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsParentOpen(!isParentOpen)}
                className="w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 flex items-center justify-between"
              >
                <span
                  className={parentBusiness ? "text-gray-900" : "text-gray-400"}
                >
                  {parentBusiness ||
                    "Select Parent Business, If this is Auxiliary Business"}
                </span>
                <FaChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    isParentOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isParentOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <div className="px-3 py-2 text-gray-500 text-sm">
                    No parent businesses available
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-8">
          <button
            type="button"
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBusiness;
