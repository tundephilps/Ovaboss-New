import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import { numberFormat } from "../../../utils";
import toast from "react-hot-toast";

const OrderSummary = () => {
  // Order summary data
  const orderData = {
    itemCount: 3,
    itemsTotal: "£496,370",
    itemsDiscount: "£30,000",
    deliveryFee: "£4,500",
    total: "£465,370",
  };

  const { checkoutData, checkoutItems } = useAppContext();

  const totalPrice = numberFormat(checkoutItems.reduce((total, item) => total + item.variantDetails.price * (item.quantity || 1), 0), 2);

  const navigate = useNavigate();

  const handleProceed = () => {
    const { address_id, phone_number, delivery_options } = checkoutData;
    if(!address_id) {
      return toast.error('Select an address');
    // } else if(!phone_number) {
      // return toast.error('Enter phone number');
    } else if(!delivery_options) {
      // return toast.error('Select a delivery options')
    }

    navigate('/Payment');

  }


  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <span className="font-medium text-gray-700">
          {checkoutItems.length} item{checkoutItems.length > 1 ? 's' : ''}
        </span>
      </div>

      {/* Order summary details */}
      <div className="space-y-3 mb-6">
        {/* Items Total */}
        <div className="flex justify-between">
          <span className="text-gray-600">Item(s) Total</span>
          <span className="font-medium">£{totalPrice}</span>
        </div>

        {/* Items Discount */}
        <div className="flex justify-between">
          <span className="text-gray-600">Item(s) Discount</span>
          <span className="font-medium text-red-600">
            -{orderData.itemsDiscount}-dummy
          </span>
        </div>

        {/* Delivery Fee */}
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">{orderData.deliveryFee}-dummy</span>
        </div>
      </div>

      {/* Total amount */}
      <div className="flex justify-between pt-3 border-t mb-6">
        <span className="font-semibold text-lg">Total</span>
        <span className="font-bold text-xl">£{totalPrice}</span>
      </div>

      {/* Proceed button */}
      <button 
        onClick={handleProceed}
        className="w-full bg-yellow-500 text-white hover:text-black py-3 font-medium rounded hover:bg-yellow-600 transition-colors"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default OrderSummary;
