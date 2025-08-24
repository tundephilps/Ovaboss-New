import React from "react";

const PayWithCard = () => {
  return (
    <div className="mx-auto mt-10 bg-white shadow-md rounded-md p-6 border">
      <h2 className="text-lg font-semibold mb-6">Pay with card</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Holder Name
        </label>
        <input
          type="text"
          placeholder="Fatimah Oladigbolu"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <input
          type="text"
          placeholder="000 567 6667 888"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVV
          </label>
          <input
            type="text"
            placeholder="837"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-md transition">
        Make Payment
      </button>
    </div>
  );
};

export default PayWithCard;
