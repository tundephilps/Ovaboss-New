import React, { useState } from "react";
import Mastercard from "../../../assets/mastercard.svg"; // adjust path as needed
import ConfirmCardPaymentModal from "./ConfirmCardPaymentModal";
import { useAppContext } from "../../../context/AppContext";

const PayWithCardSelector = () => {
  const [showForm, setShowForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { checkoutData, setCheckoutData } = useAppContext();

  const handleConfirmPayment = () => {
    // Add your payment logic here
    console.log("Payment Confirmed");
    closeModal();
  };

  const handleInput = () => setCheckoutData(prev => ({
    ...prev,
    payment_method: 'CARD'
  }))

  return (
    <div className="p-4 shadow-md bg-white rounded relative">
      {/* Trigger Section */}
      <div
        className="flex items-center space-x-2 font-semibold cursor-pointer"
        onClick={handleInput}
      >
        <input
          type="radio"
          checked={checkoutData.payment_method === 'CARD'}
          readOnly
          className="accent-yellow-500"
        />
        <img src={Mastercard} className="w-8 h-6 object-contain" alt="card" />
        <span className="text-xl">Pay with Card</span>
      </div>

      {/* Accordion Form Section */}
      {false && showForm && (
        <div className="mt-6 space-y-4">
          <h4 className="text-sm font-semibold">Enter Card Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Card Holder Name"
              className="border p-2 rounded w-full"
              defaultValue="Fatimah Oladigbolu"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="border p-2 rounded w-full"
              defaultValue="000 567 6667 888"
            />
            <input
              type="text"
              placeholder="MM/YY"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="CVV"
              className="border p-2 rounded w-full"
              defaultValue="837"
            />
          </div>
          <div className="text-right">
            <button
              onClick={openModal}
              className="bg-yellow-500 text-white font-medium px-4 py-2 rounded hover:bg-yellow-600"
            >
              Make Payment
            </button>
          </div>
          <ConfirmCardPaymentModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onConfirm={handleConfirmPayment}
          />
        </div>
      )}
    </div>
  );
};

export default PayWithCardSelector;
