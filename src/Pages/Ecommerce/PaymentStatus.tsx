import React from "react";
import Logo from "../../assets/Logo.png";

import Success from "../../assets/Success.gif";

const PaymentStatus = () => {

  return (
    <div className="relative inset-0 z-50  flex items-center justify-center my-5">
      <div className="bg-[#E6F2E6] rounded-lg shadow-lg p-6 w-full max-w-2xl mx-4 relative">

        <div className="text-center space-y-2">
          <img src={Logo} alt="Ovaboss Logo" className="mx-auto w-32" />

          <img src={Success} alt="Ovaboss Logo" className="mx-auto w-32 h-28" />
          {/* <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500 mx-auto"></div> */}
          <h2 className="text-2xl font-bold text-green-700">
            Payment Successful
          </h2>
          <p className="text-xs text-gray-600 pb-6">
            Great! Your transaction has been completed successfully.
          </p>

          <div className="bg-[#ffffff] p-4  rounded shadow text-left text-sm relative">
            <div className="px-2 py-1 -top-4 right-[43%] bg-[#FFD700] text-[10px] absolute rounded-full">
              Transaction Details
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">Total Amount</p>
                <p className="font-semibold text-black">₦150,000.000</p>
              </div>
              <div>
                <p className="text-gray-500">Order ID</p>
                <p className="font-semibold text-black">17449792100VB24</p>
              </div>
              <div>
                <p className="text-gray-500">Payment Method</p>
                <p className="font-semibold text-black">
                  SIGNON Ovaboss wallet
                </p>
              </div>
              <div>
                <p className="text-gray-500">Transaction Time</p>
                <p className="font-semibold text-black">
                  2025-04-25 14:32:45 PM
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            <button className="px-4 py-2 border border-yellow-400 text-gray-700 rounded hover:bg-gray-100">
              Share Receipt
            </button>
            <button
              // onClick={onClose}
              className="px-4 py-2 bg-yellow-500 text-white hover:text-black rounded hover:bg-yellow-600"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
