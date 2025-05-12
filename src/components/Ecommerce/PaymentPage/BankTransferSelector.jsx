import React, { useState } from "react";

import Transfer from "../../../assets/Transfer.svg";
import PaymentSuccessModal from "./PaymentSuccessModal";

const BankTransferSelector = () => {
  const [showDetails, setShowDetails] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = () => setShowDetails(true);
  const handlePaymentClick = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleClick = () => {
    setShowDetails(true);
  };

  return (
    <div className="p-4 shadow-md bg-white rounded space-y-4">
      <div
        className="flex items-center space-x-2 font-semibold cursor-pointer"
        onClick={handleClick}
      >
        <input
          type="radio"
          checked={showDetails}
          readOnly
          className="accent-yellow-500"
        />
        <img src={Transfer} alt="Transfer Icon" className="w-6 h-6" />
        <span className="text-xl">Pay with Bank Transfer</span>
      </div>

      {showDetails && (
        <div className="space-y-4 text-sm text-gray-700">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Account Name</p>
              <p>Ovaboss International</p>
            </div>
            <div>
              <p className="font-medium">Bank Name</p>
              <p>Wema Bank (ALAT)</p>
            </div>
            <div>
              <p className="font-medium">Account Number</p>
              <p>9876543210</p>
            </div>
            <div>
              <p className="font-medium">Amount to Pay</p>
              <p>₦15,500</p>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            This is a virtual account generated for your order. It will expire
            in <span className="font-semibold text-yellow-600">5 minutes</span>.
            Ensure you use the correct amount and reference to avoid delays.
          </p>

          <div className="flex items-center space-x-2 text-green-600 text-sm">
            <span>✅</span>
            <p>
              Your order will be confirmed automatically once payment is
              received.
            </p>
          </div>
          <div className="flex w-full  justify-end">
            <button
              onClick={handlePaymentClick}
              className="bg-yellow-500  text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              I've made Payment
            </button>
          </div>

          <PaymentSuccessModal isOpen={showModal} onClose={closeModal} />
        </div>
      )}
    </div>
  );
};

export default BankTransferSelector;
