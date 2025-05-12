import React from "react";
import { useState } from "react";
import Mastercard from "../../assets/Mastercard.svg";

import Transfer from "../../assets/Transfer.svg";
import { HiMinus, HiPlus, HiOutlineTrash } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";
import PaymentOptionSelector from "../../components/Ecommerce/PaymentPage/PaymentOptionSelector";
import PayWithCardSelector from "../../components/Ecommerce/PaymentPage/PayWithCardSelector";
import BankTransferSelector from "../../components/Ecommerce/PaymentPage/BankTransferSelector";

const PaymentPage = () => {
  const [selectedType, setSelectedType] = useState("personal");
  const breadcrumbs = [
    { text: "Home", url: "/" },
    { text: "Shopping Cart", url: "/Fatima" },
    { text: "Checkout", url: "/Fatima" },
    { text: "Payment", url: "/Fatima" },
  ];

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleDone = () => {
    console.log("Selected checkout type:", selectedType);
    // You can add your checkout flow logic here
  };

  return (
    <div className="bg-[#faf9f9] min-h-screen">
      {/* Bread Crumb */}
      <nav className="w-full py-6 lg:px-12 px-4">
        <ol className="flex flex-wrap items-center text-sm text-gray-600">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <li className="mx-1 flex items-center">
                  <span className="text-gray-400">›</span>
                </li>
              )}
              <li>
                <a
                  href={crumb.url}
                  className={`hover:text-gray-800 ${
                    index === breadcrumbs.length - 1
                      ? "font-normal"
                      : "hover:underline"
                  }`}
                >
                  {crumb.text}
                </a>
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>

      <div className="grid lg:grid-cols-5 gap-12 grid-cols-1 lg:px-12 px-2 w-full mx-auto pb-12">
        {/* Left side - Cart Items */}
        <div className="lg:col-span-3 col-span-5 space-y-4">
          {/* Select Checkout Type */}
          <div className="p-4 shadow-md bg-white rounded">
            <div className="mb-6">
              <h2 className=" font-medium text-xl text-gray-900 mb-4">
                Select Checkout Type
              </h2>

              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="checkoutType"
                    className="form-radio h-4 w-4 text-yellow-500 accent-yellow-500 focus:ring-yellow-500"
                    checked={selectedType === "personal"}
                    onChange={() => handleTypeChange("personal")}
                  />
                  <span className="ml-2 text-gray-700">Personal Order</span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="checkoutType"
                    className="form-radio h-4 w-4 text-yellow-500 accent-yellow-500 focus:ring-yellow-500"
                    checked={selectedType === "business"}
                    onChange={() => handleTypeChange("business")}
                  />
                  <span className="ml-2 text-gray-700">Business Order</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleDone}
                className="bg-[#e6ae06] hover:bg-yellow-600 text-white font-medium py-2 px-12 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
          <div className="p-4 shadow-md bg-white rounded">
            <PaymentOptionSelector />
          </div>
          {/* <div className="p-4 shadow-md bg-white rounded">
            <div className="flex items-center space-x-2  font-semibold">
              <input
                type="radio"
                checked
                readOnly
                className="accent-yellow-500"
              />
              <img src={Mastercard} className="" />
              <span className="text-xl">Pay with Card</span>
            </div>
          </div> */}
          <PayWithCardSelector />
          <BankTransferSelector />
        </div>
        {/* Right side - Order summary */}
        <div className="lg:col-span-2 col-span-5 self-start p-4 shadow-md bg-white rounded">
          <div className="p-4 rounded">
            <div className="inline-flex items-center justify-between w-full">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <h2 className="text-xl font-semibold mb-4">3 Items</h2>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Items Total</span>
              <span>£ 50</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Item(s) Discount</span>
              <span>-£ 4500</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Delivery Fee</span>
              <span>£ 200</span>
            </div>
            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between items-center font-bold">
                <span>Total</span>
                <span className="text-2xl">£0</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <button className="w-full text-white hover:text-black py-2 px-4 whitespace-nowrap rounded hover:bg-yellow-600 bg-[#e6ae06] font-medium flex items-center justify-center">
                Proceed to Checkout
                <BiChevronRight className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
