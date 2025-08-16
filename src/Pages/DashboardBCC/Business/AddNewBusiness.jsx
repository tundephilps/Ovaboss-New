import React from "react";
import ChangeBusiness from "../../../components/DashboardBCC/Homepage/ChangeBusiness";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AddBusiness = () => {
  const [isAuxiliary, setIsAuxiliary] = useState("No");
  const [parentBusiness, setParentBusiness] = useState("");
  const [isAuxiliaryOpen, setIsAuxiliaryOpen] = useState(false);
  const [isParentOpen, setIsParentOpen] = useState(false);

  const navigate = useNavigate();

  const auxiliaryOptions = ["No", "Yes"];
  const parentBusinessOptions = [
    "Fatimah Technologies",
    "Global Solutions",
    "Innovative Labs",
  ];

  // Handle auxiliary selection change
  const handleAuxiliaryChange = (option) => {
    setIsAuxiliary(option);
    setIsAuxiliaryOpen(false);

    // Reset parent business selection when switching to "No"
    if (option === "No") {
      setParentBusiness("");
      setIsParentOpen(false);
    }
  };

  const handleNext = () => {
    if (isAuxiliary === "No") {
      navigate("/createbusiness");
    }
  };

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
      <div className="mx-4 p-6 min-h-[calc(80vh-10rem)] bg-white">
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
                      onClick={() => handleAuxiliaryChange(option)}
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
                onClick={() => {
                  if (isAuxiliary === "Yes") {
                    setIsParentOpen(!isParentOpen);
                  }
                }}
                disabled={isAuxiliary === "No"}
                className={`w-full px-3 py-2 text-left border rounded-md shadow-sm flex items-center justify-between transition-colors ${
                  isAuxiliary === "No"
                    ? "bg-gray-100 border-gray-200 cursor-not-allowed"
                    : "bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                }`}
              >
                <span
                  className={
                    isAuxiliary === "No"
                      ? "text-gray-400"
                      : parentBusiness
                      ? "text-gray-900"
                      : "text-gray-400"
                  }
                >
                  {isAuxiliary === "No"
                    ? "Not applicable"
                    : parentBusiness ||
                      "Select Parent Business, If this is Auxiliary Business"}
                </span>
                <FaChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isAuxiliary === "No" ? "text-gray-300" : "text-gray-400"
                  } ${isParentOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isParentOpen && isAuxiliary === "Yes" && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  {parentBusinessOptions.map((business) => (
                    <button
                      key={business}
                      type="button"
                      onClick={() => {
                        setParentBusiness(business);
                        setIsParentOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                    >
                      {business}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Next Button */}
        {/* <Link to="/Business/AddNew2" className="flex justify-end mt-8"> */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleNext}
            disabled={isAuxiliary === "yes"}
            type="button"
            className="px-6 py-2 bg-yellow-500  hover:bg-yellow-600 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
          >
            Next
          </button>
        </div>

        {/* </Link> */}
      </div>
    </div>
  );
};

export default AddBusiness;
