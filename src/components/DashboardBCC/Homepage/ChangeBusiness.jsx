import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ChangeBusiness = ({ onBackClick, onCreateClick }) => {
  return (
    <>
      <div className="flex items-center justify-between bg-[#202020] text-white px-4 py-3 mt-10 mx-4 rounded-sm">
        {/* Left side - Back arrow and title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBackClick}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaHandPointRight className="text-lg" />
          </button>
          <h1 className="text-lg font-medium">Fatimah Technologies</h1>
        </div>

        {/* Right side - Create button */}
        <button
          onClick={onCreateClick}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-medium text-sm transition-colors"
        >
          Change Selected Business
        </button>
      </div>
    </>
  );
};

export default ChangeBusiness;
