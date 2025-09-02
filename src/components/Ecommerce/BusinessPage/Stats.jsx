import React from "react";
import Discount from "../../../assets/Discount.png";
import Seal from "../../../assets/Seal.png";
import BusinessLogo from "../../../assets/Promo5.jpeg";

export default function SellerStats() {
  return (
    <div className="lg:px-12 mx-auto bg-white p-3">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* No Reviews */}
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700">
            No Reviews yet
          </span>
        </div>

        {/* Delivery Rate */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-600 mb-1">Delivery Rate:</span>
          <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-green-600 rounded-full"
              style={{ width: "75%" }}
            ></div>

            <span className="text-[10px] text-gray-200 -top-0.5 left-12 absolute inset-0">
              75%
            </span>
          </div>
        </div>

        {/* Successful Sales */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 mr-2">
            <img src={Discount} />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">352</span>
            <span className="text-xs text-gray-600">Successful Sales</span>
          </div>
        </div>

        {/* Years Selling */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-2">
            <img src={Seal} />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">1 Year</span>
            <span className="text-xs text-gray-600">Selling on Ovaboss</span>
          </div>
        </div>

        {/* Contact Business */}
        <div className="flex items-center">
          <span className="mr-2 text-sm font-medium">Contact Business</span>
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center border border-orange-300">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-orange-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg> */}
            <img src={BusinessLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}
