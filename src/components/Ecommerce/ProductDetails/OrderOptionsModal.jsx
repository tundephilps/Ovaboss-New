import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const OrderOptionsModal = ({ isOpen, onClose, onConfirm }) => {
  const [selectedOption, setSelectedOption] = useState("Delivery");

  if (!isOpen) return null;

  const options = ["Delivery", "Pickup", "In-store"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[500px] p-6 relative shadow-lg">
        {/* Close Button */}
        <IoMdCloseCircleOutline
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black cursor-pointer"
        />

        {/* Title */}
        <h2 className="text-xl font-bold mb-1">Select Your Order Options</h2>
        <hr className="mb-4" />

        {/* Subtitle */}
        <p className="text-green-700 font-medium mb-4">
          Select your Preferred delivery option
        </p>

        {/* Option Buttons */}
        <div className="flex gap-4 mb-6 items-center">
          {options.map((option) => (
            <div key={option} className="relative">
              {selectedOption === option && (
                <FaCheckCircle className="text-green-600 absolute -top-2 -left-2 bg-white rounded-full" />
              )}
              <button
                onClick={() => setSelectedOption(option)}
                className={`px-5 py-2 border rounded-lg font-semibold transition ${
                  selectedOption === option
                    ? "border-black text-black"
                    : "border-gray-300 text-gray-700 hover:border-black"
                }`}
              >
                {option}
              </button>
            </div>
          ))}
        </div>

        <hr className="mb-4" />

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="border border-yellow-500 px-5 py-2 rounded-lg text-black font-medium"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(selectedOption)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-bold"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderOptionsModal;
