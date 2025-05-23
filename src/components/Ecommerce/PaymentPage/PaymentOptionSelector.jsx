import { FaRegCreditCard } from "react-icons/fa";

import React, { useState } from "react";
import OvabossPaymentModal from "./OvabossPaymentModal";

const PaymentOptionSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleConfirmPayment = () => {
    // Add your payment logic here
    console.log("Payment Confirmed");
    closeModal();
  };

  return (
    <div className="">
      {/* Group Header */}
      <div className="flex items-center space-x-2 mb-4 font-semibold">
        <input type="radio" checked readOnly className="accent-yellow-500" />
        <FaRegCreditCard className="text-yellow-500" />
        <span className="text-xl">Pay with Ovaboss Wallet</span>
      </div>

      {/* Wallet Options */}
      <div className="space-y-4">
        {/* Option 1 */}
        <label className="flex items-center justify-between cursor-pointer">
          <div onClick={openModal} className="flex items-center space-x-2">
            <input type="radio" name="wallet" className="accent-yellow-500" />
            <span>Sign On Wallet</span>
          </div>
          <span className="font-semibold">£25,800</span>
        </label>

        {/* Option 2 */}
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center space-x-2">
            <input type="radio" name="wallet" className="accent-yellow-500" />
            <span>Buy On Wallet</span>
          </div>
          <span className="font-semibold">£25,800</span>
        </label>

        {/* Option 3 */}
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center space-x-2">
            <input type="radio" name="wallet" className="accent-yellow-500" />
            <span>LAA Wallet</span>
          </div>
          <span className="font-semibold">£25,800</span>
        </label>
      </div>
      <OvabossPaymentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirmPayment}
      />
    </div>
  );
};

export default PaymentOptionSelector;
