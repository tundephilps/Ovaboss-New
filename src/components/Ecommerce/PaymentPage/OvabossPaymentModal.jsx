// components/ConfirmCardPaymentModal.jsx
import React from "react";
import Logo from "../../../assets/Logo.png";

import Wallet from "../../../assets/Wallet.svg";

const OvabossPaymentModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#E6F2E6] p-6 rounded-lg w-[90%] max-w-2xl shadow-lg text-center">
        <div className="mb-4">
          <img
            src={Logo} // Update this to your actual logo
            alt="Ovaboss Logo"
            className="mx-auto h-10"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">Confirm Your Payment</h2>
        <p className="text-gray-600 text-sm mb-6">
          Please review the transaction details before confirming
        </p>
        <div className="p-4 rounded mb-4 bg-white space-y-4">
          <div className="bg-[#FFF9E6] border border-yellow-200 inline-flex w-full items-center justify-between px-2 py-4 rounded-xl">
            <div className="text-start">
              <p className="font-semibold text-lg">Pay with card</p>
              <p className="text-2xl font-bold">£61,5368.00</p>
            </div>
            <img src={Wallet} />
          </div>

          <div className="bg-[#E6F2E6] border border-yellow-200 inline-flex w-full items-center justify-between px-2 py-4 rounded-xl">
            <div className="text-start">
              <p className="font-semibold text-lg">Amount to be Debited</p>
              <p className="text-2xl font-bold text-green-400">£61,5368.00</p>
            </div>
            <img src={Wallet} />
          </div>

          <div className="bg-[#FFF9E6] border border-yellow-200 inline-flex w-full items-center justify-between px-2 py-4 rounded-xl">
            <div className="text-start">
              <p className="font-semibold text-lg">Balance After Transaction</p>
              <p className="text-2xl font-bold">£149,568.00</p>
            </div>
            <img src={Wallet} />
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="border border-yellow-500 text-yellow-600 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            onClick={onConfirm}
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default OvabossPaymentModal;
