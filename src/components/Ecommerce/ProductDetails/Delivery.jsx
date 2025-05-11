import React from "react";

export default function DeliveryReturns() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mx-auto">
      <h2 className=" font-semibold mb-4">Delivery & Returns</h2>

      <div className="border-t border-gray-200">
        <div className="py-4 flex items-start">
          <div className="flex-shrink-0 mr-3">
            <div className="bg-amber-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-amber-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H14a1 1 0 001-1v-3h-2.5a1 1 0 00-1-1H6.5a1 1 0 00-1 1H3V5a1 1 0 011-1h9.05a2.5 2.5 0 014.9 0H19a1 1 0 011 1v10a1 1 0 01-1 1h-1.05a2.5 2.5 0 01-4.9 0H6.5a2.5 2.5 0 01-4.9 0H1a1 1 0 01-1-1V5a1 1 0 011-1h2z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Delivery</h3>
            <p className="text-sm text-gray-600 mt-1">
              Is available for this product
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="py-4 flex items-start">
          <div className="flex-shrink-0 mr-3">
            <div className="bg-amber-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-amber-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Pickup Location</h3>
            <p className="text-sm text-gray-600 mt-1">
              Is available for this product
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="py-4 flex items-start">
          <div className="flex-shrink-0 mr-3">
            <div className="bg-amber-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-amber-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Return Policy</h3>
            <p className="text-sm text-gray-600 mt-1">
              Return Policy is available for this item
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
