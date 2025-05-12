import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  // Order summary data
  const orderData = {
    itemCount: 3,
    itemsTotal: "£496,370",
    itemsDiscount: "£30,000",
    deliveryFee: "£4,500",
    total: "£465,370",
  };

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <span className="font-medium text-gray-700">
          {orderData.itemCount} items
        </span>
      </div>

      {/* Order summary details */}
      <div className="space-y-3 mb-6">
        {/* Items Total */}
        <div className="flex justify-between">
          <span className="text-gray-600">Item(s) Total</span>
          <span className="font-medium">{orderData.itemsTotal}</span>
        </div>

        {/* Items Discount */}
        <div className="flex justify-between">
          <span className="text-gray-600">Item(s) Discount</span>
          <span className="font-medium text-red-600">
            -{orderData.itemsDiscount}
          </span>
        </div>

        {/* Delivery Fee */}
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">{orderData.deliveryFee}</span>
        </div>
      </div>

      {/* Total amount */}
      <div className="flex justify-between pt-3 border-t mb-6">
        <span className="font-semibold text-lg">Total</span>
        <span className="font-bold text-xl">{orderData.total}</span>
      </div>

      {/* Proceed button */}
      <Link to="/Payment">
        <button className="w-full bg-yellow-500 text-white hover:text-black py-3 font-medium rounded hover:bg-yellow-600 transition-colors">
          Proceed to Payment
        </button>
      </Link>
    </div>
  );
};

export default OrderSummary;
