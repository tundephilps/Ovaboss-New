import { useState } from "react";

export default function MTRForm() {
  const [isValidated, setIsValidated] = useState(false);

  return (
    <div className="w-full py-6">
      {/* MTR Input & Validate Button */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          MTR Number <span className="text-red-500">*</span>
        </label>

        <div className="flex gap-2">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter MTR Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {!isValidated && (
            <button
              type="button"
              onClick={() => setIsValidated(true)}
              className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
            >
              Validate MTR Number
            </button>
          )}
        </div>
      </div>

      {/* Conditional Form Render */}
      {isValidated && (
        <div className="space-y-4">
          {/* Store Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Store Name <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>Fatimah's Ventures</option>
              {/* Add more options here */}
            </select>
          </div>

          {/* Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Currency
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>£0</option>
              {/* Add more currencies here */}
            </select>
          </div>

          {/* Purchase Total Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Purchase Total Amount
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="0"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Purchase Description"
            />
          </div>

          {/* Submit Button */}
          <div className="flex  justify-end w-full">
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
